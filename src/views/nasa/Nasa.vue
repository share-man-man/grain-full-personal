<template>
  <div>
    <div>
      <van-image width="100" height="100" :src="url" @click="show = true">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </div>
    <div>
      <van-button type="primary" @click="show = true" :disabled="disabled"
        >点击预览高清</van-button
      >
    </div>

    <!--    该组件是函数组件-->
    <van-image-preview
      v-model="show"
      :images="previewImages"
      @change="onChange"
    >
      <template v-slot:index>第{{ index + 1 }}页</template>
    </van-image-preview>
  </div>
</template>

<script>
import { mapState } from "vuex";
import apod from "../../assets/img/nasa/apod.jpg";
export default {
  name: "Nasa",
  data: function() {
    return {
      url: apod,
      srcList: [],
      show: false,
      index: 0,
      previewImages: []
    };
  },
  computed: {
    disabled() {
      return this.previewImages.length === 0;
    },
    ...mapState({
      apodConfig: state => state.nasa.apodConfig
    })
  },
  mounted() {
    this.previewImages.splice(0);
    this.getNasaApod();
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
    getNasaApod(date) {
      //可以根据日期查询
      let config = JSON.parse(JSON.stringify(this.apodConfig));
      if (date) {
        config.params.date = date;
      }
      this.$utilRequest
        .sendRequest({ ...this.apodConfig, ...config })
        .then(response => {
          this.url = response.url;
          this.previewImages.push(response.hdurl);
        });
    }
  }
};
</script>

<style scoped></style>
