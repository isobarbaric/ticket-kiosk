import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import cardData from './cards.json';

export const useCardsStore = defineStore('kanban-cards', () => {
  const cards = ref(cardData)

  // computed properties
  const todoCards = computed(() => cards.value.filter(card => card.category === "To do"))
  const doingCards = computed(() => cards.value.filter(card => card.category === "Doing"))
  const doneCards = computed(() => cards.value.filter(card => card.category === "Done"))

  const cardLength = computed(() => cards.value.length)

  // methods
  const getCard = (id) => {
    return cards.value.find(card => card.id === id)
  };

  // const addCard = (card) => {
  //   cards.value.push(card);
  //   saveCards();
  // };

  // const updateCard = watch(cards, () => {
  //   console.log('updating cards')
  //   saveCards()
  // });

  const updateCard = (id, updatedText) => {
    console.log('updating card: ', cards.value)
    const index = cards.value.find(card => card.id === id);
    if (index !== -1) {
      cards.value[index].text = updatedText;
      // saveCards();
    }
    throw new Error(`Card with id ${id} not found`);
  };

  // function deleteCard(id) {
  //   cards.value = cards.value.filter(card => card.id !== id)
  //   saveCards()
  // }

  // function saveCards() {
  //   localStorage.setItem('cards', JSON.stringify(cards.value))
  // }

  // return { cards, todoCards, doingCards, doneCards, cardLength, getCard, saveCards }
  // return { cards, todoCards, doingCards, doneCards, cardLength, getCard, updateCard, saveCards }
  return { cards, todoCards, doingCards, doneCards, cardLength, getCard, updateCard }
})