<template>
  <div class="tab-bar-item">
    <grain-full-button type="unit" width="40px" height="40px">
      <grain-full-icon name="#icon-jia" />
    </grain-full-button>
    <p class="p">Home</p>
  </div>
</template>

<script>
import GrainFullButton from "./GrainFullButton";
import GrainFullIcon from "./GrainFullIcon";
export default {
  name: "GrainFullTabBarItem",
  components: { GrainFullButton, GrainFullIcon }
};
</script>

<style scoped lang="scss">
.tab-bar-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.p {
  @include neumorphism-default;
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-top: 5px;
}
</style>
