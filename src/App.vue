<template>
  <div class="app">
    <div id="nav">
      <Header />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import './http/index'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  .app{
    background-color: #fbfbfd;
  }
</style>