<template>
  <div class="loading-screen">
    <slot v-if="data"></slot>
    <div v-else>
      <v-progress-circular
        indeterminate
        color="teal">
      </v-progress-circular>
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
.loading-screen {
  height: 100%;
}
</style>
