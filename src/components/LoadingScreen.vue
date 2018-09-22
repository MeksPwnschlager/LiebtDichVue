<template>
  <div>
    <div v-if="data">
      <slot></slot>
    </div>
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
</style>
