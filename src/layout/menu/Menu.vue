<template>
  <div>
    <ul>
      <li v-for="(item, idx) in menuItems" :key="idx" class="menu-item">
        <router-link :to="item.link">{{ item.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    menuItems() {
      // vue-modx will inject $pluginRegistry property
      return this.$pluginRegistry.moduleVarGet("menu", "menuItems");
    },
  },
};
</script>

<style>
.menu-item {
  text-align: left;
}
</style>
