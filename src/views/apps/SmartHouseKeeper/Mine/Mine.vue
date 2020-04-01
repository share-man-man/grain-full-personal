<template>
  <div>
    <p class="p">{{ $options.name }}</p>
      <div>

      </div>
  </div>
</template>

<script>
export default {
  name: "Mine"
};
</script>

<style scoped lang="scss">
.p {
  @include neumorphism-default;
  font-size: 18px;
  font-weight: 600;
  margin: 10px auto;
  white-space: pre;
}
</style>
