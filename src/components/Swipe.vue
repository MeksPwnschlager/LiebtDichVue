<template>
    <v-layout
      fill-height
      column>
      <v-flex xs2></v-flex>

      <v-flex xs7>
        <QuoteCard :quote="quote" byLine="true"></QuoteCard>
      </v-flex>
      <v-flex xs2 class="mt-4">
        <v-btn class="white--text" right color="green" @click="nextQuote()">MESSAGE</v-btn>
        <v-btn left @click="nextQuote()">NEXT</v-btn>
      </v-flex>
      <v-flex xs1></v-flex>
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
