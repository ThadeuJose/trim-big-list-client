<template>
  <div class="main">
  <!-- {{listOfCards}} | {{maybeboard}} -->

    <!-- <textarea name="cards" rows="8" cols="80" v-model="cardsText"></textarea>
    <button @click = "updateText">Update Text</button> -->

    <div class='card_box drop-shadow' v-for="(items,index) in listOfCards" :key="index">
      <div class="title_box">
        {{makeTitle(items)}}
      </div>
      <Container class='container' group-name='cards'
         :get-child-payload="getChildPayload(listOfCards, index)"
         @drop="onDrop(index, $event)">
         <Draggable v-for="item in items.cards" :key="item">
           <div class="draggable-item">
             <cards :cardname='item'></cards>
             <button @click = "moveToMaybeboard(item,index)">Maybeboard</button>
           </div>
         </Draggable>
       </Container>
    </div>

  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd';
import cards from '@/components/Cards.vue';

export default {
  name: 'listOfCards',
  components: {
    Container, Draggable, cards,
  },
  props: {

  },
  data() {
    return {
      cardsText: '',
      maybeboard: [], // TODO: Mover para a store
    };
  },
  methods: {

    // updateText() {
    //   this.cardsText = '';
    //   this.cardsText += `//Maybeboard\n${this.maybeboard.join('\n')}\n\n`;
    //   Object.entries(this.cards).forEach((value) => {
    //     this.cardsText += `//${value[0]}\n${value[1].join('\n')}\n\n`;
    //   });
    // },

    moveToMaybeboard(elem, listname) {
      console.log(`${elem} ${listname}`);
      console.log(this.listOfCards[listname]);
      this.maybeboard.push(elem);
      const array = this.listOfCards[listname].cards;
      const index = array.indexOf(elem);
      if (index > -1) {
        array.splice(index, 1);
      }
    },

    makeTitle(obj) {
      const title = obj.categoryName;
      if (title === 'Mainboard') {
        return `${title} ${this.countItems(obj.cards)}`;
      }
      return `${title} ${this.countItems(obj.cards)}/${obj.maxQuantity}`;
    },

    countItems(items) {
      let sum = 0;
      Object.values(items).forEach((i) => {
        const quantity = parseInt(i.substring(0, i.indexOf(' ')), 10);
        sum += quantity;
      });
      return sum;
    },

    // Drag and Drop Area
    onDrop(categoryName, dropResult) {
      const categoryCards = this.applyDrag(categoryName, dropResult);
      if (categoryCards) {
        console.log(categoryCards);
        this.listOfCards[categoryName].cards = categoryCards;
        // this.$store.commit('updateCategory', { categoryName, categoryCards });
      }
    },

    applyDrag(categoryName, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult;
      console.log(dragResult);
      const arr = this.listOfCards[categoryName].cards;
      if (typeof arr === 'undefined') {
        console.log(categoryName);
        console.log(arr);
      }

      if (removedIndex === null && addedIndex === null) {
        return null;
      }

      const result = [...arr];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        // eslint-disable-next-line prefer-destructuring
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }

      return result;
    },

    getChildPayload(listOfCards, listIndex) {
      return (index) => {
        console.log(listOfCards[listIndex][index]);
        console.log(index);
        return listOfCards[listIndex].cards[index];
      };
    },
  },

  computed: {
    listOfCards() {
      return this.$store.getters.decklist;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  overflow: scroll;
  display:flex;
  width: 100%;
  height: 100vh;
}

.card_box {
  margin: 20px;
}

.title_box {
  margin: 10px;
}

.drop-shadow {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.draggable-item {
  display:flex;
  border: 1px solid black;
}
.container{
  /* background-color: black; */
  /* border: 1px solid black; */
}
.card-ghost {
    transition: transform 0.18s ease;
    transform: rotateZ(5deg)
}

.card-ghost-drop {
    transition: transform 0.18s ease-in-out;
    transform: rotateZ(0deg)
}
</style>
