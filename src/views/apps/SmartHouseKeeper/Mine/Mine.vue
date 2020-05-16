<template>
  <div>
    <div class="person">
      <div class="person-head">
        <grain-full-icon name="#icon-mine" :size="60" />
      </div>
      <div class="person-content">
        <div class="person-content-name">GrainFull</div>
        <div class="person-content-identify">Administrator</div>
      </div>
    </div>
    <div class="panel">
      <switch-console
        class="panel-item"
        v-for="(item, index) in panelItems"
        :key="index"
        :name="item.name"
        :icon-name="item.iconName"
      >
        <template v-slot:item3>
          <div></div>
        </template>
        <template v-slot:info>
          <div class="panel-item-info" v-show="item.info && item.info > 0">
            {{ item.info }}
          </div>
        </template>
      </switch-console>
    </div>
  </div>
</template>

<script>
import GrainFullIcon from "../../../../components/GrainFull/Neumorphism/GrainFullIcon";
import SwitchConsole from "../components/SwitchConsole";
export default {
  name: "Mine",
  components: { SwitchConsole, GrainFullIcon },
  data() {
    return {
      panelItems: [
        { name: "Member", iconName: "#icon-member", info: "3", path: "" },
        {
          name: "Device",
          iconName: "#icon-deviceicons-deskt",
          info: "2",
          path: ""
        },
        { name: "Message", iconName: "#icon-message", info: "4", path: "" },
        { name: "Scenario", iconName: "#icon-canshu", info: "", path: "" },
        { name: "Setting", iconName: "#icon-outline", info: "0", path: "" },
        { name: "Suggest", iconName: "#icon-suggest", info: "", path: "" }
      ]
    };
  }
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
.person {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  &-head {
    margin-left: 60px;
  }
  &-content {
    margin-left: 20px;
    &-name {
      @include neumorphism-default;
      text-align: left;
      font-size: 20px;
      font-weight: 600;
    }
    &-identify {
      @include neumorphism-default;
      text-align: left;
      color: #c3c6cb;
    }
  }
}
.panel {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
  &-item {
    /*margin-left: 35px;*/
    margin-top: 40px;
    padding: 25px;
    &-info {
      @include neumorphism("flat", 20px, 10px, 2px, 0.25, 4px);
      position: absolute;
      height: 20px;
      width: 20px;
      line-height: 20px;
      /*background-color: #42b983;*/
      color: $GrainFullMainColor;
      top: 10px;
      right: 10px;
      text-align: center;
    }
  }
}
</style>
