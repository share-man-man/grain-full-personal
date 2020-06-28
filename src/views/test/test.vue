<template>
  <div style="overflow-x: scroll">
    <div>
      {{ obj }}
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      percent1: 10,
      percent2: 12,
      x: 0,
      y: 0,
      click: false,
      obj: {
        name: "aaa",
        age: 123
      }
    };
  },

  methods: {
    test() {}
  },

  mounted() {
    this.test();
  }
};
</script>

<style lang="scss" scoped></style>
