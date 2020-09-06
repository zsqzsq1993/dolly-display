<template>
  <div id="app" class="grid">
    <div class="col-8-12 push-2-12">
      <my-header></my-header>
      <my-projects></my-projects>
    </div>
    <div class="col-2-12"></div>
  </div>
</template>

<script>
  import MyHeader from 'components/m-header/MyHeader'
  import MyProjects from 'components/m-projects/MyProjects'

  export default {
    components: {
      MyHeader,
      MyProjects
    }
  }
</script>

<style lang="stylus">
#app
  text-align center
  margin-top 60px
</style>
