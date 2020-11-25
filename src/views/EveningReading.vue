<template>
     <div>
        <h1 class="title">  {{ readArray.title }}  </h1>
        <p class="verse">  {{ readArray.verse }}   </p>
        <p class="content"> {{ readArray.content }} </p>
    </div>
</template>

<script>
import { readingMorning } from '../helper/parse'

export default {
  name: 'Evening',
  data(){
    return {
      readArray: [],
      
    }
  },
  methods: {
    readingMorning
  },
  async created() {
    this.readArray = await this.readingMorning()
    console.log(this.$route.path)
  }
}
</script>

<style scoped>
    .title{
      text-align: center;
      padding: 20px;
      font-size: 40px;
    }
    .verse{
      text-align: center;
      margin: 0 auto;
      max-width: 820px;
      padding: 10px 0;
      font-size: 18px;
    }
    .content{
        padding: 20px 40px;
        font-size: 18px;
    }
    div{
        min-height: 100vh;
    }
</style>
