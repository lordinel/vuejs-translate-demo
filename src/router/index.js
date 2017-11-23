import Vue from 'vue';
import Router from 'vue-router';

function load(component) {
  return () => import(`@/components/${component}.vue`);
}

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: load('HelloWorld') },
    { path: '/vue-i18n', component: load('VueI18n') },
    { path: '/vuex-i18n', component: load('VuexI18n') },
    { path: '/vue-i18next', component: load('VueI18next') }
  ]
});
