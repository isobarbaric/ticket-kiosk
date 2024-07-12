<script setup>
import { defineProps } from 'vue'

defineProps({
    title: {type: String, required: true}
})
</script>

<template>
    <h2 class="header">{{ title }}</h2> 
</template>