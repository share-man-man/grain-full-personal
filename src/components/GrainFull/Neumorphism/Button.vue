<template>
  <button :class="objClass" :style="objStyle">
    <!--    <i class="icon el-icon-delete" />-->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "GrainFullButton",
  props: {
    unit: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 16
    }
  },
  data() {
    return {
      click: false
    };
  },
  computed: {
    objClass: function() {
      return {
        button: true,
        unit: this.unit,
        radius: this.radius,
        click: this.click
      };
    },
    objStyle: function() {
      return {
        height: this.size + "px",
        width: this.size + "px",
        "border-radius":
          (this.radius
            ? this.size/2
            : this.unit
            ? this.size / 4
            : this.size/2) + "px"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  font-family: $font-family;
  border: 0;
  outline: 0;
  font-size: $ruler;
  padding: 0;
  text-shadow: 1px 1px 0 $color-text-shadow;
  color: $color-button-text;
  transition: all .2s ease-in-out;
  font-weight: 600;
  border-radius: $ruler * 20;
  background-color: $color-bg;
  @include neumorphism-flat;
  /*box-shadow: -2px -2px 5px $color-shadow-light, 2px 2px 5px $color-shadow-dark;*/
  &:active,
  &.click {
    @include neumorphism-pressed;
    /*box-shadow: inset 1px 1px 2px $color-shadow-dark,
      inset -1px -1px 2px $color-shadow-light;*/
  }
  i {
    margin-right: $ruler/2;
  }
  //单元格按钮
  &.unit {
    border-radius: $ruler/2;
    line-height: 0;
    width: $ruler * 3;
    height: $ruler * 3;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    //margin: 0 $ruler/2;
    font-size: $ruler * 1.2;
  }
}
.radius {
  border-radius: $ruler * 20;
  i {
    margin-right: 0;
  }
}
</style>
