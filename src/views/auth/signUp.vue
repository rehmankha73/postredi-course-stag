<template>
  <div class="d-flex justify-center align-center py-6" style="margin-top: 140px"
      :class="[$vuetify.breakpoint.smAndDown ? 'px-6' : '' ]"
  >
    <div class="" style="width:100%; max-width: 1100px">
      <v-card class="mx-auto pa-8" style="width: 800px">
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

    <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="pubic_key"
        :line-items="line_items"
        :success-url="success_url"
        :cancel-url="cancel_url"
        @loading="v => loading = v"
    />
  </div>
</template>

<script>
import {StripeCheckout} from '@vue-stripe/vue-stripe';

export default {
  name: "signUp",
  components: {
    StripeCheckout
  },
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

      pubic_key: 'pk_test_51Heg1YJSWGCP5TnEY70pXH6DJvjyliznkXiO2h4bAr7hvhwvZtouL3TdgZYnYN7278ZTm79ztZEeLL1A4H5hfRWW00UTX8C4ec',
      stripe_key: 'sk_test_51Heg1YJSWGCP5TnEs2DgWqUTS54SjNncELc0Kq71gFbpMV1rMcaXzecxzwdypM8nAVWZC75iMlNQT7ed4aEL631H00JDn6YN0t',
      loading: false,
      line_items: [],
      success_url: 'http://localhost:8080/pcaf',
      cancel_url: 'http://localhost:8080/pcaf'
    }
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        console.log(this.user, 'user');
        let _data = {
          username:  this.user.email,
          password: this.user.password,
          name: this.user.first_name + this.user.last_name,
          organizationName:this.user.organization,
        }
        try{
          const response = await this.$axios.post('https://api-staging.postredi.com/auth/sign-up', _data)
          this.line_items = [];
          this.line_items.push({price: "price_1LDjZ1JSWGCP5TnERTSiudS4", quantity: 1});
          console.log(this.line_items)
          this.$refs.checkoutRef.redirectToCheckout()
          console.log(response)
        } catch (e) {
          console.log(e)
        }
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
</style>