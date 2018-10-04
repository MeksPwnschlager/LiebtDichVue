import * as actionTypes from '@/store/actionTypes'

export default {
  created () {
    this.$store.dispatch(actionTypes.JANOSH_LOGIN, { redirect: false })
  }
}
