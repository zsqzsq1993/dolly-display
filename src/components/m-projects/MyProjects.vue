<template>
  <div class="m-projects">
    <div class="project-wrapper"
         v-for="(project, idx) in projects"
         v-show="project.show"
         :key="project.name">
      <h1 class="title-wrapper" v-text="project.name"></h1>
      <p class="subtitle-wrapper" v-text="subTitle(project)"></p>
      <div class="image-wrapper" @click="toProjectPage(project, idx)">
        <img :src="project.imageUrl" :alt="project.name" @load="imageLoaded">
        <div class="image-filter" v-show="project.filtered"></div>
        <div class="hover-filter"></div>
      </div>
      <top-layer ref="topLayer">
        <div class="code-wrapper">
          <img :src="project.codeUrl" :alt="project.name">
        </div>
        <p class="code-jumper" v-show="!language">或以移动端浏览器<a @click.prevent.stop="jump(project)">浏览</a></p>
        <p class="code-jumper" v-show="language">Or <a @click.prevent.stop="jump(project)">preview</a> in mobile browser</p>
      </top-layer>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import projects from 'src/assets/js/projects'
  import TopLayer from '../m-top-layer/TopLayer'

  export default {
    components: {
      TopLayer
    },

    data () {
      return {
        projects,
        length: projects.length
      }
    },

    computed: {
      ...mapGetters(['language'])
    },

    watch: {
      length (newVal) {
        if (newVal === 0) {
          this.$emit('imgs-loaded')
        }
      }
    },

    methods: {
      subTitle (project) {
        return this.language
          ? project.introByEnglish
          : project.introByChinese
      },

      toProjectPage (project, index) {
        if (project.clickDisable) {
          return
        }

        if (project.onlyMobile) {
          this.$refs.topLayer[index].show()
        } else {
          location.href = project.link
        }
      },

      imageLoaded () {
        this.length--
      },

      jump (project) {
        location.href = project.link
      }
    }
  }
</script>

<style lang="stylus">
  @import '~stylus/variable.styl'
  @import '~stylus/mixin.styl'

  .m-projects
    .project-wrapper
      display inline-block
      width 50%
      box-sizing border-box
      padding 0 30px 30px 0
      text-align left
      overflow hidden
      @media screen and (max-width: 415px)
        width 100%
        padding 0
      .title-wrapper
        margin-bottom 10px
        font-size $font-size-median
        no-wrap()
      .subtitle-wrapper
        margin-bottom 10px
        color $color-text-l
        font-size $font-size-basic
        no-wrap()
      .image-wrapper
        position relative
        width 100%
        img
          border-radius 2px
        .image-filter
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          background-color $color-background-d
        .hover-filter
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          background-color transparent
          &:hover
            transition all .2s
            background-color rgba(0, 0, 0, 0.6)
            backdrop-filter blur(3px)
            cursor pointer
        img
          width 100%
      .m-top-layer
        display flex
        flex-direction column
        justify-content center
        align-items center
        .code-wrapper
          flex 0 0 auto
          width 30%
          margin-bottom 20px
          @media screen and (max-width 415px)
            flex 0 0 auto
            width 40%
          img
            width 100%
        .code-jumper
          color $color-text-ll
          font-size $font-size-median
          a
            color $color-theme
</style>
