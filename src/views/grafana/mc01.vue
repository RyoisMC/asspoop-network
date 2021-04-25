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
        src: "https://stats-mc.ryois.net/d/rYdddlPWk/mc01-server-stats?orgId=1&refresh=5s&kiosk"
      }
    }
  },
  components: {
    embedFrameElement,
  },
};
</script>