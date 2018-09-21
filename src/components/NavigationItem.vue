<template>
  <li>
    <router-link class="router-link" :id="`link-${label}`" tag="div" :to="to">
      <div class="icon"></div>
      <span>{{ label }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    to: String,
    label: String,
    image: String,
    activeimage: String
  }
}
</script>

<style scoped>
.router-link {
  color: #8C8AB1
}
.router-link.router-link-active {
  color: #FFFFFF
}
span {
  display: block;
  font-size: 16px;
  font-style: 800;
}
li {
  display: block;
  flex: 1 1 auto;
  list-style-type: none;
  background: #1B11B1;
  padding: 8px
}
svg {
  fill: #f3f3f3;
}
</style>
