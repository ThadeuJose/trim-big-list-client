<template>
<div>
  <p>Commander</p>
  <input type="text" v-model='commander'>
  <textarea v-model='input'></textarea>
  <button @click='import_deck'>Import</button>
  <listOfCards ref='listOfCards'/>
</div>
</template>

<script>

import listOfCards from '@/components/ListOfCards.vue';
import parserDeckList from '@/resources/parserDecklist';

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
      const decklist = parserDeckList(this.input);
      this.$store.commit('setDecklist', { decklist });
      this.$refs.listOfCards.update();
      console.log(this.$store.getters.decklist);
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
