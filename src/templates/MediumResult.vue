<template>
  <HomeAssistantSurvey
    metaTitle = 'Hmm… '
    metaDescription = "It looks like a smart home might not be your cup of tea. But hey, who needs automation when you've got hands to switch things on and off, right? And don't worry, you can still enjoy modern conveniences in your home by incorporating a few smart devices to make life easier."
    metaImage = '/OG/result-medium.png'
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