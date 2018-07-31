import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

import router from './routes'

Vue.use(VueAxios, axios);

import App from './App.vue';

Vue.use(VueAxios, axios);


new Vue({
    el: '#app',
    data: {
      
    },
    components: { App},
    router,
  })
