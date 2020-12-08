<template>
  <div>
    <dot-loader 
    :loading="loading" 
    :color="color" 
    :size="size"
    class="spinner"
    ></dot-loader>
    <div v-if="!loading">
      <div v-if="readArray">
        <h1 class="title"> {{ readArray.attributes.title }} </h1>
        <p class="content"> {{ readArray.attributes.content }} </p>
      </div>
    </div>
  </div>
</template>
<script>
import { readingMorning } from '../helper/parse'
import  DotLoader from 'vue-spinner/src/DotLoader.vue'

export default {
  name: 'Sabbath-school',
  data(){
    return {
      readArray: [],
      size: '50px',
      color: '#1a73e8',
      loading: true,
    }
  },
  components: {
    DotLoader,
  },
  methods: {
    readingMorning,
  },
  async created() {
    this.readArray = await this.readingMorning(3),
    this.loading = false
  }
}
</script>
<style scoped>
    .spinner{
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title{
      text-align: center;
      padding: 20px;
      font-size: 40px;
    }
    .content{
        padding: 20px 40px;
        font-size: 18px;
        font-weight: 500;
    }
    div{
        min-height: 85vh;
    }
</style>