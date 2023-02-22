
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

import VueSocialSharing from 'vue-social-sharing'

// directive for animation in view
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('MetaInfo', MetaInfo)

  Vue.use(VueSocialSharing);
}