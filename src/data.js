import { defineStore } from "pinia";
import { reactive, watchEffect } from "vue";
import axios from "axios";
import router from "../src/router.js";

export const usePetsStore = defineStore("pets", {
   state: () => ({
      pets: null,
      users: null,
      petData: {
         title: "",
         breed: "",
         color: "",
         age: "",
         location: "",
         user: "",
         status: "active",
         image: "",
      },
      register: {
         fullName: "",
         email: "",
         mobile: "",
         address: "",
         password: "",
         role: "user",
      },
      logIndata: {
         email: "",
         password: "",
      },
      isAuthenticated: false,
   }),
   getters: {
      getAllPets(state) {
         return state.pets;
      },
   },
   actions: {
      async addPet(pet) {
         console.log(pet._rawValue);
         try {
            const response = await axios.post("https://pet-heaven-phi.vercel.app/add-pet", pet._rawValue);
            // Use `this` to access the store's state
            console.log(response);
         } catch (error) {
            console.error(error);
         }
      },
      async addUser(user) {
         console.log(user._rawValue);
         try {
            const response = await axios.post("https://pet-heaven-phi.vercel.app/add-user", user._rawValue);
            // Use `this` to access the store's state
            console.log(response);
         } catch (error) {
            console.error(error);
         }
      },
      async logInUser(user) {
         let userData = user._rawValue;
         try {
            const response = await axios.get("https://pet-heaven-phi.vercel.app/users");
            const users = response.data;
            // Find the user with matching email and password
            const user = users.find((user) => user.email === userData.email && user.password === userData.password);
            console.log(user);
            if (user) {
               // Check the user's role
               if (user.role === "user") {
                  // Redirect to MyProfile page
                  console.log("here");
                  this.isAuthenticated = true;
                  router.push("/myProfile");
               } else if (user.role === "admin") {
                  // Redirect to Dashboard page
                  router.push("/dashboard");
               } else {
                  // Handle other roles if needed
                  console.log("Other role:", user.role);
               }
            } else {
               // Handle invalid credentials
               console.log("Invalid email or password");
            }
         } catch (error) {
            console.error(error);
         }
      },

      async fetchPets() {
         try {
            const response = await axios.get("https://pet-heaven-phi.vercel.app/pets");
            this.pets = response.data; // Use `this` to access the store's state
            console.log(this.pets);
         } catch (error) {
            console.error(error);
         }
      },
   },
});

// watchEffect(() => {
//    useBlogStore.blogs = JSON.parse(localStorage.getItem("blogs")) || [];
// });
