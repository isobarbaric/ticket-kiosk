<script setup>
import cardData from './cards.json'
import BoardList from './components/BoardList.vue'

const todoCards = cardData.filter(cardData => cardData.category === "To do")

const doingCards = cardData.filter(cardData => cardData.category === "Doing")

const doneCards = cardData.filter(cardData => cardData.category === "Done")

console.log("To do ", todoCards)
console.log("Doing ", doingCards)
console.log("Done", doneCards)
</script>

<template>
  <BoardList title="To do" :cards="todoCards"></BoardList>
  <BoardList title="Doing" :cards="doingCards"></BoardList>
  <BoardList title="Done" :cards="doneCards"></BoardList>
</template>

<style>
</style>
