<template>
  <!--  <div-->
  <!--    class="container"-->
  <!--    :style="{ height: windowHeight + 'px', width: windowWidth + 'px' }"-->
  <!--  >-->
  <div class="container">
    <!--        <div style="height: 1px"></div>-->
    <div :class="['container-content', isMobile ? '' : 'vm-mobile']">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 441;
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
    &.vm-mobile {
      @include neumorphism("flat", 350px, 42px, 6px, 0.08, 7px);
      max-width: 440px;
      max-height: 805px;
    }
  }
}
</style>
