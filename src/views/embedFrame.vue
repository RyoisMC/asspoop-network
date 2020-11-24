<template lang="pug">
#embedBodyFrame
  iframe(name='iframe' width='100%' height='100%' frameborder='0' :src='this.$parent.iframe.src')
</template>
<style scoped>
#embedBodyFrame {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 54px;
  background-color: #121212;
}
</style>