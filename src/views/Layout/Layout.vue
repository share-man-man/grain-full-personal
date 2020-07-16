<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <!--      移动端遮罩层-->
      <div
        v-if="sidebarShowing && isMobile"
        class="overlay"
        @click="closeOverlay"
      ></div>
      <!--      侧边菜单栏-->
      <transition name="slide-fade">
        <aside-menu
          v-show="sidebarShowing"
          :class="appSidebarClass"
          @toRoute="toRoute"
        ></aside-menu>
      </transition>
      <!--      浮动框标签框-->
      <float-tag @click.native="closeOverlay"></float-tag>
      <!--      主体页面-->
      <el-container>
        <!--        <el-header>-->
        <!--          <i class="el-icon-menu" @click="test"></i>-->
        <!--          Header-->
        <!--        </el-header>-->
        <el-main style="padding: 0px">
          <!--自定义展示界面-->
          <self-main :vm-mobile="vmMobile"></self-main>
        </el-main>
        <!--        <el-footer>Footer</el-footer>-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Container, Main, Footer } from "element-ui";
import ResizeHandler from "./mixin/ResizeHandler";
import { mapState } from "vuex";
import AsideMenu from "./components/AsideMenu";
import FloatTag from "./components/FloatTag";
import SelfMain from "./components/SelfMain";
export default {
  name: "Layout",
  components: {
    SelfMain,
    FloatTag,
    AsideMenu,
    [Container.name]: Container,
    [Main.name]: Main,
    [SelfMain.name]: SelfMain,
    [Footer.name]: Footer
  },
  mixins: [ResizeHandler],
  data: function() {
    return {
      // vmMobile: true
    };
  },
  computed: {
    ...mapState({
      //是否为移动端
      isMobile: state => state.app.isMobile,
      //是否展示侧边栏
      sidebarShowing: state => state.sidebar.showing,
      //是否展开侧边栏
      sidebarSpreading: state => state.sidebar.spreading
    }),
    //侧边栏响应式样式
    appSidebarClass() {
      return !this.isMobile ? "" : "app-sidebar";
    },
    vmMobile() {
      const path = ["smart-home", "service-platform"];
      const inPath =
        this.$route.path && path.includes(this.$route.path.split("/")[1]);
      // 非移动端界面，进入移动端路径
      return !this.isMobile && inPath;
    }
  },
  methods: {
    closeOverlay() {
      this.$store.commit("sidebar/setSpreading", {
        isMobile: this.isMobile
      });
    },
    toRoute(path) {
      // 非移动端点击菜单需要展开菜单栏
      if (!this.isMobile && !this.sidebarSpreading) {
        this.$store.commit("sidebar/spreadSidebar");
      }

      // 只有路由改变才跳转
      if (this.$route.path !== path) {
        this.$router.push({
          path: path
        });
        // 移动端在跳转路由的时候需要隐藏菜单栏
        if (this.isMobile) {
          this.$store.commit("sidebar/hideSidebar");
        }
      }
      // this.closeOverlay();
    }
  }
};
</script>

<style lang="scss" scoped>
/*.el-header,*/
/*.el-footer {*/
/*  background-color: #b3c0d1;*/
/*  color: #333;*/
/*  text-align: right;*/
/*  mine-height: 60px;*/
/*}*/

/*.el-aside {*/
/*  background-color: #d3dce6;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  !*line-height: 200px;*!*/
/*}*/

.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  /*min-height: calc(100vh - 60px);*/
}

.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99998;
}

.app-sidebar {
  position: fixed;
  min-height: 100vh;
  background: white;
  z-index: 99999;
}

// 过渡动画
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
