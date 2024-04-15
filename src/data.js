import { defineStore } from "pinia";
import { reactive, watchEffect } from "vue";
import axios from "axios";
import router from "../src/router.js";

export const usePetsStore = defineStore("pets", {
   state: () => ({
      pets: null,
      users: null,
      currentUser: {},
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
         name: "",
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
         try {
            const response = await axios.post("https://pet-heaven-phi.vercel.app/add-pet", pet._rawValue);
            // Use `this` to access the store's state
            console.log(response);
         } catch (error) {
            console.error(error);
         }
      },
      async addUser(user) {
         try {
            const response = await axios.post("https://pet-heaven-phi.vercel.app/add-user", user._rawValue);
            // Use `this` to access the store's state
            console.log(response);
         } catch (error) {
            console.error(error);
         }
      },

      async getAllUser() {
         try {
            const response = await axios.get("https://pet-heaven-phi.vercel.app/users");
            this.users = response.data;
         } catch (error) {
            console.error(error);
         }
      },
      async logInUser(user) {
         let userData = user._rawValue;
         try {
            // Find the user with matching email and password
            const loggedInUser = this.users.find((u) => u.email === userData.email && u.password === userData.password);

            if (loggedInUser) {
               // Store user data in local storage
               localStorage.setItem("currentUser", JSON.stringify(loggedInUser));

               // Check the user's role
               if (loggedInUser.role === "user") {
                  // Redirect to MyProfile page
                  this.isAuthenticated = true;
                  router.push("/myProfile");
               } else if (loggedInUser.role === "admin") {
                  this.isAuthenticated = true;

                  // Redirect to Dashboard page
                  router.push("/dashboard");
               } else {
                  // Handle other roles if needed
                  console.log("Other role:", loggedInUser.role);
               }
            } else {
               // Handle invalid credentials
               console.log("Invalid email or password");
            }
         } catch (error) {
            console.error(error);
         }
      },
      handleLogout() {
         this.currentUser = null;
         this.isAuthenticated = false;
         localStorage.removeItem("currentUser");
         router.push("/auth");
      },
      async handelDeleteUser(id) {
         try {
            const response = await axios.delete(`https://pet-heaven-phi.vercel.app/user/${id}`);
            this.getAllUser();
         } catch (error) {
            console.error(error);
         }
      },
      async handelDeletePet(id) {
         try {
            const response = await axios.delete(`https://pet-heaven-phi.vercel.app/pet/${id}`);
            this.fetchPets();
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
//    const userData = localStorage.getItem("currentUser");
//    if (userData) {
//       // Set the current user and authentication status
//       usePetsStore.currentUser = JSON.parse(userData);
//       usePetsStore.isAuthenticated = true;
//    }
//    // useBlogStore.blogs = JSON.parse(localStorage.getItem("blogs")) || [];
// });

// watchEffect(() => {
//    const userData = localStorage.getItem("currentUser");
//    if (userData) {
//       usePetsStore.currentUser = JSON.parse(userData);
//       usePetsStore.isAuthenticated = true;
//    }
// });
