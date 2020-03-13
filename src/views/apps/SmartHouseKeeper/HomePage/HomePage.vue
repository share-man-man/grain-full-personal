<template>
  <div>
    <div class="flex" style="justify-content: space-between;padding: 20px">
      <div class="hello-text">
        Good Morning , Grain Full
      </div>
      <grain-full-button unit radius size="30" style="margin-right: 5px">
        <i
          style="height:4px;width: 4px;background-color: #b90000;border-radius: 2px"
        ></i>
      </grain-full-button>
    </div>
    <div style="margin-top: 20px">
        <grain-full-panel size="70"></grain-full-panel>
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
  mounted() {
    console.log(Button.name);
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
</style>
