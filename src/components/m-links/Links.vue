<template>
  <div class="m-links">
    <div class="icon-wrapper wechat" @click="toWeChat">
      <i class="icon-changgewechat"></i>
    </div>
    <a class="icon-wrapper github" href="https://github.com/zsqzsq1993">
      <i class="icon-git"></i>
    </a>
    <div class="icon-wrapper resume">
      <i class="icon-cv"></i>
    </div>
    <div class="icon-wrapper email">
      <i class="icon-email"></i>
    </div>
    <slide-transition>
      <top-layer ref="toplayer">
        <div class="scan-image-wrapper">
          <img src="./wechat.jpg" alt="zsqzsq1993">
        </div>
      </top-layer>
    </slide-transition>
  </div>
</template>

<script>
  import TopLayer from '../m-top-layer/TopLayer'
  import SlideTransition from '../m-transition/SlideTransition'

  export default {
    components: {
      TopLayer,
      SlideTransition
    },

    methods: {
      toWeChat () {
        this.$refs.toplayer.show()
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
    .m-top-layer
      display flex
      align-items center
      justify-content center
      .scan-image-wrapper
        flex 0 0 50%
        width 50%
        img
          width 100%
</style>
