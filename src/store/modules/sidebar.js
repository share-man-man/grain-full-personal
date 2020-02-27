// sidebar
const state = {
  opened: true
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
const actions = {};

// 同步提交数据
const mutations = {
  setOpened(state, flag) {
    state.opened = flag;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
