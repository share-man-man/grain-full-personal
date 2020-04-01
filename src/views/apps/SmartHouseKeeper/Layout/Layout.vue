<template>
  <div class="body">
    <!--展示页面-->
    <div class="content">
      <router-view />
    </div>
    <!--页脚-->
    <div class="foot">
      <grain-full-tab-bar v-model="tabBarIndex" @change="changeIndex">
        <grain-full-tab-bar-item
          v-for="(item, index) in tabBarList"
          :key="index"
          :icon-name="item.iconName"
          :name="item.name"
        />
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
      tabBarIndex: -1,
      tabBarList: [
        {
          iconName: "#icon-home",
          name: "Home",
          path: "/smart-house-keeper/home-page"
        },
        {
          iconName: "#icon-statistic",
          name: "Data",
          path: "/smart-house-keeper/statistic"
        },
        {
          iconName: "#icon-mine",
          name: "Mine",
          path: "/smart-house-keeper/mine"
        }
      ]
    };
  },
  watch: {
    $route(to) {
      this.tabBarList.forEach((item, index) => {
        if (item.path === to.path) {
          this.tabBarIndex = index;
        }
      });
    }
  },
  mounted() {
    // console.log(this.$route)
    this.tabBarList.forEach((item, index) => {
      if (item.path === this.$route.path) {
        this.tabBarIndex = index;
      }
    });
  },
  methods: {
    changeIndex(index) {
      if (this.$route.path !== this.tabBarList[index].path) {
        this.$router.push({
          path: this.tabBarList[index].path
        });
      }
    }
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
