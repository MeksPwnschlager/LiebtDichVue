<template>
  <LoadingScreen id="conversation" :data="conversation">
    <v-layout column>
    <v-layout id="messages" class="pa-1" column justify-end>
      <Message
        v-for="(message, index) in conversation.messages"
        :key="index"
        :message="message"
        :byOther="message.recipient !== conversation.other">
      </Message>
    </v-layout>
    <SendMessage class="mt-2" @send="sendMessage"></SendMessage>
    </v-layout>
  </LoadingScreen>
</template>

<script>
import LoadingScreen from '@/components/LoadingScreen.vue'
import Message from './Message.vue'
import SendMessage from './SendMessage.vue'
import * as mutationTypes from '@/store/mutationTypes.js'
import { mapState } from 'vuex'

export default {
  name: 'Conversation',
  components: { LoadingScreen, Message, SendMessage },
  created () {
    this.$store.commit(mutationTypes.JANOSH_CLEAR_STATE, 'selectedConversation')
    this.$janosh.send('Conversation', this.$route.params.other)
  },
  computed: {
    ...mapState({
      conversation: (state) => state.janosh.selectedConversation
    })
  },
  methods: {
    sendMessage (message) {
      this.$janosh.send(
        'SendMessage',
        JSON.stringify({
          'subject': '',
          'text': message,
          'recipient': this.conversation.other
        })
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#messages {
  overflow-y: scroll;
  display: block;
  height: 100%;
}
</style>
