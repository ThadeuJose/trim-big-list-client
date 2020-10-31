<template>
<div>
  <div v-if='isDecklistEmpty'>
    <p>Commander</p>
    <input type="text" v-model='commander'>
    <textarea v-model='input'></textarea>
    <button @click='importDecklist(input)'>Import</button>
  </div>
  <div v-if='!isDecklistEmpty'>
    <listOfCards/>
  </div>
</div>
</template>

<script>

import listOfCards from '@/components/ListOfCards.vue';
import { mapActions, mapGetters } from 'vuex';
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
    ...mapActions(['importDecklist']),
  },
  computed: {
    ...mapGetters(['isDecklistEmpty']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
