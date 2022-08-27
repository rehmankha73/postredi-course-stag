<template>
  <div class="" style="width: 100%">
    <nav id="navbar" class="py-6 sticky-nav"
    >
      <section class="d-flex align-center mx-auto px-4" style="max-width: 1200px">
        <img
            alt="Vuetify Logo"
            class="shrink mr-2"
            src="../assets/pcaf_3.png"
            :width="$vuetify.breakpoint.smAndUp ? 300 : 200"
        />

        <v-spacer></v-spacer>

        <div v-if="$vuetify.breakpoint.mdAndUp" class="d-flex align-center pt-4" style="gap: 10px" >
          <p class="text-h5" style="font-family: 'Poppins', sans-serif !important; font-size: 18px; !important;">
            Why
            <v-icon>mdi-chevron-down</v-icon>
          </p>
          <p class="text-h5" style="font-family: 'Poppins', sans-serif !important; font-size: 18px; !important;">
            Learn
            <v-icon>mdi-chevron-down</v-icon>
          </p>
          <p class="text-h5" style="font-family: 'Poppins', sans-serif !important; font-size: 18px; !important;">
            Blog
          </p>
          <p class="text-h5" style="font-family: 'Poppins', sans-serif !important; font-size: 18px; !important;">
            Investor
          </p>
          <p class="text-h5" style="font-family: 'Poppins', sans-serif !important; font-size: 18px; !important;">
            Log In
          </p>
        </div>
        <div v-else>
          <v-icon>mdi-menu</v-icon>
        </div>
      </section>
    </nav>

    <div class="wrapper pa-4 mx-auto" style="margin-top: 130px; max-width: 1200px">

      <div class="pa-0 ma-0">
        <p class="text-h5" style="font-family: 'Adamina', serif !important; font-size: 22px !important; ">PRIVATE CAPITAL ATTRACTION FORMULA - WHAT YOU'LL GET</p>
      </div>
      <v-divider class="pa-0 ma-0"/>

      <v-row class="my-6">
        <v-col class="col-12 col-sm-6 col-md-4">
          <p class="text-h6 text-center font-weight-bold">Lifetime Access to Postredi</p>
          <img class="" src="../assets/pcaf_4.jpg" alt="post" style="width: 100%; object-fit: cover"/>
          <p class="text-center my-2">
            Postredi is a social media management platform that gives you ideas on what to post and helps you collate
            leads of potential investors for you
          </p>
        </v-col>

        <v-col class="col-12 col-sm-6 col-md-4">
          <p class="text-h6 text-center font-weight-bold">Online Masterclass</p>
          <img src="../assets/pcaf_2.jpg" alt="post" style="width: 100%; object-fit: cover"/>
          <p class="text-center my-2">
            Learn everything that you need to learn to attract passive investors from how to do it through social media,
            how to persuade investors and even advanced techniques
          </p>
        </v-col>

        <v-col class="col-12 col-sm-6 col-md-4">
          <p class="text-h6 text-center font-weight-bold">Access to Coaching</p>
          <img src="../assets/pcaf_1.jpg" alt="post" style="width: 100%; object-fit: cover"/>
          <p class="text-center my-2">
            A private FB group where you can ask questions PLUS doing the GROUP "algo hack" technique to expose your
            posts to over 2,200 accredited investors
          </p>
        </v-col>


      </v-row>

      <v-row class="my-6">
        <v-col cols="12" md="8">
          <h1 class="text-h3"
              style="font-family: 'Adamina', sans-serif !important; font-size: 45px; !important;"
              :class="[$vuetify.breakpoint.mdAndDown ? 'text-center' : '']"
          >PRIVATE CAPITAL ATTRACTION FORMULA - GET IT NOW! ($997)</h1>
        </v-col>

        <v-col cols="12" md="4" class="d-flex justify-center align-center">
          <v-btn large style="background-color: #FFD700; color: black">BUY NOW</v-btn>
        </v-col>
      </v-row>

      <div class="d-flex justify-center align-center pa-8 mt-12" style="gap: 20px"
           :class="[$vuetify.breakpoint.mdAndDown ? 'flex-column' : 'flex-row']"
      >
        <p class="text-h6 mb-0" >Privacy Policy</p>
        <p class="text-h6 mb-0">TERMS OF SERVICE</p>
      </div>

      <div class="d-flex justify-center align-center mb-4">
        <h6 class="text-h6 font-weight-bold">NASSAU INVESTMENTS</h6>
      </div>

      <div class="d-flex justify-center align-center mb-4">
        <h6 class="text-h6" :class="[$vuetify.breakpoint.mdAndDown ? 'text-center' : '']">PO Box 141261 Cincinnati, OH 45250</h6>
      </div>

      <div class="d-flex justify-center align-center mb-4">
        <h6 class="text-h6" :class="[$vuetify.breakpoint.mdAndDown ? 'text-center' : '']" style="color: #8A7452">contact@nassauinvestments.org</h6>
      </div>

      <div class="d-flex justify-center align-center my-10">
        <p :class="[$vuetify.breakpoint.mdAndDown ? 'text-center' : '']">Copyright © 2020-2030 NASSAU INVESTMENTS - All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PcafView",
  computed: {
    screenSize() {
      let _name = this.$vuetify.breakpoint.name;
      let _width = this.$vuetify.breakpoint.width;
      return _name + '--' + _width;
    }
  },
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
}
</style>