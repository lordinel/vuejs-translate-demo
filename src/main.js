import Vue from 'vue';

// translation plugins
import VueI18n from 'vue-i18n';

import Vuex from 'vuex';
import VuexI18n from 'vuex-i18n';

import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';

import VueGettext from 'vue-gettext';

import VuePolyglot from 'vue-polyglot';

// import language strings
import messages from './lang';
let i18n = null;

// import config
import config from './config';

switch (config.TRANSLATE_PLUGIN.name) {
    case 'vue-i18n':
        Vue.use(VueI18n);
        
        i18n = new VueI18n({
            locale: 'jp',  // set locale
            fallbackLocale: 'en',
            messages
        });
        break;
    
    case 'vuex-i18n':
        Vue.use(Vuex);
        i18n = new Vuex.Store();
        Vue.use(VuexI18n.plugin, i18n);
        
        Vue.i18n.add('en', messages.en);
        Vue.i18n.add('jp', messages.jp);
        
        Vue.i18n.set('jp');
        break;
    
    case 'vue-i18next':
        Vue.use(VueI18Next);
        
        i18next.init({
            lng: 'jp',    // set locale
            fallbackLng: 'en',
            resources: {
                en: { translation: messages.en },
                jp: { translation: messages.jp }
            }
        });
        
        i18n = new VueI18Next(i18next);
        break;
    
    case 'vue-gettext':
        Vue.use(VueGettext, {
            translations: messages,
            defaultLanguage: 'jp'
        });
        break;
    
    case 'vue-polyglot':
        Vue.use(VuePolyglot, {
            defaultLanguage: 'jp',
            languagesAvailable: ['en', 'jp']
        });
        
        Vue.locales(messages);
        break;
}

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
