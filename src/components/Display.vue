<script setup>
defineProps({
  value: {
    type: [Number, String],
    required: true,
  },
});
</script>

<template>
  <div class="display">
    {{ value }}
  </div>
</template>

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
