<template>
  <div class="float-tag">
<!--    <div class="float-tag-left">-->
<!--      <div class="float-tag-left-inner"></div>-->
<!--    </div>-->
    <el-avatar icon="el-icon-user-solid"></el-avatar>
    <i class="el-icon-s-unfold" style="font-size: 25px;color: #697e9e;margin-right: 5px"></i>
  </div>
</template>

<script>
export default {
  name: "FloatTag"
};
</script>

<style lang="scss" scoped>
$allHeight:40px;
$allRadius:40px;
.float-tag {
  position: fixed;
  z-index:99;
  top: 85px;
  right: 0px;
  height: $allHeight;
  width: 75px;
  background-color: #f4f4fb;
  border-radius: $allRadius 0px 0px $allRadius;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-left {
    height: $allHeight;
    width: $allHeight;
    border-radius: $allRadius $allRadius $allRadius $allRadius;
    background-color: #f4f4fc;
    display: flex;
    justify-content: center;
    align-items: center;
    &-inner{
      height: $allHeight - 10px;
      width: $allHeight - 10px;
      border-radius: $allRadius $allRadius $allRadius $allRadius;
      background-color: #b4b3b5;
    }
  }
}
</style>
