import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    commander: [], // Partner Commander
    decklist: new Map(),
  },
  mutations: {
    setDecklist(state, payload) {
      state.decklist = payload.decklist;
    },
    updateCategory(state, payload) {
      const name = payload.categoryName;
      const cards = payload.categoryCards;
      if (name === 'Mainboard') {
        state.mainboard = cards;
      } else {
        const stateName = name.substring(0, name.lastIndexOf(' '));
        Vue.set(state[stateName], 'cards', cards);
      }
    },
  },
  getters: {
    all: (state) => state,
    decklist: (state) => state.decklist,
    maxQuantity: (state) => (id) => state.decklist.get(id).maxQuantity,
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
