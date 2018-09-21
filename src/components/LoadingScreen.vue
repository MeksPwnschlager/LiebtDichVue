<template>
  <div>
    <div v-if="data">
      <slot></slot>
    </div>
    <div v-else>
      <span>Insert loading animation here.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: ['data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
