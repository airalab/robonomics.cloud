<template>
  <div class="menu">
    <div class="layout">
      <div>
        <h1 class="main-title">RWS <sub>Robonomics Web Services</sub></h1>
        <p>Decentralized cloud over web3 technologies for Robotics and IoT.</p>
      </div>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <g-link class="nav__link" to="/smart-home-survey" aria-label="visit smart home survey page">Survey “How ready are you for smart home?”</g-link>
          </li>
          <li class="nav__item">
            <g-link  class="nav__link link-with-icon" to="https://wiki.robonomics.network/docs/robonomics-smart-home-overview" aria-label="see how you can connect us">How to connect”</g-link>
          </li>
          <li class="nav__item">
            <g-link class="nav__link link-with-icon" to="https://dapp.robonomics.network/#/" aria-label="see web application">Web application</g-link>
          </li>
          <li class="nav__item">
            <g-link class="nav__link link-with-icon" to="https://robonomics.academy/en/online-courses/smart-home-course/" aria-label="check our online courses">Online course</g-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    padding-top: 135px;
    background-color: var(--color-menu-bg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
    transition: transform 0.33s ease-in-out, opacity 0.33s ease-in-out, visibility 0.33s linear;
    /* z-index: 10; */
  }

  .menu--active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .menu .layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin-bottom: var(--space-text);
  }

  p {
    max-width: 610px;
    color: var(--color-light)
  }

  .nav__item {
    min-height: 55px;
    max-width: 306px;
    background-color: var(--color-dark-purple);
  }

  .nav__link {
    min-height: 55px;
    display: flex;
    align-items: center;
    padding: calc(var(--space) * 0.5);
    font-weight: 600;
    color: var(--color-light);
    transition: background-color 0.33s ease-in-out;
  }

  .nav__link:hover {
    background-color: var(--color-darkest-purple);
  }

  @media screen and (max-width: 1060px) {

    .menu {
      position: fixed;
      height: 100vh;
    }

    .menu .layout {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }

    p {
      margin-bottom: var(--space);
    }

    .nav {
      width: 100%;
    }

    .nav__list {
      margin-left: 0;
    }

    .nav__item {
     max-width: unset;
    }

    
  }

</style>