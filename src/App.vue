<template>
  <v-app>
<!--    <v-app-bar-->
<!--        app-->
<!--        color="primary"-->
<!--        dark-->
<!--    >-->
<!--      <div class="d-flex align-center">-->
<!--        <v-img-->
<!--            alt="Vuetify Logo"-->
<!--            class="shrink mr-2"-->
<!--            contain-->
<!--            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
<!--            transition="scale-transition"-->
<!--            width="40"-->
<!--        />-->

<!--        <v-img-->
<!--            alt="Vuetify Name"-->
<!--            class="shrink mt-1 hidden-sm-and-down"-->
<!--            contain-->
<!--            min-width="100"-->
<!--            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
<!--            width="100"-->
<!--        />-->
<!--      </div>-->

<!--      <v-spacer></v-spacer>-->

<!--      <v-btn-->
<!--          v-show="showSignUpButton"-->
<!--          href="#"-->
<!--          target="_blank"-->
<!--          text-->
<!--      >-->
<!--        <span class="mr-2">Sign Up</span>-->
<!--      </v-btn>-->
<!--    </v-app-bar>-->

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    showSignUpButton: false,
    time: 0
  }),
  methods: {

  },

  mounted() {
    let _video = document.getElementById('video')
    if(_video) {
      // _video.setAttribute('oncontextmenu', "return false;");

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

  },

};
</script>

<style>

video::-webkit-media-controls-timeline {
  display: none;
}
video::-webkit-media-controls-timeline {
  display: none;
}
video::-webkit-media-controls-current-time-display  {
  display: none;
}
video::-webkit-media-controls-time-remaining-display{
  display: none;
}
</style>