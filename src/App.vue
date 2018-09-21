<template>
  <div id="app">
    <NotificationBar></NotificationBar>
    <LoadingScreen :data="ready">
      <router-view/>
    </LoadingScreen>
    <NavigationBar></NavigationBar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NotificationBar from '@/components/NotificationBar.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import * as actionTypes from '@/store/actionTypes'

export default {
  name: 'app',
  components: { NotificationBar, NavigationBar, LoadingScreen },
  computed: {
    ...mapState({
      ready: (state) => state.janosh.ready
    })
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
body {
  margin: 0;
  padding: 0;
}
</style>
