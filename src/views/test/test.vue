<template>
  <div>
    <grain-full-circle></grain-full-circle>
  </div>
</template>
<script>
import GrainFullCircle from "../../components/GrainFull/Neumorphism/GrainFullCircle";
export default {
  name: "login",
  components: {
    GrainFullCircle
  },
  methods: {
    test() {}
  },
  mounted() {
    // console.log(1);
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
