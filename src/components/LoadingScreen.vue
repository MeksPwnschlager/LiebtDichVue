<template>
  <v-layout fill-height class="loading-screen">
    <slot v-if="data"></slot>
    <div v-else>
      <v-progress-circular
        indeterminate
        color="teal">
      </v-progress-circular>
    </div>
  </v-layout>
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
