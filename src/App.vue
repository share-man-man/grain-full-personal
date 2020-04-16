<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  /*background-color:#EBECF0;*/
  /*min-height: 100%;*/
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
  /*background-color: #f8f8f8;*/
  -webkit-font-smoothing: antialiased;
  /*不能放在body里，否则两个函数都不能渲染*/
  padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
  padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
}
</style>
