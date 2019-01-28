import Vue from 'vue';

import App from './App';
import router from './router';
import Log from './utils/hqp_log';
import store from './store'

import ElementUI from 'element-ui';
import './style/element-variables.scss';

import '@/permission' // permission control

Vue.use(Log);
Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
