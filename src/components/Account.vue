<template>
  <LoadingScreen id="account" :data="account">
    <span>E-Mail Address: </span><span>{{ account.email }}</span></br>
    <span>Name: </span><span>{{ account.name }}</span></br>
    <span>Gender: </span><span>{{ account.gender }}</span></br>
    <QuoteCard :quote="account"></QuoteCard>
  </LoadingScreen>
</template>

<script>
import LoadingScreen from '@/components/LoadingScreen.vue'
import QuoteCard from '@/components/QuoteCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Account',
  components: { LoadingScreen, QuoteCard },
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
