<template>
  <div>
    <div class="tab-bar">
      <div
        v-for="(item, index) in children"
        :key="index"
        :class="item.class"
        @click="clickTab(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div>
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
// import GrainFullTabItem from "./GrainFullTabItem";
export default {
  name: "GrainFullTab",
  props: {
    value: {
      type: Number,
      required: true
    },
    defaultTab: {
      type: Number,
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      children: []
    };
  },
  mounted() {
    // console.log(this.$slots.default);
    this.$slots.default.forEach(item => {
      if (
        item.componentOptions.Ctor.extendOptions.name === "GrainFullTabItem"
      ) {
        this.children.push({
          name: item.componentInstance.name,
          class: { "tab-bar-item": true, active: false }
          /*"tag":item.componentOptions.tag*/
        });
      }
    });
    if (!this.lazyRender) {
      //默认渲染所有子组件
      this.renderTabItem(
        ...this.children.map((item, index) => {
          return index;
        })
      );
    }
    this.clickTab(this.defaultTab);
  },
  methods: {
    //渲染子组件
    renderTabItem(...items) {
      items.forEach(item => {
        this.$slots.default[item].componentInstance.renderSlot();
      });
    },
    //点击tab页事件
    clickTab(index) {
      this.$emit("input", index);
      //tab头隐藏
      this.children[this.value].class.active = false;
      //tab_body隐藏
      this.$slots.default[this.value].componentInstance.activating(false);
      //tab头显示
      this.children[index].class.active = true;
      //tab_body展示
      this.$slots.default[index].componentInstance.activating(true);
    }
  }
};
</script>

<style scoped lang="scss">
.tab-bar {
  @include neumorphism-default;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &-item {
    @include neumorphism-default;
    @include neumorphism-default;
    padding: 3px 5px;
    font-weight: 500;
    font-size: 12px;
    border-radius: 10px;
    &.active {
      @include neumorphism("concave", 30px, 6px, 5px, 0.12, 9px);
      color: $GrainFullMainColor;
    }
  }
}
</style>
