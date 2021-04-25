<template lang="pug">
  b-navbar.mb-2(toggleable="lg" type="dark" variant="dark" sticky fixed="top")
    b-navbar-brand(to="/") {{this.$parent.branding_name}}
    b-navbar-toggle(target="nav-collapse")
    b-collapse#nav-collapse(is-nav)
      b-navbar-nav
        <menu-item v-for="(r,i) in routes" :key="i" :route="r"></menu-item>
</template>
<script>
export default {
  name: "navbar",
  components: {
    MenuItem: () => import("./menuItem")
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>
<style scoped>
.navbar.navbar-dark.bg-dark{
    background-color: #000000!important;
}
.name{
    color: #ffffff!important;
}
</style>