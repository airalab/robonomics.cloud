<template>
  <gsp-form class="survey__form" :gscriptID="gscript" :captchaID="recaptchaSitekey">
    <input
      name="email" 
      class="survey__input" 
      :class="{'sent': result === 'success'}"
      type="email" 
      placeholder="Email the result" 
      data-gsp-name="Email" 
      :data-gsp-data="data_email ? data_email : '-'" 
      v-model="data_email"
      :disabled="result === 'success'"
    >

    <input 
      v-for="(result, index) in allResults"   
      :key="index"   
      type="hidden" 
      :placeholder="result.question" 
      :data-gsp-name="result.question" 
      :data-gsp-data="result.response" 
    />

    <input
      type="hidden" 
      data-gsp-name="Result Title" 
      :data-gsp-data="score.title" 
    >

    <input
      type="hidden" 
      data-gsp-name="Result Text" 
      :data-gsp-data="score.plainText" 
    >

    <input
      type="hidden" 
      data-gsp-name="Result Pic" 
      :data-gsp-data="score.emailPic" 
    >

    <div class="google-sheets-form__actions">
      <button @click="onSubmit" v-if="result !== 'success'" class="button large" :class="{'wait': result === 'wait'}"  :disabled="result === 'error' || result === 'wait'">
        <span class="button-default" v-if="result !== 'wait'"></span>
        <span class="spinner">
          <Spinner v-if="result === 'wait'"/>
        </span>
      </button>
      <button disabled v-else class="button button-success"></button>
      <div v-if="result === 'error'" class="error">Something went  wrong :( Try again later</div>
    </div>

    <span>or</span>
    <button @click="onSubmit('no-email')">
      Continue without email
    </button>

  </gsp-form>
</template>

<script>

export default {
  components: {
    Spinner: () => import ('@/components/Spinner.vue')
  },

  props: {
    results: {
      type: Array
    },
    score: {
      type: Object
    }
  },
    
  data() {
    return {
    data_email: '',
    result: this.$response,
    interval: null,
    allResults: [],
    recaptchaSitekey: process.env.GRIDSOME_RECAPTCHA,
    gscript: process.env.GRIDSOME_SURVEY_FORM_SCRIPT,
    }
  },

  methods: {
    onSubmit(noEmail) {

      if(noEmail === 'no-email') {
        this.data_email = '';
      }

      this.interval = setInterval(() => {
        this.result = this.$response
        if(this.result === 'success') {
          this.$emit('showResults')
        }
      }, 1000)

      if (this.$response === 'success' || this.$response === 'error') {
        clearInterval(this.interval)
      }

    },
  },

  watch: {
    'result': function(old, curr) {
      if(old === 'success' || old === 'error') {
        clearInterval(this.interval)
      }
    }
  },

  mounted() {
    const allQuestions = ['1, Do you have a stable and reliable internet connection in your home?', '2, How comfortable are you with using technologies?', '3, Do you want to use smart home only locally or are you interested in remote control?', '4, How many smart devices do you currently own?', '5, How much are you willing to spend on a smart home setup?', '6, How concerned are you about privacy and security in a smart home?', '7, Have you done any research about IoT and smart home before?', '8, Have you tried using Home Assistant?', "9, What does 'smart home' mean to you?"];

    for(let i = 0; i < allQuestions.length; i++) {
      this.allResults.push({
        question: allQuestions[i],
        response: this.results[i]
      })
    }
  },
}
</script>

<style scoped>
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 632px;
    width: 100%;
    align-items: center;
    font-family: var(--font-family-code);
  }

  .google-sheets-form__actions {
    width: 100%;
  }

  .button {
    padding: 1.6rem 0.8rem;
    margin-bottom: var(--space);
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-code);
    font-size: var(--base-font-size);
    color: #fff;
    background-color: var(--color-green) ;
    background-image: url("data:image/svg+xml,%3Csvg width='89' height='30' viewBox='0 0 89 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M88.4142 16.4142C89.1953 15.6332 89.1953 14.3668 88.4142 13.5858L75.6863 0.857864C74.9052 0.0768156 73.6389 0.0768156 72.8579 0.857864C72.0768 1.63891 72.0768 2.90524 72.8579 3.68629L84.1716 15L72.8579 26.3137C72.0768 27.0948 72.0768 28.3611 72.8579 29.1421C73.6389 29.9232 74.9052 29.9232 75.6863 29.1421L88.4142 16.4142ZM0 17H87V13H0V17Z' fill='white'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100px;
    background-position: center;
    transition: background-color 0.33s ease-in-out;
    
  }

  .button:hover {
    background-color: var(--color-purple);
  }

  .button.wait {
    background-image: none;
  }

  .button-success {
    background-image: url("data:image/svg+xml,%3Csvg width='56' height='43' viewBox='0 0 56 43' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 25L16.5 39.5L54 2' stroke='white' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E");
    background-size: 50px;
    background-position: center;
  }
  .button:disabled {
    opacity: 0.7;
    filter: none;
  }
  .survey__input {
    height: 55px;
    width: 100%;
    margin-bottom: var(--space);
    padding: 15px 20px;
    font-weight: 300;
    font-size: calc(var(--base-font-size) * 1.3);
    border: 1px solid var(--color-light);
    color: var(--color-dark);
    background-color: var(--color-light);
  }

  .survey__input::placeholder {
    font-size: calc(var(--base-font-size) * 1.3);
    opacity: 0.3;
    text-align: center;
  }

  .survey__input:disabled.sent {
    background-color: var(--color-green) !important;
  }

  .survey__input.sent {
    background-color: var(--color-green) !important;
  }

  .error {
    margin-top: 20px;
  }
  .spinner {
    margin-left: 10px;
    margin-bottom: 0 !important;
  }
  .spinner svg{
    width: 50px;
    height: 50px;
  }

  button:disabled {
    cursor: none;
    pointer-events: none;
    opacity: 0.6;
  }

  .survey__form span {
    display: inline-block;
    margin-bottom: var(--space);
    font-style: italic;
    font-weight: 300;
    color: var(--color-light);
  }

  .survey__form button {
    text-decoration: underline;
    font-size: calc(var(--base-font-size) * 1.2);
    color: var(--color-light);
  }
</style>