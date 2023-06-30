<template>
  <div>
    <Header/>
    <Hero v-if="this.$route.name === 'home'"/>
    <div :class="{'layout': useClass}">
      <slot/>
    </div>
    <client-only>

      <userTracker
        privacyPolicyLink="/privacy-policy"
        classCustom="my-tracker"
        @activateTracker="activateTracker"
      />

    </client-only>
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
      if(this.$matomo) {
          this.$matomo && this.$matomo.setConsentGiven();
          this.$matomo && this.$matomo.enableLinkTracking();
          this.$matomo && this.$matomo.trackPageView();
      }
    }
  },
}
</script>

<style>

  .my-tracker.user-tracker {
    background-color: var(--color-dark-purple);
  }

  .my-tracker button:hover {
    color: var(--color-light);
    background-color: var(--color-blue);
  }

</style>
