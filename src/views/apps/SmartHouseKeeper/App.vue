<template>
  <!--  <div-->
  <!--    class="container"-->
  <!--    :style="{ height: windowHeight + 'px', width: windowWidth + 'px' }"-->
  <!--  >-->
  <div class="container">
    <div style="height: 1px"></div>
    <div
      :class="['container-content', isMobile ? '' : 'vm-mobile']"
      :style="{ 'max-width': 992 + 'px' }"
    >
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
      return this.windowWidth < 992;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  background-color: $GrainFullBackgroundColor;
  height: 100%;
  &-content {
    height: 100%;
    max-height: 812px;
    &.vm-mobile {
      @include neumorphism("flat", 350px, 42px, 6px, 0.08, 7px);
      min-height: 667px;
    }
    margin: 0 auto;
  }
}
</style>
