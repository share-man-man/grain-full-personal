<template>
  <div class="circle" style="height: 1200px;width: 1200px">
    <svg :viewBox="[0, 0, 1200, 1200]">
      <!--1内圈半径200-->
      <path
        d="M 600 600 m 0, -195 a 195, 195 0 1, 1 0, 390 a 195, 195 0 1, 1 0, -390"
        class="van-circle__hover"
        style="fill: #f4f5f9; stroke: #e7e8ed; stroke-width: 10px;"
      ></path>
      <!--2内圈半径250-->
      <path
        d="M 600 600 m 0, -250 a 250, 250 0 1, 1 0, 500 a 250, 250 0 1, 1 0, -500"
        class="van-circle__hover"
        style="fill: none; stroke: #f0f1f6; stroke-width: 100px;"
      ></path>
      <!--3内圈半径250-->
      <path
        d="M 600 600 m 0, -250 a 250, 250 0 1, 1 0, 500 a 250, 250 0 1, 1 0, -500"
        class="van-circle__hover"
        style="fill: none; stroke: #52dea5; stroke-width: 100px; stroke-linecap:round; stroke-dasharray: 1000px, 1570px;"
      ></path>
      <!--4内圈半径450-->
      <path
        d="M 600 600 m 0, -450 a 450, 450 0 1, 1 0, 900 a 450, 450 0 1, 1 0, -900"
        class="van-circle__hover"
        style="fill: none; stroke: #aaaaaa; stroke-width: 10px; stroke-linecap:round; stroke-dasharray: 0px, 235.5px;"
      ></path>
      <!--5内圈半径450-->
      <path
        :d="testPath"
        class="van-circle__hover"
        style="fill: none; stroke: #52dea5; stroke-width: 11px; stroke-linecap:round; stroke-dasharray: 0px, 235.5px;"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "GrainFullCircle",
  data() {
    return {
      // testPath:''
    };
  },
  computed: {
    testPath() {
        return `M 600 600 m 0, -450 a 450, 450 0 0, 1 450, 450`
    }
  }
};
</script>

<style scoped lang="scss">
.circle {
  height: 100px;
  width: 100px;
  display: inline-block;
  position: relative;
  text-align: center;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  &__layer {
    fill: none;
    stroke-linecap: round;
  }
}
</style>
