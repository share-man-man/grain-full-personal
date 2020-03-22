<template>
  <div>
    <div class="flex" style="justify-content: space-between;padding: 20px">
      <div class="hello-text">
        Good Morning , Grain Full
      </div>
      <grain-full-button type="circular" width="30px" style="margin-right: 5px">
        <i class="upper-right-button"></i>
      </grain-full-button>
    </div>
    <div class="scroll-panel">
      <grain-full-panel
        :active="activePanel[0]"
        @click.native="activePanel.splice(0, 1, !activePanel[0])"
        icon="#icon-guizi-"
        style="margin: 15px 20px"
      >
        <grain-full-icon name="#icon-guizi-" />
        <p style="margin:0 0 0 10px;font-size: 16px">Panel框</p>
      </grain-full-panel>
      <grain-full-panel
        :active="activePanel[1]"
        @click.native="activePanel.splice(1, 1, !activePanel[1])"
        icon="#icon-guizi-"
        style="margin: 15px 20px"
      >
        <grain-full-icon name="#icon-guizi-" />
        <p style="margin:0 0 0 10px;font-size: 16px">
          Panel框
        </p> </grain-full-panel
      ><grain-full-panel
        :active="activePanel[2]"
        @click.native="activePanel.splice(2, 1, !activePanel[2])"
        icon="#icon-guizi-"
        style="margin: 15px 20px"
      >
        <grain-full-icon name="#icon-guizi-" />
        <p style="margin:0 0 0 10px;font-size: 16px">
          Panel框
        </p> </grain-full-panel
      ><grain-full-panel
        :active="activePanel[3]"
        @click.native="activePanel.splice(3, 1, !activePanel[3])"
        icon="#icon-guizi-"
        style="margin: 15px 20px"
      >
        <grain-full-icon name="#icon-guizi-" />
        <p style="margin:0 0 0 10px;font-size: 16px">Panel框</p>
      </grain-full-panel>
      <!--防止右边margin无效-->
      <div><div style="height: 1px;width: 10px"></div></div>
    </div>
    <grain-full-tab
      v-model="tabBarIndex"
      :lazy-render="false"
      style="margin-top: 20px"
    >
      <grain-full-tab-item name="test1"
        >
        <usual/>
      </grain-full-tab-item>
      <grain-full-tab-item name="test2"
        ><test-compo name="222"></test-compo
      ></grain-full-tab-item>
      <grain-full-tab-item name="test3"
        ><test-compo name="333"></test-compo
      ></grain-full-tab-item>
      <grain-full-tab-item name="test4"
        ><test-compo name="444"></test-compo
      ></grain-full-tab-item>
    </grain-full-tab>
  </div>
</template>

<script>
import GrainFullButton from "../../../../components/GrainFull/Neumorphism/GrainFullButton";
import GrainFullPanel from "../../../../components/GrainFull/Neumorphism/GrainFullPanel";
import GrainFullTab from "../../../../components/GrainFull/Neumorphism/GrainFullTab";
import GrainFullTabItem from "../../../../components/GrainFull/Neumorphism/GrainFullTabItem";
import TestCompo from "../../../../components/GrainFull/Neumorphism/TestCompo";
import GrainFullIcon from "../../../../components/GrainFull/Neumorphism/GrainFullIcon";
import GrainFullSwitch from "../../../../components/GrainFull/Neumorphism/GrainFullSwitch";
import Usual from "../components/Usual";
export default {
  name: "HomePage",
  components: {
    Usual,
    GrainFullSwitch,
    GrainFullIcon,
    TestCompo,
    GrainFullTabItem,
    GrainFullTab,
    GrainFullButton,
    GrainFullPanel
  },
  data() {
    return {
      activePanel: [false, false, true, false, true],
      tabBarIndex: 0,
      showContent: true
    };
  },
  mounted() {},
  methods: {
    test() {
      this.activePanel.splice(0, 1, !this.activePanel[0]);
    }
  }
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  align-items: center;
}
.hello-text {
  font-size: 16px;
  font-weight: bolder;
  color: #9599a6;
}
.upper-right-button {
  height: 4px;
  width: 4px;
  background-color: #b90000;
  border-radius: 2px;
}

//icon图标
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.scroll-panel {
  margin-top: 0px;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }
}
</style>
