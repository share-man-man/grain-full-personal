<template>
  <div>
    <p class="p">{{ $options.name }}</p>
    <grain-full-tab
      v-model="monthIndex"
      :tags-scroll="true"
      :show-tab-switch="false"
    >
      <grain-full-tab-item
        v-for="(item, index) in monthDataList"
        :key="index"
        :name="item.name"
      />
    </grain-full-tab>
    <div>
      <div class="consumption">
        <div class="consumption__inner">
          <p
            style="margin: 35px 0 0 0;font-size: 40px;line-height: 40px;font-weight: 500;letter-spacing: 7px;"
          >
            {{ temperature }}
          </p>
          <p style="font-size: 25px;margin-top: 0px;font-weight: 500;">KW/h</p>
        </div>
      </div>
    </div>
    <div style="display: flex;justify-content: center;align-items: center">
      <div class="p" style="margin: 0">{{ particulars }}</div>
      <grain-full-switch
        v-model="dayOrWeek"
        :mode="true"
        style="margin-left: 10px"
      />
    </div>
    <div class="month-data">
      <div
        v-for="(item, index) in monthDataList[monthIndex].data"
        :key="index"
        :class="['month-data-item']"
      >
        <div class="p" style="font-weight: 500;font-size: 12px">{{ item }}</div>
        <div
          :style="{ height: (item / maxDaily) * 100 + 'px' }"
          :class="[
            'month-data-item-columnar',
            dailyIndex === index ? 'active' : ''
          ]"
        ></div>
        <div class="p" style="font-weight: 500;font-size: 12px">
          {{ index + 1 }}th
        </div>
      </div>
    </div>
    <div class="ep-power">
      <switch-console
        v-for="(item, index) in epList"
        :key="index"
        :icon-name="item.iconName"
        :name="item.name"
        style="margin: 20px 20px 20px 20px"
      >
        <template v-slot:item3>
          <p class="p">{{item.data}}</p>
        </template>
      </switch-console>
    </div>
  </div>
</template>

<script>
import GrainFullTab from "../../../../components/GrainFull/Neumorphism/GrainFullTab";
import GrainFullTabItem from "../../../../components/GrainFull/Neumorphism/GrainFullTabItem";
import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
import SwitchConsole from "../components/SwitchConsole";

export default {
  name: "Data",
  components: {
    GrainFullSwitch,
    GrainFullTabItem,
    GrainFullTab,
    SwitchConsole
    // GrainFullCircle
  },
  data() {
    return {
      //当前月份下标
      monthIndex: 0,
      //当前日期下标
      dailyIndex: 2,
      monthDataList: [
        {
          name: "Jan.",
          data: [32, 12, 44, 32, 12, 33, 22, 12, 31, 21, 21, 12]
        },
        { name: "Feb.", data: [] },
        { name: "Mar.", data: [] },
        { name: "Apr.", data: [] },
        { name: "May.", data: [] },
        { name: "June.", data: [] },
        { name: "July.", data: [] },
        { name: "Aug.", data: [] },
        { name: "Sept.", data: [] },
        { name: "Oct.", data: [] },
        { name: "Nov.", data: [] },
        { name: "Dec.", data: [] }
      ],
      temperature: 494,
      dayOrWeek: false,
      particulars: "Particulars   :",
      epList: [
        { active: false, iconName: "#icon-sound", name: "SoundBox",data:'41%' },
        { active: true, iconName: "#icon-fridge", name: "Fridge",data:'23%' },
        { active: false, iconName: "#icon-jiajudeng-", name: "PorchLight",data:'11%' },
        { active: false, iconName: "#icon-jiajukongtiao-", name: "A/C",data:'40%' }
      ]
    };
  },
  computed: {
    maxDaily() {
      return this.monthDataList[this.monthIndex].data.reduce((a, b) => {
        return a > b ? a : b;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.p {
  @include neumorphism-default;
  font-size: 18px;
  font-weight: 600;
  margin: 10px auto;
  white-space: pre;
}
.consumption {
  margin: 0px auto;
  @include neumorphism("concave", 155px, 78px, 12px, 0.06, 14px);
  //background: linear-gradient($GrainFullAngle, #dfdfe9, #fafcfd);
  width: 155px;
  height: 155px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    @include neumorphism("concave", 130px, 65px, 5px, 0.02, 4px);
    border-radius: 50%;
    height: 130px;
    width: 130px;
    p {
      text-align: center;
    }
    color: $GrainFullMainColor;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*flex-direction: column;*/
  }
}
.month-data {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  overflow-x: auto;
  min-height: 170px;
  &-item {
    //@include neumorphism("flat", 30px, 7px, 3px, 0.12, 9px);
    flex: 0 0 auto;
    //width: 25px;
    margin: 10px 10px;
    //background-image: linear-gradient(#e8e9ee, #f3f4f8);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 150px;
    &-columnar {
      @include neumorphism("flat", 30px, 7px, 3px, 0.12, 9px);
      width: 25px;
      background-image: linear-gradient(#e8e9ee, #f3f4f8);
      &.active {
        /*background-image: inherit;*/
        /*background-color: #42b983;*/
        background-image: linear-gradient(#40bc89, #53d9a3);
      }
    }
  }
}
.ep-power {
  overflow-x: auto;
  display: flex;
  justify-content: space-around;
  .p{
    font-size: 20px;
    color: $GrainFullMainColor;
    font-weight: 500;
  }
}
</style>
