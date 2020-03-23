<template>
  <div class="switch">
    <grain-full-icon name="#icon-jiajudeng-" :size="50" />
    <span class="p">
      Golang
    </span>
    <div>
      <div @click="$emit('input', !value)" :class="clickClass">
        <div :class="nodeClass"></div>
      </div>
    </div>
  </div>
</template>

<script>
import GrainFullIcon from "./GrainFullIcon";
export default {
  name: "GrainFullSwitch",
  components: { GrainFullIcon },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    clickClass() {
      return {
        "switch-click": true,
        on: this.value
      };
    },
    nodeClass(){
      return {
        "switch-click-node":true,
        "on":this.value
      }
    }
  }
};
</script>

<style scoped lang="scss">
.switch {
  @include neumorphism("flat", 80px, 21px, 7px, 0.05, 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10px 10px 0px 10px;
  padding: 15px;
  width: 80px;
  &-click {
    transition: all .3s ease;
    margin-top: 16px;
    width: 60px;
    height: 30px;
    font-size: 30px;
    background-color: $GrainFullSwitchClickBackGroundColor;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &-node{
      top: 0;
      left: 0;
      z-index: 1;
      width: 3px;
      height: 3px;
      border: 12px solid $GrainFullSwitchClickNodeBackGroundColor;
      //background-color: $GrainFullSwitchClickNodeBackGroundColor;
      border-radius: 100%;
      transition: all .3s ease;
      &.on{
        transform: translateX(32px);
      }
    }
    &.on {
      background-color: $GrainFullSwitchClickOnBackGroundColor;
    }
  }
}
.p {
  @include neumorphism-default;
  display: block;
  font-size: 17px;
  font-weight: 600;
  margin-top: 5px;
}
</style>
