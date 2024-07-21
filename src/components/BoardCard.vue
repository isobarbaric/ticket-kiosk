<script setup>
import { defineProps, ref, computed } from "vue";
import { useCardsStore } from "../store";

const props = defineProps({
  id: { type: Number, required: true }
});

const { getCard, updateCard } = useCardsStore();
const currentCard = computed(() => getCard(props.id))

// setup ref on cardText to create v-model
const cardText = ref(currentCard.value.text);

// setup ref to toggle between edit and save mode
let allowEdit = ref(false)

function editCard() {
  allowEdit.value = true
  // console.log('before, cardText: ', cardText.value)
}

function saveCard() {
  allowEdit.value = false
  // console.log('after, cardText: ', cardText.value)

  // console.log('before cards :', cards.value)
  updateCard(props.id, cardText.value)
  // console.log('after cards :', cards.value)
  // console.log('cards :', store.cards)

  // console.log('previous: ', store.cards)
  // currentCard.value.text = cardText.value;
  // console.log('after: ', store.cards)
  // store.updateCard(props.id, cardText.value)
}

// function handleEscape() {
//   allowEdit.value = false;
// }
</script>

<template>
  <div class="card">
    <div v-if="!allowEdit" v-on:click="editCard">
      {{ cardText }}
    </div>
    <div v-if="allowEdit">
      <input type="text" v-model="cardText" />
      <button v-on:click="saveCard">Submit</button>
    </div>
  </div>
</template>

<style scoped></style>