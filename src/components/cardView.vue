<template lang="html">
  <div class="">
    <div class="table">
      <div class="table_header">
        <div class="table_cell">Name</div>
        <div class="table_cell">Mana Cost</div>
        <div class="table_cell" >Type Line</div>
        <div class="table_cell">Type</div>
      </div>
      <div class="table_row" v-for="d in data" :key="d.name">
        <div class="table_cell"><input type="text" v-model='d.name'></div>
        <div class="table_cell"><input type="text" v-model='d.mana_cost'></div>
        <div class="table_cell"><input type="text" v-model='d.type_line'></div>
        <div class="table_cell"><input type="text" v-model='d.cardType.name'
          v-if = 'd.cardType !== null'></div>
        <!-- Botão de deletar com lixeira -->
      </div>
    </div>
  </div>
</template>

<script>
import getAllCard from '@/resources/trim-big-list-server';

export default {
  name: 'CardView',
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.getCards();
  },
  methods: {
    async getCards() {
      getAllCard().then((data) => {
        this.data = data;
      });
    },
  },
};
</script>

<style lang="css" scoped>
  .table{
    display: table;
  }
  .table_header{
    display: table-row;
  }
  .table_row{
    display: table-row;
  }
  .table_row:hover{
    background-color: grey;
  }
  .table_cell{
    display: table-cell;
  }
</style>
