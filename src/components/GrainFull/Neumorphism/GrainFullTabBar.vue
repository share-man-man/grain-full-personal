<template>
  <div class="tab-bar">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: "GrainFullTabBar",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabBarItemList: [],
      activeIndex: 0,
      test: ""
    };
  },
  watch: {
    value: {
      handler: function(val, oldVal) {
        //插槽还未初始化，会报错，需要异步函数处理
        this.$nextTick().then(() => {
          if (oldVal >= 0) {
            this.$slots.default[oldVal].componentInstance.setActive(false);
          }
          if (val >= 0) {
            this.$slots.default[val].componentInstance.setActive(true);
            this.$emit("change", val);
          }
        });
      },
      immediate: true
    }
  },
  mounted() {
    this.$slots.default.forEach((item, index) => {
      item.componentInstance.index = index;
      this.tabBarItemList.push({
        index: index,
        active: item.componentInstance.active
      });
    });
  },
  methods: {
    changeIndex(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style scoped lang="scss">
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
