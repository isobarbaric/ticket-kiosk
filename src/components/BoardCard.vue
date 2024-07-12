<script setup>
import { defineProps } from 'vue'

defineProps({
    id: {type: Number, required: true},
    text: {type: String, required: true},
    deadline: {type: String, required: true}
})
</script>

<template>
    <div id="card">
        <p>{{ text }}, {{ deadline }}</p>
    </div>
</template>