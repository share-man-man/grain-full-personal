<template>
  <div>
    <!--    <el-scrollbar>-->
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="!spreading"
    >
      <el-menu-item index="1" @click="toRoute('/smart-home')">
        <img :src="smartHome" class="icon-style" />
        <span slot="title">智能家居</span>
      </el-menu-item>
      <el-menu-item index="2" @click="toRoute('/manage-system')">
        <img :src="manageSystem" class="icon-style" />
        <span slot="title">事件流程系统</span>
      </el-menu-item>
      <!--      <el-menu-item index="1">-->
      <!--        <img :src="nasaSvg" style="margin-right: 8px;margin-left: 3px" />-->
      <!--        <span slot="title">每日nasa</span>-->
      <!--      </el-menu-item>-->
      <!--      <el-menu-item index="2">-->
      <!--        <img :src="hotPot" style="margin-right: 8px;margin-left: 3px" />-->
      <!--        <span slot="title">四川口音</span>-->
      <!--      </el-menu-item>-->
    </el-menu>
    <!--    </el-scrollbar>-->
  </div>
</template>

<script>
import { Menu, MenuItem } from "element-ui";
import { mapState } from "vuex";
import nasa from "../../../assets/nasa.svg";
import hotPot from "../../../assets/hot-pot.svg";
import manageSystem from "../../../assets/img/menu/manage-system.png";
import smartHome from "../../../assets/img/menu/smart-home.png";

export default {
  name: "AsideMenu",
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  data() {
    return {
      nasaSvg: nasa,
      hotPot: hotPot,
      manageSystem: manageSystem,
      smartHome: smartHome
    };
  },
  props: {},
  computed: {
    ...mapState({
      spreading: state => state.sidebar.spreading
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toRoute(path) {
      this.$emit("toRoute", path);
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
.el-menu--collapse {
  min-height: 100vh;
}
.icon-style {
  margin-right: 8px;
  margin-left: 3px;
}
</style>
