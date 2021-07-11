<template functional>
  <a-sub-menu :key="props.menuInfo.menuCode">
    <span slot="title">
      <a-icon type="mail" /><span>{{ props.menuInfo.menuName }}</span>
    </span>
    <template v-for="item in props.menuInfo.menus">
      <a-menu-item v-if="!item.menus.length" :key="item.menuCode">
        <a-icon type="pie-chart" />
        <span>{{ item.menuName }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.menuCode" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
export default { props: ['menuInfo'] };
