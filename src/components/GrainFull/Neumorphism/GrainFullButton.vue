<template>
  <button
    :class="['default', type, click ? 'click' : '']"
    :style="comStyle"
    @click="$emit('click')"
  >
    <!--    <i class="icon el-icon-delete" />-->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "GrainFullButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: function(value) {
        return ["default", "unit", "circular"].indexOf(value) !== -1;
      }
    },
    width: {
      type: String,
      default: "88px"
    },
    height: {
      type: String,
      default: "44px"
    },
    click: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      configStyle: {
        default: {
          width: this.width,
          height: this.height
        },
        unit: {
          width: this.width,
          height: this.width,
          "border-radius": "25%"
        },
        circular: {
          width: this.width,
          height: this.width,
          "border-radius": "50%"
        }
      }
    };
  },
  computed: {
    comStyle: function() {
      return this.configStyle[this.type];
    }
  }
};
</script>

<style scoped lang="scss">
.default {
  @include neumorphism-default;
  @include neumorphism("flat", 30px, 15px, 3px, 0.14, 6px);
  border: 0;
  outline: 0;
  padding: 0;
  font-weight: 600;
  &:active,
  &.click {
    @include neumorphism("pressed", 30px, 15px, 3px, 0.14, 6px);
  }
  /*i {
    margin-right: $ruler/2;
  }*/
  //单元格按钮
  &.unit,
  &.circular {
    box-sizing: content-box;
    line-height: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    //margin: 0 $ruler/2;
    font-size: $ruler * 1.2;
  }
}
/*.circular {
  box-sizing: content-box;
  line-height: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: $ruler * 20;
  !*i {
    margin-right: 0;
  }*!
}*/
</style>
