<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="!spreading"
      >
        <el-menu-item index="1">
          <img :src="nasaSvg" style="margin-right: 8px;margin-left: 3px" />
          <span slot="title">每日nasa</span>
        </el-menu-item>
        <el-menu-item index="2">
          <img :src="hotPot" style="margin-right: 8px;margin-left: 3px" />
          <span slot="title">四川口音</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import nasa from "../../../assets/nasa.svg";
import hotPot from "../../../assets/hot-pot.svg";
export default {
  name: "AsideMenu",
  data() {
    return {
      nasaSvg: nasa,
      hotPot: hotPot
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
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
