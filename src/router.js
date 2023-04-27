import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    name: "home",
    component: () => import("./components/HomePageContent.vue")
  },
  {
    path: "/nopicture",
    name: "nopicturefoodblog",
    component: () => import("./components/NoPictureFoodBlog.vue")
  },
  {
    path: "/inprogress",
    name: "inprogress",
    component: () => import("./components/InProgressContent.vue")
  },
  {
    path: "/donate",
    name: "donate",
    component: () => import("./components/DonationContent.vue")
  },
  {
    path: "/autocomplete",
    name: "autocomplete",
    component: () => import("./components/AddressesMod.vue")
  },
  {
    path: "/weather",
    name: "weather",
    component: () => import("./components/WeatherMod.vue")
  },
  {
    path: "/supportcontent",
    name: "supportcontent",
    component: () => import("./components/SupportContent.vue")
  },
  {
    path: "/bookdetails/:id",
    name: "bookdetails",
    component: () => import("./components/BookDetails.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
