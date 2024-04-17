<template>

    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 px-lg-5">
            <a href="index.php" class="navbar-brand d-block d-lg-none">
                <h1 class="m-0 display-5 text-capitalize"><span class="text-primary">Pet</span>
                    <span class="text-secondary">Heaven</span>
                </h1>
            </a>
            <div class="row py-3 px-lg-5">
                <div class="col-lg-4">
                    <a href="index.php" class="navbar-brand d-none d-lg-block">
                        <h1 class="m-0 display-5 text-light text-capitalize"><span class="text-primary">Pet</span>
                            <span class="text-secondary">Heaven</span>
                        </h1>
                    </a>
                </div>
            </div>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0">
                    <router-link to="/" class="nav-item nav-link"> Home</router-link>
                    <router-link to="/pets" class="nav-item nav-link"> Pets</router-link>
                </div>
                <button v-if="currentUser" type="button" class="btn mx-0 mx-lg-4  py-2 px-4 btn-primary"
                    data-toggle="modal" data-target="#addmypet">Add my Pet</button>
                <!-- <h6 class="text-dark">Hello,
                </h6> -->
                <!-- <h6><a href="logout.php" class="text-danger  nav-link"><i class="fa fa-sign-out-alt"></i></a></h6> -->

                <!-- <button type="button" class="btn btn-primary" data-toggle="modal"
                    data-target="#exampleModalCenter">Login</button> -->
                <router-link class="btn btn-primary" to="/auth" v-if="!isAuthenticatedUser">
                    Login
                </router-link>
                <div class="" v-else>
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            {{ currentUser.name }}
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <router-link class="dropdown-item" to="/myProfile">
                                My Profile
                            </router-link>
                            <!-- <button class="dropdown-item" type="button">My Profile</button> -->
                            <button @click="logOut" class="dropdown-item" type="button"><i
                                    class="fa fa-sign-out-alt"></i>
                                Logout</button>
                        </div>
                    </div>
                </div>

                <!--||||||||||||||||>>>>>>>>>>> add pet modal start  <<<<<<<<<<<<<<<<||||||-->


                <!-- Modal -->
                <div class="modal fade" id="addmypet" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2>Provide pet information</h2>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <!-- modal body start -->
                                <!-- <div id="pet-listing-success" class="alert alert-success  fade show" role="alert">
                                    <strong>Your pet is listed for adoption! <a href="pets.php">Browse
                                            it</a></strong>
                                </div> -->
                                <form id="petListingForm">
                                    <!-- Breed/Type -->
                                    <div class="form-outline mb-2">
                                        <label class="form-label">What is the breed/Type of this pet? *</label>
                                        <input type="text" name="pettype" class="form-control pettype"
                                            placeholder="A cat, a dog, a rabbit etc..." required
                                            v-model="petsData.breed" />
                                        <div v-if="errors.breed" class="invalid-feedback">{{ errors.breed }}</div>
                                    </div>

                                    <!-- Pet Name -->
                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet Name *</label>
                                        <input type="text" name="petname" class="form-control petname"
                                            placeholder="Name" required v-model="petsData.name" />
                                        <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                                    </div>

                                    <!-- Pet Age -->
                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet Age *</label>
                                        <input type="text" name="petage" class="form-control petage" placeholder="Age"
                                            required v-model="petsData.age" />
                                        <div v-if="errors.age" class="invalid-feedback">{{ errors.age }}</div>
                                    </div>

                                    <!-- Pet Color -->
                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet Color *</label>
                                        <input type="text" name="petcolor" class="form-control petcolor"
                                            placeholder="Color" required v-model="petsData.color" />
                                        <div v-if="errors.color" class="invalid-feedback">{{ errors.color }}</div>
                                    </div>

                                    <!-- Pet Gender -->
                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet Gender *</label>
                                        <input type="text" name="petgender" class="form-control petgender"
                                            placeholder="Gender" required v-model="petsData.gender" />
                                        <div v-if="errors.gender" class="invalid-feedback">{{ errors.gender }}</div>
                                    </div>

                                    <!-- Pet Location -->
                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet Location *</label>
                                        <input type="text" name="petlocation" class="form-control petlocation"
                                            placeholder="Location" required v-model="petsData.location" />
                                        <div v-if="errors.location" class="invalid-feedback">{{ errors.location }}</div>
                                    </div>

                                    <!-- Pet Photo -->
                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet Photo *</label>
                                        <input type="text" name="petphoto" class="form-control petphoto"
                                            placeholder="Photo" required v-model="petsData.image" />
                                        <div v-if="errors.image" class="invalid-feedback">{{ errors.image }}</div>
                                    </div>

                                    <!-- Submit Button -->
                                    <button type="button" @click.prevent="addmypet" id="listPet"
                                        class="btn btn-primary btn-block mb-4">List the
                                        Pet &rarr;</button>
                                </form>

                                <!-- modal body end -->
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </nav>
    </div>

</template>

<script setup>
import { usePetsStore } from '../data.js';
import { onMounted, ref, watchEffect } from 'vue';
const petsStore = usePetsStore();
const petsData = ref({});
const isAuthenticatedUser = ref(null)
const currentUser = ref(null)
onMounted(async () => {
    petsData.value = petsStore.petData;
});
watchEffect(async () => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
        petsStore.petData.user = currentUser._id
        petsStore.currentUser = JSON.parse(userData);
        petsStore.isAuthenticated = true;
    }
    isAuthenticatedUser.value = petsStore.isAuthenticated
    currentUser.value = petsStore.currentUser
});
const errors = ref({})
const validateForm = () => {
    errors.value = {};
    console.log('llkk');
    let isValid = true;
    // Validate each field
    if (!petsData.value.breed) {
        errors.value.breed = 'Breed/Type is required';
        isValid = false;
    }
    if (!petsData.value.name) {
        errors.value.name = 'Pet name is required';
        isValid = false;
    }
    if (!petsData.value.age) {
        errors.value.age = 'Pet age is required';
        isValid = false;
    }
    if (!petsData.value.color) {
        errors.value.color = 'Pet color is required';
        isValid = false;
    }
    if (!petsData.value.gender) {
        errors.value.gender = 'Pet gender is required';
        isValid = false;
    }
    if (!petsData.value.location) {
        errors.value.location = 'Pet location is required';
        isValid = false;
    }
    if (!petsData.value.image) {
        errors.value.image = 'Pet photo is required';
        isValid = false;
    }
    return isValid;

};
const addmypet = async () => {
    if (validateForm()) {
        petsStore.addPet(petsData)
        petsData.value.image = '';
        petsData.value.name = '';
        petsData.value.age = '';
        petsData.value.gender = '';
        petsData.value.location = '';
        petsData.value.color = '';
        petsData.value.breed = ''
    }
}

const logOut = (() => {
    petsStore.handleLogout()
})

</script>

<style scoped>
.invalid-feedback {
    display: block !important;
}
</style>