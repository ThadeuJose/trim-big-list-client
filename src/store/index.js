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
        const quantity = name.substring(name.lastIndexOf(':') + 1).trim();
        const categoryName = name.substring(0, name.lastIndexOf(':'));
        state[categoryName] = {
          quantity,
          cards,
        };
      }
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
    mainboard: (state) => state.mainboard,
    listOfCards: (state) => {
      const response = {};
      response.Mainboard = state.mainboard;

      Object.entries(state).forEach((value) => {
        if (value[1].cards !== undefined) {
          const name = `${value[0]} ${value[1].quantity}`;
          const list = value[1].cards;
          response[name] = list;
        }
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
