<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
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
