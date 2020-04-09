<template>
  <div class="slider" ref="slider">
    <div
      class="slider-progress"
      ref="progress"
      :style="{ width: Math.round((value / range) * 100) + '%' }"
    >
      <!--    <div class="slider-progress" ref="progress">-->
      <div
        @touchstart.prevent="mouseDown"
        class="slider-progress-button"
        ref="button"
      >
        <slot name="button">
          <div class="slider-progress-button-default"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrainFullSlider",
  props: {
    value: {
      type: Number,
      default: 50
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      click: false,
      clickX: 0,
      x: 0
    };
  },
  computed: {
    range() {
      return this.max - this.min;
    }
    // percent() {
    //   let n = this.value / this.range;
    //   return Math.round(n);
    // }
  },
  methods: {
    mouseDown(e) {
      this.click = true;
      //记录鼠标按下的位置
      this.clickX = e.changedTouches[0].clientX;
      // document.addEventListener("mousemove", this.fnMove);
      // document.addEventListener("mouseup", this.fnUp);
      document.addEventListener("touchmove", this.fnMove);
      document.addEventListener("touchend", this.fnUp);
    },
    fnMove(e) {
      // console.log(this.clickX);
      // console.log(e.changedTouches[0].clientX);
      // console.log(e);
      if (this.click) {
        let xTem = e.changedTouches[0].clientX;
        let temporaryValue =
          (this.$refs.progress.clientWidth + (xTem - this.clickX)) /
          this.$refs.slider.clientWidth;
        this.$emit("input", this.range * temporaryValue);
        this.clickX = e.changedTouches[0].clientX;
      }
    },
    fnUp() {
      this.click = false;
      // document.removeEventListener("mousemove", this.fnMove);
      // document.removeEventListener("mouseup", this.fnUp);
      document.removeEventListener("touchmove", this.fnMove);
      document.removeEventListener("touchend", this.fnUp);
    }
  }
};
</script>

<style scoped lang="scss">
.slider {
  position: relative;
  width: 100%;
  background-color: #f12be5;
  border-radius: 999px;
  cursor: pointer;
  &-progress {
    width: 12%;
    position: relative;
    height: 2px;
    background-color: #1989fa;
    border-radius: inherit;
    -webkit-transition: width 0.2s;
    transition: width 0.2s;
    &-button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate3d(50%, -50%, 0);
      cursor: grab;
      &-default {
        width: 24px;
        height: 24px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
