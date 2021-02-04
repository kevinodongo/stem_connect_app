import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/how-it-works",
    name: "Howitworks",
    component: () => import("../views/Howitworks.vue")
  },
  // authentication
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/auth/Login.vue")
  },
  {
    path: "/signup",
    name: "Howitworks",
    component: () => import("../components/auth/Signup.vue")
  },
  {
    path: "/login-help",
    name: "Loginhelp",
    component: () => import("../components/auth/LoginHelp.vue")
  }
];

export default routes;
