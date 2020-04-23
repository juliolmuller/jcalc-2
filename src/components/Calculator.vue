<template>
  <div class="calculator">
    <Display value="1234" />
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

  methods: {
    clearMemory() {
      console.log('Memória limpa')
    },
    setOperation(operator) {
      console.log('Operação', operator)
    },
    addDigit(digit) {
      console.log('Dígito', digit)
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
