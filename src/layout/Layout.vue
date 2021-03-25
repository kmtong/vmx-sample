<template>
  <div>
    <Menu class="left-menu" />
    <router-view class="content" />
  </div>
</template>
<script>
import Menu from "./menu/Menu.vue";
export default {
  name: "Layout",
  components: { Menu },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 20px;
}
.left-menu {
  width: 100px;
  display: block;
  float: left;
}
.content {
  padding-left: 50px;
  width: 500px;
  display: inline-block;
}
</style>
