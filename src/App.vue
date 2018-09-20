<template>
  <div v-if="this.$store.state.janosh.ready" id="app">
    <NotificationBar></NotificationBar>
    <router-view/>
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue'
import * as actionTypes from '@/store/actionTypes'

export default {
  name: 'app',
  components: { NotificationBar },
  methods: {
  },
  mounted () {
    this.$store.dispatch(actionTypes.JANOSH_SETUP)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
