import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faPinterestP } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faFacebook, faTwitter, faPinterestP)




createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
