import * as types from './mutation_types'

export default {
  [types.SET_LANGUAGE] (state, lang) {
    state.language = lang
  }
}
