// import { ref, computed, watch, onMounted } from 'vue';
import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import cardData from './cards.json';
// import axios from 'axios';
// import { db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';

export const useCardsStore = defineStore('kanban-cards', () => {
  // const cards = ref(cardData)
  // load cards from api
  // is this the right way to do this? (or should I use a lifecycle hook?)

  // const cards = ref([])
  // onMounted(async () => {
  //   const cardData = await axios.get('http://127.0.0.1:3000/' + 'cards/')
  //     .then(response => response.data)
  //     .catch(error => {
  //       console.error('error fetching cards', error)
  //       // return []
  //     })
  //   cards.value = cardData
  // })

  const cards = ref(cardData)

  // computed properties
  const todoCards = computed(() => cards.value.filter(card => card.category === "To do"))
  const doingCards = computed(() => cards.value.filter(card => card.category === "Doing"))
  const doneCards = computed(() => cards.value.filter(card => card.category === "Done"))

  // functions
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

  const addCard = (newCardTitle, newCardText) => {
    const newCard = {
      id: uuidv4(),
      category: newCardTitle,
      text: newCardText
    }
    console.log('adding card...', newCard)
    cards.value.push(newCard);
  };

  // function deleteCard(id) {
  //   cards.value = cards.value.filter(card => card.id !== id)
  // }

  // TODO: send to a database instead of local storage
  // watch for changes in cards and save when cards list changes
  watch(cards.value, () => {
    console.log('saving cards...', cards.value)
    try {
      localStorage.setItem('cards', JSON.stringify(cards.value));
      console.log('cards successfully saved');
    } catch (error) {
      console.error('error saving cards', error);
    }
  });

  return { cards, todoCards, doingCards, doneCards, getCard, updateCard, addCard }
})