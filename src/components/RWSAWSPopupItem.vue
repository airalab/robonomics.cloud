<template>
  <div class="aws-vs-rws__item">
    <h4>{{title}}</h4>
    <div class="grid grid-2">
      <div class="grid-blue rws__items">
        <ul>
          <li v-for="rwsItem in rwsItems" :key="rwsItem">{{ rwsItem }}</li>
        </ul>
      </div>
      <div class="grid-yellow aws__items">
        <ul>
          <li v-for="awsItem in awsItems" :key="awsItem">{{ awsItem }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      default: ''
    },
    rwsItems: {
      type: Array,
    },
    awsItems: {
      type: Array,
    },
  }

}
</script>

<style scoped>
  .aws-vs-rws__item h4 {
    margin-bottom: 0;
    padding: 10px;
    font-size: var(--base-font-size);
    font-weight: 500;
    color: var(--color-light);
    background-color: var(--color-dark-blue);
    text-align: center;
    text-transform: uppercase;
  }

  .rws__items,
  .aws__items {
    min-height: 85px;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }

  .aws-vs-rws__item li {
    margin-bottom: 0;
    font-weight: 500;
    font-size: calc(var(--base-font-size) * 0.8);
    text-align: left;
  }

</style>