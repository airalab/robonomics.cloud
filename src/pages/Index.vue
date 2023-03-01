<template>
  <Layout :useClass="false">

    <!-- meta -->
    <MetaInfo
      pageTitle="Robonomics Web Services"
      pageDescription="Decentralized cloud over web3 technologies for Robotics and IoT."
      pageImage="/OG/robonomics_cloud.jpg"
    />

    <!-- polkadot ecosystem -->
    <section class="polkadot-ecosystem animate-inside in-viewport" v-in-viewport.once>
      <div class="layout">
        <h2>Polkadot ecosystem</h2>
        <p>Robonomics launched its own parachain, a specialized blockchain, in Kusama network. It allows to scale up launching and sending a telemetry of IoT devices by performing transactions within network.</p>

        <div class="wrapper">
          <div class="subscan">
            <g-link to="https://robonomics.subscan.io/" aria-label="visit subscan">
              <g-image src="~/assets/images/subscan.png" alt="subscan"/>
            </g-link>
            <div class="subscan__stats">
              <SubscanItem 
                v-for="item in subscanItems" 
                :key="item.id"
                :title="item.title"
                :amount="item.amount"
              />
            </div>
          </div>


          <div class="text-bubble__wrapper animate-inside-float-scale in-viewport" v-in-viewport.once>

            <div class="text-bubble">
              <p> During 2022, the Robonomics parachain in Kusama was used in a dozen R&D projects and processed more than 4 million transactions for IoT devices in total.</p>
            </div>

          </div>



        </div>
      </div>
    </section>

    <!-- No third parties -->
    <section class="no-third-parties animate-inside in-viewport" v-in-viewport.once>
      <div class="layout wrapper">
        <div>
          <h2>No third parties</h2>
          <p>With RWS you will have tha ability to control Smart home remotely without third party corporations, own your data, do not share with the vendor, escape centralized cloud server shutdowns.</p>
        </div>
        <div class="link-with-arrow column link-with-arrow--mw animate-inside-left in-viewport" v-in-viewport.once >
          <button @click="showModal = true" aria-label="open rws vs aws popup">
            RWS vs AWS specification&nbsp;table
          </button>
        </div>
      </div>
    </section>

    <!-- join our progress -->
    <section class="join-our-progress section-purple animate-inside in-viewport" v-in-viewport.once>
      <div class="layout">
        <h2>Join our progress</h2>

        <div class="wrapper">
          <div class="join-our-progress__our-progress">
            <ProgressBar
              v-for="progress in progressItems" 
              :key="progress.id"
              :text="progress.text"
              :percentage="progress.percentage"
            />
          </div>
          <g-link class="join-our-progress__survey__link animate-inside-swing" to="/smart-home-survey" aria-label="take our survey" v-in-viewport>
            <div class="title-with-bg">
              <span>How ready are you for smart home?</span>
            </div>
            <span>Take our survey</span>
          </g-link>
        </div>
      </div>
    </section>


    <!-- decentralized web app -->

    <section class="dapp section-purple animate-inside in-viewport" v-in-viewport.once>
      <div class="layout">
        <h2>Decentralized web app </h2>
        <p>
          We are building decentralized application for the&nbsp;control&nbsp;of&nbsp;home IoT infrastructure with Robonomics and Home Assistant.
        </p>
        <div class="wrapper"> 
          <g-image src="~/assets/images/computer.png" alt="screen"/>
          <div class="dapp__content">
            <p>Within the next months there are 3 key services will be available:</p>
            <ul class="dapp__list list-with-bullets">
              <li>Smart Home security backup</li>
              <li>Remote control with encryption</li>
              <li>User Management & Access Control</li>
            </ul>
            <div class="link-with-arrow animate-inside-left in-viewport" v-in-viewport.once>
              <g-link to="https://dapp.robonomics.network/#/" aria-label="visit our dapp">
                dapp.robonomics.network
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- how to connect Home Assistant -->
    <section class="home-assistant section-purple animate-inside in-viewport" v-in-viewport.once>
      <div class="layout">
        <h2>How to connect Home Assistant</h2>
        <p>Home Assistant is an open-source home automation system that provides a centralized hub for controlling smart devices in your home network. By integrating with RWS, a decentralized cloud service, you can enhance the functionality and security of your smart home.</p>
        <div class="link-with-arrow animate-inside-left in-viewport" v-in-viewport.once>
          <g-link to="https://wiki.robonomics.network/docs/robonomics-smart-home-overview" aria-label="check our wiki">
            Watch out the guide on Wiki
          </g-link>
        </div>
      </div>
    </section>

    <!-- dive deeper -->
    <section class="dive-deep section-purple animate-inside in-viewport" v-in-viewport.once>
      <div class="layout">
        <h2>Dive deeper</h2>
        <p>Take a <b>free online course</b> “Sovereign Smart Home” on Robonomics academy and get:</p>
        <ul class="dive-deep__list list-with-bullets">
          <li>Knowledge of smart home architecture based on common protocols and developments</li>
          <li>Practical skills for setting up and connecting smart home equipment</li>
          <li>Basic skills for using the Robonomics parachain for IoT</li>
        </ul>
        <div class="link-with-arrow animate-inside-left in-viewport" v-in-viewport.once>
          <g-link to="https://robonomics.academy/en/online-courses/smart-home-course/" aria-label="visit our academy and check its courses">
            Start course now
          </g-link>
        </div>
      </div>
    </section>

    <Popup :class="{'active': showModal}" @closeModal="closeModal"/>

  </Layout>
