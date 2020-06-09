import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    payments: []
  },
  mutations: {
    SET_PAYMENTS(state, data) {
      state.payments = data;
    }
  },
  actions: {
    async fetchPayments({ commit }) {
      const newPayments = await axios.get(
        "http://localhost:3000/payments/all/json"
      );
      commit("SET_PAYMENTS", newPayments.data);
    }
  },
  modules: {}
});
