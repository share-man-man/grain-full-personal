const list = {
  path: "/smart-house-keeper",
  component: () => import("../../views/apps/SmartHouseKeeper/App"),
  meta: {
    title: "智能家居"
  },
  children: [
    {
      path: "",
      component: () =>
        import("../../views/apps/SmartHouseKeeper/Layout/Layout.vue"),
      children: [
        {
          path: "home-page",
          component: () =>
            import("../../views/apps/SmartHouseKeeper/HomePage/HomePage.vue"),
          meta: {
            title: "首页"
          }
        },
        {
          path: "statistic",
          component: () =>
            import("../../views/apps/SmartHouseKeeper/Data/Data.vue"),
          meta: {
            title: "统计"
          }
        },
        {
          path: "mine",
          component: () =>
            import("../../views/apps/SmartHouseKeeper/Mine/Mine.vue"),
          meta: {
            title: "个人中心"
          }
        }
      ]
    },
    {
      path: "air-condition",
      component: () =>
        import(
          "../../views/apps/SmartHouseKeeper/Manipulation/AirCondition.vue"
        ),
      meta: {
        title: "空调操控"
      }
    },
    {
      path: "lighting-control",
      component: () =>
        import(
          "../../views/apps/SmartHouseKeeper/LightingControl/LightingControl.vue"
        ),
      meta: {
        title: "灯光控制"
      }
    },
    {
      path: "sound-box",
      component: () =>
        import("../../views/apps/SmartHouseKeeper/SoundBox/SoundBox.vue"),
      meta: {
        title: "音响"
      }
    }
  ]
};

export { list };
