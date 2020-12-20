<template>
  <h1 class="the-title">
      <slot />
  </h1>
</template>

<script>
export default {
    name: 'TheTitle'
}
</script>

<style lang="scss">
    .the-title{
        text-align: center;

        font-size: 40px;
    }
</style>