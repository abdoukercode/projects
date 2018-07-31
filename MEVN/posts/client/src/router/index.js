/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Posts from '../components/Posts.vue'
import NewPost from '../components/NewPost.vue'
import EditPost from '../components/EditPost.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    }
  ],
  
  mode: "history"
})
