import Vue from "vue";
import VueRouter from "vue-router";
// import Layout from "../views/Layout/Layout";

Vue.use(VueRouter);

const routes = [
  /*自动进入某页*/
  {
    path: "*",
    redirect: "/SmartHouseKeeper/home-page"
  },
  {
    path: "/test",
    component: () => import("../views/test/test"),
    meta: {
      title: "测试"
    }
  },
  {
    path: "/SmartHouseKeeper",
    component: () => import("../views/apps/SmartHouseKeeper/App"),
    meta: {
      title: "智能家居"
    },
    children: [
      {
        path: "",
        component: () =>
          import("../views/apps/SmartHouseKeeper/Layout/Layout.vue"),
        children: [
          {
            path: "home-page",
            component: () =>
              import("../views/apps/SmartHouseKeeper/HomePage/HomePage.vue"),
            meta: {
              title: "首页"
            }
          }
        ]
      }
    ]
  }
  // {
  //   path: "/login",
  //   component: () => import("../views/login/login"),
  //   meta: {
  //     title: "登陆"
  //   }
  // },
  // {
  //   path: "/",
  //   component: Layout,
  //   redirect: "/accent",
  //   children: [
  //     {
  //       path: "nasa",
  //       component: () => import("../views/nasa/Nasa"),
  //       meta: {
  //         title: "nasa每日一图"
  //       }
  //     },
  //     {
  //       path: "accent",
  //       component: () => import("../views/accent/Accent"),
  //       meta: {
  //         title: "四川口音"
  //       }
  //     }
  //   ]
  // }
];

const router = new VueRouter({
  routes
});

//根据路由元信息改变页面标题
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;
