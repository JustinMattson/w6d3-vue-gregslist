import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import CarDetails from "../pages/CarDetailsPage.vue";
// @ts-ignore
import HouseDetails from "../pages/HouseDetailsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cars/:id",
    name: "CarDetails",
    component: CarDetails,
  },
  {
    path: "/houses/:id",
    name: "HouseDetails",
    component: HouseDetails,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
