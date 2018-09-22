<template>
  <div>
    <LoadingScreen id="quote" :data="quote">
        <v-card class="pa-4"color="yellow lighten-3" >
          <v-responsive max-height="60vh" :aspect-ratio="1">
            <v-layout column justify-space-between fill-height>
              <div>
                <span
                  class="blockquote">
                  {{ quote.quote }}
                </span>
              </div>
              <div v-if="byLine" class="blockquote">
                <span>by </span><span class="by-line">{{ quote.name }}</span>
              </div>
            </v-layout>
          </v-responsive>
        </v-card>
    </LoadingScreen>
  </div>
</template>

<script>
import LoadingScreen from '@/components/LoadingScreen.vue'

export default {
  name: 'QuoteCard',
  components: {
    LoadingScreen
  },
  props: [ 'quote', 'byLine' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blockquote {
  font-size: 24px;
}
.by-line {
  font-weight: 400;
}
</style>
