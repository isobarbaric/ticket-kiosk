<script setup>
function addCard() {
  console.log("card added");
}
</script>

<template>
  <div class="footer">
    <button v-on:click="addCard">+ Add a card</button>
  </div>
</template>

<style scoped></style>