<template lang="pug">
#app
  globalNav
  router-view
</template>

<script>
import globalNav from "./components/global/navbar.vue";

export default {
  name: "App",
  data: function () {
    return {
      self_minecraft_username: "null",
      show_self_minecraft_username: false,
      branding_name: "Asspoop Network"
    }
  },
  created() {
    var axios = require("axios");
    const vm = this;
    axios
      .get("https://api.asspoop.com/lookup_self")
      .then(function (response) {
        const me = response.data;
        if (!response.data.error) {
          if(me.minecraft.username !== null){
            vm.self_minecraft_username = me.minecraft.username;
            vm.show_self_minecraft_username = true;
          }
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  },
  components: {
    globalNav,
  },
};
</script>
<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: #000000;
}
#app {
  height: 100%;
  background-color: #000000;
}
</style>
