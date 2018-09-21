<template>
  <div>
    <span> {{ message.text }} </span><br>
    <span> {{ date | moment('from', 'now') }} </span>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: Object,
    byOther: Boolean
  },
  computed: {
    date () {
      return new Date(0).setUTCMilliseconds(this.message.epoch)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
