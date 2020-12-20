<template>
  <div>
    <div class="reading">
      <dot-loader
        :loading="loading"
        :color="color"
        :size="size"
        class="reading__spinner"
      ></dot-loader>
      <div v-if="!loading">
        <div v-if="readArray">
          <div class="reading__calendar">
            <div class="readind__calendar-icon" @click="modalCalendar">
              <span class="calendar-day">{{ date.getUTCDate() }}</span>
              <svg
                id="calendar"
                enable-background="new 0 0 512 512"
                viewBox="0 0 512 512"
                class="reading__calendar-icon"
                xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="m446 40h-46v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-224v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-46c-36.393 0-66 29.607-66 66v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66v-340c0-36.393-29.607-66-66-66zm-380 32h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h46c18.748 0 34 15.252 34 34v38h-448v-38c0-18.748 15.252-34 34-34zm380 408h-380c-18.748 0-34-15.252-34-34v-270h448v270c0 18.748-15.252 34-34 34z"
                  />
                </g>
              </svg>
            </div>
    
            <div class="the-calendar" v-if="visible">
              <div class="the-calendar__block">
                <date-picker mode="date" v-model="date" :model-config="modelConfig" />
              </div>
            </div>
          </div>
          
          <h1 class="reading__title">{{ readArray.attributes.title }}</h1>
          <p class="reading__verse">{{ verse }}</p>
          <p class="reading__content">{{ content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { readingMorning } from "../helper/parse";
import DotLoader from "vue-spinner/src/DotLoader.vue";
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  name: "Morning",
  data() {
    return {
      readArray: [],
      verse: " ",
      content: " ",
      size: "50px",
      color: "#1a73e8",
      visible: false,
      loading: true,
      date: new Date(),
      modelConfig: {
        type: "nubmer",
      },
    };
  },
  watch: {
    date: async function () {
      (this.readArray = await this.readingMorning(0, this.date)),
        (this.loading = false),
        (this.verse = this.readArray.attributes.verse.replace(/(<([^>]+)>)/g, "")),
        (this.content = this.readArray.attributes.content.replace(/(<([^>]+)>)/g, ""));
    },
  },
  components: {
    DatePicker,
    DotLoader
  },
  methods: {
    readingMorning,
    showCalendar() {
      this.visible = true;
    },
    modalCalendar() {
      this.visible = !this.visible;
    },
  },
  async created() {
    (this.readArray = await this.readingMorning(0, this.date)),
      (this.loading = false),
      (this.verse = this.readArray.attributes.verse.replace(/(<([^>]+)>)/g, "")),
      (this.content = this.readArray.attributes.content.replace(/(<([^>]+)>)/g, ""));
  },
};
</script>

<style scoped lang="scss">
.reading {
  min-height: 85vh;
  padding: 20px 40px;
  &__spinner {
    padding: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__title {
    text-align: center;
    padding: 20px;
    font-size: 40px;
  }
  &__verse {
    text-align: center;
    margin: 0 auto;
    max-width: 820px;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 500;
  }
  &__content {
    padding: 20px 40px;
    font-size: 18px;
  }
  &__calendar-icon {
    width: 30px;
    position: absolute;
    top: 130px;
    left: 40px;
    cursor: pointer;
  }
}
.calendar-day {
  position: absolute;
  top: 140px;
  left: 4.3%;
  transform: translateX(-50%);
}

.the-calendar {
  &__block {
    position: absolute;
    top: 163px;
    left: 40px;
  }
}
</style>
