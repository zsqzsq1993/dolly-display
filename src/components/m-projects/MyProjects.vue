<template>
  <div class="m-projects">
    <div class="project-wrapper"
         v-for="project in projects"
         v-show="project.show"
         :key="project.name">
      <h1 class="title-wrapper" v-text="project.name"></h1>
      <p class="subtitle-wrapper" v-text="subTitle(project)"></p>
      <div class="image-wrapper">
        <img :src="project.url" :alt="project.name">
        <div class="image-filter" v-if="project.filtered"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import projects from 'src/assets/js/projects'

  export default {
    data () {
      return {
        projects
      }
    },

    computed: {
      ...mapGetters(['language'])
    },

    methods: {
      subTitle (project) {
        return this.language
          ? project.introByEnglish
          : project.introByChinese
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
      padding 0 20px 20px 0
      text-align left
      overflow hidden
      @media screen and (max-width: 415px)
        width 100%
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
        .image-filter
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          background-color $color-background-d
        img
          width 100%
</style>
