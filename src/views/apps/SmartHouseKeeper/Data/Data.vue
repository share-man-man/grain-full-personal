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
    <!--    <grain-full-circle-->
    <!--      style="margin: 0 auto;display: block"-->
    <!--      size="200px"-->
    <!--      :percent="temperature"-->
    <!--      :dotted-line-divide-num="12"-->
    <!--    >-->
    <!--    </grain-full-circle>-->
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
    <div
      style="display: flex;justify-content: space-around;align-items: center"
    >
      <p class="p" style="margin: 0">Particulars</p>
      <grain-full-switch
        v-model="dayOrWeek"
        :mode="true"
        style="margin-left: 10px"
      />
    </div>
    <!--    <div>-->
    <div class="month-data">
      <div
        v-for="(item, index) in monthDataList[monthIndex].data"
        :key="index"
        :style="{
          height: item * 2 + 'px',
          'text-align': 'center',
          'line-height': item * 2 + 'px'
        }"
        :class="['month-data-item', index === 3 ? 'active' : '']"
      >
        {{ item }}
      </div>
    </div>
    <!--    <div class="test1">-->
    <!--      <div-->
    <!--              v-for="(item, index) in monthDataList[monthIndex].data"-->
    <!--              :key="index*30"-->
    <!--              :style="{ height: item + 'px' }"-->
    <!--              class="test2"-->
    <!--      ></div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import GrainFullTab from "../../../../components/GrainFull/Neumorphism/GrainFullTab";
import GrainFullTabItem from "../../../../components/GrainFull/Neumorphism/GrainFullTabItem";
import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
// import GrainFullCircle from "../../../../components/GrainFull/Neumorphism/GrainFullCircle";

export default {
  name: "Data",
  components: {
    GrainFullSwitch,
    GrainFullTabItem,
    GrainFullTab
    // GrainFullCircle
  },
  data() {
    return {
      monthIndex: 0,
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
      dayOrWeek: false
    };
  }
};
</script>

<style scoped lang="scss">
.p {
  @include neumorphism-default;
  font-size: 18px;
  font-weight: 600;
  margin: 10px auto;
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
  overflow-x: scroll;
  &-item {
    @include neumorphism("flat", 30px, 7px, 3px, 0.12, 9px);
    flex: 0 0 auto;
    width: 25px;
    margin: 10px 10px;
    background-image: linear-gradient(#e8e9ee, #f3f4f8);
    &.active {
      background-image: inherit;
      background-color: #42b983;
    }
  }
}
</style>
