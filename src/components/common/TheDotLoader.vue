<template>
  <dot-loader
  :loading="loading"
    :color="color"
    :size="size"
    class="the-spinner"
    ></dot-loader>
</template>

<script>

import DotLoader from "vue-spinner/src/DotLoader.vue";

export default {
    name: 'TheDotLoader',
    props:{
        loading:{
            type: Boolean,
            default: true,
        }
    },
    components: {
        DotLoader
    }
};
</script>
    
<style scoped lang="scss">
    .the-spinner {
        padding: 10px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
