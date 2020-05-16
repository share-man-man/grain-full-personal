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
          <div
            :style="{ background: lightColor }"
            class="light-radius-inner"
          ></div>
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
      <div class="slide-contain">
        <grain-full-button
          @click="brightLess -= 10"
          type="circular"
          width="30px"
          height="30px"
        >
          <grain-full-icon name="#icon-add" />
        </grain-full-button>
        <div style="width: 70%;margin: 0 10px">
          <grain-full-slider v-model="brightLess" />
        </div>
        <grain-full-button
          @click="brightLess += 10"
          type="circular"
          width="30px"
          height="30px"
        >
          <grain-full-icon name="#icon-reduce" />
        </grain-full-button>
      </div>
      <p class="p" style="text-align: left;margin-left: 40px;font-size: 14px">
        Color Temperature
      </p>
      <div class="slide-contain">
        <grain-full-button
          @click="colorTemperature -= 10"
          type="circular"
          width="30px"
          height="30px"
        >
          <grain-full-icon name="#icon-add" />
        </grain-full-button>
        <div style="width: 70%;margin: 0 10px">
          <grain-full-slider
            v-model="colorTemperature"
            :slider-style="{
              'background-image':
                'linear-gradient(to right, #72d5fa, #ffffff, #face60)'
            }"
            :progress-style="{
              'background-color': 'transparent'
            }"
          />
        </div>
        <grain-full-button
          @click="colorTemperature += 10"
          type="circular"
          width="30px"
          height="30px"
        >
          <grain-full-icon name="#icon-reduce" />
        </grain-full-button>
      </div>
    </div>
    <div class="scroll-panel" style="padding-bottom: 10px">
      <grain-full-panel
        v-for="(item, index) in statusList"
        :key="index"
        :active="statusActiveIndex === index"
        @click.native="clickTab(index)"
        icon="#icon-guizi-"
        style="margin: 15px 0 15px 30px;padding: 10px"
      >
        <grain-full-icon :name="item.icon" />
        <p style="margin:0 0 0 5px;font-size: 13px;font-weight: 500">
          {{ item.name }}
        </p>
      </grain-full-panel>
      <!--防止右边margin无效-->
      <div><div style="height: 1px;width: 10px"></div></div>
    </div>
  </div>
</template>

<script>
import GrainFullIcon from "../../../../components/GrainFull/Neumorphism/GrainFullIcon";
import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
import GrainFullButton from "../../../../components/GrainFull/Neumorphism/GrainFullButton";
import GrainFullSlider from "../../../../components/GrainFull/Neumorphism/GrainFullSlider";
import GrainFullPanel from "../../../../components/GrainFull/Neumorphism/GrainFullPanel";
export default {
  name: "LightingControl",
  components: {
    GrainFullSlider,
    GrainFullSwitch,
    GrainFullIcon,
    GrainFullButton,
    GrainFullPanel
  },
  data() {
    return {
      patternFlag: true,
      star: false,
      brightLess: 30,
      colorTemperature: 12,
      statusActiveIndex: -1,
      statusList: [
        {
          name: " Work  ",
          active: false,
          icon: "#icon-briefcase",
          data: [40, 75]
        },
        {
          name: "Slumber",
          active: false,
          icon: "#icon-sleep",
          data: [90, 50]
        },
        {
          name: "Makeup",
          active: false,
          icon: "#icon-Bathroommakeupmagn",
          data: [50, 100]
        }
      ]
    };
  },
  computed: {
    lightColor() {
      return `rgb(${(217 * this.brightLess) / 100 +
        this.colorTemperature},${(244 * this.brightLess) / 100 +
        this.colorTemperature},${(255 * this.brightLess) / 100 +
        this.colorTemperature})`;
    }
  },
  methods: {
    back() {
      this.$router.slid = "left";
      this.$router.back();
    },
    clickTab(index) {
      this.statusActiveIndex = index;
      this.brightLess = this.statusList[index].data[0];
      this.colorTemperature = this.statusList[index].data[1];
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
      transition: background 0.3s;
      /*background: #d9f4ff;*/
    }
  }
}
.slide-contain {
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-panel {
  margin-top: 0px;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  /*&::-webkit-scrollbar {*/
  /*  display: none;*/
  /*  width: 0;*/
  /*  background: transparent;*/
  /*}*/
}
</style>
