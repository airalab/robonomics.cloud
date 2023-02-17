<template>
  <div class="robonomics-video" @click.prevent="playVideo" :class="{'playing': isVideoPlaying}">
    <div class="overlay-video"></div>
    <g-image src="~/assets/images/arrow.svg" aria-hidden="true" />
    <video ref="video" controls>
      <source src="https://crustipfs.art/ipfs/QmStCDsEHCYwVYvnDdmZBMnobPmrgZx3iJLm65b8XNzKQa" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {

  data() {
    return {
      isVideoPlaying: false,
    }
  },

  methods: {
    playVideo() {
      if(!this.isVideoPlaying) {
        this.$refs.video.play();
        this.isVideoPlaying = true
      } else {
        this.$refs.video.pause();
        this.isVideoPlaying = false
      }
    }
  }

}
</script>

<style scoped>
  .robonomics-video {
    position: absolute;
    width: 316px;
    right: calc(var(--space) * 2);
    bottom: -80px;
    overflow: hidden;
  }

  .overlay-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #13FF9C36;
  }

  .playing .overlay-video{
    display: none;
  }

  .robonomics-video img {
    position: absolute;
    top: 20px;
    right: 20px;
    filter: contrast(2.2);
  }

  .playing img {
    display: none;
  }

  video {
    width: 100%;
    border: 5px solid var(--color-green);
    overflow: hidden;
  }

  @media screen and (max-width: 560px) {
    .robonomics-video {
      bottom: -100px;
    }
  }

  @media screen and (max-width: 390px) {
    .robonomics-video {
     right: 1rem;
    }
  }
</style>