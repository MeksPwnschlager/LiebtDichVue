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
      <v-select
        v-model="gender"
        :items="genders"
        label="Gender">
      </v-select>
      <v-text-field
        type="password"
        label="Password"
        v-model="password">
      </v-text-field>
      <v-text-field
        type="password"
        label="Confirm Password"
        v-model="confirm_password">
      </v-text-field>
      <v-text-field
        label="E-Mail Address"
        v-model="email">
      </v-text-field>

      <span class="subheading mt-5">
        Your quote by which you will be visible.<br/>
        It could be a quote by yourself or someone else that you really like.<br/>
        It could be a short story.<br/>
        It could be a question.<br/>
        Use your imagination. Make it interesting.<br/>
      </span>

      <v-textarea
        class="mt-3"
        solo
        label="Your Quote"
        v-model="quote">
      </v-textarea>

      <v-btn @click="register()" class="white--text" color="green">REGISTER</v-btn>
    </v-form>
  </v-layout>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      userdata: {
        username: '',
        gender: '',
        password: '',
        confirm_password: '',
        email: '',
        quote: ''
      },
      genders: [
        { value: 'female', text: 'Female' },
        { value: 'male', text: 'Male' },
        { value: 'between', text: 'Something Inbetween' },
        { value: 'else', text: 'Something Else' }
      ]
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
