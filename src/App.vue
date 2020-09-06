<template>
  <div id="app" class="grid">
    <div class="col-8-12 push-2-12">
      <my-header></my-header>
    </div>
    <div class="col-2-12"></div>
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
  text-align center
  margin-top 60px
</style>
