import { ref, computed, onMounted } from 'vue';
import { defineStore } from 'pinia';
import { cardsRef } from './firebase';
import { getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';

export const useCardsStore = defineStore('kanban-cards', () => {
  // load cards from api
  // is this the right way to do this?
  const cards = ref([])
  onMounted(async () => {
    const querySnapshot = await getDocs(cardsRef);
    cards.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  })

  // computed properties
  const todoCards = computed(() => cards.value.filter(card => card.category === "To do"))
  const doingCards = computed(() => cards.value.filter(card => card.category === "Doing"))
  const doneCards = computed(() => cards.value.filter(card => card.category === "Done"))

  // functions
  const getCard = (id) => {
    return cards.value.find(card => card.id === id)
  }

  async function updateCard(id, updatedText) {
    // why does cards.value change before I update it
    // console.log('updating cards: ', cards.value)
    const index = cards.value.findIndex(card => card.id === id);
    if (index === -1) {
      throw new Error(`Card with id ${id} not found`);
    }
    const cardCategory = cards.value[index].category;
    const cardDocRef = doc(cardsRef, id);
    const updatedCard = {
      category: cardCategory,
      text: updatedText
    }
    await updateDoc(cardDocRef, updatedCard);
    
    // console.log('card before update: ', cards.value[index])
    cards.value[index].text = updatedText;
    // console.log('card after update: ', cards.value[index])
  }
  
  async function addCard(newCardTitle, newCardText) {
    const newCard = {
      category: newCardTitle,
      text: newCardText
    }
    console.log('adding card...', newCard)
    const docRef = await addDoc(cardsRef, newCard);

    // do I need to do this?
    cards.value.push({ id: docRef.id, ...newCard });
  }

  // function deleteCard(id) {
  //   cards.value = cards.value.filter(card => card.id !== id)
  // }

  return { cards, todoCards, doingCards, doneCards, getCard, updateCard, addCard }
})