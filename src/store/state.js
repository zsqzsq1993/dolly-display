import { langKey } from 'js/variables'

export default {
  language: localStorage.getItem(langKey) || 0
}
