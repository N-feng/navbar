<template>
  <a-layout id="components-layout-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible style="background: #fff">
      <Menu />
    </a-layout-sider>
  </a-layout>
</template>
<script>
import Menu from "./Menu.vue";

export default {
  components: { Menu },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style>
#components-layout-side .ant-layout-sider-trigger {
  background: #fff;
  color: rgba(0, 0, 0, 0.65);
  border-right: 1px solid #e8e8e8;
}
</style>
