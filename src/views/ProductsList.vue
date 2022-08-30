<template>
  <div class="border d-flex justify-center align-center" style="margin-top: 140px">
    <div class="border" style="width: 100%; max-width: 1100px">
      <div v-for="(product,key) in products.data" :key="key">
        {{ product }} <br>
        <img :src="product.images[0]" alt="img" />
        <p>Id: {{ product.id }}</p>
        <p>Name: {{ product.name }}</p>
        <p>Description: {{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  data() {
    return {
      products: []
    }
  },
  mounted() {
    let _token = 'sk_test_51Heg1YJSWGCP5TnEs2DgWqUTS54SjNncELc0Kq71gFbpMV1rMcaXzecxzwdypM8nAVWZC75iMlNQT7ed4aEL631H00JDn6YN0t';
    this.$axios.get('https://api.stripe.com/v1/products', { headers: {"Authorization" : `Bearer ${_token}`} })
        .then((response) => {
          console.log(response)
          console.log(response.data)
          this.products = response.data
        })
        .catch((error) => console.log(error))
  }
}
</script>

<style scoped>

</style>