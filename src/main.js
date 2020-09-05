import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import 'stylus/reset.styl'
import 'stylus/base.styl'
import 'stylus/mixin.styl'
import 'stylus/variable.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
