<script setup>
import { useCardsStore } from '../store';

const store = useCardsStore();
// const { cards } = storeToRefs(store);

function createCard() {
  console.log(store.cardLength)
}
</script>

<template>
  <div class="footer">
    <button v-on:click="createCard">+ Add a card</button>
  </div>
</template>

<style scoped></style>