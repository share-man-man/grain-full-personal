<template>
  <div>
    <div class="tab">
      <div :class="['tab-tags', tagsScroll ? 'scroll' : 'default']">
        <div
          v-for="(item, index) in children"
          :key="index"
          :class="item.class"
          @click="$emit('input', index)"
        >
          {{ item.name }}
        </div>
        <!--防止右边margin无效-->
        <div><div style="height: 1px;width: 1px"></div></div>
      </div>
      <div
        v-show="showTabSwitch"
        @click="showContent = !showContent"
        :class="tabSwitchClass"
      >
        <grain-full-icon name="#icon-arrow-left" :style="tabSwitchIconStyle" />
      </div>
    </div>
    <transition name="grain-full-slide-fade">
      <div v-show="showContent">
        <slot name="default"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import GrainFullTabItem from "./GrainFullTabItem";
import GrainFullIcon from "./GrainFullIcon";
export default {
  name: "GrainFullTab",
  components: { GrainFullIcon },
  props: {
    value: {
      type: Number,
      required: true
    },
    //标签页懒加载
    lazyRender: {
      type: Boolean,
      default: false
    },
    //是否为滚动
    tagsScroll: {
      type: Boolean,
      default: false
    },
    showTabSwitch: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value: {
      handler: function(val, oldVal) {
        setTimeout(() => {
          this.clickTab(val, oldVal);
        });
      },
      immediate: true
    }
  },
  data() {
    return {
      children: [],
      showContent: true
    };
  },
  computed: {
    tabSwitchClass() {
      return {
        "tab-switch": true,
        active: this.showContent
      };
    },
    tabSwitchIconStyle() {
      return {
        transition: "all .5s ease-in-out",
        transform: `rotate(${this.showContent ? "-90" : "0"}deg)`
      };
    }
  },
  mounted() {
    // console.log(this.$slots.default);
    this.$slots.default.forEach(item => {
      if (
        item.componentOptions.Ctor.extendOptions.name === GrainFullTabItem.name
      ) {
        this.children.push({
          name: item.componentInstance.name,
          class: { "tab-item": true, active: false }
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
    // this.clickTab(this.value);
  },
  methods: {
    //渲染子组件
    renderTabItem(...items) {
      items.forEach(item => {
        this.$slots.default[item].componentInstance.renderSlot();
      });
    },
    //点击tab页事件
    clickTab(val, oldVal) {
      if (oldVal >= 0) {
        //tab头隐藏
        this.children[oldVal].class.active = false;
        //tab_body隐藏
        this.$slots.default[oldVal].componentInstance.activating(false);
      }
      if (val >= 0) {
        //tab头显示
        this.children[val].class.active = true;
        //tab_body展示
        this.$slots.default[val].componentInstance.activating(true);
      }
    }
  }
};
</script>

<style scoped lang="scss">
@mixin item-pbulic {
  padding: 3px 5px;
  font-weight: 500;
  font-size: 12px;
  border-radius: 10px;
}
.tab {
  @include neumorphism-default;
  display: flex;
  align-items: center;
  &-item {
    @include neumorphism-default;
    @include item-pbulic;
    margin: 10px 15px;
    flex: 0 0 auto;
    &.active {
      @include neumorphism("concave", 30px, 6px, 5px, 0.12, 9px);
      color: $GrainFullMainColor;
    }
  }
  &-tags {
    flex: 1;
    flex-direction: row;
    display: flex;
    align-items: center;
    &.default {
      justify-content: space-around;
    }
    &.scroll {
      overflow-x: auto;
    }
  }
  &-switch {
    @include neumorphism-default;
    @include neumorphism("flat", 30px, 15px, 1px, 0.14, 6px);
    @include item-pbulic;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 0 10px;
    &.active {
      @include neumorphism("pressed", 30px, 15px, 1px, 0.14, 6px);
      @include item-pbulic;
      svg {
        color: $GrainFullMainColor;
      }
    }
  }
}
@keyframes bounce-in {
  0% {
    //transform: translateY(-100%);
    opacity: 0;
  }
  /*50% {*/
  /*  transform: scale(0.5);*/
  /*}*/
  100% {
    //transform: translateY(0%);
    opacity: 1;
  }
}
</style>
