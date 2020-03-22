<template>
  <svg
    class="icon"
    aria-hidden="true"
    :style="{ 'font-size': size + 'px', color: color }"
  >
    <use :xlink:href="name"></use>
  </svg>
</template>

<script>
export default {
  name: "GrainFullIcon",
  props: {
    name: {
      type: String
    },
    size: {
      type: Number,
      default: 20
    },
    color: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: $GrainFullTextColor;
}
</style>
