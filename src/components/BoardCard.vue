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
        <div class="card-text">{{ text }}</div>
        <div class="card-deadline">{{ deadline }}</div>
    </div>
</template>

<style scoped>
.card {
    padding-left: 0.2em;
    padding-right: 0.2em;
    margin: 1em;
    /* color: #C5C2C6; */
    color: white;
    /* font-weight: 800; */
}

#blue-card {
    background-color: #026BDE;
}

#red-card {
    background-color: #DF3231;
}

#green-card {
    background-color: #00A660;
}

.deadline {
    font-size: 0.82em;  
}
</style>