import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    commander: [], // Partner Commander
    mainboard: [],
  },
  mutations: {
    addCategory(state, payload) {
      const name = payload.categoryName;
      const cards = payload.categoryCards;
      if (name === 'Main') {
        state.mainboard = payload.categoryCards;
      } else {
        const quantity = name.substring(name.lastIndexOf(':'));
        const categoryName = name.substring(0, name.lastIndexOf(':'));
        state[categoryName] = {
          quantity,
          cards,
        };
      }
    },
  },
  getters: {
    all: (state) => state,
    mainboard: (state) => state.mainboard,
  },
  actions: {
  },
  modules: {
  },
});
