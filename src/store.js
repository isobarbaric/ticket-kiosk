import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import cardData from './cards.json';

export const useCardsStore = defineStore('kanban-cards', () => {
  const cards = ref(cardData)

  // computed properties
  const todoCards = computed(() => cards.value.filter(card => card.category === "To do"))
  const doingCards = computed(() => cards.value.filter(card => card.category === "Doing"))
  const doneCards = computed(() => cards.value.filter(card => card.category === "Done"))
  // const cardLength = computed(() => cards.value.length)

  function getCard(id) {
    return cards.value.find(card => card.id === id)
  }

  function updateCard(id, updatedText) {
    // why does cards.value change before I update it
    // console.log('updating cards: ', cards.value)
    const index = cards.value.findIndex(card => card.id === id);
    if (index === -1) {
      throw new Error(`Card with id ${id} not found`);
    }
    cards.value[index].text = updatedText;
  }

  // const addCard = (card) => {
  //   cards.value.push(card);
  // };

  // function deleteCard(id) {
  //   cards.value = cards.value.filter(card => card.id !== id)
  // }

  watch(cards.value, () => {
    console.log('saving cards...', cards.value)
    // TODO: send to a database instead of local storage
    try {
      localStorage.setItem('cards', JSON.stringify(cards.value));
      console.log('cards successfully saved');
    } catch (error) {
      console.error('error saving cards', error);
    }
  });

  return { cards, todoCards, doingCards, doneCards, getCard, updateCard }
})