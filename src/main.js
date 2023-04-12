
// styles
import '~/assets/styles/base.css'
import '~/assets/styles/reset.css'
import '~/assets/styles/variables.css'
import '~/assets/styles/typography.css'
import '~/assets/styles/utils.css'
import '~/assets/styles/animation.css'

import DefaultLayout from '~/layouts/Default.vue'
import MetaInfo from '~/components/MetaInfo.vue'


import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies';
import VueGtag from "vue-gtag";
import VueYandexMetrika from 'vue-yandex-metrika'

// directive for animation in view
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { 
  faFacebook, 
  faTwitter
 } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('MetaInfo', MetaInfo)

    /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  /* add icons to the library */
  library.add(
    faFacebook,
    faTwitter
  )

  appOptions.store = new Vuex.Store({
    state: {
      userTracker: {},
    },
   mutations: {
      SET_USER_TRACKER(state, userTracker) {
        state.userTracker = userTracker;
      }
   },
  });


  Vue.use(VueGtag, {
    config: { id: "G-MG4RLWF3MM" },
    // includes: [
    //   { id: 'AW-11021567627' },
    // ]
  });

  if(isClient) {
    Vue.use(VueCookies, { expire: '90d'});
    Vue.$cookies.config('90d')

    Vue.use(VueYandexMetrika, {
      id: 93188742,
      env: process.env.NODE_ENV,
      options:  {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        
      }
    });
  }
}
