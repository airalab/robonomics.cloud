<template>
  <HomeAssistantSurvey
    metaTitle = 'Great news!'
    metaDescription = "You're all set for a smart home. Just be careful with which cloud service you choose to centralize your devices and data. Otherwise, you may find your fridge ordering milk without your consent, and your vacuum secretly plotting against you."
    metaImage = '/OG/result-success.png'
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