export default {
  name: "menu",
  dependsOn: [],
  extensionPoints: {
    // allow menu registration
    menu({ registry }, item) {
      // accept single item / array of items
      if (Array.isArray(item)) {
        item.forEach((o) => {
          registry.moduleVarAppend("menu", "menuItems", o);
        });
      } else {
        registry.moduleVarAppend("menu", "menuItems", item);
      }
    }
  }
};
