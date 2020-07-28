<template>
<div>
  <p>Commander</p>
  <input type="text" v-model='commander'>
  <textarea v-model='input'></textarea>
  <button @click='import_deck'>Import</button>
  <div>{{commander}}</div>
  <div>{{input}}</div>
  <div>{{storage}}</div>
</div>
</template>

<script>
export default {
  name: 'ImportDeck',
  props: {

  },
  data() {
    return {
      commander: this.value,
      input: this.value,
      storage: this.$store.getters.all,
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
              console.log(categoryName);
              console.log(categoryCards);
              categoryCards = [];
            }
            categoryName = line.substring(2);
          } else {
            categoryCards.push(value);
          }
          if (response.length - 1 === key) {
            this.$store.commit('addCategory', { categoryName, categoryCards });
            console.log(categoryName);
            console.log(categoryCards);
          }
        }
      });
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
