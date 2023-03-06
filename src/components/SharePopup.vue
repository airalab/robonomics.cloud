<template>
  <div>
    <div class="overlay" @click="$emit('closeModal')"></div>
  
    <div class="modal share__modal">
      <button class="modal__close-btn" @click="$emit('closeModal')" aria-label="close share popup"></button>
      <h3>Share the results to your social media!</h3>

      <g-link :to="facebookLink" class="share-facebook share-social__btn">
        <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
        Share on Facebook
      </g-link>

      <g-link :to="twitterLink" class="share-twitter  share-social__btn">
        <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
        Share on Twitter       
      </g-link>


    </div>
  </div>
</template>

<script>
export default {

  props: {
    result: {
      type: Object
    },
    
  },

  data() {
    return {
      facebookLink: '',
      twitterLink: '',
      url: '',
    }
  },

  created() {

    const msg = 'Hey, I took this survey and found out how much i know about smart home!'

    if(this.result.title === 'Great news!') {
      this.url = 'smart-home-survey/success'
    } else if (this.result.title === `Don't stop now!`) {
      this.url = 'smart-home-survey/medium'
    } else {
      this.url = 'smart-home-survey/low'
    }

    this.facebookLink = `https://www.facebook.com/dialog/share?
          app_id=2432719273556839
          &href=https://robonomics.cloud/${this.url}`;
    
    this.twitterLink = `http://twitter.com/share?&url=https://robonomics.cloud/${this.url}&text=${msg}&hashtags=robonomics,iot`;

  }

}
</script>

<style scoped> 

  .modal {
    max-height: 350px !important;
    justify-content: center;
    color: var(--color-light);
  }

  .share-social__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: calc(var(--space) * 0.5) var(--space);
    color: var(--color-light);
    font-size: calc(var(--base-font-size) * 1.3);
    font-weight: 600;
    box-shadow: 6px 6px 0 var(--color-light);
    transition: box-shadow 0.33s ease-in-out, color 0.33s ease-in-out;
    text-align: center;
  }

  .share-social__btn:hover {
    color: var(--color-purple-light);
    box-shadow: 0px 0px 0 var(--color-light);
  }

  .share-facebook {
    background-color: #4267B2;
    margin-bottom: var(--space);
  }

  .share-twitter {
    background-color: #1DA1F2;
  }

  .icon {
    margin-right: calc(var(--space) * 0.5);
  }

</style>