<template>
  <Layout>

    <MetaInfo
      pageTitle = "Privacy Policy"
      pageDescription = "This Policy describes the information we collect from you, how we use that information and our legal basis for doing so. It also covers whether and how that information may be shared and your rights and choices regarding the information you provide to us."
    />

    <section class="privacy-policy">

      <h1>Privacy Policy</h1>

      <p class="privacy-policy__descr">This Policy describes the information we collect from you, how we use that information and our legal basis for doing so. It also covers whether and how that information may be shared and your rights and choices regarding the information you provide to us.</p>


      <div class="privacy-policy__wrapper">
        <h2 class="privacy-policy__subtitle">
          Where are those annoying cookie consent pop-ups?
        </h2>
        <p class="privacy-policy__descr">We don't need cookie consent is needed because:</p>
        <ul>
          <li>Tracking cookies are not used</li>
          <li>The data is not used for any other purpose than analytics</li>
          <li>Visitors aren’t tracked across websites</li>
          <li>A user cannot be tracked across days within the same website</li>
        </ul>
      </div>

      <div class="privacy-policy__wrapper">
        <h2 class="privacy-policy__subtitle">
          What We Collect and Receive
        </h2>
        <p class="privacy-policy__descr">In order for us to provide you the best possible experience on our websites, we need to collect and process certain information. Depending on your use of the Services, that may include:</p>

        <ul>
          <li> <b>Contact us via email</b> — for example, when you submit our forms, send us questions or comments, or report a problem, we will collect your name, email address, message, etc. We use this data solely in connection with answering the queries we receive.</li>
          <li>
            <b>Usage data</b> — when you visit our website, we will store: the URL from which you visited us from, web pages of our website you visit, the date and duration of your visit, your anonymized IP address, the device specifications (device type, operating system, screen resolution, language, country you are located in, and web browser type) you used during your visit, and <g-link to="https://matomo.org/faq/general/faq_18254/">other</g-link>  non-personal data. We process this usage data only on our server, not passing it to third-parties with <g-link to="https://matomo.org/privacy-policy/#:~:text=usage%20data%20in-,Matomo%20Analytics,-for%20statistical%20purposes">Matomo</g-link> web analytics platform that gives us 100% data ownership. This analytics helps us to improve user experience with our website and to recognize and stop any misuse.
          </li>
          <li>
            <b>Non-personalized cookies</b>  — we use non-tracking cookies (small data files transferred onto computers or devices by sites) for record-keeping purposes and to enhance functionality on our website. You may deactivate or restrict the transmission of these cookies by changing the settings of your web browser or by opt-out on this page in the form below. Cookies that are already stored may be deleted at any time.
          </li>
        </ul>
      </div>

      <div class="privacy-policy__wrapper">
        <h2 class="privacy-policy__subtitle">Opt-out of website tracking</h2>
        <p class="privacy-police__descr">You can opt out of being tracked by our Matomo Analytics instance below:</p>

        <MatomoOptOutForm/>
      </div>

      <div class="privacy-policy__wrapper">
        <h2 class="privacy-policy__subtitle">Your Rights</h2>
        <p class="privacy-police__descr">
          You have the right to be informed of Personal Data processed by Matomo, a right to rectification/correction, erasure and restriction of processing. You also have the right to ask from us a structured, common and machine-readable format of Personal Data you provided to us.
        </p>
        <p class="privacy-police__descr">
          We can only identify you via your email address and we can only adhere to your request and provide information if we have Personal Data about you through you having made contact with us directly and/or you using our site and/or service. We cannot provide, rectify or delete any data that we store on behalf of our users or customers.
        </p>
        <p class="privacy-police__descr">
          To exercise any of the rights mentioned in this Privacy Policy and/or in the event of questions or comments relating to the use of Personal Data you may contact us.
        </p>
        <p class="privacy-police__descr">
          In addition, you have the right to lodge a complaint with the data protection authority in your jurisdiction.
        </p>
      </div>

      <div class="privacy-policy__wrapper">
        <h2 class="privacy-policy__subtitle">Retention of data</h2>
        <p class="privacy-police__descr">
          We will retain your information as long as necessary to provide you with the services or as otherwise set forth in this Policy. We will also retain and use this information as necessary for the purposes set out in this Policy and to the extent necessary to comply with our legal obligations, resolve disputes, enforce our agreements and protect Robonomics Cloud legal rights.
        </p>
        <p class="privacy-police__descr">We also collect and maintain aggregated, anonymized or pseudonymized information which we may retain indefinitely to protect the safety and security of our Site, improve our Services or comply with legal obligations.</p>
      </div>


    </section>
  </Layout>
</template>

<script>
export default {

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue'),
    MatomoOptOutForm: () => import('~/components/MatomoOptOutForm.vue')
  }

}
</script>

<style scoped>

 .privacy-policy {
  padding-top: var(--space);
 }

  ul {
    list-style: circle;
    padding-left: calc(var(--space) * 0.5);
  }

  .privacy-policy.container__narrow {
    max-width: 850px;
  }

  .privacy-policy__wrapper p {
    font-weight: 400;
  }

  .privacy-policy__wrapper:not(:last-child) {
    margin-bottom: calc(var(--space) * 1.5);
  }

  .privacy-policy__subtitle {
    margin-bottom: calc(var(--space) * 0.5);
  }

</style>