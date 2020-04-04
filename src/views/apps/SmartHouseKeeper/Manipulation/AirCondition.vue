<template>
  <div>
    <div class="head">
      <div class="head-back" @click="back">
        <grain-full-icon name="#icon-arrow-left" />
      </div>
      <p class="p">{{ $options.name }}</p>
    </div>
    <div
      style="display: flex;justify-content: space-around;align-items: center"
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
        size="200px"
        :percent="temperaturePercent"
        dotted-line-divide-num="15"
      >
        {{Math.floor(temperaturePercent*0.14) + 16}}
      </grain-full-circle>
    </div>
    <div
      style="display: flex;justify-content: space-around;align-items: center;margin-top: 20px"
    >
      <grain-full-circle
        size="150px"
        :percent="windPercent"
        dotted-line-divide-num="4"
        active-color="#70cdbb"
        active-light-color="#82dbc7"
        active-dark-color="#6ac8b5"
      >
        {{ Math.floor(windPercent/25)}}
      </grain-full-circle>
      <grain-full-circle
        size="150px"
        :percent="humidityPercent"
        dotted-line-divide-num="10"
        active-color="#408ab2"
        active-dark-color="#408ab2"
        active-light-color="#4da0ca"
      ></grain-full-circle>
    </div>
<!--    <grain-full-button @click="test">测试</grain-full-button>-->
  </div>
</template>

<script>
import GrainFullIcon from "../../../../components/GrainFull/Neumorphism/GrainFullIcon";
import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
import GrainFullCircle from "../../../../components/GrainFull/Neumorphism/GrainFullCircle";
import GrainFullButton from "../../../../components/GrainFull/Neumorphism/GrainFullButton";
export default {
  name: "AirCondition",
  components: {
    GrainFullButton,
    GrainFullCircle,
    GrainFullSwitch,
    GrainFullIcon
  },
  data() {
    return {
      acFlag: false,
      windFlag: false,
      temperaturePercent: 20,
      windPercent: 25,
      humidityPercent: 11
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    test() {
      this.temperaturePercent = Math.floor(Math.random() * 100 );
      this.windPercent = Math.floor(Math.random() * 4) * 25;
      this.humidityPercent = Math.floor(Math.random() * 100);
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
</style>
