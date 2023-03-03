<template>
  <div class="robonomics-video" @click.prevent="playVideo" :class="{'playing': isVideoPlaying}">
    <div class="overlay-video">
      <img src="../assets/images/video__cover.png" aria-hidden="true"/>
    </div>
    <g-image class="video-icon" src="~/assets/images/arrow.svg" aria-hidden="true" />
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
  },

  mounted() {


    // this.$refs.video.addEventListener('progress', (e) => {

    //   if(this.$refs.video.readyState >= 3){
    //     this.videoLoaded = true
    //   }
      
    // });
  }

}
</script>

<style scoped>
  .robonomics-video {
    position: absolute;
    /* width: 284px;
    height: 241px; */
    width: 316px;
    height: 256px;
    right: calc(var(--space) * 6);
    bottom: -80px;
    /* overflow: hidden; */
  }

  .overlay-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 5px solid transparent;
    background-color: #13FF9C36;
  }

  .overlay-video img {
    width: 100%;
    height: 100%;
  }

  .playing .overlay-video{
    display: none;
  }

  .robonomics-video .video-icon {
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
    height: 100%;
    border: 5px solid var(--color-green);
    /* overflow: hidden; */
    object-fit: cover;
  }

  @media screen and (max-width: 960px) {
    .robonomics-video {
      bottom: -110px;
      height: 230px;
      right: 1rem;
    }
  }

  @media screen and (max-width: 590px) {
    .robonomics-video {
      bottom: -153px;
      height: 210px;
      right: unset;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 390px) {
    .robonomics-video {
      bottom: -110px;
      height: 230px;
    }
  }
</style>