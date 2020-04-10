<template>
  <div>
    <div style="margin-top: 20px">
      <grain-full-slider v-model="percent2" :max="40" :min="-10" />
    </div>
    <div style="margin-top: 20px">
      <van-slider v-model="percent1" :min="-10" :max="40" />
    </div>
    <button @click="test" style="margin-top: 20px">asdasdas</button>
  </div>
</template>
<script>
// import GrainFullCircle from "../../components/GrainFull/Neumorphism/GrainFullCircle";
// import GrainFullButton from "../../components/GrainFull/Neumorphism/GrainFullButton";
import GrainFullSlider from "../../components/GrainFull/Neumorphism/GrainFullSlider";

import { Slider, Toast } from "vant";

export default {
  name: "login",
  components: {
    [Slider.name]: Slider,
    GrainFullSlider
    // GrainFullButton,
    // GrainFullCircle
  },
  data() {
    return {
      percent1: 10,
      percent2: 12,
      x: 0,
      y: 0,
      click: false
    };
  },
  // beforeCreate() {
  //   console.log(this.$refs.box);
  // },
  methods: {
    test() {
      this.percent1++;
      this.percent2++;
    },
    onChange(value) {
      Toast("当前值：" + value);
    },
    mouseDown() {
      this.click = true;
      document.addEventListener("mousemove", this.fnMove);
      document.addEventListener("mouseup", this.fnUp);
      document.addEventListener("touchmove", this.fnMove);
      document.addEventListener("touchend", this.fnUp);
    },
    fnMove(e) {
      // console.log(e)
      if (this.click) {
        let xTem = e.clientX + 1 || e.changedTouches[0].clientX;
        this.x = xTem - 10;
      }
    },
    fnUp() {
      this.click = false;
      document.removeEventListener("mousemove", this.fnMove);
      document.removeEventListener("mouseup", this.fnUp);
      document.removeEventListener("touchmove", this.fnMove);
      document.removeEventListener("touchend", this.fnUp);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.test {
  height: 20px;
  width: 20px;
  background-color: #42b983;
  position: fixed;
}
.circle {
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
