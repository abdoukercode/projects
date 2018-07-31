<template>
  <div class="chat container">
    <h2 class="center teal-text">Larose Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
<!--           <li v-for="(message, index) in messages" :key="message.id" v-bind:class="index%2 == 0 ? 'left-align' : 'right-align'">
 -->          <li v-for="message in messages" :key="message.id" class="left-align">
            <span class="teal-text">{{ message.name }}</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name"/>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage';
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  components: {
    NewMessage
  },
  props: ['name'],
  data () {
    return {
      messages: []
    }
  },
  methods: {

  },
  created(){
    let ref = db.collection('messages').orderBy('timestamp')
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type == 'added'){
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }

      });
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1em;
}
.chat .time {
  font-size: 0.8em;
  display: block;
}
.messages {
  max-height: 300px;
  overflow: auto;
}

.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>

