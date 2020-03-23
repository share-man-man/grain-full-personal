<template>
  <div class="body">
    <!--展示页面-->
    <div class="content">
      <router-view />
    </div>
    <!--页脚-->
    <div class="foot">
      <grain-full-tab-bar>
        <grain-full-tab-bar-item
                v-for="(item,index) in tabBarList"
                :key="index"
                :icon-name="item.iconName"/>
      </grain-full-tab-bar>
    </div>
  </div>
</template>

<script>
import GrainFullTabBar from "../../../../components/GrainFull/Neumorphism/GrainFullTabBar";
import GrainFullTabBarItem from "../../../../components/GrainFull/Neumorphism/GrainFullTabBarItem";
export default {
  name: "Layout",
  components: { GrainFullTabBar, GrainFullTabBarItem },
  data() {
    return {
      tabBarIndex: 0,
      tabBarList: [{ iconName: "#icon-home"},{ iconName: "#icon-statistic"},{ iconName: "#icon-mine"}]
    };
  }
};
</script>

<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  flex: 1;
  overflow-y: auto;
}
.foot {
  height: 75px;
}
</style>
