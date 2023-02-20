<template>
  <div>
    <div class="overlay" @click="$emit('closeModal')"></div>
  
    <div class="modal share__modal">
      <button class="modal__close-btn" @click="$emit('closeModal')" aria-label="close share popup"></button>
      <h3>Share the results to your social media!</h3>

      <button class="share-facebook share-social__btn">
        Facebook
      </button>

      <button class="share-twitter  share-social__btn">
        Twitter
      </button>

    </div>
  </div>
</template>

<script>
export default {

  methods: {
    shareOnFacebook() {
      const navUrl =
      'https://www.facebook.com/sharer/sharer.php?u=' +
      'robonomics.cloud';
      window.open(navUrl, '_blank');
    },

    shareOnTwitter() {
      const navUrl =
        'https://twitter.com/intent/tweet?text=' +
        'https://github.com/knoldus/angular-facebook-twitter.git';
        window.open(navUrl, '_blank');
    }
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
    padding: calc(var(--space) * 0.5) var(--space);
    color: var(--color-light);
    font-size: calc(var(--base-font-size) * 1.3);
    font-weight: 600;
    box-shadow: 6px 6px 0 var(--color-light);
    transition: box-shadow 0.33s ease-in-out, color 0.33s ease-in-out;
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

</style>