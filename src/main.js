import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./style.css";
import Toasted from "@hoppscotch/vue-toasted";
import "@hoppscotch/vue-toasted/style.css";
const app = createApp(App);

app.use(createPinia());
app.use(Toasted);

app.use(router);

app.mount("#app");
