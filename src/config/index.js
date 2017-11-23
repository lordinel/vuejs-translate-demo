'use strict';

const TRANSLATE_PLUGINS = {
    vue_i18n: {
        name: 'vue-i18n',
        component: 'VueI18n'
    },
    vuex_i18n: {
        name: 'vuex-i18n',
        component: 'VuexI18n'
    },
    vue_i18next: {
        name: 'vue-i18next',
        component: 'VueI18next'
    },
    vue_gettext: {
        name: 'vue-gettext',
        component: 'VueGettext'
    },
    vue_polyglot: {
        name: 'vue-polyglot',
        component: 'VuePolyglot'
    }
};

module.exports = {
    TRANSLATE_PLUGIN: TRANSLATE_PLUGINS.vue_i18next
};
