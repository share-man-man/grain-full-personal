<template>
  <div>
    <el-container>
      <!--      默认宽度为300，后期需要改-->
      <transition name="el-zoom-in-center">
        <aside-menu v-show="!isMobile || (isMobile && opened)" :class="appSidebarClass"></aside-menu>
      </transition>
      <!--      </el-aside>-->
      <el-container>
        <el-header>
          <i class="el-icon-menu" @click="test"></i>
          Header
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ResizeHandler from "./mixin/ResizeHandler";
import { mapState } from "vuex";
import AsideMenu from "./components/AsideMenu";
export default {
  name: "Layout",
  components: { AsideMenu },
  mixins: [ResizeHandler],
  data: function() {
    return {
      testData: false
    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.app.isMobile,
      opened: state => state.sidebar.opened
    }),
    //边框宽度
    appSidebarClass() {
      return !this.isMobile
        ? ""
        : this.opened
        ? "app-sidebar-show"
        : "app-sidebar-hide";
    }
  },
  methods: {
    test() {
      this.$store.commit(
        "sidebar/setOpened",
        !this.$store.state.sidebar.opened
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: right;
  mine-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /*line-height: 200px;*/
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
  min-height: calc(100vh - 120px);
}

.app-sidebar {
  &-show {
    position: fixed;
  }
  &-hide {
    position: fixed;
  }
}

/*body > .el-container {*/
/*  margin-bottom: 40px;*/
/*}*/

/*.el-container:nth-child(5) .el-aside,*/
/*.el-container:nth-child(6) .el-aside {*/
/*  line-height: 260px;*/
/*}*/

/*.el-container:nth-child(7) .el-aside {*/
/*  line-height: 320px;*/
/*}*/
</style>
