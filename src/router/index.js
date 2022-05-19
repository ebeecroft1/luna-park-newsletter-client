import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from "../views/Signup.vue";
import Success from "../views/Success.vue";
import Users from "../views/Users.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    { 
      path: '/users',
      name: 'users',
      component: Users
    },
    { 
      path: '/signup/success',
      name: 'success',
      component: Success
    }
  ]
});

