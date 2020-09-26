<template>
  <div>
    {{card_name}}
    {{mana_cost}}
  </div>
</template>

<script>
import getCard from '@/resources/scryfall';

export default {
  name: 'cards',
  props: ['cardname'],
  data() {
    return {
      qtd: 0,
      object: '',
      card_name: '',
      image: '',
      mana_cost: '',
      details: '',
    };
  },
  created() {
    this.getCardFromScryfall(this.cardname);
  },
  methods: {
    async getCardFromScryfall(cardname) {
      // TODO: Ajeitar se vier com número e colocar o hover da imagem
      this.card_name = cardname;
      const cardnameScryfall = cardname.substring(cardname.indexOf(' ')).trim();
      getCard(cardnameScryfall).then((data) => {
        this.color_identity = data.color_identity;
        this.mana_cost = data.mana_cost;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
