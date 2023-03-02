<template>
  <div class="subscan__item" >
      <span class="animate-counter in-viewport" v-in-viewport.once> {{ getNumber }}</span>
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
  },

  data() {
    return {
      number: 0,
      interval: false
    }
  },

  computed: {
    getNumber() {
      return this.number
    }
  },

  watch: {
    'number' () {
      clearInterval(this.interval);

      const amount = parseInt(this.amount);

      if(amount == this.number) {
        return;
      }

      this.interval = setInterval(() => {
        if(this.number != amount) {
          let change = (amount - this.number) / 10;
          change = change >= 0 ? Math.ceil(change) : Math.floor(change);
          this.number = this.number + change;
        }
      }, 80);
    }
  },

  mounted() {

    if(this.amount ===  '4332505') {
        this.number = 4331500
      } else if(this.amount ===  '7755') {
        this.number = 6000
      } else {
        this.number = 1000
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
    display: inline-block;
    font-weight: 700;
    font-size: calc(var(--base-font-size) * 1.5);
    opacity: 0;
  }

  .animate-counter.in-viewport {
    animation-name: animate-counter;
    animation-timing-function: linear;
		animation-delay: 0.5s;
		animation-fill-mode: forwards;
		animation-duration: 0.5s;
  }


  @keyframes animate-counter {
    0% {transform: translateY(10px); filter: blur(10px); }
    100% { opacity: 1; transform: translateY(0); filter: blur(0); }
  }



</style>