<template>
  <div>
    <LoadingScreen :data="quote">
      <span>"{{ quote.quote }}"</span> <br>
      <span>by </span><span>{{ quote.name }}</span>
    </LoadingScreen>
    <button type="button" @click="nextQuote()">Next Quote</button>
  </div>
</template>

<script>
import sessionMixin from '@/mixins/session.js'
import LoadingScreen from '@/components/LoadingScreen.vue'
import { mapState } from 'vuex'

export default {
  name: 'Swipe',
  mixins: [sessionMixin],
  components: { LoadingScreen },
  created () {
    this.nextQuote()
  },
  computed: {
    ...mapState({
      quote: (state) => state.janosh.quote
    })
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
