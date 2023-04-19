<template>
  <Layout :useClass="false">

    <!-- meta -->

    <MetaInfo
      :pageTitle="metaTitle"
      :pageDescription="metaDescription"
      :pageImage="metaImage"
      :redirect="metaRedirect"
    />

    <section class="survey" :class="{'withBg': !showQuestion}">

      <!-- take survey -->
      <div class="survey__main layout" v-if="!showQuestion">
        <h2>How ready are you for&nbsp;smart&nbsp;home?</h2>
        <!-- <div class="link-with-arrow white"> -->
            <button class="link-with-arrow white" @click="startSurvey" aria-label="start survey for smart home">
              <span>Take a  survey</span>
              <span class="arrow animate-inside-right-fast in-viewport" v-in-viewport.once aria-hidden="true"></span>
            </button>
        <!-- </div> -->
      </div>

      <!-- questions -->
      <div class="layout survey__question" v-else>
        <p v-if="errors[questionIndex]" class="error">
          {{ error }}
        </p>
        <QuizProgress :class="{'title-green': questionIndex === questions.length}" title="How ready are you for smart home?" :percentage=" 
        String(progressBarPercentage)" class="animate-inside-slide in-viewport" v-in-viewport.once />
          <QuestionItem 
            v-for="(item, index) in questions"
            :key="item.id"
            :question="item.question"
            :options="item.options"
            v-show="index === questionIndex"
            @nextQuestion="nextQuestion"
          />

      </div>

      <!-- get results -->
      <div class="survey-get-results layout animate-inside-fast in-viewport" v-in-viewport.once v-if="questionIndex === questions.length && !isResultsShown">
        <div class="grid grid-2">
          <h3 class="survey-get-results__title">
            Almost there...
          </h3>
          <div class="survey-get-results__form">
            <QuizForm @showResults="showResults" :results="responses" :score ="result"/>
          </div>
        </div>
      </div>


      <!-- results -->
      <div class="survey-results layout animate-inside-fast in-viewport" v-in-viewport.once v-if="isResultsShown">
        <div class="grid grid-2">
          <div class="survey-results__image" >
            <g-image :src="require(`!!assets-loader!@/assets/images/${result.img}`)" :alt="result.title"/>
          </div>
          <div class="survey-results__text">
            <h3>{{ result.title }}</h3>
            <p v-html="result.text"/>
          </div>
        </div>
      </div>

      <div class="survey-results__actions layout" v-if="isResultsShown">
        <div class="share">
          <button @click="showSharePopup = true" class="share__btn">Share</button>
        </div>

        <SharePopup :class="{'active': showSharePopup}" @closeModal="closeModal" :result="result" />
      </div>


    </section>
  </Layout>
</template>

<script>
  import questions from '@/assets/data/questions.yaml';
