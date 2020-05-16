<template>
  <div :class="objClass" :style="{ 'font-size': fontSize }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GrainFullPanel",
  props: {
    //icon图标
    icon: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: {
        type: String,
        default: "12px"
      }
    }
  },
  computed: {
    objClass() {
      return {
        panel: true,
        active: this.active
      };
    }
  },
  methods: {
    // click() {
    //   this.$emit("input", !this.value);
    // }
  }
};
</script>

<style scoped lang="scss">
.panel {
  @include neumorphism-default;
  @include neumorphism("convex", 40px, 10px, 5px, 0.13, 9px);
  flex: 0 0 0;
  display: flex;
  align-items: center;
  white-space: pre;
  outline: 0;
  /*font-size: $GrainFullRuler;*/
  margin: 10px 20px;
  padding: 10px 5px;
  font-weight: 600;
  border: 1px solid #f1f1f1;
  &.active {
    @include neumorphism("concave", 40px, 10px, 5px, 0.13, 9px);
    color: $GrainFullMainColor;
    & svg {
      color: $GrainFullMainColor;
    }
  }
}
</style>
