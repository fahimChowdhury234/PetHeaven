<template>
    <div class="container">
        <div class="row justify-content-center py-5">
            <div class="col-lg-6 ">
                <div class="p-5 border w-100 rounded-lg">
                    <h2 v-if="auth === 'login'" class="mb-3">Login</h2>
                    <h2 v-if="auth === 'register'" class="mb-3">Register </h2>
                    <form v-if="auth === 'login'" @submit.prevent="logIn">

                        <!-- Email input -->
                        <div class="form-outline mb-2">
                            <label class="form-label">Email address</label>
                            <input type="email" id="login-email" class="form-control email" v-model="logInData.email" />
                            <div class="invalid-feedback emailError">email is required</div>
                        </div>


                        <!-- Password input -->
                        <div class="form-outline mb-2">
                            <label class="form-label">Password</label>
                            <input type="password" id="login-password" class="form-control password"
                                v-model="logInData.password" />
                            <div class="invalid-feedback passwordError">password is required</div>
                        </div>

                        <!-- Submit button -->
                        <button type="submit" id="login" class="btn btn-primary btn-block mb-4"> Log in
                            &rarr;</button>
                        <a href="#" @click="haveNotAnAccount">Dont have an account? Register Here</a>
                        <!-- Register buttons -->
                    </form>

                    <div v-if="auth === 'register'">
                        <!-- <h2>Register </h2>
    <div id="register-success" class="alert alert-success  fade show" role="alert">
    <strong>Account has been created! <a data-toggle="modal"
    data-target="#exampleModalCenter" href="login.php">Login
    here</a></strong>
    </div> -->
                        <form @submit.prevent="register">
                            <!-- name input -->
                            <div class="form-outline mb-2">
                                <label class="form-label">Full Name</label>
                                <input type="text" id="name" class="form-control name" v-model="registerData.name" />
                                <div class="invalid-feedback">Name is required</div>
                            </div>

                            <!-- Email input -->
                            <div class="form-outline mb-2">
                                <label class="form-label">Email address</label>
                                <input type="email" id="email" class="form-control email"
                                    v-model="registerData.email" />
                                <div class="invalid-feedback emailError">email is required</div>
                            </div>

                            <!-- mobile input -->
                            <div class="form-outline mb-2">
                                <label class="form-label">Mobile number</label>
                                <input type="text" id="mobile" class="form-control mobile"
                                    v-model="registerData.mobile" />
                                <div class="invalid-feedback">mobile is required</div>
                            </div>

                            <!-- address input -->
                            <div class="form-outline mb-2">
                                <label class="form-label">address</label>
                                <input type="text" id="address" class="form-control address"
                                    v-model="registerData.address" />
                                <div class="invalid-feedback">address is required</div>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-2">
                                <label class="form-label">Password</label>
                                <input type="password" id="password" class="form-control password"
                                    v-model="registerData.password" />
                                <div class="invalid-feedback">password is required</div>
                            </div>
                            <!-- Submit button -->
                            <button type="submit" id="signup" class="btn btn-primary btn-block mb-4">Sign Up
                                &rarr;</button>

                            <!-- Register buttons -->
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
    console.log(petsStore.authStatus, '   this.authStatus = "login";');

});
const register = (() => {
    petsStore.addUser(registerData)
})
const logIn = (() => {
    petsStore.logInUser(logInData)
})
const haveAnAccount = (() => {
    petsStore.haveAnAccount()
})
const haveNotAnAccount = (() => {
    petsStore.haveNotAnAccount()
})
</script>

<style lang="scss" scoped></style>