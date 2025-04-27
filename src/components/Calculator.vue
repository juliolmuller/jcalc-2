<script setup>
import { ref } from 'vue';

import Button from './Button.vue';
import Display from './Display.vue';

const emit = defineEmits(['error']);

const displayValue = ref('0');
const clearDisplay = ref(false);
const operation = ref(null);
const operands = ref([0, 0]);
const current = ref(0);

function clearMemory() {
  displayValue.value = '0';
  clearDisplay.value = false;
  operation.value = null;
  operands.value = [0, 0];
  current.value = 0;
}

function setOperation(operator) {
  const isEquals = operator === '=';

  if (!isEquals && current.value === 0) {
    operation.value = operator;
    clearDisplay.value = true;
    current.value = 1;
  } else {
    try {
      operands.value[0] = eval(`${operands.value[0]} ${operation.value} ${operands.value[1]}`);
    } catch (error) {
      emit('error', error);
    }

    displayValue.value = operands.value[0];
    operation.value = isEquals ? operation.value : operator;
    current.value = isEquals ? 0 : 1;
    clearDisplay.value = isEquals;
  }
}

function addDigit(digit) {
  if (digit === '.' && displayValue.value.includes('.')) {
    return;
  }

  const isDisplayClear = displayValue.value === '0' || clearDisplay.value;
  const currentValue = isDisplayClear ? '' : displayValue.value;

  displayValue.value = `${currentValue}${digit}`;
  operands.value[current.value] = displayValue.value;
  clearDisplay.value = false;
}
</script>

<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" triple @click="clearMemory" />
    <Button label="/" operator @click="setOperation" />
    <Button label="7" @click="addDigit" />
    <Button label="8" @click="addDigit" />
    <Button label="9" @click="addDigit" />
    <Button label="*" operator @click="setOperation" />
    <Button label="4" @click="addDigit" />
    <Button label="5" @click="addDigit" />
    <Button label="6" @click="addDigit" />
    <Button label="-" operator @click="setOperation" />
    <Button label="1" @click="addDigit" />
    <Button label="2" @click="addDigit" />
    <Button label="3" @click="addDigit" />
    <Button label="+" operator @click="setOperation" />
    <Button label="0" double @click="addDigit" />
    <Button label="." @click="addDigit" />
    <Button label="=" operator @click="setOperation" />
  </div>
</template>

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
