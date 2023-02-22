<template>
  <HomeAssistantSurvey
    metaTitle = 'Uh-oh!'
    metaDescription = "It seems like a smart home just isn't your jam. That's okay, you can always rely on carrier pigeons to get messages across, and candles to light up your home."
    metaImage = '/OG/result-low.png'
    metaRedirect
  />
  </template>

<script>
export default {
  components: {
      HomeAssistantSurvey: () => import('~/components/HomeAssistantSurvey.vue'),
    }
  }
</script>