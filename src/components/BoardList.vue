<script setup>
import { defineProps, ref, computed } from "vue";
import { useCardsStore } from "../store";
import BoardCard from "./BoardCard.vue";

const props = defineProps({
  title: { type: String, required: true },
  cards: { type: Array, required: true },
});

const store = useCardsStore();

const openCardTextBox = ref(false)
const newCardText = ref('')

const emptyTextBox = computed(() => newCardText.value.length == 0)

const toggleCardTextBox = () => {
  openCardTextBox.value = !openCardTextBox.value;
}

function createCard() {
  toggleCardTextBox()
  store.addCard(props.title, newCardText.value);
  
  // clear the text box
  newCardText.value = ''
}
</script>

<template>
  <div class="list">
    <h2 class="header">
      {{ title }}
    </h2>
    <BoardCard
      v-for="card in cards"
      :key="card.id"
      :id="card.id"
    />
    <div class="footer">
      <button v-if="!openCardTextBox" v-on:click="toggleCardTextBox()">
        + Add a card
      </button>
      <div v-if="openCardTextBox">
        <input type="text" v-model="newCardText" placeholder="Card text"/>
        <button v-on:click="createCard" :disabled="emptyTextBox">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>