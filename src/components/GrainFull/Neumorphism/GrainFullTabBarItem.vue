<template>
  <div :class="objClass" @click="clickTabBarItem">
    <grain-full-button :click="active" type="unit" width="40px" height="40px">
      <grain-full-icon :name="iconName" />
    </grain-full-button>
    <p class="p">{{ name }}</p>
  </div>
</template>

<script>
import GrainFullButton from "./GrainFullButton";
import GrainFullIcon from "./GrainFullIcon";
export default {
  name: "GrainFullTabBarItem",
  components: { GrainFullButton, GrainFullIcon },
  props: {
    iconName: {
      type: String
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      index: 0,
      active: false
    };
  },
  computed: {
    objClass() {
      return {
        "tab-bar-item": true,
        active: this.active
      };
    }
  },
  methods: {
    setActive(flag) {
      this.active = flag;
    },
    clickTabBarItem() {
      this.$parent.changeIndex(this.index);
    }
  }
};
</script>

<style scoped lang="scss">
.tab-bar-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  &.active {
    color: $GrainFullMainColor;
    & svg {
      color: $GrainFullMainColor;
    }
    & p {
      color: $GrainFullMainColor;
    }
  }
}
.p {
  @include neumorphism-default;
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-top: 5px;
}
</style>
