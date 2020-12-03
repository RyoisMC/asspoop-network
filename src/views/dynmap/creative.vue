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
        src: "https://asspoop.com/maps/proxy/creative/?worldname=world&mapname=flat&zoom=2"
      }
    }
  },
  components: {
    embedFrameElement,
  },
};
</script>