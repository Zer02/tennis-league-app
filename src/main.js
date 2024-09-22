// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

createApp(App).use(router).use(createPinia()).mount("#app");
