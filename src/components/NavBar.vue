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
                <button type="button" class="btn mx-0 mx-lg-4 mb-2 py-2 px-4 btn-primary" data-toggle="modal"
                    data-target="#addmypet">Add my Pet</button>
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
                                <form id="petListingForm" @submit.prevent="addmypet">
                                    <input type="hidden" name="seller_id" value="<?php echo $_SESSION['id']; ?>">

                                    <div class="form-outline mb-2">
                                        <label class="form-label">What is the breed/ Type of this pet? *</label>
                                        <input type="text" name="pettype" class="form-control pettype"
                                            placeholder="A cat, a dog, a rabbit etc..." required
                                            v-model="petsData.breed" />
                                        <div class="invalid-feedback">Breed/ Type is required</div>
                                    </div>

                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet Name *</label>
                                        <input type="text" name="petname" class="form-control petname"
                                            placeholder="Name" required v-model="petsData.title" />
                                        <div class="invalid-feedback petnameError">Pet name is required</div>
                                    </div>

                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet Age *</label>
                                        <input type="text" name="petage" class="form-control petage" placeholder="Age"
                                            required v-model="petsData.age" />
                                        <div class="invalid-feedback">Age is required</div>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet Color *</label>
                                        <input type="text" name="petcolor" class="form-control petcolor"
                                            placeholder="Color" required v-model="petsData.color" />
                                        <div class="invalid-feedback">Color is required</div>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet Loction *</label>
                                        <input type="text" name="petlocation" class="form-control petlocation"
                                            placeholder="Loction" required v-model="petsData.location" />
                                        <div class="invalid-feedback">Loction is required</div>
                                    </div>
                                    <div class="form-outline mb-2">
                                        <label class="form-label">Pet photo *</label>
                                        <input type="text" name="petphoto" class="form-control petphoto"
                                            placeholder="Photo" required v-model="petsData.image" />
                                        <div class="invalid-feedback">Image is required</div>
                                    </div>
                                    <!-- <div class="form-outline mb-2">
                                        <label class="form-label">Pet Gender *</label>
                                        <input type="text" name="petgender" class="form-control petgender"
                                            placeholder="Gender" required />
                                        <div class="invalid-feedback">Gender is required</div>
                                    </div> -->

                                    <!-- <div class="form-outline mb-2">
                                        <label class="form-label">Pet Description *</label>
                                        <textarea name="petdescription" class="form-control petdescription"
                                            placeholder="Describe your pet"></textarea>
                                        <div class="invalid-feedback">Description is required</div>
                                    </div> -->

                                    <!-- <div class="form-outline mb-2">
                                        <label class="form-label">Pet photo *</label>
                                        <input type="file" class="form-control petphoto" name="file"
                                            @change="handleFileUpload" />
                                        <div class="invalid-feedback">Photo is required</div>
                                    </div> -->

                                    <button type="submit" id="listPet" class="btn btn-primary btn-block mb-4">List
                                        the
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
import { onMounted, onUpdated, ref, watch } from 'vue';
const petsStore = usePetsStore();
const petsData = ref({});
const isAuthenticatedUser = ref(null)
const currentUser = ref(null)
onMounted(async () => {
    petsData.value = petsStore.petData;
});
watch(async () => {
    const userData = localStorage.getItem("currentUser");
    console.log(userData);
    if (userData) {
        petsStore.currentUser = JSON.parse(userData);
        petsStore.isAuthenticated = true;
    }
    isAuthenticatedUser.value = petsStore.isAuthenticated
    currentUser.value = petsStore.currentUser
});
const addmypet = (() => {
    petsStore.addPet(petsData)
})
const logOut = (() => {
    petsStore.handleLogout()
})

</script>

<style lang="scss" scoped></style>