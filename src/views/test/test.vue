<template>
  <div>
   <footer/>
  </div>
</template>
<script>
import Footer from "../apps/SmartHouseKeeper/components/LayoutFooter";
export default {
  name: "login",
  components: {
    [Footer.name]:Footer
  },
  methods: {
    test() {}
  },
  mounted() {
    console.log(1);
  }
};
</script>

<style lang="scss" scoped></style>
