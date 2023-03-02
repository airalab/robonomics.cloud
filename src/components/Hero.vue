<template>
  <section class="hero" >
    <div class="layout">
      <h1 class="main-title">RWS <sub>Robonomics Web Services</sub></h1>
      <p>Decentralized cloud over web3 technologies for Robotics and IoT.</p>
    </div>
    <Video/>
  </section>
</template>

<script>
export default {
  components: {
    Video: () => import('~/components/RobonomicsVideo.vue'),
  }

}
</script>

<style scoped>

  .hero {
    position: relative;
    margin-bottom: calc(var(--space) * 5);
    min-height: 410px;
    background-color: var(--color-blue);
    background-image: url('../assets/images/blue__houses.png');
    background-repeat: no-repeat;
    /* background-position: contain; */
    background-size: 930px 410px;
    border-bottom: 5px solid var(--color-green);
  }

  h1 {
    padding-top: calc(var(--space) * 2);
    margin-bottom: var(--space-text);
    font-size: calc(var(--base-font-size)*2.8);

  }

  p {
    max-width: 805px;
    color: var(--color-light);
    font-size: calc(var(--base-font-size) * 1.6);
  }

  /* .hero .layout {
    position: relative;
    z-index: 250;
  } */

  .main-title sub {
    letter-spacing: 0;
  }

  @media screen and (max-width: 950px) {
    .hero {
      min-height: 365px;
    }

    .hero .layout {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 390px) {
    .hero {
      min-height: 370px;
    }


  h1 {
    font-size: calc(var(--base-font-size)*1.6);

  }

  p {
    max-width: 805px;
    color: var(--color-light);
    font-size: calc(var(--base-font-size) * 1.2);
  }
  }

</style>