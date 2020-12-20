<template>
  <div class="bible">
    <dot-loader 
    :loading="loading" 
    :color="color" 
    :size="size"
    class="spinner"
    ></dot-loader>
    <div v-if="!loading">
      <div v-if="readArray">
        <the-calendar/>
        <the-title> {{ readArray.attributes.title }} </the-title>
        <the-content> {{ readArray.attributes.content }} </the-content>
      </div>
    </div>
  </div>
</template>
<script>
import { readingMorning } from '../helper/parse'
import  DotLoader from 'vue-spinner/src/DotLoader.vue'
import TheCalendar from '../components/common/TheCalendar.vue'
import TheTitle from '../components/common/TheTitle.vue'
import TheContent from '../components/common/TheContent.vue'

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
    TheCalendar,
    TheTitle,
    TheContent,
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
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .bible{
      min-height: 85vh;
      padding: 20px 40px;
    }
</style>