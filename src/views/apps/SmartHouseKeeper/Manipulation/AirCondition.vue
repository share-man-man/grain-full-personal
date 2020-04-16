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
          A/C is {{ acFlag ? "ON" : "OFF" }}
        </div>
        <grain-full-switch v-model="acFlag" mode>
          <template v-slot:left>
            OFF
          </template>
          <template v-slot:right>
            ON
          </template>
        </grain-full-switch>
      </div>
      <div
        style="display: flex;justify-content: space-around;align-items: center"
      >
        <div class="icon-flag-p" style="width: 90px">
          Sweep Wind
        </div>
        <grain-full-switch v-model="windFlag" mode>
          <template v-slot:left>
            <grain-full-icon
              name="#icon-laihui"
              :class="[windFlag ? 'active' : '']"
              style="transform: rotate(-90deg)"
            />
          </template>
          <template v-slot:right>
            <grain-full-icon
              name="#icon-laihui"
              :class="[!windFlag ? 'active' : '']"
            />
          </template>
        </grain-full-switch>
      </div>
      <div style="display: flex;justify-content: center;align-items: center">
        <grain-full-circle
          size="230px"
          :percent="temperaturePercent"
          dotted-line-divide-num="15"
        >
          {{ Math.floor(temperaturePercent * 0.14) + 16 }} &#8451;
        </grain-full-circle>
      </div>
      <div
        style="display: flex;justify-content: space-around;align-items: center;margin-top: 20px"
      >
        <div>
          <grain-full-circle
            size="130px"
            :percent="windPercent"
            dotted-line-divide-num="4"
            active-color="#70cdbb"
            active-light-color="#82dbc7"
            active-dark-color="#6ac8b5"
          >
            {{ Math.floor(windPercent / 25) }}
          </grain-full-circle>
          <p class="p" style="margin-top: 5px;font-size: 12px">Strength</p>
        </div>
        <div>
          <grain-full-circle
            size="130px"
            :percent="humidityPercent"
            dotted-line-divide-num="10"
            active-color="#408ab2"
            active-dark-color="#408ab2"
            active-light-color="#4da0ca"
          ></grain-full-circle>
          <p class="p" style="margin-top: 5px;font-size: 12px">Humidity</p>
        </div>
      </div>
    </div>
    <!--    <grain-full-button @click="test">测试</grain-full-button>-->
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
import GrainFullCircle from "../../../../components/GrainFull/Neumorphism/GrainFullCircle";
import GrainFullPanel from "../../../../components/GrainFull/Neumorphism/GrainFullPanel";
// import GrainFullButton from "../../../../components/GrainFull/Neumorphism/GrainFullButton";
export default {
  name: "AirCondition",
  components: {
    // GrainFullButton,
    GrainFullCircle,
    GrainFullSwitch,
    GrainFullIcon,
    GrainFullPanel
  },
  data() {
    return {
      acFlag: false,
      windFlag: false,
      temperaturePercent: 20,
      windPercent: 25,
      humidityPercent: 11,
      statusActiveIndex: -1,
      statusList: [
        {
          name: "Control",
          active: false,
          icon: "#icon-outline",
          data: [40, 75, 27]
        },
        {
          name: "Going Out",
          active: false,
          icon: "#icon-qiangfeng",
          data: [90, 50, 73]
        },
        {
          name: "Sleeping",
          active: false,
          icon: "#icon-sleep",
          data: [50, 100, 65]
        }
      ]
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    test() {
      this.temperaturePercent = Math.floor(Math.random() * 100);
      this.windPercent = Math.floor(Math.random() * 4) * 25;
      this.humidityPercent = Math.floor(Math.random() * 100);
    },
    clickTab(index) {
      // console.log(index)
      this.statusActiveIndex = index;
      this.temperaturePercent = this.statusList[index].data[0];
      this.windPercent = this.statusList[index].data[1];
      this.humidityPercent = this.statusList[index].data[2];
    }
  },
  mounted() {
    this.clickTab(0)
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
