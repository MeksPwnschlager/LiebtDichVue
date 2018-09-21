<style scoped>
div {
  display: inline-block;
}
</style>

<template>
  <div :style="`width: ${width}; height: ${height}`" v-once v-html="src">
  </div>
</template>

<script>
  export default {
    props: [ 'src', 'width', 'height' ]
  }
</script>
