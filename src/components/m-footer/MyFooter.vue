<template>
  <div class="m-footer">
    <div class="links-wrapper">
      <links></links>
    </div>
    <div class="copy-right">
      Privacy Policy | MIT Licensed | Copyright © 2020-present Dolly
    </div>
  </div>
</template>

<script>
  import Links from '../m-links/Links'

  export default {
    components: {
      Links
    }
  }
</script>

<style lang="stylus">
  @import '~stylus/variable.styl'

  .m-footer
    margin 50px 0
    .copy-right
      margin-top 20px
      color $color-text-l
</style>
