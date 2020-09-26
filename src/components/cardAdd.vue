<template lang="html">
  <div class="">
    {{newRegister}}
        <div class="">
          <img :src="newRegister.url" alt="Image">
        </div>
        <div class="">
          <p>Name</p>
          <input type="text" v-model='newRegister.name'
            @keydown.enter="getCardFromScryfall()">
        </div>
        <div class="">
          <p>Nickname</p>
          <input type="text" v-model='newRegister.nickname'>
        </div>
        <div class="">
          <p>Mana Cost</p>
          {{newRegister.mana_cost}}
        </div>
        <div class="">
          <p>Type Line</p>
          {{newRegister.type_line}}
        </div>
        <div class="">
          <!-- TODO Ajeitar para ser um checkbox   -->
          <p>Card Type</p>
          {{newRegister.cardType}}
        </div>
        <div class="">
          <p>Set and Number</p>
          <p>{{newRegister.set}} {{newRegister.number}}</p>
        </div>
        <button type="button" @click="sendCardtoServer()">
          Submit</button>
        <button type="button" name="button">Cancel</button>
  </div>
</template>

<script>
import getCard from '@/resources/scryfall';

export default {
  name: 'CardView',
  data() {
    return {
      newRegister: {
        name: '',
        nickname: '',
        mana_cost: '',
        cmc: 0,
        type_line: '',
        cardType: '',
        set: '',
        number: 0,
        url: '',
      },
    };
  },

  methods: {
    updateView(data) {
      this.newRegister = data;
    },

    getCardFromScryfall() {
      getCard(this.newRegister.name).then((data) => {
        if (data.object === 'card') {
          // this.newRegister.name = data.name;
          // this.newRegister.url = data.image;
          // this.newRegister.mana_cost = data.mana_cost;
          // this.newRegister.cmc = data.cmc;
          // this.newRegister.type_line = data.type_line;
          // this.newRegister.set = data.set;
          // this.newRegister.number = data.number;
          this.updateView(data);
        }
      });
    },
    sendCardtoServer() {
      getCard(this.newRegister.name).then((res) => {
        if (res.object === 'card') {
          const data = {
            name: res.name,
            nickname: this.newRegister.nickname,
            mana_cost: res.mana_cost,
            cmc: res.cmc,
            type_line: res.type_line,
            cardType: res.cardType,
            set: res.set,
            number: res.number,
            url: res.url,
          };

          this.updateView(data);

          const url = 'http://localhost:3000/card';

          console.log(data);

          fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }).then((response) => {
            console.log(response); // JSON data parsed by `data.json()` call
          });
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>

</style>
