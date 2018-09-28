<template>
  <v-layout row justify-center fill-height class="loading-screen">
    <slot v-if="data"></slot>
    <div v-else>
      <v-layout
        column
        justify-center
        fill-height>
        <v-flex xs1>
          <v-progress-circular
            indeterminate
            color="teal">
          </v-progress-circular>
        </v-flex>
      </v-layout>
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
