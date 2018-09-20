<template>
  <div>
    <button type="button" @click="janoshSendSomething()">Send Something</button>
    </br>
    <button type="button" @click="notifyUi()">Notify UI</button>
  </div>
</template>

<script>
import sessionMixin from '@/mixins/session.js'
import * as mutationTypes from '@/store/mutationTypes'
import { log } from '@/utils.js'

export default {
  name: 'DevTools',
  mixins: [sessionMixin],
  methods: {
    janoshSendSomething () {
      log.debug('Sending something')
      this.$janosh.send('publish', 'something', 'something')
    },
    notifyUi () {
      this.$store.commit(mutationTypes.NOTIFY, 'Test Notification')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
