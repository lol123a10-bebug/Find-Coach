import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
// import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
// import ContactCoach from "./pages/requests/ContactCoach.vue";
// import RequestsReceived from "./pages/requests/RequestsReceived.vue";
// import UserAuth from "./pages/auth/UserAuth.vue";
import NotFound from "./pages/NotFound.vue";
import store from "./store/index.js";

const CoachDetail = defineAsyncComponent(() =>
  import("./pages/coaches/CoachDetail.vue")
);
const CoachRegistration = defineAsyncComponent(() =>
  import("./pages/coaches/CoachRegistration.vue")
);
const ContactCoach = defineAsyncComponent(() =>
  import("./pages/requests/ContactCoach.vue")
);
const RequestsReceived = defineAsyncComponent(() =>
  import("./pages/requests/RequestsReceived.vue")
);
const UserAuth = defineAsyncComponent(() =>
  import("./pages/auth/UserAuth.vue")
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/:id/contact
      ],
    },
    {
      path: "/register",
      component: CoachRegistration,
      meta: { requeiresAuth: true, isCoach: true },
    },
    {
      path: "/requests",
      component: RequestsReceived,
      meta: { requeiresAuth: true },
    },
    { path: "/auth", component: UserAuth, meta: { requeiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function(to, from, next) {
  if (to.meta.requeiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requeiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else if (to.meta.isCoach && store.getters["coaches/isCoach"]) {
    next("/coaches");
  } else {
    next();
  }
  // console.log(store)
});

export default router;
