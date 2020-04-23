<template>
  <div class="display">
    {{ value }}
  </div>
</template>

<script>
export default {

  props: {
    value: [Number, String],
  },
}
</script>

<style>
.display {
  grid-column: span 4;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #0004;
  padding: 12px;
  font-size: 2.2em;
  overflow: hidden;
}
</style>
