
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
      emailTwitter: null
    },
   mutations: {
      SET_USER_TRACKER(state, userTracker) {
        state.userTracker = userTracker;
      },
      SET_TWITTER_EMAIL (state, email) {
        state.emailTwitter = email;
      },
   },
  });


  Vue.use(VueGtag, {
    config: { id: "G-MG4RLWF3MM" },
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

    head.script.push({
      // twitter pixel innerHTML
      innerHTML: `
      !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
      },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
      a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
      twq('config','o0lc5');
      twq('event', 'tw-o0lc5-oejsq', {
        email_address: ${appOptions.store.state.emailTwitter}
      });
      twq('track','PageView');
      `,
      body: true,
    });
  }
}
