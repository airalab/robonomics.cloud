<template>
  <Layout :useClass="false">
    <section class="survey">
      <div class="layout">
        <h2>How ready are you for&nbsp;smart&nbsp;home?</h2>
        <div class="link-with-arrow white">
            <button aria-label="start survey for smart home">
              Take a  survey
            </button>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {

}
</script>

<style scoped>
  .survey {
    background-color: var(--color-blue);
    margin-bottom: 0;
    min-height: 646px;
    height: 100%;
    background-image: url('/assets/img/blue__houses.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 1080px;
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
</style>