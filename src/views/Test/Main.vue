<template>
  <div class="test">
    <p>vue test</p>
    <p>count: {{ count }}</p>
    <div>
      <img src="../../assets/test/large.png" />
      <p>large image</p>
    </div>
    <div>
      <img src="../../assets/test/small.png" />
      <p>small image</p>
    </div>
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
  },

  created() {
    console.log('created1')
  }
}
</script>

<style lang="less" scoped>
.test {
  display: flex;
  flex-direction: column;
  color: red;

  p:last-child {
    color: green;
  }
}
</style>

