<template>
  <div class="foot">
    <grain-full-button type="unit" width="40px" height="40px" >
      <grain-full-icon name="#icon-jia"/>
    </grain-full-button>
    <p class="p">Home</p>
  </div>
</template>

<script>
import GrainFullButton from "../../../../components/GrainFull/Neumorphism/GrainFullButton";
import GrainFullIcon from "../../../../components/GrainFull/Neumorphism/GrainFullIcon";
export default {
  name: "LayoutFooter",
  components: { GrainFullIcon, GrainFullButton }
};
</script>

<style scoped lang="scss">
.foot {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.p {
  @include neumorphism-default;
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-top: 5px;
}
</style>
