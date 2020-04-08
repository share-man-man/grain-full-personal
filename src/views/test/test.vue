<template>
  <!--  <grain-full-slider />-->
  <div style="height: 40px;background-color: #333333">
    <div
      class="test"
      :style="{ left: x + 'px', top: y + 'px' }"
      ref="box"
      @mousedown.prevent="mouseDown"
      @touchstart.prevent="mouseDown"
    >
      <div style="height: 10px;width: 10px;background-color: #1989fa"></div>
    </div>
  </div>
</template>
<script>
// import GrainFullCircle from "../../components/GrainFull/Neumorphism/GrainFullCircle";
// import GrainFullButton from "../../components/GrainFull/Neumorphism/GrainFullButton";
// import GrainFullSlider from "../../components/GrainFull/Neumorphism/GrainFullSlider";
export default {
  name: "login",
  components: {
    // GrainFullSlider
    // GrainFullButton,
    // GrainFullCircle
  },
  data() {
    return {
      percent: 49,
      x: 0,
      y: 0,
      click: false
    };
  },
  // beforeCreate() {
  //   console.log(this.$refs.box);
  // },
  methods: {
    add() {
      // if(this.percent >= 95){
      //   this.percent = 100
      // }else {
      this.percent += 40;
      // }
    },
    reduce() {
      // if(this.percent <= 5){
      //   this.percent = 0
      // }else {
      this.percent -= 30;
      // }
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
        let xTem = (e.clientX+1) || e.changedTouches[0].clientX;
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
