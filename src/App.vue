<template>
  <div class="app">
    <div id="nav">
      <The-header />
    </div>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";

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
