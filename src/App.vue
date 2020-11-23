<template>
  <div id="app">
    <globalNav/>
  </div>
</template>

<script>
import globalNav from './components/globalNav.vue'

export default {
  name: 'App',
  components: {
    globalNav
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 54px;
}
</style>
