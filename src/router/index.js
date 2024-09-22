import { createRouter, createWebHistory } from "vue-router";
import Leaderboard from "@/views/Leaderboard.vue";
import CourtMap from "@/views/CourtMap.vue"; // Import the CourtMap component

const routes = [
  {
    path: "/",
    name: "Leaderboard",
    component: Leaderboard,
  },
  {
    path: "/courts", // Create a new route for the CourtMap
    name: "CourtMap",
    component: CourtMap,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
