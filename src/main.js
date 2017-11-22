// vue-i18n
// ------------------------------------------
/*// src/main.js
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
});*/
// ------------------------------------------

// vue-18next
// ------------------------------------------
// src/main.js
import Vue from 'vue';
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';

Vue.use(VueI18Next);

// import language strings
import messages from './lang';

i18next.init({
    lng: 'jp',    // set locale
    fallbackLng: 'en',
    resources: {
        en: { translation: messages.en },
        jp: { translation: messages.jp }
    }
});

const i18n = new VueI18Next(i18next);
// ------------------------------------------


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
