const routes = [
  {
    path: "/bmi",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/bmi.vue") }],
  },
  {
    path: "/time",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/time.vue") }],
  },
  {
    path: "/unit",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/unit.vue") }],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/bmi.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
