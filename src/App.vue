<template>
  <v-app id="app">
    <NotificationBar></NotificationBar>
    <v-content>
      <v-container
      fill-height
      justify-center>
      <v-layout row>
        <v-flex offset-xs3 xs6>
          <LoadingScreen :data="ready">
            <router-view/>
          </LoadingScreen>
        </v-flex>
      </v-layout>
      </v-container>
    </v-content>
    <NavigationBar></NavigationBar>
  </v-app>
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
main {
  height: 100vh;
}
#app {
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
.container {
  background: white;
}
</style>
