<template>
  <div>
    <Header/>
    <Hero v-if="this.$route.name === 'home'"/>
    <div :class="{'layout': useClass}">
      <slot/>
    </div>
    <client-only>

      <UserTracker v-show="$cookies && !$cookies.get('userTracker') && !this.$store.state.userTracker.option" />

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
    Footer: () => import('~/components/Footer.vue'),
    UserTracker: () => import('~/components/UserTracker.vue')
  },

  props: {
    useClass: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
      if($cookies.get('userTracker') === 'allow metrics') {
        this.$gtag.pageview(this.$route)
        this.$nextTick(() => {
          if (this.$metrika) {
            this.$metrika.hit(this.$route)
          }
        });
      }
    }
}
</script>

<style scoped>

</style>
