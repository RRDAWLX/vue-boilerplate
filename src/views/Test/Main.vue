<template>
  <div class="test">
    <p>vue test</p>
    <p>count: {{ count }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'test',

  computed: {
    ...mapGetters([
      'count',
    ])
  }
}
</script>

<style scoped>
.test {
  color: red;
}
</style>

