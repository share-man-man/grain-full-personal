<template>
  <div class="container">
    <div :class="['container-content', isMobile ? '' : 'vm-mobile']">
      <!--            <transition :name="transitionName">-->
      <router-view />
      <!--            </transition>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
      // transitionName: ""
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 441;
    }
  },
  watch: {
    $route(to) {
      console.log(to);
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  background-color: $GrainFullBackgroundColor;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &-content {
    height: 100%;
    width: 100%;
    // 配合过渡动画的定位
    transform: translate3d(0, 0, 0);
    &.vm-mobile {
      @include neumorphism("flat", 350px, 42px, 6px, 0.08, 7px);
      max-width: 440px;
      max-height: 805px;
    }
  }
}
</style>
