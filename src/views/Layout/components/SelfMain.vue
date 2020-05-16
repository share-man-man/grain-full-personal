<template>
  <div class="layout-main">
    <div :class="['layout-main-content', vmMobile ? 'vm-mobile' : '']">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "SelfMain",
  props: {
    vmMobile: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped lang="scss">
// 展示布局
.layout-main {
  background-color: $GrainFullBackgroundColor;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &-content {
    height: 100%;
    width: 100%;
    // 配合过渡动画的定位，是fixed以该dom为准
    transform: translate3d(0, 0, 0);
    // 虚拟移动端界面
    &.vm-mobile {
      @include neumorphism("flat", 350px, 42px, 6px, 0.08, 7px);
      width: 440px;
      max-height: 805px;
    }
  }
}
</style>
