<script setup>
import { defineProps } from "vue";
import ListHeader from "./ListHeader.vue";
import BoardCard from "./BoardCard.vue";
import ListFooter from "./ListFooter.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  cards: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="list">
    <ListHeader :title="title"></ListHeader>
    <BoardCard
      v-for="card in cards"
      :key="card.id"
      :id="card.id"
      :category="card.category"
      :text="card.text"
      :deadline="card.deadline"
    ></BoardCard>
    <ListFooter></ListFooter>
  </div>
</template>

<style scoped></style>