<template>
    <v-layout
      fill-height
      column>
      <span class="display-2 mb-5">Welcome</span>

      <v-btn :to="`/login`">LOG IN</v-btn>
      <span class="headline ma-4">or</span>
      <v-btn class="white--text" color="green" :to="`/register`">REGISTER</v-btn>
    </v-layout>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
