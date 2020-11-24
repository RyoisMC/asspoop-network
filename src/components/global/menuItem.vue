<template lang="pug">
div
  li.nav-item(v-if='isVisible')
    router-link.nav-link(exact-active-class='active' :to='{ name: route.name }') {{ name }}
  div(v-if='route.children && route.children.length')
    menu-item.ml-3(v-for='(route, index) in route.children' :key='index' :route='route')
</template>

<script>
export default {
  name: "menu-item",
  props: {
    route: {
      type: Object,
    },
  },
  computed: {
    isVisible() {
      if (
        this.route.meta &&
        (this.route.meta.visible === undefined || this.route.meta.visible)
      ) {
        return true;
      }
      return false;
    },
    name() {
      return this.route.name
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
    },
  },
};
</script>