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
      head: 'Vue App'
    }
  }
}
</script>

<style>
.app {
  color: bule;
}
</style>

