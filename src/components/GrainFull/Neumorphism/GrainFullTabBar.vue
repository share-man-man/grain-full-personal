<template>
  <div class="tab-bar">
      <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: "GrainFullTabBar"
};
</script>

<style scoped lang="scss">
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
