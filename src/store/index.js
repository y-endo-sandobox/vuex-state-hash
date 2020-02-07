import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCategory: []
  },
  actions: {
    setCurrentCategory({ commit }, payload) {
      commit('setCurrentCategory', payload);
    }
  },
  mutations: {
    setCurrentCategory(state, payload) {
      state.currentCategory = payload;
    }
  }
});
