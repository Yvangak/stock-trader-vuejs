import Vue from 'vue';
import VueRouter from 'vue-router';
import VToaster from 'v-toaster';
import VueResource from 'vue-resource';
import App from './App.vue';
import {routes} from './routes';
import store from './store/store';

Vue.filter('numberFormat', (value) => {
    return '$' + value.toLocaleString();
});

Vue.use(VueRouter);
Vue.use(VToaster, {timeout: 7000});
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-trader-vuejs-bd03f.firebaseio.com/';

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
