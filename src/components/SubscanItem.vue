<template>
  <div class="subscan__item">
    <span>{{ amount }}</span>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {

  props: {
    amount: {
      type: String,
      default: '0'
    },
    title: {
      type: String,
      default: ''
    }
  }

}
</script>

<style scoped>
  h3 {
    font-size: calc(var(--base-font-size) * 0.7);
    font-weight: 300;
    line-height: 2;
  }
  
  span {
    font-weight: 700;
    font-size: calc(var(--base-font-size) * 1.5);
  }
</style>