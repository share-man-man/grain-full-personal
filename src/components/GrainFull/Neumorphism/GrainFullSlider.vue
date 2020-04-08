<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "GrainFullSlider"
};
</script>

<style scoped lang="scss">
.van-slider__button {
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
.van-slider__button-wrapper {
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translate3d(50%, -50%, 0);
    transform: translate3d(50%, -50%, 0);
    cursor: grab;
}
 .van-slider {
     position: relative;
     width: 100%;
     background-color: #ebedf0;
     border-radius: 999px;
     cursor: pointer;
 }
.van-slider__bar {
    position: relative;
    height: 2px;
    background-color: #1989fa;
    border-radius: inherit;
    -webkit-transition: width 0.2s;
    transition: width 0.2s;
}
</style>
