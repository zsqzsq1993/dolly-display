<template>
  <div class="m-lang-select">
    <select name="lang-select" v-model="selectedValue" @change="onValChange" id="lang-select">
      <option :value="0" class="chinese">中文 | Chinese</option>
      <option :value="1" class="Englist">英文 | English</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: {
      language: {
        required: true,
        type: Number,
        defaults: 0
      }
    },

    data () {
      return {
        selectedValue: this.language
      }
    },

    methods: {
      onValChange () {
        this.$emit('select-lang', this.selectedValue)
      }
    }
  }
</script>

<style lang="stylus">
  @import '~stylus/variable.styl'

  .m-lang-select
    #lang-select
      padding 5px
      appearance: none
      color $color-theme
      background-color $color-background
      border-color $color-theme
      border-radius 2px
</style>
