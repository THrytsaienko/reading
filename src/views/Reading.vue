<template>
<div>
  <div class="reading">
    <dot-loader 
    :loading="loading" 
    :color="color" 
    :size="size"
    class="reading__spinner"
    ></dot-loader>
    <div v-if="!loading" >
      <div v-if="readArray">
        <div 
        class="readind__calendar"
        @click="showCalendar">
          <svg id="calendar" enable-background="new 0 0 512 512" viewBox="0 0 512 512" class="reading__calendar-icon" xmlns="http://www.w3.org/2000/svg"><g><path d="m446 40h-46v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-224v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-46c-36.393 0-66 29.607-66 66v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66v-340c0-36.393-29.607-66-66-66zm-380 32h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h46c18.748 0 34 15.252 34 34v38h-448v-38c0-18.748 15.252-34 34-34zm380 408h-380c-18.748 0-34-15.252-34-34v-270h448v270c0 18.748-15.252 34-34 34z"/></g></svg>
        </div>
        
        <div
        class="the-calendar"
        v-if="visible">
          <div class="the-calendar__block">
            <date-picker mode="date" v-model="date" />
            <svg @click="hideCalendar" class="the-calendar__icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
            <g>
              <g>
                <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
                  L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
                  c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
                  l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
                  L284.286,256.002z"/>
              </g>
            </g>
            </svg>
          </div>
        </div>

        <h1 class="reading__title"> {{ readArray.attributes.title }} </h1>
        <p class="reading__verse"> {{ verse }} </p>
        <p class="reading__content"> {{ content }} </p>
      </div>

    </div>
  </div>
</div>
  
</template>
<script>
import { readingMorning } from '../helper/parse';
import  DotLoader from 'vue-spinner/src/DotLoader.vue';
// import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'


export default {
  name: 'Morning',
  data(){
    return {
      readArray: [],
      size: '50px',
      color: '#1a73e8',
      loading: true,
      verse: ' ',
      content: ' ',
      visible: false,
      date: new Date(),
    }
  },
  components: {
    DotLoader,
    // Calendar,
    DatePicker
  },
  methods: {
    readingMorning,
    showCalendar(){
      this.visible = true;
    },
    hideCalendar(){
      this.visible = false;
    }
  },
  async created() {
    this.readArray = await this.readingMorning(0),
    this.loading = false,
    this.verse = this.readArray.attributes.verse.replace( /(<([^>]+)>)/g, ''),
    this.content = this.readArray.attributes.content.replace( /(<([^>]+)>)/g, '')
    console.log(this.date)
  }
  
}

</script>
<style scoped lang="scss">
  .reading{
      min-height: 85vh;
      &__spinner{
      padding: 10px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
      &__calendar-icon{
          width: 30px;
          position: absolute;
          top: 110px;
          left: 40px;
          cursor: pointer;
      }
  }

  .the-calendar{
    position: fixed;
    background-color: #fff;
    left: 20px;
    &__block{
      position: relative;
    }
    &__icon{
      width: 10px;
      position: absolute;
      right: 20px;
      bottom: 20px;
      // transform: translateY(-50%);
      cursor: pointer;
      z-index: 100;
    }
  }
</style>