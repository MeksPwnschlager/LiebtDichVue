<template>
  <ul>
    <NavigationItem
      to="/account"
      label="Account">
    </NavigationItem>
    <NavigationItem
      to="/conversations"
      label="Conversations">
    </NavigationItem>
    <NavigationItem
      to="/swipe"
      label="Swipe">
    </NavigationItem>
  </ul>
</template>

<script>
import NavigationItem from '@/components/NavigationItem.vue'

export default {
  name: 'NavigationBar',
  components: { NavigationItem }
}
</script>

<style>
.icon {
  width: 32px;
  height: 32px;
  display: inline-block;
  background-size: cover;
}
#link-Account > .icon {
  background-image: url('/static/account.svg');
}
#link-Account.router-link-active > .icon {
  background-image: url('/static/account_active.svg');
}
#link-Conversations > .icon {
  background-image: url('/static/conversations.svg');
}
#link-Conversations.router-link-active > .icon {
  background-image: url('/static/conversations_active.svg');
}
#link-Swipe > .icon {
  background-image: url('/static/swipe.svg');
}
#link-Swipe.router-link-active > .icon {
  background-image: url('/static/swipe_active.svg');
}
</style>
<style scoped>
ul {
  display: flex;
  align-items: stretch; /* Default */
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
}
</style>
