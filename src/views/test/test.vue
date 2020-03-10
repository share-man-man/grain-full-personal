<template>
  <div class="login-container">
    <div class="login-form">
      <button @click="test" class="button" style="width: 300px">
        <i class="icon el-icon-success" />
        新拟物风格按钮
      </button>
      <button class="button unit" style="margin-top:10px">
        <i class="icon el-icon-delete" />
      </button>
      <button class="button unit radius" style="margin-top:10px">
        <i class="icon el-icon-delete" />
      </button>
      <input class="input" placeholder="Input Something" style="margin-top:10px"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    test() {}
  }
};
</script>

<style lang="scss" scoped>
.login {
  &-container {
    min-width: 100vw;
    min-height: 100vh;
    background-color: $color-bg;
  }
  &-form {
    padding: $ruler;
    width: $ruler * 20;
    margin: 0 auto;
  }
}

.button {
  font-family: $font-family;
  border: 0;
  outline: 0;
  font-size: $ruler;
  border-radius: $ruler * 20;
  padding: $ruler;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
  color: $color-text;
  font-weight: 600;
  box-shadow: -5px -5px 20px $color-white, 5px 5px 20px $color-shadow;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px $color-white, 2px 2px 5px $color-shadow;
  }
  &:active {
    box-shadow: inset 1px 1px 2px $color-shadow,
      inset -1px -1px 2px $color-white;
  }
  .icon {
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
    margin: 0 $ruler/2;
    font-size: $ruler * 1.2;
    .icon {
      margin-right: 0;
    }
    &.radius{
      border-radius: $ruler*20;
    }
  }
}
.input {
  font-family: $font-family;
  border: 0;
  outline: 0;
  font-size: $ruler;
  border-radius: $ruler * 20;
  padding: $ruler;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
  margin-right: $ruler/2;
  box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
  &:focus {
    box-shadow: inset 1px 1px 2px $color-shadow,
      inset -1px -1px 2px $color-white;
  }
}

</style>
