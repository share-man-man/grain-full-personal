<template>
  <div style="display:flex;flex-direction: column;height: 100%">
    <div class="head">
      <div class="head-back" @click="back">
        <grain-full-icon name="#icon-arrow-left" />
      </div>
      <p class="p">{{ $options.name }}</p>
    </div>
    <div style="flex: 1">
      <div class="panels">
        <switch-console
          class="panels-item"
          v-for="(item, index) in panelItems"
          @click.native="click(item.data)"
          :key="index"
          :name="item.name"
          :icon-name="item.iconName"
        >
          <template v-slot:p>
            <span class="p" style="font-weight: 600">
              {{ item.name }}
            </span>
          </template>
          <template v-slot:icon>
            <div></div>
          </template>
          <template v-slot:item3>
            <div></div>
          </template>
          <template v-slot:info>
            <div></div>
          </template>
        </switch-console>
      </div>
      <div
        style="display: flex;justify-content: space-around;align-items: center"
      >
        <div>
          <grain-full-circle
            size="130px"
            :percent="subWoofer"
            dotted-line-back-color="#cbcfd9"
            dotted-line-active-color="#878a95"
            active-light-color="#afb5c4"
            active-dark-color="#afb6c5"
            dotted-line-divide-num="12"
            dotted-line-type="line"
          >
            <p>+ {{ subWoofer }}</p>
          </grain-full-circle>
          <p class="p" style="font-weight: 600;margin-top: 5px;font-size: 12px">
            SubWoofer
          </p>
        </div>
        <div>
          <grain-full-circle
            size="130px"
            :percent="volume"
            dotted-line-back-color="#cbcfd9"
            dotted-line-active-color="#878a95"
            active-light-color="#afb5c4"
            active-dark-color="#afb6c5"
            dotted-line-divide-num="12"
            dotted-line-type="line"
          >
            <p>{{ volume }}</p>
          </grain-full-circle>
          <p class="p" style="font-weight: 600;margin-top: 5px;font-size: 12px">
            Volume
          </p>
        </div>
      </div>
      <p class="p" style="font-weight: 600;font-size: 16px">第一次 - 光良</p>
      <div style="display: flex;justify-content: center;align-items: center">
        <p class="p" style="font-size: 12px;margin: 10px 5px">2:38</p>
        <div style="width: 70%;margin: 0 10px">
          <grain-full-slider v-model="sonProgress" :show-button-info="false" />
        </div>
        <p class="p" style="font-size: 12px;margin: 10px 5px">4:18</p>
      </div>
      <div style="display: flex;justify-content: center;align-items: center;">
        <grain-full-button
          type="circular"
          width="30px"
          height="30px"
          style="margin: 20px 15px"
        >
          <grain-full-icon name="#icon-cc-peach" />
        </grain-full-button>
        <grain-full-button
          type="circular"
          width="30px"
          height="30px"
          style="margin: 20px 10px"
        >
          <grain-full-icon name="#icon-Playerfastforward-left-copy" />
        </grain-full-button>
        <grain-full-button
          type="circular"
          width="50px"
          height="50px"
          style="margin: 20px 10px"
        >
          <grain-full-icon name="#icon-Playerpause" />
        </grain-full-button>
        <grain-full-button
          type="circular"
          width="30px"
          height="30px"
          style="margin: 20px 10px"
        >
          <grain-full-icon name="#icon-Playerfastforward" />
        </grain-full-button>
        <grain-full-button
          type="circular"
          width="30px"
          height="30px"
          style="margin: 20px 15px"
        >
          <grain-full-icon name="#icon-danquxunhuan" />
        </grain-full-button>
      </div>
    </div>
  </div>
</template>

<script>
import GrainFullIcon from "../../../../components/GrainFull/Neumorphism/GrainFullIcon";
import SwitchConsole from "../components/SwitchConsole";
import GrainFullCircle from "../../../../components/GrainFull/Neumorphism/GrainFullCircle";
import GrainFullSlider from "../../../../components/GrainFull/Neumorphism/GrainFullSlider";
import GrainFullButton from "../../../../components/GrainFull/Neumorphism/GrainFullButton";
export default {
  name: "SoundBox",
  components: {
    GrainFullButton,
    GrainFullSlider,
    GrainFullCircle,
    SwitchConsole,
    GrainFullIcon
  },
  data() {
    return {
      subWoofer: 32,
      volume: 78,
      panelItems: [
        { name: "Classics", data: [32, 11] },
        { name: "Pop" , data: [87, 1]},
        { name: "Piano", data: [8, 99] },
        { name: "Blues" , data: [1, 55]},
        { name: "Ballad" , data: [43, 21]},
        { name: "Rock" , data: [66, 89]}
      ],
      sonProgress: 76
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    click(data) {
      this.subWoofer = data[0];
      this.volume = data[1];
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

.panels {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
  &-item {
    /*margin-left: 35px;*/
    margin: 10px 15px;
    padding: 10px;
    /* &-info {
            @include neumorphism("flat", 20px, 10px, 2px, 0.25, 4px);
            position: absolute;
            height: 20px;
            width: 20px;
            line-height: 20px;
            !*background-color: #42b983;*!
            color: $GrainFullMainColor;
            top: 10px;
            right: 10px;
            text-align: center;
        }*/
  }
}
</style>
