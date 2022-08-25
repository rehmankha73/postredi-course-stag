<template>
  <div class="ma-6">
    <div class="mx-auto overlay-div">
      <video id="video" controls class="video"
             @play="playVideo()"
             @pause="pauseVideo()"
             @timeupdate="timeUpdate()"
             @seeking="seekingVideo()"
             @ended="endedVideo()"
      >
        <source src="../assets/video.mp4" type="video/mp4">
      </video>
      <div id="overlay" v-if="showOverlay" @click="[showOverlay ? playVideo() : pauseVideo()]"
           class="d-flex justify-center align-center"
      >
        <v-btn
            @click="[showOverlay ? playVideo() : pauseVideo()]"
            color="error"
            fab
            large
            dark
        >
          <v-icon v-html="icon"></v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      video: '',
      supposedCurrentTime: '',
      showOverlay: true,
      icon: 'mdi-play',
    }
  },
  methods: {
    playVideo() {
      this.icon = 'mdi-pause';

      setTimeout(() => {
        this.video.play();
        this.showOverlay = false;
      }, 500);
    },
    pauseVideo() {

      this.showOverlay = true;
      this.video.pause();

      setTimeout(() => {
        this.icon = 'mdi-play';
      }, 200)
    },
    timeUpdate() {
      if (!this.video.seeking) {
        this.supposedCurrentTime = this.video.currentTime;
      }
    },
    seekingVideo() {
      let delta = this.video.currentTime - this.supposedCurrentTime;
      if (Math.abs(delta) > 0.01) {
        this.video.currentTime = this.supposedCurrentTime;
      }
    },
    endedVideo() {
      this.supposedCurrentTime = 0;
    }
  },

  mounted() {
    this.video = document.getElementById('video');
    this.supposedCurrentTime = 0;
  }
}
</script>

<style scoped>
#overlay {
  position: absolute;
  color: #FFF;
  font-size: 20px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
}

.overlay-div {
  position: relative;
  width: fit-content;
}

.video {
  width: 90vw;
  max-width: 800px
}

.fade-in-overlay {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
