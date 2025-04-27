<script setup>
defineProps({
  label: {
    type: [Number, String],
    required: true,
  },
  operator: {
    type: Boolean,
    default: false,
  },
  double: {
    type: Boolean,
    default: false,
  },
  triple: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['click']);
</script>

<template>
  <button class="button" :class="{ double, triple, operator }" @click="$emit('click', label)">
    {{ label }}
  </button>
</template>

<style>
:root {
  --btn-bg: #f0f0f0;
  --btn-border: solid 1px #888;
}

.button {
  font-size: 1.4em;
  outline: none;
  border: none;
  border-right: var(--btn-border);
  border-bottom: var(--btn-border);
  background-color: var(--btn-bg);
}

.button:active {
  background-color: #ccc;
}

.button.double {
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}

.button.operator {
  background-color: #fa8231;
  color: white;
}

.button.operator:active {
  background-color: #fa8231cc;
}
</style>
