<template>
  <LoadingScreen :data="conversations">
    <ConversationPreview
      v-for="conversation in Object.values(conversations)"
      :key="conversation.other"
      :conversation="conversation">
    </ConversationPreview>
  </LoadingScreen>
</template>

<script>
import sessionMixin from '@/mixins/session.js'
import LoadingScreen from '@/components/LoadingScreen.vue'
import ConversationPreview from '@/components/ConversationPreview.vue'
import { mapState } from 'vuex'

export default {
  name: 'ConversationList',
  mixins: [sessionMixin],
  components: { LoadingScreen, ConversationPreview },
  created () {
    this.$janosh.send('Conversations')
  },
  computed: {
    ...mapState({
      conversations: (state) => state.janosh.conversations
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
