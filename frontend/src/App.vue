<script setup>
import { ref } from 'vue'

const username = ref('');
const password = ref('');
const isLoggedIn = ref(false);

// const backendUrl = 'http://localhost:3000';

// TODO: redirect to boards page after login (new component)
// create a useBoardsStore()
async function processLogin() {
  // console.log('Logging in as', username.value, 'with password', password.value);
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  });

  console.log(response.json());

  isLoggedIn.value = response.ok;
  // store.fetchCards();
}
</script>

<!-- add dual slider -->
<template>
  <div class="login-panel">
    <div class="username">
      <div>Username</div>
      <input type="text" v-model="username" size="40" />
    </div>
    <div class="password">
      <div>Password</div>
      <input type="password" v-model="password" size="40" />
    </div>
    <button v-on:click="processLogin">Login</button>
  </div>
</template>

<style scoped>
.login-panel {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
}

.username, .password {
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0.5em;
}

input {
  border: 2px solid black;
  border-radius: 5px;
  font-size: 15px;
}

button {
  margin-top: 10px;
}
</style>
