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
        <input
          type="password"
          placeholder="Confirm Password"
          v-model="confirm_password">
        <br/>
        <input
          type="text"
          placeholder="Email Address"
          v-model="email">
        <br/>
        <br/>
        Your quote by which you will be visible.<br/>
        It could be a quote by yourself or someone else that you really like.<br/>
        It could be a short story.<br/>
        It could be a question.<br/>
        Use your imagination. Make it interesting.<br/>

        <textarea
          rows="3"
          cols="50"
          v-model="quote"></textarea>
        <br/>
        <button type="button" @click="register()">Register</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      quote: ''
    }
  },
  computed: {
    valid () {
      return this.password === this.confirm_password
    }
  },
  methods: {
    register () {
      if (this.valid) {
        this.$janosh.register(
          this.username,
          this.password,
          JSON.stringify({ 'email': this.email, 'name': this.username, 'quote': this.quote }))
      } else {
        console.log('invalid') // notify invalid
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
