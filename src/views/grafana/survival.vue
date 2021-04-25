<template lang="pug">
  #embedFrame
    embedFrameElement
</template>
<script>
import embedFrameElement from "../embedFrame.vue";
export default {
  name: "embedFrame",
  data() {
    return {
      iframe: {
        src: "https://stats-mc.ryois.net/d/survival-minecraft/survival-minecraft-server?orgId=1&refresh=1s&kiosk"
      }
    }
  },
  components: {
    embedFrameElement,
  },
};
</script>