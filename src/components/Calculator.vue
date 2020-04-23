<template>
  <div class="calculator">
    <Display value="1234" />
  </div>
</template>

<script>
import Display from './Display'

export default {

  components: {
    Display,
  },
}
</script>

<style scoped>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
