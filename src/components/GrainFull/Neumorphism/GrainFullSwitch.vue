<template>
  <div @click.stop="click" :class="clickClass">
    <div v-if="!mode" :class="nodeClass"></div>
    <div v-if="mode" class="switch-click__mode-group">
      <p :class="['p', value ? 'active' : '']">
        <slot name="left">
          Week
        </slot>
      </p>
      <p :class="['p', !value ? 'active' : '']">
        <slot name="right">
          Day
        </slot>
      </p>
    </div>
  </div>
</template>

<script>
// import GrainFullIcon from "./GrainFullIcon";
export default {
  name: "GrainFullSwitch",
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false
    },
    mode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    clickClass() {
      let objClass = {
        "switch-click": true,
        on: this.value
      };
      if (this.mode) {
        objClass = {
          "switch-click__mode": true,
          on: this.value
        };
      }
      return objClass;
    },
    nodeClass() {
      return {
        "switch-click-node": true,
        on: this.value
      };
    }
  },
  methods: {
    click() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style scoped lang="scss">
.switch {
  &-click {
    transition: all 0.3s ease;
    margin-top: 16px;
    width: 60px;
    height: 30px;
    font-size: 30px;
    background-color: $GrainFullSwitchClickBackGroundColor;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    /*align-items: center;*/
    &__mode {
      //@include neumorphism-default;
      @include neumorphism("concave", 80px, 10px, 5px, 0.13, 8px);
      display: inline-block;
      transition: all 0.3s ease;
      margin: 8px;
      -webkit-tap-highlight-color: transparent;
      /*width: 80px;*/
      /*height: 30px;*/
      &-group {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-weight: 600;
      }
    }
    &-node {
      position: absolute;
      top: 1.5px;
      left: 1.5px;
      z-index: 1;
      width: 3px;
      height: 3px;
      border: 12px solid $GrainFullSwitchClickNodeBackGroundColor;
      //background-color: $GrainFullSwitchClickNodeBackGroundColor;
      border-radius: 50%;
      transition: all 0.3s ease;
      &.on {
        transform: translateX(30px);
      }
    }
    &.on {
      background-color: $GrainFullSwitchClickOnBackGroundColor;
    }
  }
}
.p {
  @include neumorphism-default;
  background-color: transparent;
  /*display: block;*/
  font-size: 12px;
  font-weight: 500;
  margin: 4px 4px;
  padding: 4px 9px;
  border-radius: 9px;
  &.active {
    //@include neumorphism("pressed", 21px, 7px, 2px, 0.08, 6px);
    //background: linear-gradient($GrainFullAngle, #e7ebf1, #f3f2f7);
    background-color: #e6ebf1;
    color: $GrainFullMainColor;
    box-shadow: inset 2px 2px 1px #d3d6e1, inset -2px -2px 2px #e5e7e9;
    /*padding: 2px 5px;*/
  }
}
</style>
