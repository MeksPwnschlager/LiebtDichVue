<template>
  <LoadingScreen id="account" :data="account">
    <span>E-Mail Address: </span><span>{{ account.email }}</span></br>
    <span>Name: </span><span>{{ account.name }}</span></br>
    <span>Gender: </span><span>{{ account.gender }}</span></br>
    <span>Quote: </span></br>
    <span>{{ account.quote }}</span></br>
  </LoadingScreen>
</template>

<script>
import sessionMixin from '@/mixins/session.js'
import LoadingScreen from '@/components/LoadingScreen.vue'
import { mapState } from 'vuex'

export default {
  name: 'Account',
  mixins: [sessionMixin],
  components: { LoadingScreen },
  created () {
    this.$janosh.send('Account')
  },
  computed: {
    ...mapState({
      account: (state) => state.janosh.account
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
