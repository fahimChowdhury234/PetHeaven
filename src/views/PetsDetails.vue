<template>
    <div>
        <div class="container-fluid py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 text-center">
                        <div class="py-2  px-sm-2">
                            <img :src="petDetails.image" class="img-fluid w-100 " alt="" v-if="petDetails">
                        </div>
                    </div>
                    <div class="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                        <h1 class="display-4 mb-4"><span class="text-primary">
                            </span></h1>
                        <p>
                        </p>
                        <div class="row py-2">
                            <div class="col-sm-6">
                                <div class="d-flex flex-column" v-if="petDetails">
                                    <div class="d-flex align-items-center mb-2">
                                        <h5 class="text-truncate m-0"> Name: {{ petDetails.name }}
                                        </h5>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <h5 class="text-truncate m-0"> Breed: {{ petDetails.breed }}
                                        </h5>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <h5 class="text-truncate m-0">Age : {{ petDetails.age }}
                                        </h5>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <h5 class="text-truncate m-0">Gender : {{ petDetails.gender }}
                                        </h5>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <h5 class="text-truncate m-0">Color : {{ petDetails.color }}
                                        </h5>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <h5 class="text-truncate m-0">Location : {{ petDetails.location }}
                                        </h5>
                                    </div>

                                    <div class="d-flex align-items-center mb-2">
                                        <h5 class="text-truncate m-0">

                                            <!-- <button type="button" class="btn btn-primary" data-toggle="modal"
                                                data-target="#exampleModalSeller">Pet Owner Details</button> -->
                                            <a class="btn btn-primary" :href="'mailto:' + currentUser.email"
                                                role="button">Contact</a>

                                            <!-- <button type="disable" class="btn btn-primary" data-toggle="modal"
                                                data-target="#exampleModalCenter">Login To view Seller Details</button> -->

                                            <!-- seller details modal -->
                                            <!-- Modal -->
                                            <div class="modal fade" id="exampleModalSeller" tabindex="-1" role="dialog"
                                                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h2>Seller Details</h2>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <!-- modal body start -->
                                                            <form>
                                                                <!-- name input -->
                                                                <div class="form-outline mb-2">
                                                                    <label class="form-label">Full Name</label>
                                                                    <h5 class="text-secondary">

                                                                    </h5>
                                                                </div>

                                                                <div class="form-outline mb-2">
                                                                    <label class="form-label">Mobile Number</label>
                                                                    <h5 class="text-secondary">

                                                                    </h5>
                                                                </div>

                                                                <div class="form-outline mb-2">
                                                                    <label class="form-label">Email Address</label>
                                                                    <h5 class="text-secondary">

                                                                    </h5>
                                                                </div>

                                                                <div class="form-outline mb-2">
                                                                    <label class="form-label">Address</label>
                                                                    <h5 class="text-secondary">

                                                                    </h5>
                                                                </div>

                                                            </form>

                                                            <!-- modal body end -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- seller details modal -->
                                        </h5>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Booking Start -->




        <!-- Pricing Plan Start -->
        <div class="container-fluid bg-light pt-5 pb-4">
            <div class="container py-5">
                <div class="d-flex flex-column text-center mb-5">
                    <h4 class="text-secondary mb-3">More Pets</h4>
                </div>
                <div class="row">

                    <div class="col-lg-4 mb-4" v-for="pet in displayedPets" :key="pet._id">
                        <div class="card border-0">
                            <div class="card-header position-relative border-0 p-0 mb-4">

                                <img class="card-img-top" :src="pet.image" alt="">
                                <div class="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100"
                                    style="top: 0; left: 0; z-index: 1;">
                                </div>
                            </div>
                            <div class="card-body text-center p-0">
                                <ul class="list-group list-group-flush mb-4">
                                    <li class="list-group-item p-2"><span class="text-primary mr-2">Breed: {{ pet.breed
                                            }}</span>

                                    </li>
                                    <li class="list-group-item p-2"><span class="text-primary mr-2">Name: {{ pet.name
                                            }}</span>

                                    </li>
                                    <li class="list-group-item p-2"><span class="text-primary mr-2">Age:{{ pet.age
                                            }}</span>

                                    </li>
                                    <li class="list-group-item p-2"><span class="text-primary mr-2">Gender:{{ pet.gender
                                            }}</span>

                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer border-0 p-0">
                                <router-link :to="'/pets/' + pet._id" class="btn btn-primary btn-block p-3">
                                    Details
                                </router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePetsStore } from '../data.js';
import { useRoute } from 'vue-router';
import { computed, onMounted, ref, watchEffect } from 'vue';

const petsStore = usePetsStore();
const route = useRoute()
const id = route.params.id;
petsStore.getPetDetails(id)

const petDetails = ref({});
const morePets = ref(null)
const currentUser = ref(null);
console.log(currentUser);
watchEffect(async () => {
    petDetails.value = petsStore.petDetailsData;
    morePets.value = petsStore.pets;
    currentUser.value = petsStore.currentUser
});

const displayedPets = computed(() => {
    if (morePets.value) {
        return morePets.value.slice(0, 3);
    }
});
</script>

<style lang="scss" scoped></style>