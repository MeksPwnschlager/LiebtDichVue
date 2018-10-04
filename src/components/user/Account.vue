<template>
  <LoadingScreen id="account" :data="account">
    <v-layout column>
      <div class="mt-2">
        <span class="title">E-Mail Address: </span></br>
        <span class="subheading">{{ account.email }}</span><br />
      </div>
      <div class="mt-2">
        <span class="title">Name: </span><br />
        <span class="subheading">{{ account.name }}</span><br />
      </div>
      <div class="mt-2">
        <span class="title">Gender: </span><br />
        <span class="subheading">{{ account.gender }}</span>
      </div>
      <div class="mt-5">
        <QuoteCard :quote="account"></QuoteCard>
      </div>
    </v-layout>
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
