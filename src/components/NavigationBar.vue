<template>
  <v-bottom-nav
    app
    id="nav-bar"
    :active.sync="route"
    :value="true"
    absolute
    color="transparent">
    <v-btn
      color="teal"
      flat
      to="/account"
      value="account">
      <span>Account</span>
      <v-icon>person</v-icon>
    </v-btn>

    <v-btn
      color="teal"
      flat
      to="/conversations"
      value="conversations">
      <span>Conversations</span>
      <v-icon>chat_bubble</v-icon>
    </v-btn>

    <v-btn
      color="teal"
      flat
      to="/swipe"
      value="swipe">
      <span>Swipe</span>
      <v-icon>subject</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      route: 'swipe'
    }
  }
}
</script>

<style scoped>
#nav-bar {
  bottom: 0;
}
</style>
