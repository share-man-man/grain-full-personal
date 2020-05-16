<template>
  <div class="usual">
    <switch-console
      v-for="(item, index) in switchList"
      :key="index"
      v-model="item.active"
      :icon-name="item.iconName"
      :name="item.name"
      style="margin: 20px 20px 20px 20px"
      @click.native="toPath(item.path)"
    />
  </div>
</template>

<script>
import SwitchConsole from "./SwitchConsole";

export default {
  name: "LivingRoom",
  components: { SwitchConsole },
  data() {
    return {
      switchList: [
        {
          active: true,
          iconName: "#icon-jiajudeng-",
          name: "PorchLight",
          path: "lighting-control"
        },
        {
          active: true,
          iconName: "#icon-jiajukongtiao-",
          name: "A/C",
          path: "air-condition"
        },
        {
          active: false,
          iconName: "#icon-sound",
          name: "SoundBox",
          path: "sound-box"
        },
        {
          active: true,
          iconName: "#icon-fridge",
          name: "Fridge"
        }
      ]
    };
  },
  methods: {
    toPath(path) {
      if (path) {
        this.$router.slid = "right";
        this.$router.push({
          path: path
        });
      }
    }
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
