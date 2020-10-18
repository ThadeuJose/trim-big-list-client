<template>
<div>
  <div v-if='isDecklistEmpty'>
    <p>Commander</p>
    <input type="text" v-model='commander'>
    <textarea v-model='input'></textarea>
    <button @click='import_deck'>Import</button>
  </div>
  <div v-if='!isDecklistEmpty'>
    <listOfCards/>
  </div>
</div>
</template>

<script>

import listOfCards from '@/components/ListOfCards.vue';
// import parserDeckList from '@/resources/parserDecklist';

export default {
  name: 'ImportDeck',
  components: {
    listOfCards,
  },
  props: {

  },
  data() {
    return {
      commander: this.value,
      input: this.value,
    };
  },
  methods: {
    import_deck() {
      const url = 'http://localhost:3000/deck/';
      const data = { deck: this.input };
      console.log(data);

      fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => response.json())
        .then((responseData) => {
          console.log('Success:', responseData);
          this.$store.commit('setDecklist', { decklist: responseData });
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // const decklist = parserDeckList(this.input);
      // this.$store.commit('setDecklist', { decklist });
      // this.$refs.listOfCards.update();
      // console.log(this.$store.getters.decklist);
    },
  },
  computed: {
    isDecklistEmpty() {
      const array = this.$store.getters.decklist;
      console.log(array);
      return array.length === 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
