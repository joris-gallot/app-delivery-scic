import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