export default {

  props: {
    metaTitle: {
      type: String,
      default: 'How ready are you for smart home?',
    },

    metaDescription: {
      type: String,
      default: 'Decentralized cloud over web3 technologies for Robotics and IoT',
    },

    metaImage: {
      type: String,
      default: '/OG/robonomics_cloud_survey.jpg',
    },

    metaRedirect: {
      type: Boolean,
      default: false
    }
  },

  components: {
    QuizProgress: () => import('~/components/QuizProgress.vue'),
    QuestionItem: () => import('~/components/QuestionItem.vue'),
    QuizForm: () => import('~/components/QuizForm.vue'),
    SharePopup: () => import('~/components/SharePopup.vue'),
  },

  data() {
    return {
      showQuestion: false,
      isResultsShown: false,
      showSharePopup: false,
      questionIndex: 0,
      responses: [],
      errors: [],
      error: '',
      result: {
        text: '',
        title: '',
        plainText: '',
        emailPic: ''
      },

      url: '',
    }
  },

  computed: {
    questions() {
      return questions
    },

    progressBarPercentage() {
      return this.questionIndex === this.questions.length ? 100 : ( 100 * ((this.questions.length + 1) * (this.questionIndex + 1)) / 100)

    }
  },

  methods: {
    prevQuestion() {
      this.questionIndex--
    },

    nextQuestion(value) {
      this.responses.push(value);
      this.questionIndex++;

      if(this.questionIndex === this.questions.length) {
        this.getResults();      
      }
    },

    startSurvey() {
      this.showQuestion = true
    },

    showResults() {
      this.isResultsShown = true
    },

    getResults() {

      const responsesString = this.responses.join(',');

      const countOne = responsesString.match(new RegExp("1", "g") || []) ? responsesString.match(new RegExp("1", "g") || []).length : 0;
      const countTwo = responsesString.match(new RegExp("2", "g") || []) ?  responsesString.match(new RegExp("2", "g") || []).length : 0;
      const countThree = responsesString.match(new RegExp("3", "g") || []) ? responsesString.match(new RegExp("3", "g") || []).length : 0;

      if(countOne > countThree && countOne > countTwo) {
        this.result.title = `Great news!`
        this.result.text = `<span class="text-with-bg">You're ready to make your home a fully smart one</span>. However, it's important to choose your cloud service wisely when connecting your devices and storing data about your space. Otherwise, you may encounter your fridge ordering milk without your consent or your vacuum secretly plotting against you.`
        this.result.plainText = `You're ready to make your home a fully smart one. However, it's important to choose your cloud service wisely when connecting your devices and storing data about your space. Otherwise, you may encounter your fridge ordering milk without your consent or your vacuum secretly plotting against you.`
        this.result.img = 'survey_sh_success.png'
        this.result.emailPic = 'https://static.robonomics.network/email/regular/robonomics-cloud-quiz-1/guy-smart-home-1.png';
      } else if (countTwo > countThree && countTwo > countOne || countTwo === countOne || countTwo === countThree) {
        this.result.title = `Don't stop now!`
        this.result.text = `<span class="text-with-bg">It looks like you have enough intention to make your home smart</span>. You're on the right path; after all, it's much more convenient not to worry about whether everything is switched off when you're going on vacation.`
        this.result.plainText = `It looks like you have enough intention to make your home smart. You're on the right path; after all, it's much more convenient not to worry about whether everything is switched off when you're going on vacation.`
        this.result.img = 'survey_sh_medium.png'
        this.result.emailPic = 'https://static.robonomics.network/email/regular/robonomics-cloud-quiz-1/guy-smart-home-2.png';
      } else {
        this.result.title = `Find your guru…`
        this.result.text = `<span class="text-with-bg">Envision your home in complete harmony with the Internet of Things</span>. Imagine your devices moving and working together effortlessly, responding to your every need. Embracing the journey of setting up your smart home can be a transformative and fulfilling experience. All it takes is a little patience, dedication, and the willingness to invite positive change into your life.`
        this.result.plainText = `Envision your home in complete harmony with the Internet of Things. Imagine your devices moving and working together effortlessly, responding to your every need. Embracing the journey of setting up your smart home can be a transformative and fulfilling experience. All it takes is a little patience, dedication, and the willingness to invite positive change into your life.`
        this.result.img = 'survey_sh_low.png'
        this.result.emailPic = 'https://static.robonomics.network/email/regular/robonomics-cloud-quiz-1/guy-smart-home-3.png';
      }
    },

    closeModal() {
      this.showSharePopup = false
    },
  },

  mounted() {
    if(this.$response === 'success') {
      location.reload()
    }
  }


}
</script>

<style scoped>
  .survey {
    background-color: var(--color-blue);
    margin-bottom: 0;
    min-height: 646px;
    height: 100%;
    /* background-image: url('../assets/images/blue__houses.png'); */
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 1080px;
  }

  .withBg {
    background-image: url('../assets/images/blue__houses.png');
  }


  h2 {
    max-width: 500px;
    color: var(--color-light);
  }

  .link-with-arrow {
    font-size: calc(var(--base-font-size) * 1.4);
  }

  .link-with-arrow button:hover {
    opacity: 0.7;
  }

  .survey-get-results {
    overflow: hidden;
  }

  .survey-results.layout {
    padding-bottom: 0.5rem;
  }

  .survey-get-results h3 {
    color: var(--color-light);
  }

  .survey-get-results__form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .survey-get-results__form span {
    display: inline-block;
    margin-bottom: var(--space);
    font-style: italic;
    font-weight: 300;
    color: var(--color-light);
  }

  .survey-get-results__form button {
    text-decoration: underline;
    font-size: calc(var(--base-font-size) * 1.2);
    color: var(--color-light);
  }

  .survey-results .grid {
    padding: var(--space);
    min-height: 520px;
    background-color: var(--color-light);
    align-items: center;
    justify-items: center;
  }

  .survey-results__text h3,
  .survey-get-results h3 {
    font-size: calc(var(--base-font-size) * 2.5);
  }
  .survey-results__text p {
    font-size: calc(var(--base-font-size) * 1.5);
    font-weight: 400;
  }

  .survey-results__image {
    max-width: 425px;
    width: 100%;
  }

  .survey-results__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .share__btn {
    padding: calc(var(--space) * 0.5) 0;
    color: var(--color-light);
    padding-right: 75px;
    font-weight: 600;
    font-size: calc(var(--base-font-size) * 2);
    background-image: url("data:image/svg+xml,%3Csvg width='46' height='50' viewBox='0 0 46 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8.33333' cy='24.9998' r='8.33333' fill='white'/%3E%3Ccircle cx='36.9046' cy='8.33333' r='8.33333' fill='white'/%3E%3Ccircle cx='36.9046' cy='41.6668' r='8.33333' fill='white'/%3E%3Cpath d='M36.5078 7.93652L8.72998 25L36.5078 42.0635' stroke='white' stroke-width='4'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 50px 50px;
    background-position: right center;
  }

  @media screen and (max-width: 1090px) {
    .survey .grid-2 {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 950px) {
    .survey {
      min-height: 400px;
    }

    .survey__main h2 {
      font-size: calc(var(--base-font-size) * 2.2);
    }
  }


</style>