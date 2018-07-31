<template>
<div>
       <ul>
           <li v-for="user in users" :key="user.id">{{user.name + '-'+user.email}}</li>
       </ul>
<div>
           <button class="btn btn-default" @click="loadMore">Load More</button>

</div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      offset: 0,
      users: []
    };
  },
  methods: {
    getUsers: function() {
      axios
        .get("/api/users?offset=" + this.offset)
        .then(res => (this.users = this.users.concat(res.data)))
        .catch(err => console.log(err));
    },
    loadMore: function(){
        this.offset += 10;
        this.getUsers();
        console.log(this.offset);
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>
