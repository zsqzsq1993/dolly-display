<template>
  <div id="app" class="grid">
    <div class="col-10-12 push-1-12">
      <my-header></my-header>
      <my-projects
        @imgs-loaded="imageslag = true">
      </my-projects>
    </div>
    <div class="footer-wrapper col-1-1">
      <my-footer></my-footer>
    </div>
    <loading ref="loading"></loading>
  </div>
</template>

<script>
  import MyHeader from 'components/m-header/MyHeader'
  import MyProjects from 'components/m-projects/MyProjects'
  import Loading from 'components/m-loading/Loading'
  import MyFooter from 'components/m-footer/MyFooter'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      MyHeader,
      MyProjects,
      Loading,
      MyFooter
    },

    data () {
      return {
        imageslag: false,
        timerFlag: false
      }
    },

    computed: {
      ...mapGetters(['language', 'scanLayer'])
    },

    watch: {
      language (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.activateLoading()
        }
      },

      imageslag (newVal) {
        if (newVal && this.timerFlag) {
          this.hideLoading()
        }
      },

      timerFlag (newVal) {
        if (newVal && this.imageslag) {
          this.hideLoading()
        }
      }
    },

    mounted () {
      this.activateLoading()
    },

    methods: {
      showLoading () {
        this.$refs.loading.show()
      },

      hideLoading () {
        this.$refs.loading.hide()
      },

      activateLoading () {
        this.timerFlag = false

        this.showLoading()

        setTimeout(() => {
          this.timerFlag = true
        }, 300)
      }
    }
  }
</script>

<style lang="stylus">
#app
  text-align center
  margin-top 60px
</style>
