<template lang="pug">
  b-navbar.mb-2(toggleable="lg" type="dark" variant="dark" sticky fixed="top")
    b-navbar-brand(to="/") Asspoop Network
    b-navbar-toggle(target="nav-collapse")
    b-collapse#nav-collapse(is-nav)
      b-navbar-nav
        b-nav-item(to="/dynmap/survival" active-class="active") Survival Map
        b-nav-item(to="/dynmap/creative" active-class="active") Creative Map
</template>