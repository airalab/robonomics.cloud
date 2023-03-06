<template>
  <div class="quiz-progress">
    <div class="quiz-bar">
      <span class="quiz-bar__scale" :style="{width: percentage + '%'}"></span>
    </div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      default: ''
    },
    percentage: {
      type: String,
      default: '0'
    }
  }

}
</script>

<style scoped>

  .quiz-progress {
    margin-bottom: 0;
  }

  h2 {
    color: var(--color-light);
    font-size: calc(var(--base-font-size) * 1.5);
  }

  .quiz-bar {
    position: relative;
    height: 7px;
    width: 100%;
    background-color: var(--color-light);
  }

  .quiz-bar__scale {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--color-green);
  }

  .title-green h2 {
    color: var(--color-green);
  }


  @media screen and (max-width: 560px) {
    h2 {
      font-size: calc(var(--base-font-size) * 1.1) 
    }
  }
</style>