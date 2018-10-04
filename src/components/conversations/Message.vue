<template>
  <v-card
    class="mt-2 pa-2 message"
    :class="{'message-byother': byOther}"
    :color="!byOther ? 'blue lighten-4':'white'">
    <v-layout column justify-space-between>
      <v-flex
        xs2
        class="timestamp"
        :class="{'timestamp-byother': byOther}">
        <span class="text--secondary"> {{ date | moment('from', 'now') }} </span>
      </v-flex>
      <v-flex xs8>
        <span> {{ message.text }} </span><br>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: Object,
    byOther: Boolean
  },
  computed: {
    date () {
      return new Date(0).setUTCMilliseconds(this.message.epoch)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  text-align: right;
  word-break: break-all;
}
.timestamp {
  text-align: left;
}

.message-byother {
  text-align: left;
}
.timestamp-byother {
  text-align: right;
}
</style>
