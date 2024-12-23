import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitterSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import shave from 'shave'

library.add(faTwitterSquare, faLinkedin, faInstagramSquare)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.provide('shave', shave)
app.mount('#app')
