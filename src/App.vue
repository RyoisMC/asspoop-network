<template lang="pug">
  #app
    globalNav
    router-view
</template>

<script>
import globalNav from "./components/globalNav.vue";

export default {
  name: "App",
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
  background-color: #121212;
}
#app {
  background-color: #121212;
}
</style>
