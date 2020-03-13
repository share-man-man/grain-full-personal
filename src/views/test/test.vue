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

      <div class="button-group">
        <div class="button-group-contain">
          <button class="button-group-item top">
            <i class="icon el-icon-plus" />
          </button>
          <button class="button-group-item">
            <i class="icon el-icon-caret-right" />
          </button>
          <button class="button-group-item bottom">
            <i class="icon el-icon-minus" />
          </button>
        </div>
      </div>

      <input
        class="input"
        placeholder="Input Something"
        style="margin-top:10px"
      />
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
.button-group {
  display: inline-block;
  &-contain {
    background-color: $color-bg;
    display: flex;
    flex-direction: column;
    background-color: $color-bg;
    /*box-shadow: -5px -5px 20px $color-shadow-light,
      5px 5px 20px $color-shadow-dark;*/
    box-shadow: -2px -2px 5px $color-shadow-light,
    2px 2px 5px $color-shadow-dark;
    border-radius: $ruler * 20;
  }
  &-item {
    font-family: $font-family;
    border: 0;
    outline: 0;
    padding: $ruler;
    background-color: $color-bg;
    text-shadow: 1px 1px 0 $color-text-shadow;
    color: $color-button-text;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    line-height: 0;
    width: $ruler * 3;
    height: $ruler * 3;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: $ruler * 1.2;
    &.top {
      border-radius: $ruler * 20 $ruler * 20 0 0;
    }
    &.bottom {
      border-radius: 0 0 $ruler * 20 $ruler * 20;
    }
    /*&:hover {
      box-shadow: -2px -2px 5px $color-shadow-light,
      2px 2px 5px $color-shadow-dark;
    }*/
    &:active {
      box-shadow: inset 1px 1px 2px $color-shadow-dark,
      inset -1px -1px 2px $color-shadow-light;
    }
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
  text-shadow: 1px 1px 0 $color-text-shadow;
  color: $color-button-text;
  font-weight: 600;
  /*box-shadow: -5px -5px 20px $color-shadow-light,
    5px 5px 20px $color-shadow-dark;*/
  box-shadow: -2px -2px 5px $color-shadow-light,
  2px 2px 5px $color-shadow-dark;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  /*&:hover {
    box-shadow: -2px -2px 5px $color-shadow-light,
      2px 2px 5px $color-shadow-dark;
  }*/
  &:active {
    box-shadow: inset 1px 1px 2px $color-shadow-dark,
      inset -1px -1px 2px $color-shadow-light;
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
    &.radius {
      border-radius: $ruler * 20;
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
  text-shadow: 1px 1px 0 $color-text-shadow;
  margin-right: $ruler/2;
  /*<!--box-shadow: inset 2px 2px 5px $color-shadow-dark, inset -5px -5px 10px $color-shadow-light;-->*/
  box-shadow: inset 1px 1px 2px $color-shadow-dark,
    inset -1px -1px 2px $color-shadow-light;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
  &:focus {
    /*<!--box-shadow: inset 1px 1px 2px $color-shadow-dark, inset -1px -1px 2px $color-shadow-light;-->*/
    box-shadow: inset 2px 2px 5px $color-shadow-dark,
      inset -5px -5px 10px $color-shadow-light;
  }
}
</style>
