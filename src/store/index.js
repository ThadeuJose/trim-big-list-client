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
    isDecklistEmpty: (state) => state.decklist.length === 0,
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
    importDecklist({ commit }, decklist) {
      const url = 'http://localhost:3000/deck/';
      const data = { deck: decklist };

      fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => response.json())
        .then((responseData) => {
          console.log('Success:', responseData);
          commit('setDecklist', { decklist: responseData });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },

  },
  modules: {
  },
});
