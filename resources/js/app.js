require('./bootstrap');

window.Vue = require('vue').default;

//import vue
// import Vue from 'vue';
import router from './router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import Vue from 'vue';

import commit from './commit';
Vue.mixin(commit);


// main.js
import * as TastyBurgerButton from 'vue-tasty-burgers';

Vue.use(TastyBurgerButton);

// import common from './common';
// // accessable all the project
// Vue.mixin(common);


// import Editor from 'vue-editor-js'

// Vue.use(Editor)


// import jsonToHtml from './jsonToHtml'

// Vue.mixin(jsonToHtml)

Vue.component('main-app', require('./components/main-app.vue').default)



const app = new Vue({
    el:'#app',
    router,

});


