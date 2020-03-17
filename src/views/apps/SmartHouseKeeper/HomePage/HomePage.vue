<template>
  <div>
    <div class="flex" style="justify-content: space-between;padding: 20px">
      <div class="hello-text">
        Good Morning , Grain Full
      </div>
      <!--      <grain-full-button width="60px" height="30px" style="margin-right: 5px">-->
      <!--        <i class="upper-right-button"></i>-->
      <!--      </grain-full-button>-->
      <!--      <grain-full-button type="unit" width="30px" height="30px">-->
      <!--        <i class="upper-right-button"></i>-->
      <!--      </grain-full-button>-->
      <grain-full-button type="circular" width="30px" style="margin-right: 5px">
        <i class="upper-right-button"></i>
      </grain-full-button>
    </div>
    <div class="scroll-panel">
      <grain-full-panel
        v-model="activePanel[0]"
        icon="#icon-guizi-"
      ></grain-full-panel>
      <grain-full-panel v-model="activePanel[1]"></grain-full-panel>
      <grain-full-panel
        v-model="activePanel[2]"
        icon="#icon-chufangweibolu-"
      ></grain-full-panel>
      <grain-full-panel
        v-model="activePanel[3]"
        icon="#icon-jiajuchuang-"
      ></grain-full-panel>
      <grain-full-panel
        v-model="activePanel[4]"
        icon="#icon-jiajufengganji-"
      ></grain-full-panel>
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
    return {
      activePanel: [false, false, false, false, true]
    };
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
</style>
