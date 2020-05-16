<template>
  <div class="circle" :style="{ height: size, width: size }">
    <svg :viewBox="[0, 0, viewBoxSize, viewBoxSize]">
      <defs>
        <linearGradient
          id="grain-full-circle-gradient-1"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0" stop-color="#e0e4ef" />
          <stop offset="100%" stop-color="#ffffff" />
        </linearGradient>
        <linearGradient
          id="grain-full-circle-gradient-2"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#e0e4ef" />
        </linearGradient>
        <!--        <linearGradient-->
        <!--          id="grain-full-circle-gradient-3"-->
        <!--          x1="100%"-->
        <!--          y1="0%"-->
        <!--          x2="0%"-->
        <!--          y2="0%"-->
        <!--        >-->
        <!--          <stop offset="0" stop-color="#56F2B7" />-->
        <!--          <stop offset="100%" stop-color="#54CE94" />-->
        <!--        </linearGradient>-->
        <linearGradient
          :id="activeDarkColor + activeLightColor"
          x1="100%"
          y1="0%"
          x2="0%"
          y2="0%"
        >
          <stop offset="0" :stop-color="activeDarkColor" />
          <stop offset="100%" :stop-color="activeLightColor" />
        </linearGradient>
        <linearGradient
          id="grain-full-circle-gradient-4"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0" stop-color="#fdfdfd" />
          <stop offset="100%" stop-color="#e8ebf2" />
        </linearGradient>
        <linearGradient
          id="grain-full-circle-gradient-5"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0" stop-color="#e1e5ed" />
          <stop offset="100%" stop-color="#fdfdfd" />
        </linearGradient>
      </defs>
      <!--1内圈半径200-->
      <path
        d="M 600 600 m 0, -295 a 295, 295 0 1, 1 0, 590 a 295, 295 0 1, 1 0, -590"
        style="fill: url(#grain-full-circle-gradient-1); stroke: url(#grain-full-circle-gradient-2); stroke-width: 10px;"
      ></path>
      <!--2内圈半径350-->
      <path
        d="M 600 600 m 0, -350 a 350, 350 0 1, 1 0, 700 a 350, 350 0 1, 1 0, -700"
        style="fill: none; stroke: url(#grain-full-circle-gradient-4); stroke-width: 100px;"
      ></path>
      <!--3内圈半径350-->
      <path
        d="M 600 600 m 0, -350 a 350, 350 0 1, 1 0, 700 a 350, 350 0 1, 1 0, -700"
        class="circle-solid-line-progress"
        :style="solidLineProgressStyle"
      ></path>
      <!--4内圈半径425-->
      <path
        d="M 600 600 m 0, -425 a 425, 425 0 1, 1 0, 850 a 425, 425 0 1, 1 0, -850"
        style="fill: none; stroke: url(#grain-full-circle-gradient-5); stroke-width: 50px;filter:url(#f1)"
      ></path>
      <!--5内圈半径550-->
      <path
        d="M 600 600 m 0, -550 a 550, 550 0 1, 1 0, 1100 a 550, 550 0 1, 1 0, -1100"
        class="circle-dotted-line-back"
        :style="dottedLineBackStyle"
      ></path>
      <!--6内圈半径550-->
      <path
        d="M 600 600 m 0, -550 a 550, 550 0 1, 1 0, 1100 a 550, 550 0 1, 1 0, -1100"
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
    <div class="content" :style="contentStyle">
      <slot>{{ finalPercent }}%</slot>
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
      type: [Number, String],
      default: 25
    },
    //虚线等分数
    dottedLineDivideNum: {
      type: [Number, String],
      default: 12
    },
    dottedLineBackColor: {
      type: String
    },
    dottedLineActiveColor: {
      type: String
    },
    activeColor: {
      type: String
    },
    activeLightColor: {
      type: String,
      default: "#56F2B7"
    },
    activeDarkColor: {
      type: String,
      default: "#54CE94"
    },
    // dottedLineShowLength:{
    //   type:Number,
    //   default : 0
    // },
    dottedLineType: {
      default: "default",
      type: String,
      validator(value) {
        return ["default", "line"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      viewBoxSize: 1200,
      pointerCircularRadius: 350,
      pointerCircularLineWidth: 100,
      contentRadius: 450
    };
  },
  computed: {
    //参数数值边界限定
    finalPercent() {
      return this.percent < 0 ? 0 : this.percent > 100 ? 100 : this.percent;
    },
    //放大倍数
    magnification() {
      return Number(this.size.replace("px", "")) / this.viewBoxSize;
    },
    //虚线每份总长度
    dottedLineLength() {
      return (2 * 3.14 * 550) / this.dottedLineDivideNum;
    },
    //实线进度条样式
    solidLineProgressStyle() {
      return {
        "stroke-dasharray": `${(2198 * this.finalPercent) / 100}px, 2198px`,
        "stroke-width": `${this.pointerCircularLineWidth}px`,
        stroke: `url(#${this.activeDarkColor + this.activeLightColor})`
      };
    },
    //虚线进度条每份展示长度
    dottedLineShowLength() {
      return this.dottedLineType === "line" ? 20 : 0;
    },
    //虚线进度条背景样式
    dottedLineBackStyle() {
      return {
        stroke: this.dottedLineBackColor || "",
        "stroke-dasharray": `${this.dottedLineShowLength}px, ${this
          .dottedLineLength - this.dottedLineShowLength}px`,
        "stroke-linecap": this.dottedLineType === "line" ? "butt" : "round",
        "stroke-width": `${this.dottedLineType === "line" ? 55 : 20}px`
      };
    },
    //虚线进度条激活样式
    dottedLineActiveStyle() {
      const num = Math.floor(
        (this.dottedLineDivideNum * this.finalPercent) / 100
      );
      let str = `${this.dottedLineShowLength}px `;
      for (let i = 0; i < num; i++) {
        str += ` ${this.dottedLineLength - this.dottedLineShowLength}px ${
          this.dottedLineShowLength
        }px`;
      }
      str += ` ${this.dottedLineLength * this.dottedLineDivideNum}px`;
      return {
        "stroke-linecap": this.dottedLineType === "line" ? "butt" : "round",
        "stroke-width": `${this.dottedLineType === "line" ? 55 : 30}px`,
        "stroke-dasharray": str,
        stroke: this.dottedLineActiveColor || this.activeColor || ""
      };
    },
    //指针定位样式
    pointerCircularPositionStyle() {
      return {
        top: `${(this.viewBoxSize / 2 - this.pointerCircularRadius) *
          this.magnification}px`,
        left: `${(this.viewBoxSize / 2) * this.magnification}px`,
        transform: `rotate(${(this.finalPercent * 360) / 100}deg)`,
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
        height: `${this.pointerCircularLineWidth * 0.1 * this.magnification}px`,
        width: `${this.pointerCircularLineWidth * 0.1 * this.magnification}px`,
        "background-color": this.activeColor || ""
      };
    },
    //内容框样式
    contentStyle() {
      return {
        width: `${2 * this.contentRadius * this.magnification}px`,
        height: `${2 * this.contentRadius * this.magnification}px`,
        top: `${(this.viewBoxSize / 2 - this.contentRadius) *
          this.magnification}px`,
        left: `${(this.viewBoxSize / 2 - this.contentRadius) *
          this.magnification}px`,
        "font-size": `${150 * this.magnification}px`,
        "box-shadow": `${62 * this.magnification}px ${62 *
          this.magnification}px ${62 * this.magnification}px #dee0e9`
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
    transition: all 0.5s;
    /*stroke: url(#grain-full-circle-gradient-3);*/
    stroke-linecap: round;
  }
  &-dotted-line {
    &-back {
      fill: none;
      stroke: #aaaaaa;
      stroke-width: 20px;
      stroke-linecap: round;
    }
    &-active {
      fill: none;
      /*transition: all 0.5s;*/
      stroke: $GrainFullMainColor;
      stroke-width: 30px;
      stroke-linecap: round;
    }
  }
  .pointer-circular {
    //定位的class
    &-position {
      transition: all 0.5s;
      display: inline-block;
      height: 1px;
      width: 1px;
      position: absolute;
      &-offset {
        transition: all 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background-color: white;
        &-center {
          transition: all 0.5s;
          background-color: $GrainFullMainColor;
          border-radius: 100%;
        }
      }
    }
  }
  .content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #9097a7;
    font-weight: 500;
    border-radius: 50%;
    /*background-color: #a3e4ff;*/
  }
}
</style>
