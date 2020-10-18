import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    commander: [], // Partner Commander
    decklist: [],

  },
  mutations: {
    setDecklist(state, payload) {
      state.decklist = payload.decklist;
    },
  },
  getters: {
    all: (state) => state,
    decklist: (state) => state.decklist,
    maxQuantity: (state) => (id) => state.decklist[id].maxQuantity,
    listOfCards: (state) => {
      const response = {};
      state.decklist.forEach((value, key) => {
        response[key] = value.cards;
      });
      console.log(response);
      return response;
    },
  },
  actions: {
  },
  modules: {
  },
});
