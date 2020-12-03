import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import store from './store'
import Api from './services'

import { library } from '@fortawesome/fontawesome-svg-core'
import * as SolidIcons from '@fortawesome/free-solid-svg-icons'
import * as RegularIcons from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(RegularIcons.faHeart, SolidIcons.faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(Buefy)

Vue.prototype.$api = Api

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
