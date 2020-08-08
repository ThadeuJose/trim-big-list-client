<template>
<div>
  <p>Commander</p>
  <input type="text" v-model='commander'>
  <textarea v-model='input'></textarea>
  <button @click='import_deck'>Import</button>
  <listOfCards/>
</div>
</template>

<script>

import listOfCards from '@/components/ListOfCards.vue';

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
      const response = this.input.split('\n');
      let categoryName = '';
      let categoryCards = [];
      response.forEach((value, key) => {
        const line = value;
        if (value) {
          if (value.startsWith('//')) {
            if (categoryCards.length !== 0) {
              this.$store.commit('addCategory', { categoryName, categoryCards });
              categoryCards = [];
            }
            categoryName = line.substring(2);
          } else {
            categoryCards.push(value);
          }
          if (response.length - 1 === key) {
            this.$store.commit('addCategory', { categoryName, categoryCards });
          }
        }
      });
      this.$store.commit('addCategory', { categoryName, categoryCards });
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
