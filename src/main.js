import Vue from "vue";
import VueModx from "vue-modx";
import RouterModule from "vmx-router";
import RequestModule from "vmx-request";
import VuexModule from "vmx-vuex";

// main app
import App from "./App.vue";

// extension modules
import Layout from "./layout/module.js";
import Home from "./home/module.js";
import Module1 from "./module1/module.js";

Vue.config.productionTip = false;

Vue.use(VueModx, {
  modules: [
    RouterModule,
    RequestModule,
    VuexModule,
    Layout,
    Home,
    Module1
    // add more modules
  ],
  config: {
    router: {
      routes: [],
      scrollBehavior: () => ({ y: 0 }), // see https://router.vuejs.org/guide/advanced/scroll-behavior.html#async-scrolling
      mode: "hash" // default "history"
    }
  }
});

const router = RouterModule.router();
const store = VuexModule.store();

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
