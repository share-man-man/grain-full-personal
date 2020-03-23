<template>
  <div class="body">
    <!--展示页面-->
    <div class="content">
      <router-view />
    </div>
    <!--页脚-->
    <div class="foot">
      <grain-full-tab-bar>
        <grain-full-tab-bar-item></grain-full-tab-bar-item>
        <grain-full-tab-bar-item></grain-full-tab-bar-item>
        <grain-full-tab-bar-item></grain-full-tab-bar-item>
      </grain-full-tab-bar>
    </div>
  </div>
</template>

<script>
import GrainFullTabBar from "../../../../components/GrainFull/Neumorphism/GrainFullTabBar";
import GrainFullTabBarItem from "../../../../components/GrainFull/Neumorphism/GrainFullTabBarItem";
export default {
  name: "Layout",
  components: { GrainFullTabBar, GrainFullTabBarItem }
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
