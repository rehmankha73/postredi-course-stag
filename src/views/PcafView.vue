<template>
  <div class="pa-4 mx-auto " style="margin-top: 130px; max-width: 1100px">

    <div class="pa-0 ma-0">
      <p style="font-family: 'Adamina', serif !important; font-size: 22px !important; ">PRIVATE CAPITAL ATTRACTION
        FORMULA - WHAT YOU'LL GET</p>
    </div>

    <v-divider class="pa-0 ma-0"/>

    <v-row class="my-6">
      <v-col class="col-12 col-sm-6 col-md-4">
        <p class="text-h6 text-center">Lifetime Access to Postredi</p>
        <img class="" src="../assets/pcaf_4.jpg" alt="post" style="width: 100%; object-fit: cover"/>
        <p class="text-center my-2">
          Postredi is a social media management platform that gives you ideas on what to post and helps you collate
          leads of potential investors for you
        </p>
      </v-col>

      <v-col class="col-12 col-sm-6 col-md-4">
        <p class="text-h6 text-center">Online Masterclass</p>
        <img src="../assets/pcaf_2.jpg" alt="post" style="width: 100%; object-fit: cover"/>
        <p class="text-center my-2">
          Learn everything that you need to learn to attract passive investors from how to do it through social media,
          how to persuade investors and even advanced techniques
        </p>
      </v-col>

      <v-col class="col-12 col-sm-6 col-md-4">
        <p class="text-h6 text-center">Access to Coaching</p>
        <img src="../assets/pcaf_1.jpg" alt="post" style="width: 100%; object-fit: cover"/>
        <p class="text-center my-2">
          A private FB group where you can ask questions PLUS doing the GROUP "algo hack" technique to expose your
          posts to over 2,200 accredited investors
        </p>
      </v-col>
    </v-row>

    <v-row class="my-6">
      <v-col cols="12" md="9">
        <h1 style="font-family: 'Adamina', sans-serif !important; font-weight: 400 !important;"
            :class="[$vuetify.breakpoint.mdAndDown ? 'text-center' : '']"
            :style="{fontSize: $vuetify.breakpoint.mdAndDown ? 36+'px' : 45+'px'}"
        >PRIVATE CAPITAL ATTRACTION FORMULA - GET IT NOW! ($997)</h1>
      </v-col>
      <v-col v-if="showSignUpButton" cols="12" md="3" class="d-flex justify-center align-center">
        <RouterLink to="/auth/sign-up" class="buy-now-btn">BUY NOW</RouterLink>
      </v-col>
    </v-row>

    <v-row >
      <v-col cols="12">
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
      </v-col>
    </v-row>

    <div class="d-flex justify-center align-center pa-8 mt-12" style="gap: 20px"
         :class="[$vuetify.breakpoint.mdAndDown ? 'flex-column' : 'flex-row']"
    >
      <p class="text-h6 mb-0 nav-item"><a href="https://nassauinvests.com/privacy-policy">Privacy Policy</a></p>
      <p class="text-h6 mb-0 nav-item"><a href="https://nassauinvests.com/terms-of-service">TERMS OF SERVICE</a></p>
    </div>

    <div class="d-flex justify-center align-center mb-4">
      <h6 class="text-h6 font-weight-bold">NASSAU INVESTMENTS</h6>
    </div>

    <div class="d-flex justify-center align-center mb-4">
      <h6 class="text-h6" :class="[$vuetify.breakpoint.mdAndDown ? 'text-center' : '']">PO Box 141261 Cincinnati, OH
        45250</h6>
    </div>

    <div class="d-flex justify-center align-center mb-4">
      <h6 class="text-h6" :class="[$vuetify.breakpoint.mdAndDown ? 'text-center' : '']" style="color: #8A7452">
        contact@nassauinvestments.org</h6>
    </div>

    <div class="d-flex justify-center align-center mt-10 mb-6">
      <p :class="[$vuetify.breakpoint.mdAndDown ? 'text-center' : '']">Copyright © 2020-2030 NASSAU INVESTMENTS - All
        Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PcafView",
  data() {
    return {
      video: '',
      supposedCurrentTime: '',
      allowOverlay: true,
      showOverlay: true,
      icon: 'mdi-play',
      showSignUpButton: false,
      time: 0
    }
  },
  computed: {
    screenSize() {
      let _name = this.$vuetify.breakpoint.name;
      let _width = this.$vuetify.breakpoint.width;
      return _name + '--' + _width;
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
    let _video = this.video
    if (_video) {
      this.time = 0;
      const view = this
      _video.ontimeupdate = function () {
        let currentTime = Math.floor(_video.currentTime);
        if (currentTime !== view.time) {
          console.log(view.time, 't')
          view.time = currentTime;
          if (view.time === 10) {
            console.log(view.time, 'time')
            view.showSignUpButton = true;
          }
        }
      };
    }
  }
}
</script>

<style scoped>
.border {
  border: 1px solid black;
}

p {
  font-family: 'Poppins', sans-serif !important;
}

#navbar {
  overflow: hidden;
  background-color: white;
}

.sticky-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.nav-item {
  font-size: 18px !important;
  font-weight: 400 !important;
  cursor: pointer !important;
}

.nav-item:hover {
  color: #8A7400 !important;
}

#overlay {
  position: absolute;
  color: #FFF;
  font-size: 20px;
  top: 0;
  left: 0;
  background-color: transparent;
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.overlay-div {
  position: relative;
  width: fit-content;
}

.video {
  width: 100%;
}

.buy-now-btn {
  background-color: rgb(255, 215, 0);
  color: rgb(22, 21, 20);
  min-height: 56px;
  padding-right: 32px;
  display: inline-flex;
  border-style: none;
  font-weight: 600;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.063em;
  padding-left: 32px;
  border-radius: 0px;
  max-width: 100%;
  cursor: pointer;
  word-wrap: break-word;
  text-decoration: none;
  margin: 0;
  align-items: center;
  position: relative;
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