<template>
  <v-layout
    column
    fill-height
    justify-center
    class="pa-5">
    <v-form>
      <v-text-field
        label="Username"
        v-model="username">
      </v-text-field>
      <v-text-field
        type="password"
        label="Password"
        v-model="password">
      </v-text-field>
      <v-btn @click="logIn()" class="white--text" color="green">LOG IN</v-btn>
    </v-form>
  </v-layout>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    logIn () {
      this.$janosh.login(this.username, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
