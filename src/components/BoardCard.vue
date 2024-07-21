<script setup>
import { defineProps, ref, computed } from "vue";
import { useCardsStore } from "../store";

const props = defineProps({
  id: { type: Number, required: true }
});

const store = useCardsStore();
const currentCard = computed(() => store.getCard(props.id))

// setup ref on cardText to create v-model
const cardText = ref(currentCard.value.text);

// setup ref to toggle between edit and save mode
let allowEdit = ref(false)

const toggleEdit = () => {
  allowEdit.value = !allowEdit.value
}

function saveChanges() {
  toggleEdit()

  console.log('before: ', currentCard.value)
  store.updateCard(props.id, cardText.value)
  console.log('after: ', currentCard.value)
}
</script>

<template>
  <div class="card">
    <div v-if="!allowEdit" v-on:click="toggleEdit()">
      {{ cardText }}
    </div>
    <div v-if="allowEdit">
      <input type="text" v-model="cardText" />
      <button v-on:click="saveChanges">Submit</button>
    </div>
  </div>
</template>

<style scoped></style>