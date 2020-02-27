import store from "../../../store/store";

const { body } = document;
const WIDTH = 992; // refer to Bootstrap's responsive design

export default {
  watch: {
    $route() {
      //app点击菜单栏时需要关闭侧边栏
      if (store.state.app.isMobile && store.state.sidebar.opened) {
        // store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    }
  },
  beforeMount() {
    window.addEventListener("resize", this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$_resizeHandler);
  },
  mounted() {
    const isMobile = this.$_isMobile();
    if (isMobile) {
      store.dispatch("app/setMobile", { flag: true });
    }
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
        if (this.$_isMobile()) {
          store.dispatch("app/setMobile", { flag: true });
        } else {
          store.dispatch("app/setMobile", { flag: false });
        }

        // const isMobile = this.$_isMobile()
        // store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')
        //
        // if (isMobile) {
        //   store.dispatch('app/closeSideBar', { withoutAnimation: true })
        // }
      }
    }
  }
};
