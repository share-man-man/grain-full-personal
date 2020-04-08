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
            <grain-full-icon
              :class="[patternFlag ? 'active' : '']"
              name="#icon-sleep"
            />
          </template>
          <template v-slot:right>
            <grain-full-icon
              :class="[!patternFlag ? 'active' : '']"
              name="#icon-sun"
            />
          </template>
        </grain-full-switch>
      </div>
      <div
        style="display: flex;justify-content: center;align-items: center;flex-direction: column"
      >
        <div class="light-radius">
          <div class="light-radius-inner"></div>
        </div>
        <grain-full-button
          :click="star"
          @click="star = !star"
          type="unit"
          width="40px"
          height="40px"
          style="margin-top: 30px"
        >
          <grain-full-icon name="#icon-star" :class="star ? 'active' : ''" />
        </grain-full-button>
      </div>
      <p class="p" style="text-align: left;margin-left: 40px;font-size: 14px">
        BrightLess
      </p>
    </div>
    <div></div>
  </div>
</template>

<script>
import GrainFullIcon from "../../../../components/GrainFull/Neumorphism/GrainFullIcon";
import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
import GrainFullButton from "../../../../components/GrainFull/Neumorphism/GrainFullButton";
export default {
  name: "LightingControl",
  components: { GrainFullSwitch, GrainFullIcon, GrainFullButton },
  data() {
    return {
      patternFlag: true,
      star: false
    };
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
.icon-flag {
  &-p {
    @include neumorphism-default;
    font-size: 16px;
    font-weight: 600;
    /*margin: 10px auto;*/
    white-space: pre;
  }
}
.active {
  color: $GrainFullMainColor;
}
.light {
  &-radius {
    @include neumorphism("concave", 200px, 100px, 9px, 0.11, 11px);
    height: 200px;
    width: 200px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-inner {
      //@include neumorphism("convex", 180px, 100px, 5px, 0.03, 18px);
      height: 180px;
      width: 180px;
      box-shadow: -3px -3px 5px #ffffff, 5px 5px 5px #e4f8ff;
      border-radius: 50%;
      background: #d9f4ff;
    }
  }
}
</style>
