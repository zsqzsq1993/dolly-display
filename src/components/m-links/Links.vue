<template>
  <div class="m-links">
    <div class="icon-wrapper wechat" @click="toWeChat">
      <i class="icon-changgewechat"></i>
    </div>
    <a class="icon-wrapper github" href="https://github.com/zsqzsq1993">
      <i class="icon-git"></i>
    </a>
    <div class="icon-wrapper resume" @click="toResume">
      <i class="icon-cv"></i>
    </div>
    <div class="icon-wrapper email">
      <i class="icon-email"></i>
    </div>
    <top-layer ref="toplayer">
      <div class="scan-image-wrapper"
           v-show="index === 0">
        <img src="./wechat.jpg" alt="zsqzsq1993">
      </div>
      <div class="resume-wrapper" v-show="index === 1"></div>
      <a class="icon-download-wrapper" v-show="showDownLoad" href="/resume.pdf">
        <i class="icon-download"></i>
      </a>
    </top-layer>
  </div>
</template>

<script>
  import TopLayer from '../m-top-layer/TopLayer'
  import Pdfh5 from 'pdfh5'

  export default {
    components: {
      TopLayer
    },

    data () {
      return {
        index: 0,
        pdfReady: false
      }
    },

    computed: {
      showDownLoad () {
        return this.index === 1 &&
          !/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
      }
    },

    mounted () {
      this.initPdf()
    },

    methods: {
      toWeChat () {
        this.index = 0
        this.showTopLayer()
      },

      toResume () {
        if (this.pdfReady) {
          this.index = 1
          this.showTopLayer()
        } else {
          this.toResume()
        }
      },

      showTopLayer () {
        this.$refs.toplayer.show()
      },

      initPdf () {
        this.pdf = new Pdfh5('.resume-wrapper', {
          pdfurl: './resume.pdf',
          renderType: 'svg',
          URIenable: true
        })

        this.pdf.on('complete', () => {
          this.pdfReady = true
        })

        this.pdf.on('error', error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import '~stylus/variable.styl'

  .m-links
    .icon-wrapper
      display inline-block
      margin-right 15px
      color $color-text-l
      font-size $font-size-median-x
      &:hover
        color $color-text
        cursor pointer

    .m-top-layer
      display flex
      align-items center
      justify-content center

      .scan-image-wrapper
        flex 0 0 40%
        width 40%

        img
          width 100%

      .resume-wrapper
        margin-top 100px
        height 100vh
        background-color transparent

      .icon-download-wrapper
        position absolute
        top 15px
        right 30px
        color $color-theme
        font-size $font-size-large
</style>
