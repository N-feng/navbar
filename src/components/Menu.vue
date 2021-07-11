<template>
  <a-menu mode="vertical" :style="{ lineHeight: '64px', height: '100%' }">
    <template v-for="item in routes">
      <a-menu-item v-if="!item.menus.length" :key="item.menuCode">
        <div>
          <span>{{ item.menuName }}</span>
        </div>
      </a-menu-item>
      <SubMenu v-else :key="item.menuCode" :menu-info="item" />
    </template>
  </a-menu>
</template>

<script>
import SubMenu from "./SubMenu.vue";

export default {
  components: { SubMenu },
  props: {
    githubLink: String
  },
  data() {
    return {
      routes: JSON.parse(localStorage.getItem("router") || "[]")
    };
  }
};
</script>
