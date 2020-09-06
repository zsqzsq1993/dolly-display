import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'

import 'stylus/reset.styl'
import 'stylus/base.styl'
import 'stylus/mixin.styl'
import 'stylus/variable.styl'
import 'css/simplegrid.css'
import 'css/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
