<template>
  <div class="border d-flex justify-center align-center" style="margin-top: 140px">
    <div class="border" style="width: 100%; max-width: 1100px">
      <v-row class="pa-4">
        {{ products[0] }}
        <v-col cols="12" sm="6" md="4" v-for="(product,key) in products" :key="key">
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-img
                :src="product.images[0]"
                height="300px"
            ></v-img>

            <v-card-title>
              {{ product.name }}
            </v-card-title>

            <v-card-subtitle>
              Price: ${{ (Math.round(product.price.unit_amount) / 100).toFixed(2) }}
            </v-card-subtitle>

            <v-card-text>
              {{ product.description }}
            </v-card-text>

            <v-card-actions>
              <v-btn
                  @click="buyItNow()"
                  color="primary lighten-2"
                  style="width: 100%"
              >
                Buy it <b>Now</b>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  data() {
    return {
      products: [
        {
          "id": "prod_ML87A0JDhsVkEd",
          "object": "product",
          "active": true,
          "attributes": [],
          "created": 1661855978,
          "default_price": "price_1LcRr5JSWGCP5TnEZzY608jI",
          "description": "LED",
          "images": ["https://files.stripe.com/links/MDB8YWNjdF8xSGVnMVlKU1dHQ1A1VG5FfGZsX3Rlc3RfSnhWS3FtTFN3ekVYRjc0bnljajZjOGhT00ToiF1jjx"],
          "livemode": false,
          "metadata": {},
          "name": "Samsung LED",
          "package_dimensions": null,
          "shippable": null,
          "statement_descriptor": null,
          "tax_code": null,
          "type": "service",
          "unit_label": null,
          "updated": 1661855979,
          "url": null,
          "price": {
            "id": "price_1LcRr5JSWGCP5TnEZzY608jI",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1661855979,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_ML87A0JDhsVkEd",
            "recurring": {
              "aggregate_usage": null,
              "interval": "year",
              "interval_count": 1,
              "trial_period_days": null,
              "usage_type": "licensed"
            },
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "recurring",
            "unit_amount": 1000,
            "unit_amount_decimal": "1000"
          }
        }
      ],
      stripe_key: 'sk_test_51Heg1YJSWGCP5TnEs2DgWqUTS54SjNncELc0Kq71gFbpMV1rMcaXzecxzwdypM8nAVWZC75iMlNQT7ed4aEL631H00JDn6YN0t',
    }
  },
  async mounted() {

  },
  methods: {
    buyItNow() {
      this.$router.push('/checkout')
      // const _config = {headers: {"Authorization": `Bearer ${this.stripe_key}`}};
      // const _data = {};
      // this.$axios.post("https://api.stripe.com/v1/payment_intents", _data,_config)
      //     .then((response) => console.log(response))
      //     .catch((error) => console.log(error))
    },
    async getProducts() {
      const _config = {headers: {"Authorization": `Bearer ${this.stripe_key}`}}
      const response = await this.$axios.get('https://api.stripe.com/v1/products', _config)
      const products = response.data.data
      for (let i = 0; i < products.length; i++) {
        const res = await this.$axios.get('https://api.stripe.com/v1/prices/' + products[i].default_price, _config)
        console.log(res.data, 'price')
        products[i].price = res.data
      }
      this.products = [...products]
      console.log(this.products, 'products')
    }
  }
}
</script>

<style scoped>

</style>