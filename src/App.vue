<template lang="pug">
  #app
    globalPreloader
    globalNav
    router-view
</template>

<script>
import globalNav from "./components/globalNav.vue";
import globalPreloader from "./components/globalPreloader.vue";

export default {
  name: "App",
  components: {
    globalNav,
    globalPreloader
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
}
</style>
