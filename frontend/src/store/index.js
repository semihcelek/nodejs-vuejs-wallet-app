import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    payments: []
  },
  mutations: {
    SET_PAYMENTS()
  },
  actions: {
    fetchPayments({commit}) {
      const newPayments = axios.get("http://localhost:3000/")
    }
   
  },
  modules: {}
});
