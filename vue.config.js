"use strict";
// const path = require("path");

module.exports = {
  //开发模式下开启代码校验
  lintOnSave: process.env.NODE_ENV === "development",
  //默认输出路径
  outputDir: "./dist",
  //应用路径，默认为跟路径./
  publicPath: process.env.NODE_ENV === "development" ? "./" : "./",
  //开发环境生成MapSource文件以调试断点
  productionSourceMap: process.env.NODE_ENV === "development",
  //开发服务器
  devServer: {
    //端口
    port: 9527,
    proxy: {
      //转发nasa请求
      "/nasa": {
        target: "https://api.nasa.gov",
        pathRewrite: { "^/nasa": "" }
      }
    }
  },
  //路径别名，暂时不配置，使用相对路径更便于调试
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       srcPath: path.resolve(__dirname, 'src/'),
  //       publicPath: path.resolve(__dirname, 'public/')
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      sass: {
        //旧版本
        // data: `@import "@/assets/css/theme.scss";`
        //新版本
        prependData: `@import "@/assets/css/theme.scss";`
      }
    }
  }
};
