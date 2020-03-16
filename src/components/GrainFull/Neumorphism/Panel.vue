<template>
  <div class="panel">
    <slot>
      <svg
              class="icon"
              style="font-size: 20px;"
              aria-hidden="true"
      >
        <use xlink:href="#icon-chufangxiyouyan-"></use>
      </svg>
      <p style="margin:0 0 0 10px;font-size: 12px">油烟机</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "GrainFullPanel"
};
</script>

<style scoped lang="scss">
.panel {
  flex: 0 0 0;
  display: flex;
  align-items: center;
  white-space: pre;
  font-family: $font-family;
  //border: 0;
  outline: 0;
  font-size: $ruler;
  margin: 20px 30px;
  padding: 10px;
  text-shadow: 1px 1px 0 $color-text-shadow;
  text-align: center;
  color: $color-button-text;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  border-radius: 12px;
  background-color: $color-bg;
  border: 2px solid #e4e4e4;
  @include neumorphism-convex;
  /*border-radius: 60px;
  background: linear-gradient(145deg, #fbfdff, #d4d4d8);
  box-shadow:  2px 2px 10px #dbdbdf,
  -2px -2px 10px #fbfdff;*/
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
