<template>
  <div class="m-top-layer" v-show="showFlag">
    <div class="back-wrapper" @click.stop="hide">
      <i class="icon-back"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showFlag: false
      }
    },

    methods: {
      show () {
        this.showFlag = true
      },

      hide () {
        this.showFlag = false
      }
    }
  }
</script>

<style lang="stylus">
  @import '~stylus/variable.styl'

  .m-top-layer
    position fixed
    z-index 10
    top 0
    right 0
    bottom 0
    left 0
    background-color rgba(0, 0, 0, 0.5)
    backdrop-filter blur(10px)
    .back-wrapper
      position absolute
      top 15px
      left 15px
      color $color-theme
      font-size $font-size-large
</style>
