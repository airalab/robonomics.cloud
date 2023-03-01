<template>
  <div class="progress__item">
    <p v-html="text"></p>
    <div :style="getWidth" class="progress-bar animate-inside-fill in-viewport" v-in-viewport.once >
      <span class="progress-bar__scale" :style="{borderColor: percentage === '100' ? 'transparent' : ''}"></span>
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
  },

  data() {
    return {
        color: this.percentage
    }
  },

  computed: {
    getWidth() {
      return {
        '--width': `${this.color}%`,
      }
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
    max-width: 650px;
    width: 100%;
    height: 32px;
    margin-bottom: var(--space);
    background-color: var(--color-purple);
    border: 1px solid var(--color-dark);
  }

  .progress-bar__scale {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: block;
    border-right: 1px solid var(--color-dark);
    background-color: var(--color-green);
  }

  @keyframes fillBar {
    0% {
      width: 0
    }

    100% {
      width: var(--width);
    }
  }
  .animate-inside-fill.in-viewport > * {

    animation-name: fillBar;
    animation-timing-function: linear;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;

    animation-duration: 0.5s;
  }

  


</style>