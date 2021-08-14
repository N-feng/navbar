<template>
  <a-menu mode="vertical" :style="{ lineHeight: '64px', height: '100%' }">
    <template v-for="item in routes">
      <a-menu-item v-if="!item.menus.length" :key="item.menuCode">
        <div @click="handleLink(item)">
          <span>{{ item.menuName }}</span>
        </div>
      </a-menu-item>
      <SubMenu
        v-else
        :key="item.menuCode"
        :menu-info="item"
        @handleLink="handleLink"
      />
    </template>
    <a-menu-item key="vite">
      <!-- <div>
        <a-icon type="user" /> -->
      <a href="/vite-example" @click="goToChildRoute">viteApp</a>
      <!-- </div> -->
      <!-- <router-link to="/vite-example">viteApp</router-link> -->
    </a-menu-item>
    <a-menu-item key="login">
      <div>
        <a-icon type="user" />
        <router-link to="/login-aaa">Login</router-link>
        <!-- <span>Login</span> -->
      </div>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { Menu } from "ant-design-vue";

const SubMenu = {
  template: `
    <a-sub-menu :key="menuInfo.menuCode" v-bind="$props" v-on="$listeners">
      <span slot="title">
        <a-icon type="mail" /><span>{{ menuInfo.menuName }}</span>
      </span>
      <template v-for="item in menuInfo.menus">
        <a-menu-item v-if="!item.menus.length" :key="item.menuCode">
          <div @click="$emit('handleLink', item)">
            <a-icon type="pie-chart" />
            <span>{{ item.menuName }}</span>
          </div>
        </a-menu-item>
        <sub-menu v-else :key="item.menuCode" :menu-info="item" />
      </template>
    </a-sub-menu>
  `,
  name: "SubMenu",
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
};

/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export default {
  components: { SubMenu },
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleLink(item) {
      const routePath = item.url;
      const target = item.target;
      if (target === "_blank") {
        if (isExternal(routePath)) window.open(routePath);
        else if (this.$route.path !== routePath) window.open(routePath);
      } else {
        if (isExternal(routePath)) window.location.href = routePath;
        else if (this.$route.path !== routePath) this.$router.push(routePath);
      }
    }
  }
};
</script>
