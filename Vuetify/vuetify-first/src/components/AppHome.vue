<template>
<div>
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
</div>

</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg'
          },
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
          },
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg'
          },
          {
            src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>
