<script setup>
import { defineProps, ref, computed } from "vue";
import { useCardsStore } from "../store";
import BoardCard from "./BoardCard.vue";

const props = defineProps({
  title: { type: String, required: true },
  cards: { type: Array, required: true },
});

const store = useCardsStore();

const openCardTextBox = ref(false);
const newCardText = ref("");

const emptyTextBox = computed(() => newCardText.value.length == 0);

const toggleCardTextBox = () => {
  openCardTextBox.value = !openCardTextBox.value;
};

function createCard() {
  toggleCardTextBox();
  store.addCard(props.title, newCardText.value);
  // clear the text box
  newCardText.value = "";
}

// function hoverOverFooter() {
// }
</script>

<template>
  <div class="board">
    <div class="list-header">
      <div class="title">
        {{ title }}
        <span class="num-cards">
          {{ props.cards.length }} {{ props.cards.length > 1 ? 'cards' : 'card' }}
        </span>
      </div>
    </div>
    <div class="list-body">
      <BoardCard v-for="card in cards" :key="card.id" :id="card.id" />
      <div class="footer" v-if="!openCardTextBox">
        <button class="add-card" v-on:click="toggleCardTextBox()">
          + Add a card
        </button>
      </div>
      <div class="footer" v-if="openCardTextBox">
        <div class="text-box">
          <textarea class="card-input" type="text" v-model="newCardText" placeholder="Card text" />
          <button class="submit-btn" v-on:click="createCard" :disabled="emptyTextBox">
            <font-awesome-icon icon="check" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  width: 20%;
  margin: 0.5em;
  /* height: 80%; */
}

.list-header {
  font-size: 1.75em;
  font-weight: 450;
  text-align: center;
  margin-bottom: 0.4em;
}

.num-cards {
  color: #cabfa1;
  font-size: 0.65em;
}

.list-body {
  background-color: #f2e5bd;
  padding: 0.3em;
  margin: 0.2em;
  border: 0.1em solid #eadcb3;
  border-radius: 0.7em;
}

.text-box {
  display: flex;
}

.card-input {
  flex: 9;
  padding: 0;
}

.submit-btn {
  flex: 1;
}

button {
  border: none;
  background-color: #f2e5bd;
}

.footer {
  border: none;
  border-radius: 0.4em;
  padding: 0.6em;
  margin: 0.05em;
  font-size: 1.1em;
  background-color: #f2e5bd;
  color: #7c7065;
  text-align: center;
}

/* .add-card {

} */

.add-card:hover {
  background-color: #ebd9b3;
}

.footer:hover {
  background-color: #ebd9b3
}

.footer.submit-btn:hover {
  color: inherit;
}
</style>