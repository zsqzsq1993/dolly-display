<template>
  <div id="app" class="grid">
    <div class="col-8-12 push-2-12">
      <my-header></my-header>
      <my-projects></my-projects>
    </div>
    <div class="col-2-12"></div>
    <loading ref="loading"></loading>
  </div>
</template>

<script>
  import MyHeader from 'components/m-header/MyHeader'
  import MyProjects from 'components/m-projects/MyProjects'
  import Loading from 'components/m-loading/Loading'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      MyHeader,
      MyProjects,
      Loading
    },

    computed: {
      ...mapGetters(['language', 'scanLayer'])
    },

    watch: {
      language (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.activateLoading()
        }
      }
    },

    methods: {
      activateLoading () {
        this.$refs.loading.show()
        setTimeout(() => {
          this.$refs.loading.hide()
        }, 800)
      }
    }
  }
</script>

<style lang="stylus">
#app
  text-align center
  margin-top 60px
</style>
