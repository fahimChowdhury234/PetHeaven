<template>
    <div>
        <div class="container-fluid bg-light pt-5 pb-4" id="pets">
            <div class="container py-5">
                <div class="d-flex flex-column text-center mb-5">
                    <h4 class="text-secondary mb-3" @click="fetchPets">Pet Listing</h4>
                    <h1 class="display-4 m-0"><span class="text-primary">Choose your</span> <span
                            class="text-secondary">desired
                            pet</span></h1>
                </div>
                <div class="row">
                    <div class="col-lg-4 mb-4" v-for="pets in allPets" :key="pets._id">
                        <div class="card border-0">
                            <div class="card-header position-relative border-0 p-0 mb-4">

                                <img class="card-img-top" :src="pets.image" alt="">
                                <div class="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100"
                                    style="top: 0; left: 0; z-index: 1;">
                                </div>
                            </div>
                            <div class="card-body text-center p-0">
                                <ul class="list-group list-group-flush mb-4">
                                    <li class="list-group-item p-2">
                                        <span class="text-primary mr-2">
                                            Name: {{ pets.name }}
                                        </span>

                                    </li>
                                    <li class="list-group-item p-2">
                                        <span class="text-primary mr-2">
                                            Breed: {{ pets.breed }}
                                        </span>
                                    </li>
                                    <li class="list-group-item p-2">
                                        <span class="text-primary mr-2">
                                            Age: {{ pets.age }}
                                        </span>
                                    </li>
                                    <li class="list-group-item p-2">
                                        <span class="text-primary mr-2">
                                            Gender: {{ pets.gender }}
                                        </span>
                                    </li>
                                    <li class="list-group-item p-2">
                                        <span class="text-primary mr-2">
                                            Color: {{ pets.color }}
                                        </span>
                                    </li>
                                    <li class="list-group-item p-2">
                                        <span class="text-primary mr-2">
                                            Location: {{ pets.location }}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer border-0 p-0">
                                <router-link :to="'/pets/' + pets._id" class="btn btn-primary btn-block p-3">
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
import { onMounted, ref } from 'vue';
const petsStore = usePetsStore();
const allPets = ref([]);
onMounted(async () => {
    try {
        await petsStore.fetchPets();
        allPets.value = petsStore.pets;
    } catch (error) {
        console.error('Error fetching pets:', error.message);
    }
});
const fetchPets = async () => {
    try {
        await petsStore.fetchPets();
    } catch (error) {
        console.error('Error fetching pets:', error.message);
    }
};
</script>

<style lang="scss" scoped></style>