<template>
  <div>
    <div class="flex" style="justify-content: space-between;padding: 20px">
      <div class="hello-text">
        Good Morning , Grain Full
      </div>
      <grain-full-button unit radius size="30" style="margin-right: 5px">
        <i class="upper-right-button"></i>
      </grain-full-button>
    </div>
    <div class="scroll-panel">
      <grain-full-panel></grain-full-panel>
      <grain-full-panel></grain-full-panel>
      <grain-full-panel></grain-full-panel>
      <!--防止右边margin无效-->
      <div><div style="height: 1px;width: 10px"></div></div>
    </div>
  </div>
</template>

<script>
import Button from "../../../../components/GrainFull/Neumorphism/Button";
import Panel from "../../../../components/GrainFull/Neumorphism/Panel";
export default {
  name: "HomePage",
  components: {
    [Button.name]: Button,
    [Panel.name]: Panel
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(Button.name);
  }
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
}
.hello-text {
  font-size: 16px;
  font-weight: bolder;
  color: #9599a6;
}
.upper-right-button {
  height: 4px;
  width: 4px;
  background-color: $color-button-center;
  border-radius: 2px;
}

.scroll-panel {
  margin-top: 0px;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }
}

.test {
  --positionX: 7px;
  --positionXOpposite: -7px;
  --positionY: 7px;
  --positionYOpposite: -7px;
  --angle: 145deg;
  --blur: 20px;
  --textColor: #001f3f;
  --textColorOpposite: #ebecf0;
  --baseColor: #ebecf0;
  --darkColor: #dbdbdf;
  --lightColor: #fbfdff;
  --firstGradientColor: #d4d4d8;
  --secondGradientColor: #fbfdff;
  color: var(--textColor);
  font-family: Muli, sans-serif;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: var(--size);
  height: var(--size);
  border-radius: var(--radius);
  background: linear-gradient(
    var(--angle),
    var(--secondGradientColor),
    var(--firstGradientColor)
  );
  box-shadow: var(--positionX) var(--positionY) var(--blur) var(--darkColor),
    var(--positionXOpposite) var(--positionYOpposite) var(--blur)
      var(--lightColor);
  --size: 300px;
  --radius: 60px;
}
</style>
