<template>
  <nav>
    <a-layout id="components-layout-side" style="min-height: 100vh">
      <a-layout-sider collapsible style="background: #fff" @collapse="collapse">
        <Menu :routes="routes" />
      </a-layout-sider>
    </a-layout>
  </nav>
</template>
<script>
import Menu from "./Menu.vue";

export default {
  components: { Menu },
  data: () => ({
    collapsed: false,
    routes: JSON.parse(localStorage.getItem("router")) || []
  }),
  methods: {
    collapse(collapsed) {
      window.myBus.emit("setCollapsed", collapsed);
    }
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  /* css var comes from the styleguide */
  width: var(--navbar-width);
  background-color: white;
  transition: left 0.2s ease-in-out;
  box-shadow: 0.2rem 0 0.2rem var(--light-gray);
  z-index: 1000;
}
</style>

<style>
#components-layout-side .ant-layout-sider-trigger {
  background: #fff;
  color: rgba(0, 0, 0, 0.65);
  border-right: 1px solid #e8e8e8;
}
</style>
