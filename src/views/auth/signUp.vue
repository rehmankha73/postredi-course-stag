<template>
  <div
      class="border d-flex justify-center align-center py-10" style="margin-top: 140px"
      :class="[$vuetify.breakpoint.smAndDown ? 'px-6' : '' ]"
  >
    <v-card class="pa-8" style="width: 800px">
      <div>
        <h3 class="text-h6 font-weight-medium">START FOR FREE</h3>
        <h3 class="text-md-h3 text-h5 mb-4 primary--text font-weight-medium">Create new account</h3>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
          <v-row>
            <v-col cols="12" md="6">
              <div class="mb-3">
                <label for="first_name" class="font-weight-medium">
                  First Name <span style="font-size: 18px; color: red">*</span>
                </label>
              </div>

              <v-text-field
                  id="first_name"
                  placeholder="First Name"
                  type="text"
                  outlined
                  hide-details="auto"
                  class="elevation-0"
                  :rules="[required('You can\'t leave this field empty')]"
                  v-model="user.first_name"
              ></v-text-field>

            </v-col>

            <v-col cols="12" md="6">
              <div class="mb-3">
                <label for="last_name" class="font-weight-medium">
                  Last Name
                </label>
              </div>

              <v-text-field
                  id="last_name"
                  placeholder="Last Name"
                  type="text"
                  outlined
                  hide-details="auto"
                  class="elevation-0"
                  v-model="user.last_name"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <div class="mb-3">
                <label for="email" class="font-weight-medium">
                  Email <span style="font-size: 18px; color: red">*</span>
                </label>
              </div>

              <v-text-field
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  outlined
                  hide-details="auto"
                  class="elevation-0"
                  :rules="[required('You can\'t leave this field empty'), email()]"
                  v-model="user.email"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <div class="mb-3">
                <label for="organization" class="font-weight-medium">
                  Organization <span style="font-size: 18px; color: red">*</span>
                </label>
              </div>

              <v-text-field
                  id="organization"
                  placeholder="Enter your organization name"
                  type="text"
                  outlined
                  hide-details="auto"
                  class="elevation-0"
                  :rules="[required('You can\'t leave this field empty')]"
                  v-model="user.organization"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <div class="mb-3">
                <label for="password" class="font-weight-medium">
                  Password <span style="font-size: 18px; color: red">*</span>
                </label>
              </div>

              <v-text-field
                  id="password"
                  hide-details="auto"
                  placeholder="Password"
                  :rules="[required()]"
                  :type="showPassword ? 'text' : 'password'"
                  outlined
                  @click:append="showPassword = !showPassword"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  v-model="user.password"
              />

            </v-col>

            <v-col cols="12" md="6">
              <div class="mb-3">
                <label for="confirm_password" class="font-weight-medium">
                  Confirm Password <span style="font-size: 18px; color: red">*</span>
                </label>
              </div>

              <v-text-field
                  id="confirm_password"
                  hide-details="auto"
                  placeholder="Confirm Password"
                  :rules="[required(), (item) => {
                  if (item && item !== user.password) {
                    return 'Password could not be confirmed'
                  }
                  return true;
                }]"
                  :type="showPassword ? 'text' : 'password'"
                  outlined
                  @click:append="showPassword = !showPassword"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  v-model="confirm_password"
              />

            </v-col>
          </v-row>

          <div class="mt-12 ">
            <v-btn type="button" @click="submitForm()"
                   class="mb-6 v-btn v-btn--has-bg theme--light elevation-0 v-size--x-large primary"
                   style="width: 100%">
              Create Account
            </v-btn>
          </div>
        </v-form>

        <div>
          <p class="text-center mx-auto" style="width: 70%">
            By clicking Create Account, I agree to <a href="https://postredi.com/privacy-%26-terms" target="_blank">Postredi's
            Terms</a> including the payment terms, and Privacy Policy
          </p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "signUp",
  data() {
    return {
      showPassword: false,
      valid: true,
      confirm_password: '',
      user: {
        first_name: '',
        last_name: '',
        email: '',
        organization: '',
        password: '',
      },

    }
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        console.log(this.user, 'user');
      }
    },
    required(message = "You can't leave this field empty") {
      return (v) => !!v || message
    },
    email(message = "This email is not valid") {
      return (v) => (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)) || message
    }
  }
}
</script>

<style scoped>
.border {
  border: 1px solid black;
}
</style>