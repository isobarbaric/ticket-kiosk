<script setup>
import { defineProps } from "vue";
import ListHeader from "./ListHeader.vue";
import BoardCard from "./BoardCard.vue";
import ListFooter from "./ListFooter.vue";

defineProps({
  title: { type: String, required: true },
  cards: { type: Array, required: true },
});
</script>

<template>
  <div class="list">
    <ListHeader :title="title" />
    <BoardCard
      v-for="card in cards"
      :key="card.id"
      :id="card.id"
    />
    <ListFooter />
  </div>
</template>

<style scoped></style>