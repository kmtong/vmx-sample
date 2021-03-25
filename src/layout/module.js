import MenuModule from "./menu/module.js";
import Layout from "./Layout.vue";

export default {
  name: "layout",
  dependsOn: [MenuModule],
  extensions: {
    routeFn() {
      return (route) => {
        if (!route.component) {
          route.component = Layout;
        }
        return route;
      };
    }
  }
};
