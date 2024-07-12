<script setup>
import { defineProps } from "vue";

defineProps({
  id: { type: Number, required: true },
  category: { type: String, required: true },
  text: { type: String, required: true },
  deadline: { type: String, required: true },
});
</script>

<template>
  <div class="card">
    <div class="card">
      <div class="card-body">
        <p class="card-text">
          {{ text }}
        </p>
        <div class="card-subtitle">
          {{ deadline }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>