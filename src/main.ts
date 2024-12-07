import { createApp } from 'vue'
import './style.css'
import 'vuetify/styles/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import i18n from './i18n'
const vuetify = createVuetify({
    components,
    directives,
    
  });

import App from './App.vue'

import router from './router'
const app = createApp(App)
// app.config.globalProperties.$t = i18n.global.t
app.use(router).use(i18n).use(vuetify).mount('#app')
