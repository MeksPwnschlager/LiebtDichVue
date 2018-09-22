<template>
  <v-layout class="mt-5">
    <v-flex offset-xs3 xs6>
      <QuoteCard :quote="quote" byLine="true"></QuoteCard>
      <div class="mt-4">
        <v-btn class="white--text" right color="green" @click="nextQuote()">MESSAGE</v-btn>
        <v-btn left @click="nextQuote()">NEXT</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import QuoteCard from '@/components/QuoteCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Swipe',
  components: { QuoteCard },
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
