<template>
  <v-text-field
    solo
    v-model="message"
    append-icon="send"
    @click:append="send()"
    placeholder="Message">
  </v-text-field>
</template>

<script>
export default {
  name: 'SendMessage',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    send () {
      this.$emit('send', this.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
