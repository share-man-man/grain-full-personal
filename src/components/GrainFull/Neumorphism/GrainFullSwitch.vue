<template>
  <div class="switch">
    <grain-full-icon name="#icon-jiajuchuang-" :size="50" />
    <span class="p">
      Golang
    </span>
  </div>
</template>

<script>
import GrainFullIcon from "./GrainFullIcon";
export default {
  name: "GrainFullSwitch",
  components: { GrainFullIcon }
};
</script>

<style scoped lang="scss">
.switch {
  @include neumorphism("flat", 100px, 21px, 7px, 0.05, 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px;
  padding: 15px;
  width: 100px;
}
.p {
  @include neumorphism-default;
  display: block;
  font-size: 17px;
  font-weight: 600;
}
</style>
