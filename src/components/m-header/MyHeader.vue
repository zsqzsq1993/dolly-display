<template>
  <div class="m-header">
    <div class="lang-select-wrapper">
      <lang-select
        @select-lang="selectLang"
        :language="language"></lang-select>
    </div>
    <div class="introduction-wrapper">
      <h1 class="title">{{title}}</h1>
      <div class="links-wrapper">
        <div class="icon-wrapper wechat">
          <i class="icon-changgewechat"></i>
        </div>
        <div class="icon-wrapper github">
          <i class="icon-git"></i>
        </div>
        <div class="icon-wrapper resume">
          <i class="icon-cv"></i>
        </div>
        <div class="icon-wrapper email">
          <i class="icon-email"></i>
        </div>
      </div>
      <p class="content">{{introduction}}</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import { introByChinese, titleByChinese, introByEnglish, titleByEnglish } from 'js/variables'
  import LangSelect from 'components/m-language-select/LangSelect.vue'
  import * as types from 'src/store/mutation_types'

  export default {
    components: {
      LangSelect
    },

    computed: {
      title () {
        return !this.language ? titleByChinese : titleByEnglish
      },

      introduction () {
        return !this.language ? introByChinese : introByEnglish
      },

      ...mapGetters(['language'])
    },

    methods: {
      selectLang (language) {
        this[types.SET_LANGUAGE](language)
      },

      ...mapMutations([types.SET_LANGUAGE])
    }
  }
</script>

<style lang="stylus">
  @import '~stylus/variable.styl'

  .m-header
    width 100%
    text-align left
    margin-bottom 20px
    .lang-select-wrapper
      margin-bottom 10px
    .introduction-wrapper
      .title
        font-size $font-size-large
        margin-bottom 10px
      .links-wrapper
        display flex
        margin-bottom 10px
        .icon-wrapper
          flex 0 0 auto
          margin-right 15px
          color $color-text-l
          font-size $font-size-median-x
      .content
        line-height 1.3
        color $color-text-l
</style>
