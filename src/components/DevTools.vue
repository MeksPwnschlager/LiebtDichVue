<template>
  <div>
    <button type="button" @click="notifyUi()">Notify UI</button>
    </br>
    </br>
    <input
      type="text"
      placeholder="Command"
      v-model="command"></br>
    <input
      type="text"
      placeholder="Key"
      v-model="key"></br>
    <input
      type="text"
      placeholder="Value"
      v-model="value"></br>
    <button type="button" @click="sendCommand()">Send to Janosh</button>
  </div>
</template>

<script>
import sessionMixin from '@/mixins/session.js'
import * as mutationTypes from '@/store/mutationTypes'
import { log } from '@/utils.js'

export default {
  name: 'DevTools',
  mixins: [sessionMixin],
  data () {
    return {
      command: 'something',
      key: '',
      value: ''
    }
  },
  methods: {
    notifyUi () {
      this.$store.commit(mutationTypes.NOTIFY, 'Test Notification')
    },
    sendCommand () {
      log.info('JANOSH', `Sending command: ${this.command}, ${this.key}, ${this.value}`)
      this.$janosh.send(this.command, this.key, this.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
