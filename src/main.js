import { createApp } from 'vue'
import { createPinia } from 'pinia'
import KanbanBoard from './KanbanBoard.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const pinia = createPinia()
const app = createApp(KanbanBoard)

library.add(faCheck, faXmark);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia)
app.mount('#app')