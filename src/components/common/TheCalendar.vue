<template>
    <div>
        <div class="readind__calendar-icon" @click="modalCalendar">
            <span class="calendar-day">{{ date.getUTCDate() }}</span>
            <svg
              id="calendar"
              enable-background="new 0 0 512 512"
              viewBox="0 0 512 512"
              class="reading__calendar-icon"
              xmlns="http://www.w3.org/2000/svg"
            >
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
</template>


<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
    data() {
        return {
            date: new Date(),
            modelConfig: {
                type: "nubmer",
            },
        }
    },
    components: {
        DatePicker
    }
}
</script>

<style lang="scss" scoped>
     .reading{
        &__calendar-icon {
            width: 30px;
            position: absolute;
            top: 130px;
            left: 40px;
            cursor: pointer;
        }   
     }
</style>