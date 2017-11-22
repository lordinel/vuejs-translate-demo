// src/main.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// import language strings
import messages from './lang';

// create VueI18n instance
const i18n = new VueI18n({
    locale: 'jp',  // set locale
    fallbackLocale: 'en',
    messages
});


import App from './App';
import router from './router';

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  i18n,   // include i18n in Vue instantiation
  template: '<App/>',
  components: { App }
});
