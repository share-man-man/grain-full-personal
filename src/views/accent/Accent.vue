<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item
      v-for="(item, index) in cityList"
      :key="index"
      :name="index"
    >
      <template slot="title">
        <div style="background-color: #f9f9f9;width: 100%">
          {{item.name}}
        </div>
      </template>
      <el-table
              :data="item.accentList"
              border
              style="width: 100%">
        <el-table-column
                prop="words"
                label="文字"
                min-width="150">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="语音"
                width="100">
          <template v-slot:default>
<!--            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: "Accent",
  data() {
    return {
      activeNames: [],
      cityList: [
        { code: "A", name: "成都", accentList: [], load: false },
        { code: "D", name: "自贡", accentList: [], load: false },
        { code: "D", name: "攀枝花", accentList: [], load: false },
        { code: "E", name: "泸州", accentList: [], load: false },
        { code: "F", name: "德阳", accentList: [], load: false },
        { code: "B", name: "绵阳", accentList: [], load: false },
        { code: "H", name: "广元", accentList: [], load: false },
        { code: "J", name: "遂宁", accentList: [], load: false },
        { code: "K", name: "内江", accentList: [], load: false },
        { code: "L", name: "乐山", accentList: [], load: false },
        { code: "R", name: "南充", accentList: [], load: false },
        { code: "Z", name: "眉山", accentList: [], load: false },
        { code: "Q", name: "宜宾", accentList: [], load: false },
        { code: "X", name: "广安", accentList: [], load: false },
        { code: "S", name: "达州", accentList: [], load: false },
        { code: "T", name: "雅安", accentList: [], load: false },
        { code: "Y", name: "巴中", accentList: [], load: false },
        { code: "M", name: "资阳", accentList: [], load: false },
        { code: "U", name: "阿坝", accentList: [], load: false },
        { code: "V", name: "甘孜", accentList: [], load: false },
        { code: "W", name: "凉山", accentList: [], load: false }
      ],
      test: 0
    };
  },
  methods: {
    handleChange(val) {
      if (val.length > 0) {
        const index = val[val.length - 1];
        const obj = this.cityList[index];
        if (!obj.load) {
          const resList = this.getAccentList(obj);
          // this.cityList[index].accentList.splice(0);
          this.cityList[index].accentList.push(...resList);
          this.cityList[index].load = true;
        }
      }
    },
    getAccentList(obj) {
      const length = Math.floor(Math.random() * 10) + 1;
      let array = [];
      for (let i = 0; i < length; i++) {
        array.push({ words: `${obj.name}-${obj.code}-${i}` });
      }
      return array;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
