<template>
  <isClient>
    <HomeAssistantSurvey/>
  </isClient>
</template>

<script>
export default {
  components: {
      HomeAssistantSurvey: () => import('~/components/HomeAssistantSurvey.vue'),
    },
  }
</script>