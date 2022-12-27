export default {
  state: () => ({
    orderId: "Initial order id",
  }),
  getters: {},
  mutations: {
    SET_ORDER_ID(state, payload) {
      state.orderId = payload;
    },
  },
  actions: {
    saveOrderId({ commit }, data) {
      commit("SET_ORDER_ID", data);
    },
  },
};
