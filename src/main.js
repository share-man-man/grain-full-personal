import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

// //引入element
// import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI);
//
// //引入vant
// import Vant from "vant";
// import "vant/lib/index.css";
// import '@vant/touch-emulator';/*桌面端mouse事件*/
// Vue.use(Vant);

//引入自定义icon
import "./assets/icon/iconfont";

// 全局js
import request from "./utils/request";
Vue.prototype.$utilRequest = request;

//控制台生产消息
Vue.config.productionTip = process.env.NODE_ENV === "development";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
