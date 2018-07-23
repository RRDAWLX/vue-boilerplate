<template>
  <section id="app">
    <h1>{{ head }}</h1>

    <router-view />
  </section>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      head: 'My Vue App'
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  color: blue;
}
</style>

