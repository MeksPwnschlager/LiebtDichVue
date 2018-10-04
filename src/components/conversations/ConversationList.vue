<template>
  <LoadingScreen id="conversation-list" :data="conversationsObject">
    <v-list two-line>
      <ConversationPreview
        v-for="(conversation, index) in conversations"
        :conversation="conversation"
        :key="index"
        :index="index"
        :last="index + 1 === conversations.length">
      </ConversationPreview>
    </v-list>
  </LoadingScreen>
</template>

<script>
import LoadingScreen from '../LoadingScreen.vue'
import ConversationPreview from './ConversationPreview.vue'
import { mapState } from 'vuex'

export default {
  name: 'ConversationList',
  components: { LoadingScreen, ConversationPreview },
  created () {
    this.$janosh.send('Conversations')
  },
  computed: {
    conversations () {
      return Object.values(this.conversationsObject)
    },
    ...mapState({
      conversationsObject: (state) => state.janosh.conversations
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-list {
  width: 100%;
  overflow-y: scroll;
  display: block;
  height: 100%;
}
</style>
