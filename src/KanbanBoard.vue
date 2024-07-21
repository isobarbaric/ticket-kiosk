<script setup>
import BoardList from "./components/BoardList.vue"
import { useCardsStore } from './store'
import { storeToRefs } from 'pinia'

const store = useCardsStore();
// changes to the cards variable are reflected by these refs
const { todoCards, doingCards, doneCards } = storeToRefs(store)
</script>

<!-- add dual slider -->
<template>
  <div class="boards">
    <BoardList title="To do" :cards="todoCards" />
    <BoardList title="Doing" :cards="doingCards" />
    <BoardList title="Done" :cards="doneCards" />
  </div>
</template>

<style scoped>
.boards {
  display: flex;
  justify-content: space-around;
}
</style>