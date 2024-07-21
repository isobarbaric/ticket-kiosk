<script setup>
import { defineProps, ref, computed } from "vue";
import { useCardsStore } from "../store";

const props = defineProps({
  id: { type: String, required: true }
});

const store = useCardsStore();
const currentCard = store.getCard(props.id)

// setup ref on cardText to create v-model
const cardText = ref(currentCard.text);

// setup ref to toggle between edit and save mode
let allowEdit = ref(false)

const emptyTextBox = computed(() => cardText.value.length == 0)

const toggleEdit = () => {
  allowEdit.value = !allowEdit.value
}

async function saveChanges() {
  toggleEdit()
  await store.updateCard(props.id, cardText.value)
}

async function deleteCard() {
  if (confirm(`Are you sure you  want to delete task "${currentCard.text}"?`)) {
    await store.deleteCard(props.id)
  }
}
</script>

<template>
  <div class="card">
    <div v-if="!allowEdit">
      <div v-on:click="toggleEdit()">
        {{ cardText }}
      </div>
      <button v-on:click="deleteCard">&#x2715;</button>
    </div>
    <div v-if="allowEdit">
      <input type="text" v-model="cardText" v-on:keyup.esc="toggleEdit()" />
      <button v-on:click="saveChanges" :disabled="emptyTextBox">
        Submit
      </button>
    </div>
  </div>
</template>

<style scoped></style>