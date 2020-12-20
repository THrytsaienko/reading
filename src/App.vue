<template>
  <div class="app">
    <div id="nav">
      <the-header />
    </div>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/navigation/TheHeader";

export default {
  name: "app",
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
.app {
  background-color: #fbfbfd;
}
</style>
