// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import router from './router'
import { router } from './router';
import { shareJs } from './utils';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//     router: router,
//   template: '<App/>',
//   components: { App }
// })
new Vue({
    router: router,
    render: h => h(App)
}).$mount("#app");
