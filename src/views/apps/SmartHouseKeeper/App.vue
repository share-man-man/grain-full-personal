<template>
  <div
    class="container"
    :style="{ height: windowHeight + 'px', width: windowWidth + 'px' }"
  >
    <router-view />
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
  }
};
</script>

<style scoped lang="scss">
.container {
  background-color: $GrainFullBackgroundColor;
}
</style>
