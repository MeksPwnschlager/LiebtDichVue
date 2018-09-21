<template>
  <LoadingScreen id="conversation" :data="conversation">
    <Message
      v-for="(message, index) in conversation.messages"
      :key="index"
      :message="message"
      :byOther="message.recipient !== conversation.other">
    </Message>
  </LoadingScreen>
</template>

<script>
import sessionMixin from '@/mixins/session.js'
import LoadingScreen from '@/components/LoadingScreen.vue'
import Message from '@/components/Message.vue'
import * as mutationTypes from '@/store/mutationTypes.js'
import { mapState } from 'vuex'

export default {
  name: 'Conversation',
  mixins: [sessionMixin],
  components: { LoadingScreen, Message },
  created () {
    this.$store.commit(mutationTypes.JANOSH_CLEAR_STATE, 'selectedConversation')
    this.$janosh.send('Conversation', this.$route.params.other)
  },
  computed: {
    ...mapState({
      conversation: (state) => state.janosh.selectedConversation
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
