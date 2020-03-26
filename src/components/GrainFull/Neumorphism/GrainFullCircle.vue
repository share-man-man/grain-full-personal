<template>
  <div class="circle" :style="{ height: size, width: size }">
    <svg :viewBox="[0, 0, viewBoxSize, viewBoxSize]">
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
        class="circle-solid-line-progress"
        :style="solidLineProgressStyle"
      ></path>
      <!--4内圈半径450-->
      <path
        d="M 600 600 m 0, -450 a 450, 450 0 1, 1 0, 900 a 450, 450 0 1, 1 0, -900"
        class="circle-dotted-line-back"
        :style="dottedLineBackStyle"
      ></path>
      <!--5内圈半径450-->
      <path
        d="M 600 600 m 0, -450 a 450, 450 0 1, 1 0, 900 a 450, 450 0 1, 1 0, -900"
        class="circle-dotted-line-active"
        :style="dottedLineActiveStyle"
      ></path>
    </svg>
    <div
      class="pointer-circular-position"
      :style="pointerCircularPositionStyle"
    >
      <!--子元素添加偏移成与中心对齐-->
      <div
        class="pointer-circular-position-offset"
        :style="pointerCircularOffsetStyle"
      >
        <div
          class="pointer-circular-position-offset-center"
          :style="pointerCircularPositionOffsetCenter"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrainFullCircle",
  props: {
    //大小
    size: {
      type: String,
      default: "100px"
    },
    //百分位数
    percent: {
      type: Number,
      default: 25
    },
    //虚线等分数
    dottedLineDivideNum: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      viewBoxSize: 1200,
      pointerCircularRadius: 250,
      pointerCircularLineWidth: 100
    };
  },
  computed: {
    //放大倍数
    magnification() {
      return Number(this.size.replace("px", "")) / this.viewBoxSize;
    },
    //虚线每份总长度
    dottedLineLength() {
      return (2 * 3.14 * 450) / this.dottedLineDivideNum;
    },
    //实线进度条样式
    solidLineProgressStyle() {
      return {
        "stroke-dasharray": `${(1570 * this.percent) / 100}px, 1570px`,
        "stroke-width": `${this.pointerCircularLineWidth}px`
      };
    },
    //虚线进度条背景样式
    dottedLineBackStyle() {
      return {
        "stroke-dasharray": `0%, ${this.dottedLineLength}px`
      };
    },
    //虚线进度条激活样式
    dottedLineActiveStyle() {
      const num = Math.floor((this.dottedLineDivideNum * this.percent) / 100);
      let str = "0px ";
      for (let i = 0; i < num; i++) {
        str += ` ${this.dottedLineLength}px 0px`;
      }
      str += ` ${this.dottedLineLength * this.dottedLineDivideNum}px`;
      return {
        "stroke-dasharray": str
      };
    },
    //指针定位样式
    pointerCircularPositionStyle() {
      return {
        top: `${(this.viewBoxSize / 2 - this.pointerCircularRadius) *
          this.magnification}px`,
        left: `${(this.viewBoxSize / 2) * this.magnification}px`,
        transform: `rotate(${(this.percent * 360) / 100}deg)`,
        "transform-origin": `0px ${this.pointerCircularRadius *
          this.magnification}px`
      };
    },
    //指针偏移样式
    pointerCircularOffsetStyle() {
      return {
        height: `${this.pointerCircularLineWidth *
          0.82 *
          this.magnification}px`,
        width: `${this.pointerCircularLineWidth * 0.82 * this.magnification}px`,
        transform: `translate(-${((this.pointerCircularLineWidth * 0.82) / 2) *
          this.magnification}px,-${((this.pointerCircularLineWidth * 0.82) /
          2) *
          this.magnification}px)`
      };
    },
    //指针圆心样式
    pointerCircularPositionOffsetCenter() {
      return {
        height: `${this.pointerCircularLineWidth *
          0.1 *
          this.magnification}px`,
        width: `${this.pointerCircularLineWidth * 0.1 * this.magnification}px`
      };
    }
  },
  mounted() {
    // console.log(this.props)
    // console.log((2 * 3.14 * 450 * this.props) / 450);
    // console.log(Math.sin((2 * 3.14 * 450 * this.props) / 450));
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
  /*svg:not(:root) {*/
  /*  overflow: hidden;*/
  /*}*/
  /*&__layer {*/
  /*  fill: none;*/
  /*  stroke-linecap: round;*/
  /*}*/
  &-solid-line-progress {
    fill: none;
    transition: all .5s;
    stroke: $GrainFullMainColor;
    stroke-linecap: round;
  }
  &-dotted-line {
    &-back {
      fill: none;
      stroke: #aaaaaa;
      stroke-width: 15px;
      stroke-linecap: round;
    }
    &-active {
      fill: none;
      transition: all .5s;
      stroke: $GrainFullMainColor;
      stroke-width: 20px;
      stroke-linecap: round;
    }
  }
  .pointer-circular {
    //定位的class
    &-position {
      transition: all .6s;
      display: inline-block;
      height: 100px;
      width: 100px;
      position: absolute;
      &-offset {
        transition: all .6s;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background-color: white;
        &-center {
          transition: all .6s;
          background-color: $GrainFullMainColor;
          border-radius: 100%;
          height: 40px;
          width: 40px;
        }
      }
    }
  }
}
</style>
