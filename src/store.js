import { ref, computed, onMounted } from 'vue';
import { defineStore } from 'pinia';

export const useCardsStore = defineStore('kanban-cards', () => {
  // load cards from api
  const cards = ref([])
  onMounted(async () => {
    console.log('fetching cards')
  })

  // computed properties
  const todoCards = computed(() => cards.value.filter(card => card.category === "To do"))
  const doingCards = computed(() => cards.value.filter(card => card.category === "Doing"))
  const doneCards = computed(() => cards.value.filter(card => card.category === "Done"))

  const getCard = (id) => {
    return cards.value.find(card => card.id === id)
  }

  async function updateCard(id, updatedText) {
    console.log(`updating card with id ${id} and text ${updatedText}`)
  }
  
  async function addCard(newCardTitle, newCardText) {
    console.log(`adding card with category ${newCardTitle} and text ${newCardText}`)
  }

  async function deleteCard(id) {
    console.log(`deleting card with id ${id}`)
  }

  return { cards, todoCards, doingCards, doneCards, getCard, updateCard, addCard, deleteCard }
})


//export const useColorStore = defineStore('color', () => {
//  const colorMode = ref('dark')
//
//  const toggleColor = () => {
//    if (colorMode.value === 'dark') {
//      colorMode.value = 'light'
//    } else {
//      colorMode.value = 'dark'
//    }
//  }
//
//  return { colorMode, toggleColor }
//}

