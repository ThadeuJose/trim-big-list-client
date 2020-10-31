<template>
  <div>
    <div class="">
      {{card.quantity}}
    </div>
    <div class="">
      {{card.name}}
    </div>
    <div class="" v-if='card.manaCost'>
      {{card.manaCost}}
    </div>
  </div>
</template>

<script>
// import getCard from '@/resources/scryfall';

export default {
  name: 'cards',
  props: ['card'],
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
