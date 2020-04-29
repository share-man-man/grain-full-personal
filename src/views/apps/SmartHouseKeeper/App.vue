<template>
  <div class="container">
    <div :class="['container-content', isMobile ? '' : 'vm-mobile']">
      <transition :name="transitionName">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      transitionName: ""
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 441;
    }
  },
  watch: {
    $route(to, from) {
      if (to) {
        // JSON.stringify(to);
      }
      if (from) {
        // JSON.stringify(from);
      }
      /* 左右滑动效果*/
      if (this.$router.slid === "left") {
        this.transitionName = "slide-right";
      } else if (this.$router.slid === "right") {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "";
      }
      this.$router.slid = "";
    }
  }
};
</script>

<!--全局效果-->
<style>
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter-active {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: all 0.5s ease 0s;
  z-index: 99999;
}

.slide-left-leave-active {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: all 0.5s ease 0s;
  z-index: -1;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter-active {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: all 0.5s ease 0s;
  z-index: 99999;
}

.slide-right-leave-active {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: all 0.5s ease 0s;
  z-index: -1;
  transform: translate3d(100%, 0, 0);
}
</style>

<style scoped lang="scss">
.container {
  background-color: $GrainFullBackgroundColor;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &-content {
    height: 100%;
    width: 100%;
    // 配合过渡动画的定位
    transform: translate3d(0, 0, 0);
    &.vm-mobile {
      @include neumorphism("flat", 350px, 42px, 6px, 0.08, 7px);
      max-width: 440px;
      max-height: 805px;
    }
  }
}
</style>
