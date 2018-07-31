import Vue from 'vue';

import VueRouter from 'vue-router';

import CreateItem from "./components/CreateItem.vue";
import DisplayItem from "./components/DisplayItem.vue";
import EditItem from "./components/EditItem.vue";
Vue.use(VueRouter);

const Myroutes = [
    {
          name: 'CreateItem',
          path: '/create/item',
          component: CreateItem
      },
      ,
    {
        name: 'DisplayItem',
        path: '/',
        component: DisplayItem
    },
    {
        name: 'EditItem',
        path: '/edit/:id',
        component: EditItem
    }
  ];
const routes = new VueRouter(
    { 
        mode: 'history', 
        routes: Myroutes 
    }
);

module.exports = routes;
