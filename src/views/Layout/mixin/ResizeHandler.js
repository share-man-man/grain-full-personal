import store from "../../../store/store";

const { body } = document;
// const WIDTH = 992; // refer to Bootstrap's responsive design
const WIDTH = 440;

export default {
  watch: {
    $route() {
      //app点击菜单栏时需要关闭侧边栏
      if (store.state.app.isMobile && store.state.sidebar.opened) {
        store.commit("sidebar/setSpreading", {
          isMobile: store.state.app.isMobile
        });
      }
    }
  },

  // 判断是否为移动端用户
  beforeCreate() {
    if (!document.hidden) {
      const rect = body.getBoundingClientRect();
      const isMobile = rect.width - 1 < WIDTH;
      store.dispatch("app/setMobile", { flag: isMobile });
      store.commit("sidebar/init", isMobile);
    }
  },

  //暂时不添加视窗改变的事件监听
  // beforeMount() {
  //   window.addEventListener("resize", this.$_resizeHandler);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.$_resizeHandler);
  // },

  mounted() {
    // this.$_resizeHandler();
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile();
        store.dispatch("app/setMobile", { flag: isMobile });
        store.commit("sidebar/init", isMobile);
      }
    }
  }
};
