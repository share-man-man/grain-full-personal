<template>
  <div :class="objClass" @click="click">
    <slot>
      <svg class="icon" aria-hidden="true" style="font-size: 20px;">
        <use :xlink:href="icon"></use>
      </svg>
      <p style="margin:0 0 0 10px;font-size: 12px">Panel框</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "GrainFullPanel",
  props:{
    "value":{
      type:Boolean,
    },
    //icon图标
    icon:{
      type:String,
      default: ''
    }
  },
  computed:{
    objClass(){
      return {
        panel:true,
        active:this.value
      }
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
.panel {
  @include neumorphism-convex(42px,88px);
  flex: 0 0 0;
  display: flex;
  align-items: center;
  white-space: pre;
  outline: 0;
  font-size: $ruler;
  margin: 20px 30px;
  padding: 10px;
  font-weight: 600;
  border: 1px solid #e4e4e4;
  &.active {
    @include neumorphism-concave(42px,88px);
    color: $color-active;
  }
}
//icon图标
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
