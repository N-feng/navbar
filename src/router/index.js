import Vue from "vue";
import VueRouter from "vue-router";
import ClientList from "../components/ClientList.vue";
import Layout from "../components/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/clients",
    name: "clients",
    component: ClientList
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
