<template>
  <section class="app">
    <h1>{{ head }}</h1>
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

