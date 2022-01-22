import Vue from 'vue'
import router from './app/router/index'
import store from './app/store/index'
import vuetify from './app/plugins/vuetify'
import CKEditor from 'ckeditor4-vue';

Vue.use( CKEditor );

Vue.component('app', require('./app/App.vue').default);

const app = new Vue({
    router,
    store,
    vuetify,
}).$mount('#app')
