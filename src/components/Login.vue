<template>
  <div>
    <div>
        <br/>
        <input
          type="text"
          placeholder="Username"
          v-model="username">
        <br/>
        <input
          type="password"
          placeholder="Password"
          v-model="password">
        <br/>
        <button type="button" @click="logIn()">Log In</button>
      </div>
    </div>
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
