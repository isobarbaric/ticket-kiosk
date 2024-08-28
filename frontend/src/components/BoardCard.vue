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
  toggleEdit()
  if (confirm(`Are you sure you  want to delete task "${currentCard.text}"?`)) {
    await store.deleteCard(props.id)
  }
}
</script>

<template>
  <div class="card">
    <div class="card-body" v-if="!allowEdit" v-on:click="toggleEdit()">
      <div class="card-text">
        {{ cardText }}
      </div>
      <div class="delete-btn">
        <button v-on:click="deleteCard">
          <font-awesome-icon icon="xmark" />
        </button>
      </div>
    </div>
    <div class="text-box" v-if="allowEdit">
      <textarea class="card-input" type="text" v-model="cardText" />
      <button v-on:click="saveChanges" :disabled="emptyTextBox">
        <font-awesome-icon icon="check" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  color: #282828;
  background-color: #fbf1c8;
  font-weight: 400;
  font-size: 1.2em;
  border: 0.1em solid #eadcb3;
  border-radius: 0.4em; 
  padding: 0.1em;
  margin-bottom: 0.3em;
}

button {
  border: none;
  /* padding: 0.3em; */
}

button:hover {
  background-color: #ebd9b3;
  border-radius: 0.2em;
}

font-awesome-icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #fbf1c8;
}

font-awesome-icon:hover {
  color: #ebd9b3;
}

.card-body {
  border-radius: 0.4em;
  padding: 0.2em;
  display: flex;
}

.card-text {
  white-space: pre-wrap;
  padding: 0.1em;
  flex: 9;
}

.delete-btn {
  flex: 1;
}

.text-box {
  display: flex;
  border: none;
}

textarea {
  padding: 0.1em;
}

.card-input {
  flex: 9;
  white-space: pre-wrap;
  padding: 0.1em;
}

.submit-btn {
  flex: 1;
}
</style>