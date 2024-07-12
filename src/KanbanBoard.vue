<script setup>
import cardData from "./cards.json";
import BoardList from "./components/BoardList.vue";

const todoCards = cardData.filter((cardData) => cardData.category === "To do");
const doingCards = cardData.filter((cardData) => cardData.category === "Doing");
const doneCards = cardData.filter((cardData) => cardData.category === "Done");
</script>

<template>
  <BoardList title="To do" :cards="todoCards" />
  <BoardList title="Doing" :cards="doingCards" />
  <BoardList title="Done" :cards="doneCards" />
</template>

<style scoped></style>