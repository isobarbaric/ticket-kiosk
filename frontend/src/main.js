import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const pinia = createPinia()
const app = createApp(App)

library.add(faCheck, faXmark);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia)
app.mount('#app')
