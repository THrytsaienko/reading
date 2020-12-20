<template>
  <p class="the-verse">
      <slot />
  </p>
</template>

<script>
export default {
    name: 'TheVerse',

}
</script>

<style lang="scss">
    .the-verse {
    text-align: center;
    margin: 0 auto;
    max-width: 820px;
    font-size: 18px;
    font-weight: 500;
  }
</style>