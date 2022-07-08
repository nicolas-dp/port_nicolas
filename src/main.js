import Vue from 'vue'
import App from './App.vue'

/* Fontawsome */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret, faHouse, faPhone, faAddressCard, faFileInvoice, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret, faGithub, faLinkedin, faInstagram, faHouse, faPhone, faAddressCard, faFileInvoice, faBriefcase, faGraduationCap)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

