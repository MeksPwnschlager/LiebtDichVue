<template>
  <div>
    <button type="button" @click="nextQuote()">Next Quote</button>
  </div>
</template>

<script>
import sessionMixin from '@/mixins/session.js'

export default {
  name: 'Swipe',
  mixins: [sessionMixin],
  data () {
    return {

    }
  },
  methods: {
    nextQuote () {
      this.$janosh.send('NextQuote')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
