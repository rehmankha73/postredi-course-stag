<template>
  <div class="border d-flex justify-center align-center" style="margin-top: 140px">
    <div class="border" style="width: 100%; max-width: 1100px">
      <form id="payment-form">
        <div id="payment-element">
          <!--Stripe.js injects the Payment Element-->
        </div>
        <button id="submit">
          <div class="spinner hidden" id="spinner"></div>
          <span id="button-text">Pay now</span>
        </button>
        <div id="payment-message" class="hidden"></div>
      </form>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import axios from "axios";

export default {
  name: "CheckoutView",
  data() {
    return {
      stripe: '',
      items: '',
      elements: null
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    const stripe = Stripe("pk_test_51Heg1YJSWGCP5TnEY70pXH6DJvjyliznkXiO2h4bAr7hvhwvZtouL3TdgZYnYN7278ZTm79ztZEeLL1A4H5hfRWW00UTX8C4ec");
    console.log(stripe)

    // const items = [{ id: "xl-tshirt", amount: 2000, currency: 'usd',  }];

    // let clientSecret;

    let elements;

    initialize();
    checkStatus();

    document.querySelector("#payment-form").addEventListener("submit", handleSubmit);

    async function initialize() {
      // const response = await fetch("/create-payment-intent", {

      let _data = {
        amount: 2000,
        currency: 'usd',
        'payment_method_types[]': 'card'
      }


      let _headers = {
        "Authorization": `Bearer sk_test_51Heg1YJSWGCP5TnEs2DgWqUTS54SjNncELc0Kq71gFbpMV1rMcaXzecxzwdypM8nAVWZC75iMlNQT7ed4aEL631H00JDn6YN0t`,
        "Content-Type": "application/x-www-form-urlencoded"
      };

      const response = await axios({
        method: 'post',
        url: "https://api.stripe.com/v1/payment_intents",
        data: qs.stringify(_data),
        headers: _headers
      })
      // const response = await axios.post("https://api.stripe.com/v1/payment_intents", _data, _config)

      console.log(response.data)


      // const response = await fetch("https://api.stripe.com/v1/payment_intents", {
      //   method: "POST",
      //   headers: { "Authorization": `Bearer sk_test_51Heg1YJSWGCP5TnEs2DgWqUTS54SjNncELc0Kq71gFbpMV1rMcaXzecxzwdypM8nAVWZC75iMlNQT7ed4aEL631H00JDn6YN0t`,
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   body: JSON.stringify({ items }),
      // });
      // console.log(response);
      const clientSecret = await response.data;

      // clientSecret = await stripe.paymentIntents.create({
      //   amount: 200,
      //   currency: "usd",
      //   payment_method_types: ["card"],
      //   receipt_email: "hadeklte@gmail.com",
      // });

      console.log(clientSecret, 'cs')

      const appearance = {
        theme: 'stripe',
      };
      let _s = clientSecret.client_secret;
      console.log(_s);

      elements = stripe.elements({appearance, clientSecret: _s});

      const paymentElement = elements.create("payment");
      paymentElement.mount("#payment-element");
    }

    async function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);

      const {error} = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:8080",
        },
      });

      if (error.type === "card_error" || error.type === "validation_error") {
        showMessage(error.message);
      } else {
        showMessage("An unexpected error occurred.");
      }

      setLoading(false);
    }

    async function checkStatus() {
      const clientSecret = new URLSearchParams(window.location.search).get(
          "payment_intent_client_secret"
      );

      if (!clientSecret) {
        return;
      }

      const {paymentIntent} = await stripe.retrievePaymentIntent(clientSecret);

      switch (paymentIntent.status) {
        case "succeeded":
          showMessage("Payment succeeded!");
          break;
        case "processing":
          showMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          showMessage("Your payment was not successful, please try again.");
          break;
        default:
          showMessage("Something went wrong.");
          break;
      }
    }

    function showMessage(messageText) {
      const messageContainer = document.querySelector("#payment-message");

      messageContainer.classList.remove("hidden");
      messageContainer.textContent = messageText;

      setTimeout(function () {
        messageContainer.classList.add("hidden");
        messageText.textContent = "";
      }, 4000);
    }

    function setLoading(isLoading) {
      if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector("#submit").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
      } else {
        document.querySelector("#submit").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
      }
    }
  },
}
</script>

<style scoped>
/* Variables */
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
}

form {
  width: 30vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
  0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;
}

.hidden {
  display: none;
}

#payment-message {
  color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
}

#payment-element {
  margin-bottom: 24px;
}

/* Buttons and links */
button {
  background: #5469d4;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
}

button:hover {
  filter: contrast(115%);
}

button:disabled {
  opacity: 0.5;
  cursor: default;
}

/* spinner/processing state, errors */
.spinner,
.spinner:before,
.spinner:after {
  border-radius: 50%;
}

.spinner {
  color: #ffffff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

.spinner:before,
.spinner:after {
  position: absolute;
  content: "";
}

.spinner:before {
  width: 10.4px;
  height: 20.4px;
  background: #5469d4;
  border-radius: 20.4px 0 0 20.4px;
  top: -0.2px;
  left: -0.2px;
  -webkit-transform-origin: 10.4px 10.2px;
  transform-origin: 10.4px 10.2px;
  -webkit-animation: loading 2s infinite ease 1.5s;
  animation: loading 2s infinite ease 1.5s;
}

.spinner:after {
  width: 10.4px;
  height: 10.2px;
  background: #5469d4;
  border-radius: 0 10.2px 10.2px 0;
  top: -0.1px;
  left: 10.2px;
  -webkit-transform-origin: 0px 10.2px;
  transform-origin: 0px 10.2px;
  -webkit-animation: loading 2s infinite ease;
  animation: loading 2s infinite ease;
}

@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 600px) {
  form {
    width: 80vw;
    min-width: initial;
  }
}
</style>