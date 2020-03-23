<template>
  <div class="usual">
    <grain-full-switch
      v-for="(item, index) in switchList"
      :key="index"
      v-model="item.active"
      :icon-name="item.iconName"
      :name="item.name"
      style="margin: 20px 20px 20px 20px"
    />
  </div>
</template>

<script>
import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
export default {
  name: "Usual",
  components: { GrainFullSwitch },
  data() {
    return {
      switchList: [
        { active: false, iconName: "#icon-sound",name:"SoundBox" },
        { active: false, iconName: "#icon-fridge",name:"Fridge" },
        { active: false, iconName: "#icon-jiajudeng-",name:"PorchLight" },
        { active: false, iconName: "#icon-jiajukongtiao-",name:"A/C" },
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.usual {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
