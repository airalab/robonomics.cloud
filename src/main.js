
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

// directive for animation in view
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

// tracker component
import userTracker from 'vue-client-actions-tracker-component'
import '../node_modules/vue-client-actions-tracker-component/dist/vue-client-actions-tracker-component.css'

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
      emailTwitter: null
    },
   mutations: {
      SET_TWITTER_EMAIL (state, email) {
        state.emailTwitter = email;
      },
   },
  });

  if(isClient) {
    Vue.use(userTracker);

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
