<template>
  <div class="about">
    <h1>This is an card add page</h1>
    <CardAdd></CardAdd>
  </div>
</template>

<script>
// @ is an alias to /src
import CardAdd from '@/components/cardAdd.vue';

export default {
  name: 'card_add',
  components: {
    CardAdd,
  },
};
</script>
