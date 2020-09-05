<template>
  <div id="app">
    <my-header></my-header>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'

  export default {
    components: {
      MyHeader
    }
  }
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
