// 全局
const state = {
  isMobile: false,
  withoutAnimation: true
};

// 获取计算属性
const getters = {
  //开始时间格式化
  // getterStartDate: (state) => {
  //     const start = state.startDate
  //     return `${start.getFullYear()}-${start.getMonth() < 9 ? (`0` + (start.getMonth() + 1)) : start.getMonth() + 1}-${start.getDate() <= 9 ? (`0` + start.getDate()) : start.getDate()}`
  // },
};

// 异步提交数据
const actions = {
  setMobile({ commit }, { flag }) {
    commit("SET_MOBILE", flag);
  }
};

// 同步提交数据
const mutations = {
  SET_MOBILE: (state, flag) => {
    state.isMobile = flag;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
