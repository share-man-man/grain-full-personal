<template>
  <div class="switch">
    <grain-full-icon :name="iconName" :size="50" />
    <span class="p">
      {{ name }}
    </span>
    <div>
      <slot name="item3">
        <grain-full-switch v-model="switchModel" />
      </slot>
    </div>
  </div>
</template>

<script>
import GrainFullIcon from "../../../../components/GrainFull/Neumorphism/GrainFullIcon";
import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
export default {
  name: "SwitchConsole",
  components: { GrainFullSwitch, GrainFullIcon },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String
    },
    name: {
      type: String
    }
  },
  watch: {
    value: {
      handler: function(val) {
        this.switchModel = val;
      },
      immediate: true
    },
    switchModel: {
      handler: function(val) {
        this.$emit("input", val);
      },
      immediate: true
    }
  },
  data() {
    return {
      switchModel: false
    };
  },
  computed: {
    clickClass() {
      return {
        "switch-click": true,
        on: this.value
      };
    },
    nodeClass() {
      return {
        "switch-click-node": true,
        on: this.value
      };
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
  min-width: 80px;
  /*width: 80px;*/
  /*&-click {
    transition: all 0.3s ease;
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
    &-node {
      top: 0;
      left: 0;
      z-index: 1;
      width: 3px;
      height: 3px;
      border: 12px solid $GrainFullSwitchClickNodeBackGroundColor;
      //background-color: $GrainFullSwitchClickNodeBackGroundColor;
      border-radius: 100%;
      transition: all 0.3s ease;
      &.on {
        transform: translateX(32px);
      }
    }
    &.on {
      background-color: $GrainFullSwitchClickOnBackGroundColor;
    }
  }*/
}
.p {
  @include neumorphism-default;
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
}
</style>
