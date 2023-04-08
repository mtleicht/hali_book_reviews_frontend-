import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    name: "home",
    component: () => import("./components/HelloWorld.vue")
  },
  {
    path: "/books",
    name: "books",
    component: () => import("./components/BookContent.vue")
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
