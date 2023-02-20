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
    margin-top: -80px;
    min-height: 380px;
    background-color: var(--color-blue);
    background-image: url('../assets/images/blue__houses.png');
    background-repeat: no-repeat;
    /* background-position: contain; */
    background-size: 929px 380px;
    border-bottom: 5px solid var(--color-green);
  }

  h1 {
    padding-top: calc(var(--space) * 2);
    margin-bottom: var(--space-text);
  }

  p {
    max-width: 610px;
    color: var(--color-light)
  }

  /* .hero .layout {
    position: relative;
    z-index: 250;
  } */

  @media screen and (max-width: 1050px) {
    .hero {
      margin-bottom: calc(var(--space) * 4);
    }
  }

  @media screen and (max-width: 950px) {
    .hero {
      min-height: 300px;
    }

    .hero .layout {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 390px) {
    .hero {
      min-height: 370px;
    }
  }

</style>