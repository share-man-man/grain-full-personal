<template>
  <div :style="sliderStyle" class="slider" ref="slider">
    <div
      class="slider-progress"
      ref="progress"
      :style="{
        width: Math.round((value / range) * 100) + '%',
        transition: click ? 'width 0s' : '',
        ...progressStyle
      }"
    >
      <div
        @touchstart.prevent="touchDown"
        @mousedown.prevent="mouseDown"
        class="slider-progress-button"
        ref="button"
      >
        <slot name="button">
          <div class="slider-progress-button-default p">
            {{ !showButtonInfo ? "" : value }}
          </div>
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
    },
    sliderStyle: {
      type: Object
    },
    progressStyle: {
      type: Object
    },
    showButtonInfo: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      click: false,
      clickX: 0,
      clickWidth: 0,
      x: 0
    };
  },
  computed: {
    range() {
      return this.max - this.min;
    }
  },
  methods: {
    // 触摸事件
    touchDown(e) {
      this.click = true;
      //记录鼠标按下的位置
      this.clickX = e.changedTouches[0].clientX;
      this.clickWidth = this.$refs.progress.clientWidth;
      // document.addEventListener("mousemove", this.fnMove);
      // document.addEventListener("mouseup", this.fnUp);
      document.addEventListener("touchmove", this.fnMove, { passive: true });
      document.addEventListener("touchend", this.fnUp);
    },
    // 鼠标点击事件
    mouseDown(e) {
      this.click = true;
      //记录鼠标按下的位置
      this.clickX = e.clientX;
      this.clickWidth = this.$refs.progress.clientWidth;
      document.addEventListener("mousemove", this.fnMove, { passive: true });
      document.addEventListener("mouseup", this.fnUp);
      // document.addEventListener("touchmove", this.fnMove);
      // document.addEventListener("touchend", this.fnUp);
    },
    fnMove(e) {
      if (this.click) {
        // const x = e.clientX + 1 || e.changedTouches[0].clientX + 1;
        let temporaryValue =
          ((e.clientX + 1 || e.changedTouches[0].clientX + 1) -
            this.clickX +
            this.clickWidth) /
          this.$refs.slider.clientWidth;
        this.$emit(
          "input",
          Math.round(
            this.range *
              (temporaryValue > 1 ? 1 : temporaryValue < 0 ? 0 : temporaryValue)
          )
        );
      }
    },
    fnUp() {
      this.click = false;
      document.removeEventListener("mousemove", this.fnMove);
      document.removeEventListener("mouseup", this.fnUp);
      document.removeEventListener("touchmove", this.fnMove);
      document.removeEventListener("touchend", this.fnUp);
    }
  }
};
</script>

<style scoped lang="scss">
.p {
  @include neumorphism-default;
  font-size: 12px;
  font-weight: 500;
  margin: 10px auto;
  white-space: pre;
}

.slider {
  position: relative;
  width: 100%;
  background-color: #e3e5ee;
  box-shadow: inset 2px 2px 2px #c4c8d1, inset -2px -2px 2px #ffffff;
  border-radius: 999px;
  cursor: pointer;
  /*background-image: linear-gradient(to right, #72d5fa, #ffffff, #face60);*/
  &-progress {
    width: 12%;
    position: relative;
    height: 8px;
    background-color: $GrainFullMainColor;
    //box-shadow: 0 0 3px 1px $GrainFullMainColor;
    border-radius: inherit;
    transition: width 0.2s;

    &-button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate3d(50%, -50%, 0);
      cursor: grab;

      &-default {
        width: 30px;
        height: 30px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>
