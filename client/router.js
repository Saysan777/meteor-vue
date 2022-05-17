import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login/Login.vue";
import Register from "./components/Registration/Register.vue";
import User from "./components/User/User.vue";
import Pass from "./components/ChangePassword/Changepass.vue";
import NoPage from "./components/NoPage/NoPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Login,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/user",
      name: "user",
      component: User,
    },
    {
      path: "/changePass",
      name: "changepass",
      component: Pass,
    },
    {
      path: "*",
      name: "NotFound",
      component: NoPage,
    },
  ],
});
