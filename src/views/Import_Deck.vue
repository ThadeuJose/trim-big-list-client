<template>
  <div class="about">
    <h1>This is Import Deck Page</h1>
    <ImportDeck></ImportDeck>
  </div>
</template>
<script>
// @ is an alias to /src
import ImportDeck from '@/components/ImportDeck.vue';

export default {
  name: 'Import_Deck',
  components: {
    ImportDeck,
  },
};
</script>
