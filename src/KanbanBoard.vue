<script setup>
import BoardList from "./components/BoardList.vue";
import { useCardsStore } from './store';
import { storeToRefs } from 'pinia'

const store = useCardsStore();
const { todoCards, doingCards, doneCards } = storeToRefs(store)
</script>

<template>
  <BoardList title="To do" :cards="todoCards" />
  <BoardList title="Doing" :cards="doingCards" />
  <BoardList title="Done" :cards="doneCards" />
</template>

<style scoped></style>