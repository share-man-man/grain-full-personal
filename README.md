# grain-full-personal

### 项目演示地址
[智能家居app演示地址](http://shuxiaoman.gitee.io/grain-full-personal/).

## 安装依赖包：需要设置成淘宝的镜像才能下载
```
yarn config set registry https://registry.npm.taobao.org/
yarn install
```

### 运行项目
```
yarn dev
```

### 编译项目
```
yarn build
```

### 代码校验
```
yarn lint
```

# 附言

1. vue及其部分生态系统
-     vue-cli ：脚手架
-     vuex：组件之间传参以及响应式状态监控
-     vue-router：路由懒加载。没有使用history模式，因为需要后端配合
2. 全局scss [scss文档](https://www.sass.hk/)
[新拟物风生成器](https://neumorphism.io/)
3. icon-font图标:都是深度借鉴别人的(手动狗头)
4. svg矢量图：进度条等组件需要，颜色标签需要根据id来查找，为了id的唯一性，根据颜色的码值动态设置id。比如渐变色的id="#56F2B7#54CE94"
5. css：没什么好说的，主要使用flex布局，确保某些子元素的垂直居中和布局填充
6. 静态部署站点：由于很多公司的路由器禁止加载github的资源，只能把资源打包到项目的dist文件夹，然后上传到github，再同步gitee。国外的[render自动部署](https://grain-full-personal.onrender.com/#/smart-house-keeper/home-page)站点很慢。
7. 代码规范：使用eslint，可以参考[尤雨溪的规范](https://github.com/vuejs/eslint-config-vue)
8. async/await和promise：async/await只是promise的语法糖，具体怎么用看业务场景，有些复杂的链式调用用await可以更直观，普通的异步请求直接用promise更直观。
9. 组件对window的事件监听：在beforeCreated()的时候监听，在afterDestoried()的时候销毁，避免造成内存泄漏
10. 路由refresh：在进入keep-alive的某些组件时，需要重新刷新，最简单的办法是用v-if和vuex，通过vuex将该组件设置为false，再在异步函数里通过路由方法跳转（<font color="red">注意：必须使用异步函数，[原因参见官网](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)</font>）
11. 路由动态过渡：改变$router的slide参数，在app.vue里watch路由的变化，通过$router.slide参数改变相应的渲染效果（其实就是左右滑动）。
12. 小技巧：有transform属性的元素，display:fixed不会以viewport为目标，而是有transform属性的元素（利用这一特性，完成路由左右滑动功能）
