<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
    id: {type: Number, required: true},
    category: {type: String, required: true},
    text: {type: String, required: true},
    deadline: {type: String, required: true}
})

const cardCategory = computed(() => {
    if (props.category === 'To do') {
        return 'blue-card'
    } else if (props.category === 'Doing') {
        return 'red-card'
    } else {
        return 'green-card'
    }
})
</script>

<template>
    <div class="card" :id="cardCategory">
        <div class="card-title">{{ text }}</div>
        <div class="card-subtitle">{{ deadline }}</div>
    </div>
</template>

<style scoped>
#blue-card {
    background-color: #026BDE;
}

#red-card {
    background-color: #DF3231;
}

#green-card {
    background-color: #00A660;
}
</style>