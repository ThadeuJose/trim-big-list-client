<template>
  <div>
    {{cards}}
    <button @click = update>Update</button>

    <div v-for="(items,index) in cards" :key="index">
        {{makeTitle(index,items)}}
        <Container class='container' group-name='cards' :get-child-payload="getChildPayload(index)"
         @drop="onDrop(index, $event)">
         <Draggable v-for="item in items" :key="item">
           <div class="draggable-item">
             {{item}}
           </div>
         </Draggable>
       </Container>
     </div>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd';

export default {
  name: 'listOfCards',
  components: {
    Container, Draggable,
  },
  props: {
  },
  data() {
    return {
      cards: {},
    };
  },
  methods: {
    update() {
      this.cards = this.$store.getters.listOfCards;
    },

    // TODO: Ajeitar o titulo
    makeTitle(title, arr) {
      if (title === 'Mainboard') {
        return `${title} ${this.countItems(arr)}`;
      }
      return `${title}/${this.countItems(arr)}`;
    },

    countItems(items) {
      let sum = 0;
      Object.values(items).forEach((i) => {
        const quantity = parseInt(i.substring(0, i.indexOf(' ')), 10);
        sum += quantity;
      });
      return sum;
    },

    onDrop(categoryName, dropResult) {
      const categoryCards = this.applyDrag(categoryName, dropResult);
      if (categoryCards) {
        console.log(categoryCards);
        this.cards[categoryName] = categoryCards;
        // this.$store.commit('updateCategory', { categoryName, categoryCards });
      }
    },

    applyDrag(categoryName, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult;
      const arr = this.cards[categoryName];
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

    getChildPayload(listIndex) {
      return (index) => this.cards[listIndex][index];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  background-color: black;
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
