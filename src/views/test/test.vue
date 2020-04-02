<template>
  <div>
    <grain-full-circle
      size="600px"
      :percent="percent"
      :dotted-line-divide-num="12"
    ></grain-full-circle>
    <grain-full-button @click="add">增加</grain-full-button>
    <grain-full-button @click="reduce">减少</grain-full-button>
  </div>
</template>
<script>
import GrainFullCircle from "../../components/GrainFull/Neumorphism/GrainFullCircle";
import GrainFullButton from "../../components/GrainFull/Neumorphism/GrainFullButton";
export default {
  name: "login",
  components: {
    GrainFullButton,
    GrainFullCircle
  },
  data() {
    return {
      percent: 49
    };
  },
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
    }
  },
  mounted() {
    // console.log(this.percent >= 50 ? 1 : 0);
    // console.log(Math.sin(20/250)*250)
    // console.log(Math.cos(20/250)*250)
    // console.log(this.percent);
    // console.log((2 * 3.14 * 450 * this.percent) / 450);
    // console.log(Math.sin((2 * 314 * this.percent) / 10000) * 450);
    // console.log(Math.cos((2 * 314 * this.percent) / 10000) * 450);
  }
};
</script>

<style lang="scss" scoped>
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
