<template>
  <div id="app">
    <NavBar />
    <AllFriends :friends ="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends" />
      <h1>{{ title }} </h1>

      <Blog />
  </div>
</template>

<script>
import NavBar from './NavBar';
import AllFriends from './AllFriends';
import OnlineFriends from './OnlineFriends';
import Blog from './Blog';

export default {
  name: 'app',
  components: {
    NavBar,
    AllFriends,
    OnlineFriends,
    Blog
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'vue train ground ',
      friends : [
        {name:'Mario', online: true},
        {name:'Rose', online: false},
        {name:'Macy', online: true},
        {name:'Alben', online: false}
      ]
    }
  },
  methods: {
    deleteFriend(payload){
      console.log(payload);
      let newList = this.friends.filter(friend => { return friend.name != payload.name})
      console.log(newList);
     this.friends = [...newList]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
