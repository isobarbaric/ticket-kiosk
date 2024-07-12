<script setup>
import { defineProps, computed } from 'vue'
import ListHeader from './ListHeader.vue';
import BoardCard from './BoardCard.vue';
import ListFooter from './ListFooter.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    cards: {
        type: Array,
        required: true
    }
})

const listCategory = computed(() => {
    if (props.title === 'To do') {
        return 'blue-list'
    } else if (props.title === 'Doing') {
        return 'red-list'
    } else {
        return 'green-list'
    }
})
</script>

<template>
    <div class="list" :id="listCategory">
        <ListHeader :title="title"></ListHeader>
        <BoardCard v-for="card in cards" :key="card.id" :id="card.id" :category="card.category"  :text="card.text" :deadline="card.deadline"></BoardCard>
        <ListFooter></ListFooter>
    </div>
</template>

<style>
#blue-list {
    background-color: #6FA3DA;
}

#red-list {
    background-color: #DB8785;
}

#green-list {
    background-color: #6DC09D;
}
</style>