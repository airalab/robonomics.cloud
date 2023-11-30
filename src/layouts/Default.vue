<template>
  <div>
    <Header/>
    <Hero v-if="this.$route.name === 'home'"/>
    <div :class="{'layout': useClass}">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  components: {
    Header: () => import('~/components/Header.vue'),
    Hero: () => import('~/components/Hero.vue'),
    Footer: () => import('~/components/Footer.vue')
  },

  props: {
    useClass: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    activateTracker() {
      this.$matomo && this.$matomo.disableCookies();
      this.$matomo && this.$matomo.trackPageView();
    }
  },

  mounted() {
    this.activateTracker();
  }
}
</script>

<style>

</style>
