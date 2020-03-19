<template>
  <div>
    <div v-if="render">
      <div v-show="active">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrainFullTabItem",
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      render: false,
      active: false
    };
  },
  methods: {
    renderSlot() {
      this.render = true;
    },
    activating(flag) {
      if (!this.render && flag) {
        this.render = true;
      }
      this.active = flag;
    }
  }
};
</script>

<style scoped lang="scss"></style>
