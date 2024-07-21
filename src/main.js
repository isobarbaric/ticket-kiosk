import { createApp } from 'vue'
import { createPinia } from 'pinia'
import KanbanBoard from './KanbanBoard.vue'

const pinia = createPinia()
const app = createApp(KanbanBoard)

app.use(pinia)
app.mount('#app')