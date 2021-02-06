import Vue from 'vue';
import App from './App.vue';
import YyComponent from '../packages';

Vue.config.productionTip = false;
Vue.use(YyComponent);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
