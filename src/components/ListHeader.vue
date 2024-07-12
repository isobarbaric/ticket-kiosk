<script setup>
import { defineProps } from 'vue'

defineProps({
    title: {type: String, required: true}
})
</script>

<template>
    <h2 class="header">{{ title }}</h2> 
</template>

<style scoped>
.header {
    color: #000000;
    background-color: white;
    text-align: center;
    padding: 0.5em;
    margin: 0;
}
</style>