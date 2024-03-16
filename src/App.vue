<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'App'
    }
  }
}
</script>

<style lang="scss">
#app {
  color: var(--font-color);
}
</style>
