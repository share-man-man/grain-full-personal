<template>
  <div>
    <p class="p">{{ $options.name }}</p>
    <grain-full-tab v-model="weekIndex" :tags-scroll="true">
      <grain-full-tab-item
        v-for="(item, index) in weekDataList"
        :key="index"
        :name="item.name"
      />
    </grain-full-tab>
  </div>
</template>

<script>
import GrainFullTab from "../../../../components/GrainFull/Neumorphism/GrainFullTab";
import GrainFullTabItem from "../../../../components/GrainFull/Neumorphism/GrainFullTabItem";
export default {
  name: "Data",
  components: { GrainFullTabItem, GrainFullTab },
  data() {
    return {
      weekIndex: 0,
      weekDataList: [
        { name: "Mon", data: {} },
        { name: "Tues", data: {} },
        { name: "Wed", data: {} },
        { name: "Thurs", data: {} },
        { name: "Fri", data: {} },
        { name: "Sat", data: {} },
        { name: "Sun", data: {} }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.p {
  @include neumorphism-default font-size: 18px;
  font-weight: 600;
  margin: 10px auto;
}
</style>
