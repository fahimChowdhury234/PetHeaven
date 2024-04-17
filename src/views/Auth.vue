<template>
    <div class="container">
        <div class="row justify-content-center py-5">
            <div class="col-lg-6 ">
                <div class="p-5 border w-100 rounded-lg">
                    <h2 v-if="auth === 'login'" class="mb-3">Login</h2>
                    <h2 v-if="auth === 'register'" class="mb-3">Register </h2>
                    <form v-if="auth === 'login'" id="loginForm">
                        <!-- Email input -->
                        <div class="form-outline mb-2">
                            <label class="form-label">Email address</label>
                            <input type="email" id="login-email" class="form-control email" v-model="logInData.email" />
                            <div class="invalid-feedback emailError" v-if="errors.email">{{ errors.email }}</div>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-2">
                            <label class="form-label">Password</label>
                            <input type="password" id="login-password" class="form-control password"
                                v-model="logInData.password" />
                            <div class="invalid-feedback passwordError" v-if="errors.password">{{ errors.password }}
                            </div>
                        </div>

                        <!-- Submit button -->
                        <button type="button" id="login" class="btn btn-primary btn-block mb-4"
                            @click.prevent="logIn">Log in &rarr;</button>
                        <a href="#" @click="haveNotAnAccount">Don't have an account? Register Here</a>
                    </form>

                    <div v-if="auth === 'register'">
                        <!-- <h2>Register </h2>
    <div id="register-success" class="alert alert-success  fade show" role="alert">
    <strong>Account has been created! <a data-toggle="modal"
    data-target="#exampleModalCenter" href="login.php">Login
    here</a></strong>
    </div> -->
                        <form id="registerFrom">
                            <!-- name input -->
                            <div class="form-outline mb-2">
                                <label class="form-label">Full Name</label>
                                <input type="text" id="name" class="form-control name" v-model="registerData.name" />
                                <div class="invalid-feedback" v-if="errors.name">Name is required</div>
                            </div>

                            <!-- Email input -->
                            <div class="form-outline mb-2">
                                <label class="form-label">Email address</label>
                                <input type="email" id="email" class="form-control email"
                                    v-model="registerData.email" />
                                <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
                            </div>

                            <!-- mobile input -->
                            <div class="form-outline mb-2">
                                <label class="form-label">Mobile number</label>
                                <input type="text" id="mobile" class="form-control mobile"
                                    v-model="registerData.mobile" />
                                <div class="invalid-feedback" v-if="errors.mobile">Mobile number is required</div>
                            </div>

                            <!-- address input -->
                            <div class="form-outline mb-2">
                                <label class="form-label">Address</label>
                                <input type="text" id="address" class="form-control address"
                                    v-model="registerData.address" />
                                <div class="invalid-feedback" v-if="errors.address">Address is required</div>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-2">
                                <label class="form-label">Password</label>
                                <input type="password" id="password" class="form-control password"
                                    v-model="registerData.password" />
                                <div class="invalid-feedback" v-if="errors.password">Password is required</div>
                            </div>

                            <!-- Submit button -->
                            <button type="button" @click.prevent="register" id="signup"
                                class="btn btn-primary btn-block mb-4">Sign Up
                                &rarr;</button>
                        </form>
                        <a @click="haveAnAccount">already have an account</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { usePetsStore } from '../data.js';
import { onMounted, ref, watch, watchEffect } from 'vue';



const petsStore = usePetsStore();
const registerData = ref({})
const logInData = ref({})
const auth = ref('')
onMounted(async () => {
    registerData.value = petsStore.register;
    logInData.value = petsStore.logIndata
});
watch(async () => {
    auth.value = petsStore.authStatus;
});
const errors = ref({});

const validateForm = () => {
    console.log('hhh');
    errors.value = {};
    let isValid = true;
    if (!registerData.value.name) {
        errors.value.name = 'Name is required';
        isValid = false;
    }
    if (!registerData.value.email) {
        errors.value.email = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(registerData.value.email)) {
        errors.value.email = 'Invalid email format';
        isValid = false;
    }
    if (!registerData.value.mobile) {
        errors.value.mobile = 'Mobile number is required';
        isValid = false;
    }
    if (!registerData.value.address) {
        errors.value.address = 'Address is required';
        isValid = false;
    }
    if (!registerData.value.password) {
        errors.value.password = 'Password is required';
        isValid = false;
    }
    return isValid;
};
const logInvalidateForm = () => {
    errors.value = {};
    let isValid = true;
    if (!logInData.value.email) {
        errors.value.email = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(logInData.value.email)) {
        errors.value.email = 'Invalid email format';
        isValid = false;
    }
    if (!logInData.value.password) {
        errors.value.password = 'Password is required';
        isValid = false;
    }
    return isValid;
};
const register = async () => {
    if (validateForm()) {
        try {
            // const response = await axios.get("https://pet-heaven-phi.vercel.app/users");
            const users = petsStore.users;
            // Check if email already exists
            if (users.find(user => user.email === registerData.value.email)) {
                errors.value.email = 'User with this email already exists';
                return;
            }
            // If email is unique, add the user
            await petsStore.addUser(registerData);
            document.getElementById('registerFrom').reset();


        } catch (error) {
            console.error(error);
        }
    }
};
const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


const logIn = async () => {
    if (logInvalidateForm()) {
        try {


            const users = petsStore.users;
            // Find the user with matching email
            const user = users.find(user => user.email === logInData.value.email);
            if (user) {
                // Check if the password matches
                if (user.password === logInData.value.password) {
                    // Password matches, log in successful

                    petsStore.logInUser(logInData)
                    logInData.value.password = '';
                    logInData.value.email = '';
                } else {
                    // Password does not match
                    errors.value.password = 'Invalid password';
                }
            } else {
                // No user found with the provided email
                errors.value.email = 'User not found';
            }
        } catch (error) {
            console.error(error);
        }
    }
};

const haveAnAccount = (() => {
    petsStore.haveAnAccount()
})
const haveNotAnAccount = (() => {
    petsStore.haveNotAnAccount()
})
</script>

<style scoped>
.invalid-feedback {
    display: block !important;
}
</style>