</template>

<script>
export default {

  components: {
    SubscanItem: () => import('~/components/SubscanItem.vue'),
    ProgressBar: () => import('~/components/ProgressBar.vue'),
    Popup: () => import('~/components/RWSAWSPopup.vue'),
  },

  data() {
    return {
      subscanItems: [
        {
          id: 0,
          amount: '7 755',
          title: 'Transfers'
        },
        {
          id: 1,
          amount: '4 332 505',
          title: 'Signed Extrinsics'
        },
        {
          id: 2,
          amount: '2 862',
          title: 'Holders'
        },
      ],

      progressItems: [
        {
          id: 0,
          text: '2023 year lease on Kusama is paid',
          percentage: '100'
        },
        {
          id: 1,
          text: '90% progress with <a class="link" href="https://wiki.robonomics.network/docs/robonomics-smart-home-overview" target="_blank" aria-label="check our smart home wiki page">Smart home section on Wiki</a>',
          percentage: '90'
        },
        {
          id: 2,
          text: 'First <a class="link" href="https://robonomics.academy/en/online-courses/smart-home-course/" target="_blank" aria-label="check our smart home course">deep dive course</a> for IoT infrastructure owners is available on Robonomics.Academy',
          percentage: '35'
        },
        {
          id: 3,
          text: 'Major <a class="link" href="https://dapp.robonomics.network/#/" target="_blank" aria-label="check our dapp">(D)app</a> updates expected on Q1 2023',
          percentage: '75'
        }
      ],

      showModal: false
    }
  },

  methods: {
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
  .polkadot-ecosystem {
    position: relative;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .subscan {
    width: 100%;
    margin-top: calc(var(--space) * 3);
  }

  .subscan a {
    display: inline-block;
    margin-bottom: var(--space-text);
  }

  .subscan__stats {
    max-width: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text-bubble__wrapper {
    margin-top: 30px;
    flex-shrink: 0;
    max-width: 421px;
    width: 100%;
  }

  .text-bubble {
    height: 376px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='421' height='376' viewBox='0 0 421 376' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='233' cy='188' r='188' fill='%23464648'/%3E%3Cpath d='M0 188L61.5 154.225L61.5 221.775L0 188Z' fill='%23464648'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0;
  }

  .text-bubble p {
    max-width: 310px;
    padding-left: 52px;
    font-weight: 500;
    color: var(--color-light);
    font-style: italic;
    font-size: var(--base-font-size)
  }

  .no-third-parties .link-with-arrow {
    margin-left: var(--space);
    align-self: end;
  }

  .no-third-parties .link-with-arrow button {
    background-size: contain;
  }

  .join-our-progress h2 {
    margin-bottom: calc(var(--space) * 3);
  }

  .join-our-progress__our-progress {
    width: 100%;
  }

  .join-our-progress__survey__link {
    position: relative;
    max-width: 427px;
    width: 100%;
    height: 453px;
    align-self: center;
  }

  .join-our-progress__survey__link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 25px;
    max-width: 402px;
    width: 100%;
    height: 402px;
    background-color: var(--color-light);
    border-radius: 100%;
  }

  .join-our-progress__survey__link::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/girl.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 269px 282px;
  }

  .join-our-progress__survey__link span {
    position: absolute;
    top: 46%;
    left: 65px;
    font-size: calc(var(--base-font-size) * 1.3);
    color: var(--color-blue);
    font-weight: 500;
    z-index: 10;
    transition: color 0.33s ease-in-out;
  }

  .join-our-progress__survey__link:hover span {
    color: var(--color-purple);
  }

  .title-with-bg {
    max-width: 265px;
    position: absolute;
    top: 22%;
    left: 0;
  }


  .title-with-bg span {
    position: relative;
  }

  .dapp .wrapper {
    min-height: 360px;
  }

  .dapp .wrapper img {
    display: block;
    align-self: end;
    width: 100%;
    max-width: 322px;
  }

  .dapp__content {
    display: flex;
    flex-direction: column;
  }

  .dapp__list {
    padding-left: calc(var(--space) * 2);
    margin-bottom: calc(var(--space) * 3);
  }

  .dapp__list li {
    font-weight: 500;
    margin-bottom: 0;
  }


  .home-assistant .layout,
  .dive-deep .layout  {
    display: flex;
    flex-direction: column;
  }

  .dapp p {
    max-width: 655px;
  }

  .dive-deep p,
  .home-assistant p  {
    max-width: 755px;
  }

  .home-assistant .link-with-arrow,
  .dive-deep .link-with-arrow,
  .dapp .link-with-arrow {
    align-self: end;
  }

  .dive-deep__list {
    max-width: 728px;
  }

  .dive-deep__list li {
    font-weight: 300;
    font-size: calc(var(--base-font-size) * 1.2);
    margin-bottom: 0;
  }

  @media screen and (max-width: 1050px) {

    .polkadot-ecosystem,
    h2 {
      text-align: center;
    }

    p {
      max-width: unset;
    }
    .wrapper {
      flex-direction: column;
      align-items: center;
    }

    .no-third-parties .link-with-arrow {
      margin-left: 0;
      align-self: unset;
    }

    .no-third-parties .link-with-arrow button {
      background-size: auto;
    }

    .dapp .wrapper img {
      align-self: unset;
      margin-bottom: var(--space);
    }

    .dapp__content {
      width: 100%;
    }

    .dapp__list {
      margin-bottom: 0;
    }

    .subscan {
      width: 80%;
      margin-bottom: calc(var(--space) * 2);
    }

    .subscan__stats {
      max-width: unset;
    }

  }

  @media screen and (max-width: 560px) {

    .text-bubble {
      height: 248px;
    }
    
    .text-bubble p {
      max-width: 285px;
      padding: 20px;
      padding-left: 45px;
    }

    .subscan {
      width: 100%;
      margin-bottom: var(--space);
    }

    .join-our-progress__survey__link::before {
      top: 61px;
      left: -3px;
      max-width: 274px;
      width: 100%;
      height: 274px;
    }

    .title-with-bg {
      max-width: 189px;
      top: 28%;
    }

    .join-our-progress__survey__link span {
      left: 44px;
      font-size: calc(var(--base-font-size) * 1.1)
    }

    .join-our-progress__survey__link::after {
      background-size: 261px 261px;
      z-index: 10;
    }

    .home-assistant .link-with-arrow,
    .dive-deep .link-with-arrow,
    .dapp .link-with-arrow  {
      align-self: center;
      width: 100%;
    }

  }
</style>
