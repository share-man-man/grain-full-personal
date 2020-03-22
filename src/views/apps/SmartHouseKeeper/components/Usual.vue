<template>
  <div class="usual">
    <grain-full-switch v-model="button1" style="margin: 20px" />
    <grain-full-switch v-model="button1" style="margin: 20px" />
    <grain-full-switch v-model="button1" style="margin: 20px" />
    <grain-full-switch v-model="button1" style="margin: 20px" />
  </div>
</template>

<script>
import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
export default {
  name: "Usual",
  components: { GrainFullSwitch },
  data() {
    return {
      button1: false
    };
  }
};
</script>

<style scoped lang="scss">
.usual {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
