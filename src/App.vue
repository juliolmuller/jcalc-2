<template>
  <h1>jCalc</h1>
  <Calculator />
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',

  components: {
    Calculator,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');

* {
  font-family: 'Roboto Mono', monospace;
}

html, body {
  margin: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background-color: #0F2027;
  background-image: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
  background-image: linear-gradient(to right, #2C5364, #203A43, #0F2027);
}
</style>
