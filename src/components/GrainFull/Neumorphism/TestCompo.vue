<template>
  <div
    :style="['@include neumorphism(\'convex\', 20px, 30px, 1px, 0.13, 9px)']"
    @click="test"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "TestCompo",
  props: {
    name: {
      type: String
    }
  },
  mounted() {
    // console.log(this.name);
  },
  computed: {
    objStyle() {
      return ['@include neumorphism("convex", 20px, 30px, 1px, 0.13, 9px)'];
    }
  },
  methods: {
    test() {
      console.log(1);
    }
  }
};
</script>

<style scoped></style>
