<template>
  <header class="header" :class="{'header--active': isMenuOpen}">
    <div class="layout">
      <g-link to="/" class="header__wrapper">
        <g-image alt="logo" src="~/assets/images/rws__logo.svg" width="70" />
      </g-link>
      <button :class="{'burger--active': isMenuOpen}" class="burger header__burger" aria-label="Open menu" @click="isMenuOpen = !isMenuOpen">
        <span class="burger__line"></span>
      </button>
    </div>

    <!-- menu -->
    <Menu :class="{'menu--active': isMenuOpen}" />

  </header>
</template>

<script>
export default {

  components: {
    Menu: () => import('~/components/Menu.vue'),
  },

  data() {
    return {
      isMenuOpen: false,
    }
  }
 
}
</script>

<style scoped>

  .header {
    position: relative;
    padding: var(--space) 0;
    background-color: var(--color-blue);
  }

  .header--active {
    z-index: 250;
  }

  .header .layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 10;
  }

  .header__wrapper img {
    margin-right: calc(var(--space) * 2);
  }

  .burger {
    position: relative;
    border: none;
    padding: 0;
    width: 78px;
    height: 31px;
    color: var(--color-light);
    background-color: transparent;
    transition: color 0.33s ease-in-out, background-color 0.33s ease-in-out;
    cursor: pointer;
    z-index: 10;
  }

  .burger:hover {
    color: var(--color-green);
  }

  .burger:focus-visible {
    outline: none;
    padding: 0.6rem;
    background-color: var(--color-gray);
  }

  .burger:active {
    color: var(--color-green);
  }

  .burger::after,
  .burger::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
  }

  .burger::before {
    top: 0;
  }

  .burger::after {
    top: calc(100% - 2px);
  }

  .burger__line {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: translateY(-50%);
    transition: transform 0.3s ease-in-out;
  }

  .burger--active::before {
    top: 50%;
    transform: rotate(45deg);
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
  }

  .burger--active::after {
    top: 50%;
    transform: rotate(-45deg);
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
  }

  .burger--active .burger__line {
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
  }

</style>