<template>
  <div v-show="show" id="notification-bar">
    <span>{{ notification.message }}</span>
  </div>
</template>

<script>
import * as mutationTypes from '@/store/mutationTypes'
import { mapState } from 'vuex'

export default {
  name: 'NotificationBar',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === mutationTypes.NOTIFY) {
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 1000)
      }
    })
  },
  computed: {
    ...mapState({
      notification: (state) => state.notification
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #notification-bar {
    display:table;
    position: fixed;
    width: 100%;
    height: 48px;
    top:0;
    background: #32807f;
    color: white;
  }
  span {
    display:table-cell;
    vertical-align:middle;
  }
</style>
