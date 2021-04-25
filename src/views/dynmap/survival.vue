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
        src: "https://mc.ryois.net/maps/proxy/survival/?worldname=world&mapname=flat&zoom=2"
      }
    }
  },
  components: {
    embedFrameElement,
  },
};
</script>