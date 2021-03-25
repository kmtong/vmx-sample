<template>
  <div class="home">
    <h1>Home Page</h1>
    <h2>Remote Request Test</h2>
    <button @click="testRequest">Make Request</button>
    {{ testRemoteData }}
    <h2>Vuex Test</h2>
    Vuex Username: {{ username }}
    <br />
    Change Username: <input type="text" v-model="name" />
    <button @click="updateVuex">Update</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      testRemoteData: null,
      name: null,
    };
  },
  computed: {
    ...mapState(["username"]),
  },
  methods: {
    // request handling
    async testRequest() {
      this.testRemoteData = "Loading...";
      const resp = await this.$request({
        url: "https://jsonplaceholder.typicode.com/todos/1",
      });
      this.testRemoteData = resp.data.title;
    },
    // vuex methods
    ...mapMutations(["SetUsername"]),
    updateVuex() {
      this.SetUsername(this.name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
