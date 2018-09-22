<template>
  <v-card flat>
    <v-list-tile
      :key="conversation.other"
      avatar
      ripple
      :to="`/conversation/${conversation.other}`">

      <v-list-tile-content>
        <v-list-tile-title>
          {{ conversation.other }}
        </v-list-tile-title>
        <div v-if="!empty">
          <v-list-tile-sub-title
            class="text--primary">
            {{ lastMessageInfoString }}
          </v-list-tile-sub-title>
          <v-list-tile-sub-title>
            {{ lastMessage.text }}
          </v-list-tile-sub-title>
        </div>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider
      v-if="!last"
      :key="index">
    </v-divider>
  </v-card>
</template>

<script>
export default {
  name: 'ConversationPreview',
  props: {
    conversation: Object,
    index: Number,
    last: Boolean
  },
  computed: {
    lastMessage () {
      const msgs = this.conversation.messages
      return msgs[msgs.length - 1]
    },
    lastDate () {
      return new Date(0).setUTCMilliseconds(this.lastMessage.epoch)
    },
    lastSender () {
      const other = this.conversation.other
      return this.lastMessage.recipient === other ? 'You' : other
    },
    lastMessageInfoString () {
      const timestamp = this.$moment(this.lastDate).fromNow()
      const sender = this.lastSender
      return `${sender}, ${timestamp}`
    },
    empty () {
      const msgs = this.conversation.messages
      return !msgs || msgs.length === 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
