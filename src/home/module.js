export default {
  name: "home",
  dependsOn: ["router", "menu", "vuex", "request"],
  extensions: {
    router: [
      {
        path: "/",
        component: null, // layout routeFn will override this value
        children: [{ path: "/", component: () => import("./Home.vue") }]
      }
    ],
    menu: { link: "/", label: "Home" },
    "vuex.state": {
      username: "Global Username"
    },
    "vuex.mutations": {
      SetUsername(state, s) {
        state.username = s;
      }
    }
  }
};
