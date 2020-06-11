import store from "../../../store/store";

const { body } = document;
const WIDTH = 992; // refer to Bootstrap's responsive design
// const WIDTH = 440;

export default {
  // watch: {
  //   $route() {
  //     //app点击菜单栏时需要关闭侧边栏
  //     if (store.state.app.isMobile) {
  //       store.commit("sidebar/hideSidebar");
  //     }
  //   }
  // },

  // 判断是否为移动端用户
  beforeCreate() {
    const isMobile = $_isMobile();
    store.dispatch("app/setMobile", { flag: isMobile });
    store.commit("sidebar/init", isMobile);
    // if (!document.hidden) {
    // const rect = body.getBoundingClientRect();
    // const isMobile = rect.width - 1 < WIDTH;
    // store.dispatch("app/setMobile", { flag: isMobile });
    // store.commit("sidebar/init", isMobile);
    // }
  },

  beforeMount() {
    window.addEventListener("resize", $_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", $_resizeHandler);
  }

  // mounted() {},
  // methods: {
  // $_isMobile() {
  //   const rect = body.getBoundingClientRect();
  //   return rect.width - 1 < WIDTH;
  // },
  // $_resizeHandler() {
  //   // if (!document.hidden) {
  //   const isMobile = this.$_isMobile();
  //   if (isMobile !== store.state.app.isMobile) {
  //     store.dispatch("app/setMobile", { flag: isMobile });
  //     store.commit("sidebar/init", isMobile);
  //   }
  //   // }
  // }
  // }
};

function $_isMobile() {
  const rect = body.getBoundingClientRect();
  return rect.width - 1 < WIDTH;
}

function $_resizeHandler() {
  const isMobile = $_isMobile();
  if (isMobile !== store.state.app.isMobile) {
    store.dispatch("app/setMobile", { flag: isMobile });
    store.commit("sidebar/init", isMobile);
  }
}
