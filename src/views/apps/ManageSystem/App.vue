<template>
  <div style="height: 100%;width: 100%">
    <!--    管理系统-->
    <iframe
      :src="'http://192.168.1.8:8080'"
      height="100%"
      width="100%"
      frameborder="0"
    />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped></style>
