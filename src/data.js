import { defineStore } from "pinia";
import { reactive, watchEffect } from "vue";
import axios from "axios";
import router from "../src/router.js";
import { useToasted } from "@hoppscotch/vue-toasted";

export const usePetsStore = defineStore("pets", {
   state: () => ({
      pets: null,
      users: null,
      petDetailsData: null,
      authStatus: "login",
      currentUser: null,
      petData: {
         name: "",
         breed: "",
         color: "",
         age: "",
         location: "",
         gender: "",
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
      haveAnAccount() {
         this.authStatus = "login";
      },
      haveNotAnAccount() {
         this.authStatus = "register";
      },
      async addPet(pet) {
         try {
            const response = await axios.post("https://pet-heaven-phi.vercel.app/add-pet", pet._rawValue);
            const toast = useToasted();
            toast.success("Pet added successfully!", {
               theme: "toasted-primary",
               position: "top-right",
               duration: 5000,
            });
            // Use `this` to access the store's state
            console.log(response);
         } catch (error) {
            console.error(error);
         }
      },
      async addUser(user) {
         try {
            if (user) {
               const response = await axios.post("https://pet-heaven-phi.vercel.app/add-user", user._rawValue);
               const toast = useToasted();

               toast.success(" Your registration us successful. Now redirecting to login ", {
                  theme: "toasted-primary",
                  position: "top-right",
                  duration: 5000,
               });
               this.haveAnAccount();
            }
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
                  const toast = useToasted();

                  toast.success("Login successful!", {
                     theme: "toasted-primary",
                     position: "top-right",
                     duration: 5000,
                  });
               } else if (loggedInUser.role === "admin") {
                  this.isAuthenticated = true;
                  // Redirect to Dashboard page
                  router.push("/dashboard");
                  const toast = useToasted();

                  toast.success("Login successful!", {
                     theme: "toasted-primary",
                     position: "top-right",
                     duration: 5000,
                  });
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
         const toast = useToasted();

         toast.success("Logout successful!", {
            theme: "toasted-primary",
            position: "top-right",
            duration: 5000,
         });
         router.push("/auth");
      },
      async handelDeleteUser(id) {
         try {
            const response = await axios.delete(`https://pet-heaven-phi.vercel.app/user/${id}`);
            this.getAllUser();
            const toast = useToasted();

            toast.success("User deleted successful!", {
               theme: "toasted-primary",
               position: "top-right",
               duration: 5000,
            });
         } catch (error) {
            console.error(error);
         }
      },
      async handelDeletePet(id) {
         try {
            const response = await axios.delete(`https://pet-heaven-phi.vercel.app/pet/${id}`);
            this.fetchPets();
            const toast = useToasted();

            toast.success("Pet deleted successful!", {
               theme: "toasted-primary",
               position: "top-right",
               duration: 5000,
            });
         } catch (error) {
            console.error(error);
         }
      },
      async fetchPets() {
         try {
            const response = await axios.get("https://pet-heaven-phi.vercel.app/pets");
            this.pets = response.data; // Use `this` to access the store's state
         } catch (error) {
            console.error(error);
         }
      },
      async getPetDetails(id) {
         try {
            const response = await axios.get(`https://pet-heaven-phi.vercel.app/pet/${id}`);
            this.petDetailsData = response.data;
         } catch (error) {
            console.error(error);
         }
      },
   },
});
