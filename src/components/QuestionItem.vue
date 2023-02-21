<template>
  <div class="survey__item grid grid-2 animate-inside-slide in-viewport" v-in-viewport.once>
    <h3> {{ question }} </h3>
    <div class="survey__wrapper">
      <button 
        v-for="(option, index) in options" 
        :key="option.mainText"
        :class="`survey__btn survey__btn--${index}`"
        :data-value="option.value"
        @click="$emit('nextQuestion', option.value)"
      >
        <span class="survey__mainText">{{ option.mainText }}</span>
        <span v-if="option.subText" class="survey__subText">{{ option.subText }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    question: {
      type: String,
      default: ''
    },
    options: {
      type: Array
    }
  }

}
</script>

<style scoped>

  h3 {
    max-width: 458px;
    color: var(--color-light);
    font-size: calc(var(--base-font-size) * 2.2)
  }

  .survey__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .survey__btn {
    width: 100%;
    padding: calc(var(--space) * 0.5);
    margin-bottom: var(--space);
    display: flex;
    flex-direction: column;
    color: var(--color-light);
    background-color: var(--btn-color-green);
    text-align: left;
  }

  .survey__btn--1 {
    background-color: var(--btn-color-violet);
  }

  .survey__btn--2 {
    background-color: var(--btn-color-pink);
  }

  .survey__mainText {
    font-weight: 600;
    font-size: calc(var(--base-font-size) * 2);
  }

  .survey__subText {
    font-weight: 300;
    font-size: calc(var(--base-font-size) * 1);
  }

  @media screen and (max-width: 950px) {
    .survey__item.grid-2 {
      grid-template-columns: 1fr;
      text-align: center;
    }


    h3 {
      max-width: unset;
    }
  }

</style>