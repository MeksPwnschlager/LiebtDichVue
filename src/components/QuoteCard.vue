<template>
  <div>
    <v-card class="pa-4"color="yellow lighten-3" >
      <v-responsive max-height="60vh" :aspect-ratio="1.2">
        <LoadingScreen :data="quote">
          <v-layout column justify-space-between fill-height>
            <v-layout column justify-center fill-height>
              <span
                class="blockquote">
                {{ quote.quote }}
              </span>
            </v-layout>
            <div v-if="byLine" class="blockquote">
              <span>by </span><span class="by-line">{{ quote.name }}</span>
            </div>
          </v-layout>
        </LoadingScreen>
      </v-responsive>
    </v-card>
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
#quote{
  height: 100%;
}
.blockquote {
  font-size: 24px;
  padding: 0;
}
.by-line {
  font-weight: 400;
}
</style>
