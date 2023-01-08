/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'

import VueCarousel from 'vue-carousel';


// Plugins
import { registerPlugins } from '@/plugins'

import store from './store'

const app = createApp(App).use(store).use(VueCarousel)


registerPlugins(app)

app.mount('#app')
