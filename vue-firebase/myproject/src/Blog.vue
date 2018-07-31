<template>
  <div id="blog">
    <h2>{{ blogTitle }}</h2>
    <input type="text" v-model="searchTerm">
    <button @click="changeTitle">change title</button>
    <div id="post" v-for="post in filteredPosts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{post.body | snippet}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Blog',
  data () {
    return {
      blogTitle: 'Blog',
      posts: [],
      searchTerm :''
    }
},
methods: {
  changeTitle(){
    this.blogTitle = "Amazing blog"
  },
},
computed: {
  filteredPosts(){
    return this.posts.filter(post => post.title.match(this.searchTerm))
  }
},
beforeCreate(){
  //alert('before Created')
},
created(){
  //alert('created hook')
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(response => this.posts=response.data)
    .catch(err => console.log(err))

},
beforUpdate(){
  //alert('Before update hook')

}
}
</script>

<style>

</style>
