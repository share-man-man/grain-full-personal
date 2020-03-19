<template>
  <div
    class="container"
  >
    <div class="container-page">
        <router-view/>
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
  }
};
</script>

<style scoped lang="scss">
.container {
  min-width: 100vw;
  min-height: 100vh;
  background-color: $GrainFullBackgroundColor;
  &-page {
    /*padding: $ruler;*/
    width: 100%;
    margin: 0 auto;
  }
}
</style>
