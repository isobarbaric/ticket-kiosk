<script setup>
import { useCardsStore } from '../store';
import { storeToRefs } from 'pinia'

const store = useCardsStore();
const { cards } = storeToRefs(store);

function createCard() {
  console.log('total cards: ', cards.value.length)
}
</script>

<template>
  <div class="footer">
    <button v-on:click="createCard">+ Add a card</button>
  </div>
</template>

<style scoped></style>