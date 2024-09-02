import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { router } from './router'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CiRub, CiEur, CiUsd } from 'oh-vue-icons/icons'
import { createPinia } from 'pinia'

addIcons(CiRub, CiEur, CiUsd)
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'light',
        },
    },
})
app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('v-icon', OhVueIcon)

app.mount('#app')
