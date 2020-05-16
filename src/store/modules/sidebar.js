// sidebar
const state = {
  //展开菜单
  spreading: true,
  //显示菜单栏
  showing: false
};

// 获取计算属性
const getters = {};

// 异步提交数据
const actions = {};

// 同步提交数据
const mutations = {
  init(state, isMobile) {
    if (isMobile) {
      state.spreading = true;
      state.showing = false;
    } else {
      state.showing = true;
    }
  },
  setSpreading(state, { isMobile }) {
    if (isMobile) {
      state.showing = !state.showing;
    } else {
      state.spreading = !state.spreading;
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
