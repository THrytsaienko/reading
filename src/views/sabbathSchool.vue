<template>
  <div>
    <div class="sabath-school">
      <dot-loader
        :loading="loading"
        :color="color"
        :size="size"
        class="sabath-school__spinner"
      ></dot-loader>
      <div v-if="!loading">
        <div v-if="readArray">
          <the-calendar/>
          <the-title> {{ readArray.attributes.title }} </the-title>
          <the-verse>{{ verse }}</the-verse>
          <the-content>{{ content }}</the-content>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { readingMorning } from "../helper/parse";
import DotLoader from "vue-spinner/src/DotLoader.vue";
import TheCalendar from '../components/common/TheCalendar';
import TheTitle from '../components/common/TheTitle.vue';
import TheVerse from '../components/common/TheVerse.vue';
import TheContent from '../components/common/TheContent.vue';

export default {
  name: "Sabbath-school",
  data() {
    return {
      readArray: [],
      size: "50px",
      color: "#1a73e8",
      loading: true,
      verse: " ",
      content: " ",
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
    DotLoader,
    TheCalendar,
    TheTitle,
    TheVerse,
    TheContent,
  },
  methods: {
    readingMorning,
  },
  async created() {
    (this.readArray = await this.readingMorning(2, this.date)),
      (this.loading = false),
      (this.verse = this.readArray.attributes.verse.replace(/(<([^>]+)>)/g, "")),
      (this.content = this.readArray.attributes.content.replace(/(<([^>]+)>)/g, ""));
  },
};
</script>
<style scoped lang="scss">
.sabath-school {
  padding: 20px 40px;
  min-height: 85vh;
  &__spinner {
    padding: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
