<template>
  <div class="float-tag">
    <el-avatar icon="el-icon-user-solid"></el-avatar>
    <i
      class="el-icon-s-unfold"
      style="font-size: 25px;color: #697e9e;margin-right: 5px"
    ></i>
  </div>
</template>

<script>
import { Avatar } from "element-ui";

export default {
  name: "FloatTag",
  components: {
    [Avatar.name]: Avatar
  }
};
</script>

<style lang="scss" scoped>
$allHeight: 40px;
$allRadius: 40px;
.float-tag {
  position: fixed;
  z-index: 99;
  top: 85px;
  right: 0px;
  height: $allHeight;
  width: 75px;
  background-color: #f4f4fb;
  border-radius: $allRadius 0px 0px $allRadius;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: -1px 0px 2px #8b8da0;

  // 呼吸边框阴影
  animation: breath-round 0.7s infinite alternate;
  /*animation-direction:alternate;*/

  &-left {
    height: $allHeight;
    width: $allHeight;
    border-radius: $allRadius $allRadius $allRadius $allRadius;
    background-color: #f4f4fc;
    display: flex;
    justify-content: center;
    align-items: center;

    &-inner {
      height: $allHeight - 10px;
      width: $allHeight - 10px;
      border-radius: $allRadius $allRadius $allRadius $allRadius;
      background-color: #b4b3b5;
    }
  }
}

@keyframes breath-round {
  0% {
    box-shadow: 0px 0px 2px #b3b6ca;
  }
  100% {
    box-shadow: -1px 0px 8px #787a8d;
  }
}
</style>
