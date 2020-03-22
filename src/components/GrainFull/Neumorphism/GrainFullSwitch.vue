<template>
  <div class="switch">
    <grain-full-icon name="#icon-jiajudeng-" :size="50" style="margin-top: 10px"/>
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
  @include neumorphism("flat", 100px, 21px, 7px, 0.05, 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px;
  padding: 15px;
  width: 100px;
  &-click {
    position: relative;
    display: inline-block;
    box-sizing: content-box;
    margin-top: 16px;
    width: 2em;
    height: 1em;
    font-size: 30px;
    background-color: $GrainFullSwitchClickBackGroundColor;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    cursor: pointer;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
    &-node{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 0.12em;
      height: 0.12em;
      border: 0.43em solid $GrainFullSwitchClickNodeBackGroundColor;
      //background-color: $GrainFullSwitchClickNodeBackGroundColor;
      border-radius: 100%;
      box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
      transition: -webkit-transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
      &.on{
        transform: translateX(1em);
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
