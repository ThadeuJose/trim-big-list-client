<template>
  <div class="about">
    <h1>This is an card view page</h1>
    <CardView></CardView>
  </div>
</template>

<script>
// @ is an alias to /src
import CardView from '@/components/cardView.vue';

export default {
  name: 'card_view',
  components: {
    CardView,
  },
};
</script>
