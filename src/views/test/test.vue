<template>
  <div>
    <component v-bind:is="componentName"></component>
    <button @click="test">点击</button>
  </div>
</template>
<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      flag: true
    };
  },

  computed: {
    componentName() {
      return this.flag ? "" : "async-example";
    }
  },

  methods: {
    test() {
      this.flag = !this.flag;
      // this.componentName = "async-example";
    }
  },

  mounted() {
    // const a = 1;
    // const b = "b";
    // const c = true;
    // const d = ["1", 2];
    // const e = function(par) {
    //   console.log(par);
    // };
    // const f = { name: "xm", age: 1 };
    // const g = undefined;
    // const h = null;
    // const i = new Set();
    // const j = new WeakSet();
    // const k = new Map();
    // const l = new WeakMap();
    // const m = new Date();
    // const n = Symbol();
    // const o = new Promise((resolve, reject) => {});
    // const p = function* helloWorldGenerator() {
    //   yield "hello";
    //   yield "world";
    //   return "ending";
    // };
    // const q = async function() {
    //   return 1;
    // };
    // const test = Object.prototype.toString;
    // console.log(test.call(a));
    // console.log(test.call(b));
    // console.log(test.call(c));
    // console.log(test.call(d));
    // console.log(test.call(e));
    // console.log(test.call(f));
    // console.log(test.call(g));
    // console.log(test.call(h));
    // console.log(test.call(i));
    // console.log(test.call(j));
    // console.log(test.call(k));
    // console.log(test.call(l));
    // console.log(test.call(m));
    // console.log(test.call(n));
    // console.log(test.call(o));
    // console.log(test.call(p));
    // console.log(test.call(q()));
    // console.log(this.$options.components)
    // console.log(this._render(`<div>aaa</div>`));
    // console.log(this.component)
  }
};
</script>

<style lang="scss" scoped>
.father {
  width: 500px;
  border: 1px solid red;
  overflow: hidden;
}
.big {
  height: 200px;
  width: 200px;
  background: #42b983;
  /*display: inline-block;*/
  float: left;
}
.small {
  height: 100px;
  width: 100px;
  background: #b9a240;
  /*display: inline-block;*/
  float: left;
}
.footer {
  height: 200px;
  background: #8b8da0;
}

/*.clear::after {*/
/*  display: block;*/
/*  content: "";*/
/*  clear: both;*/
/*}*/
</style>
