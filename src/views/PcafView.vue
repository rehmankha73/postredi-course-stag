<template>
  <div class="px-16" style="width: 100%">
    <div class="wrapper mx-auto px-6">
      <nav class="d-flex align-center py-6">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../assets/pcaf_3.png"
            transition="scale-transition"
            width="300"
        />

        <v-spacer></v-spacer>

        <div class="d-flex align-center pt-4" style="gap: 20px">
          <p class="text-h5">
            Why
            <v-icon>mdi-chevron-down</v-icon>
          </p>
          <p class="text-h5">
            Learn
            <v-icon>mdi-chevron-down</v-icon>
          </p>
          <p class="text-h5">
            Blog
          </p>
          <p class="text-h5">
            Investor
          </p>
          <p class="text-h5">
            Log In
          </p>
        </div>
      </nav>
      <div>
        <p class="text-h5">PRIVATE CAPITAL ATTRACTION FORMULA - WHAT YOU'LL GET</p>
      </div>
      <v-divider class="pa-0 ma-0"/>

      <v-row class="my-6">
        <v-col cols="4">
          <p class="text-h6 text-center">Lifetime Access to Postredi</p>
          <img class="" src="../assets/pcaf_4.jpg" alt="post" style="width: 100%; object-fit: cover"/>
          <p class="text-center my-2">
            Postredi is a social media management platform that gives you ideas on what to post and helps you collate
            leads of potential investors for you
          </p>
        </v-col>

        <v-col cols="4">
          <p class="text-h6 text-center">Online Masterclass</p>
          <img src="../assets/pcaf_2.jpg" alt="post" style="width: 100%; object-fit: cover"/>
          <p class="text-center my-2">
            Learn everything that you need to learn to attract passive investors from how to do it through social media,
            how to persuade investors and even advanced techniques
          </p>
        </v-col>

        <v-col cols="4">
          <p class="text-h6 text-center">Access to Coaching</p>
          <img src="../assets/pcaf_1.jpg" alt="post" style="width: 100%; object-fit: cover"/>
          <p class="text-center my-2">
            A private FB group where you can ask questions PLUS doing the GROUP "algo hack" technique to expose your
            posts to over 2,200 accredited investors
          </p>
        </v-col>


      </v-row>

      <v-row>
        <v-col cols="8">
          <h1 class="text-h3">PRIVATE CAPITAL ATTRACTION FORMULA - GET IT NOW! ($997)</h1>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <v-btn color="warning" large>BUY NOW</v-btn>
        </v-col>
      </v-row>

      <div class="d-flex justify-center align-center pa-8 mt-12" style="gap: 20px">
        <p class="text-h6">Privacy Policy</p>
        <p class="text-h6">TERMS OF SERVICE</p>
      </div>

      <div class="d-flex justify-center align-center mb-4">
        <h6 class="text-h6">NASSAU INVESTMENTS</h6>
      </div>

      <div class="d-flex justify-center align-center mb-4">
        <h6 class="text-h6">PO Box 141261 Cincinnati, OH 45250</h6>
      </div>

      <div class="d-flex justify-center align-center mb-4">
        <h6 class="text-h6">contact@nassauinvestments.org</h6>
      </div>

      <div class="d-flex justify-center align-center my-10">
        <h6 class="text-h6">Copyright © 2020-2030 NASSAU INVESTMENTS - All Rights Reserved</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PcafView"
}
</script>

<style scoped>
.border {
  border: 1px solid black;
}
</style>