<template>
  <div>
    <div class="evening">
    <dot-loader 
    :loading="loading" 
    :color="color" 
    :size="size"
    class="evening__spinner"
    ></dot-loader>
    <div v-if="!loading">
      <div v-if="readArray">
        <h1 class="evening__title"> {{ readArray.attributes.title }} </h1>
        <p class="evening__verse"> {{ verse }} </p>
        <p class="evening__content"> {{ content }} </p>
      </div>
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
      verse: ' ',
      content: ' '
    }
  },
  components: {
    DotLoader,
  },
  methods: {
    readingMorning,
  },
  async created() {
    this.readArray = await this.readingMorning(1),
    this.loading = false,
    this.verse = this.readArray.attributes.verse.replace( /(<([^>]+)>)/g, ''),
    this.content = this.readArray.attributes.content.replace( /(<([^>]+)>)/g, '')
  }
}
</script>
<style scoped lang="scss">
    .evening{
      &__spinner{
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &__title{
        text-align: center;
        padding: 20px;
        font-size: 40px;
      }
      &__verse{
        text-align: center;
        margin: 0 auto;
        max-width: 820px;
        padding: 10px 0;
        font-size: 18px;
        font-weight: 500;
      }
      &__content{
          padding: 20px 40px;
          font-size: 18px;
      }
  }
  div{
    min-height: 100vh;
  }
</style>