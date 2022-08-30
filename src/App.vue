<template>
  <v-app>
    <v-app-bar
        app
        elevation="0"
        class="py-4"
        color="white"
        height="fit-content"
    >
      <section class="d-flex align-center mx-auto" style=" width: 100%; max-width: 1100px !important;">
        <img
            id="logo"
            alt="Vuetify Logo"
            class="shrink mr-2"
            src="./assets/pcaf_3.png"
            :width="$vuetify.breakpoint.smAndUp ? 300 : 200"
        />

        <v-spacer></v-spacer>

        <div v-if="$vuetify.breakpoint.mdAndUp" class="d-flex align-center pt-4 px-6" style="gap: 20px">

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <p
                  v-bind="attrs"
                  v-on="on"
                  class="nav-item"
              >
                Why
                <v-icon>mdi-chevron-down</v-icon>
              </p>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title class="nav-item"><a href="https://nassauinvests.com/why-hotels">Why Hotels</a>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title class="nav-item"><a href="https://nassauinvests.com/why-apartments">Why
                  Apartments</a></v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title class="nav-item"><a href="https://nassauinvests.com/why-nassau-investments">Why
                  Nassau Investments</a></v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title class="nav-item"><a href="https://nassauinvests.com/why-syndication">Why
                  Syndication</a></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <p
                  v-bind="attrs"
                  v-on="on"
                  class="nav-item"
              >
                Learn
                <v-icon>mdi-chevron-down</v-icon>
              </p>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title class="nav-item"><a href="https://nassauinvests.com/podcasts">Podcasts</a>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title class="nav-item"><a href="https://nassauinvests.com/book">Book</a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <p class="nav-item">
            <a href="https://nassauinvests.com/blog">
              Blog
            </a>
          </p>

          <p class="nav-item">
            <a href="https://investors.appfolioim.com/nassauinvestmentsllc/investor/login" target="_blank">
              Investor Log In
            </a>
          </p>
        </div>
        <div v-else class="px-6">
          <v-icon @click="drawer = !drawer" large>mdi-menu</v-icon>
        </div>
      </section>
    </v-app-bar>

    <v-main class="mt-2">
      <router-view/>
    </v-main>

    <v-navigation-drawer app v-model="drawer" color="px-10" temporary width="100%" style="background-color: #161616">
      <div class="d-flex justify-end my-4">
        <div class="py-4">
          <v-icon @click="drawer = !drawer" class="mobile-nav-item">mdi-close</v-icon>
        </div>
      </div>

      <v-divider class="my-2 bg-gray"/>

      <v-row>
        <v-expansion-panels accordion dark>
          <v-expansion-panel style="background-color: transparent;">
            <v-expansion-panel-header class="px-4 my-4"><span class="mobile-nav-item">Why</span>
              <template v-slot:actions>
                <v-icon color="white">
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <span class="mobile-nav-sub-item">
                <a href="https://nassauinvests.com/why-hotels">
                  Why Hotels
                </a>
              </span>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <span class="mobile-nav-sub-item">
                <a href="https://nassauinvests.com/why-apartments">
                  Why Apartments
                </a>
              </span>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <span class="mobile-nav-sub-item">
                <a href="https://nassauinvests.com/why-nassau-investments">
                  Why Nassau Investments
                </a>
              </span>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <span class="mobile-nav-sub-item">
                <a href="https://nassauinvests.com/why-syndication">
                  Why Syndication
                </a>
              </span>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

      <v-divider class="my-2 bg-gray"/>

      <v-row >
        <v-expansion-panels accordion dark>
          <v-expansion-panel style="background-color: transparent">
            <v-expansion-panel-header class="px-4 my-4"><span class="mobile-nav-item">Learn</span>
              <template v-slot:actions>
                <v-icon color="white">
                  $expand
                </v-icon>
              </template>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <span class="mobile-nav-sub-item">
                <a href="https://nassauinvests.com/podcasts">
                  Podcasts
                </a>
              </span>
            </v-expansion-panel-content>

            <v-expansion-panel-content>
              <span class="mobile-nav-sub-item">
                <a href="https://nassauinvests.com/book">
                  Books
                </a>
              </span>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

      <v-divider class="my-2 bg-gray"/>

      <p class="mobile-nav-item my-4">
        <a href="https://nassauinvests.com/blog">
          Blog
        </a>
      </p>


      <v-divider class="my-2 bg-gray"/>

      <p class="mobile-nav-item my-4">
        <a href="https://investors.appfolioim.com/nassauinvestmentsllc/investor/login" target="_blank">
          Investor Log In
        </a>
      </p>
    </v-navigation-drawer>

  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
  }),

  mounted() {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 0) {
        document.getElementById('logo').style.width = '200px';
      }

      if(window.pageYOffset === 0) {
        document.getElementById('logo').style.width = '300px';
      }

    });
  }

};
</script>

<style>
.border {
  border: 1px solid black;
}

#logo {
  width: 300px;
  transition: width 1s, transform 1s;
}

.nav-item {
  font-size: 18px !important;
  font-weight: 400 !important;
  cursor: pointer !important;
}

a:visited {
  text-decoration: none;
}

.mobile-nav-item {
  font-size: 24px !important;
  cursor: pointer !important;
  color: white !important;
}

.mobile-nav-sub-item {
  font-size: 18px !important;
  cursor: pointer !important;
  color: gray !important;
}

.cursor-pointer {
  cursor: pointer !important;
}

.bg-gray {
  background-color: gray;
}

a {
  text-decoration: none;
}

.nav-item > a {
  color: black !important;
}

.nav-item > a:hover {
  color: #B89C07 !important;
}

.mobile-nav-item > a, .mobile-nav-sub-item > a {
  display: block !important;
  color: white !important;
}

.mobile-nav-item > a:hover, .mobile-nav-sub-item > a:hover {
  color: #B89C07 !important;
}

a:hover, .mobile-nav-item:hover, .mobile-nav-sub-item:hover, .nav-item:hover {
  color: #B89C07 !important;
}

video::-webkit-media-controls-timeline {
  display: none;
}

video::-webkit-media-controls-timeline {
  display: none;
}

video::-webkit-media-controls-current-time-display {
  display: none;
}

video::-webkit-media-controls-time-remaining-display {
  display: none;
}
</style>