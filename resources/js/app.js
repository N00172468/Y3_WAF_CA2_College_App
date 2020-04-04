require('./bootstrap'); // Although Bootstrap UI has been replaced with Element UI), this import is still needed due to jQuery and Axios.  
import Vue from 'vue' // Globalise Vue.
import App from './App.vue' // Globalise App.vue (main page).
import ElementUI from 'element-ui' // Globalise Element UI.
import 'element-ui/lib/theme-chalk/index.css' // Globalise Element UI components.
import locale from 'element-ui/lib/locale/lang/en' // Translate default language (Mandarin) to English.
import 'element-theme-dark' // Globalise bespoke Dark Theme.
import router from './router' // Globalise Router.

Vue.use(ElementUI, { locale }) // Allow Vue to use Element UI and its translated form.

new Vue({
  router,
  render: h => h(App) 
}).$mount('#app') // Render pages and their contents within App.vue 
