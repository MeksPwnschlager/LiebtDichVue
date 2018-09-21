<template>
  <div>
    <div>
      <span>{{ conversation.other }}</span> <br>
      <span v-if="!empty">{{ lastSender }}</span><span>: {{ lastMessage.text }} </span><span> {{ lastDate | moment("from", "now") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConversationPreview',
  props: {
    conversation: Object
  },
  computed: {
    lastMessage () {
      let msgs = this.conversation.messages
      return msgs[msgs.length - 1]
    },
    lastDate () {
      return new Date(0).setUTCMilliseconds(this.lastMessage.epoch)
    },
    lastSender () {
      let other = this.conversation.other
      return this.lastMessage.recipient === other ? 'You' : other
    },
    empty () {
      return this.conversation.messages.length === 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
