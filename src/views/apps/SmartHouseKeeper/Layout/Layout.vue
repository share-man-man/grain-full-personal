<template>
  <div class="body">
    <div class="header">
      <!--      <div style="height: 1px"></div>-->
      <p class="p">{{ title }}</p>
    </div>
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
      ],
      title: ""
    };
  },
  watch: {
    $route: {
      handler(to) {
        this.tabBarList.forEach((item, index) => {
          if (item.path === to.path) {
            this.tabBarIndex = index;
          }
        });

        this.title = to.meta.title;
      },
      immediate: true
    }
  },
  mounted() {
    this.tabBarList.forEach((item, index) => {
      if (item.path === this.$route.path) {
        this.tabBarIndex = index;
      }
    });
  },
  methods: {
    changeIndex(index) {
      if (this.$route.path !== this.tabBarList[index].path) {
        this.$router.slid = "right";
        this.$router.push({
          path: this.tabBarList[index].path
        });
      }
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
  background-color: transparent;
}

.body {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  /*margin-top: 40px;*/
  flex: 1;
  overflow-y: auto;
}
.foot {
  height: 75px;
  margin-top: 10px;
}
.header {
  /*不能放在body里，否则两个函数都不能渲染*/
  /*padding-top: constant(safe-area-inset-top); !* 兼容 iOS < 11.2 *!*/
  /*padding-top: env(safe-area-inset-top); !* 兼容 iOS >= 11.2 *!*/
}
</style>
