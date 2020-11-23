<template>
  <div>
    <li v-if="isVisible" class="nav-item">
      <router-link exact-active-class="active" :to="{ name: route.name }" class="nav-link">{{ name }}</router-link>
    </li>

    <div v-if="route.children && route.children.length">
      <menu-item v-for="(route, index) in route.children" :key="index" :route="route" class="ml-3"></menu-item>
    </div>
  </div>
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