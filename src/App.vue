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
      branding_name: "Asspoop Network"
    }
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
