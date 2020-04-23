<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" @click="clearMemory" triple />
    <Button label="/" @click="setOperation" operator />
    <Button label="7" @click="addDigit" />
    <Button label="8" @click="addDigit" />
    <Button label="9" @click="addDigit" />
    <Button label="*" @click="setOperation" operator />
    <Button label="4" @click="addDigit" />
    <Button label="5" @click="addDigit" />
    <Button label="6" @click="addDigit" />
    <Button label="-" @click="setOperation" operator />
    <Button label="3" @click="addDigit" />
    <Button label="2" @click="addDigit" />
    <Button label="1" @click="addDigit" />
    <Button label="+" @click="setOperation" operator />
    <Button label="0" @click="addDigit" double />
    <Button label="." @click="addDigit" />
    <Button label="=" @click="setOperation" operator />
  </div>
</template>

<script>
import Button from './Button'
import Display from './Display'

export default {

  components: {
    Button,
    Display,
  },

  data: () => ({
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    operands: [0, 0],
    current: 0,
  }),

  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data())
    },
    setOperation(operator) {
      console.log('Operação', operator)
    },
    addDigit(digit) {
      if (digit === '.' && this.displayValue.includes('.')) {
        return
      }
      const clearDisplay = (this.displayValue === '0') || this.clearDisplay
      const currentValue = clearDisplay ? '' : this.displayValue
      this.displayValue = `${currentValue}${digit}`
      this.clearDisplay = false
      if (digit !=='.') {
        this.operands[this.current] = Number(this.displayValue)
      }
    },
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
