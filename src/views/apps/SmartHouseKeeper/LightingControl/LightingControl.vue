<template>
  <div style="display:flex;flex-direction: column;height: 100%">
    <div class="head">
      <div class="head-back" @click="back">
        <grain-full-icon name="#icon-arrow-left" />
      </div>
      <p class="p">{{ $options.name }}</p>
    </div>
    <div style="flex: 1">
      <div
        style="display: flex;justify-content: space-around;align-items: center;"
      >
        <div class="icon-flag-p" style="width: 90px">
          Light pattern
        </div>
        <grain-full-switch v-model="patternFlag" mode>
          <template v-slot:left>
            OFF
          </template>
          <template v-slot:right>
            ON
          </template>
        </grain-full-switch>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import GrainFullIcon from "../../../../components/GrainFull/Neumorphism/GrainFullIcon";
import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
export default {
  name: "LightingControl",
  components: {GrainFullSwitch, GrainFullIcon },
    data(){
      return {
          patternFlag:true
      }
    },
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
}
.p {
  @include neumorphism-default;
  font-size: 18px;
  font-weight: 500;
  margin: 10px auto;
  white-space: pre;
}
</style>
