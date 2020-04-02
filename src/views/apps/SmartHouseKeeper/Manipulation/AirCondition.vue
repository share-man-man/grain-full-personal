<template>
  <div>
    <div class="head">
      <div class="head-back" @click="back">
        <grain-full-icon name="#icon-arrow-left" />
      </div>
      <p class="p">{{ $options.name }}</p>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import GrainFullIcon from "../../../../components/GrainFull/Neumorphism/GrainFullIcon";
export default {
  name: "AirCondition",
  components: { GrainFullIcon },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="scss">
.head {
  position: relative;
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &-back {
    position: absolute;
    height: 35px;
    width: 35px;
    @include neumorphism("convex", 40px, 20px, 7px, 0.12, 12px);
    left: 30px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #f1f1f1;
  }
  &-title {
    flex: 1;
  }
}
.p {
  @include neumorphism-default;
  font-size: 18px;
  font-weight: 600;
  margin: 10px auto;
  white-space: pre;
}
</style>
