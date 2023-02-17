<template>
  <div class="progress__item">
    <p v-html="text"></p>
    <div class="progress-bar">
      <span class="progress-bar__scale" :style="{width: percentage + '%', borderColor: percentage === '100' ? 'transparent' : ''}"></span>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    text: {
      type: String
    },
    percentage: {
      type: String,
      default: '0'
    }
  }

}
</script>

<style scoped>

  .progress__item p {
    max-width: 500px;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: var(--base-font-size);
  }

  .progress-bar {
    position: relative;
    max-width: 490px;
    width: 100%;
    height: 32px;
    margin-bottom: calc(var(--space) * 2);
    background-color: var(--color-purple);
    border: 1px solid var(--color-dark);
  }

  .progress-bar__scale {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-right: 1px solid var(--color-dark);
    background-color: var(--color-green);
  }


</style>