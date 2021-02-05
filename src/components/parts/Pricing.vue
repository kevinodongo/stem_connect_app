<template>
  <div class="footer">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-emerald-600 font-semibold tracking-wide uppercase"
          >
            Pricing
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our plans are the best
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Designed to maximise your success, earnings and future!. Change
            plans anytime, conditions apply see FAQ
          </p>
        </div>
        <div class="mt-10">
          <div class="grid sm:grid-cols-3 gap-4">
            <div
              class="shadow-xl px-5 py-10"
              v-for="(item, index) in items"
              :key="index"
            >
              <div class="py-8">
                <div class="max-w-7xl mx-auto">
                  <div class="grid grid-cols-1">
                    <div>
                      <dt
                        class="text-2xl leading-6 font-semibold text-gray-800"
                      >
                        {{ item.title }}
                      </dt>
                      <dt class="mt-7 mb-7 leading-6">
                        <span class="text-lg text-gray-500">USD</span>
                        <span class="text-4xl font-extrabold text-gray-900">
                          ${{ item.price }}</span
                        ><span class="text-gray-500 ml-1">/mo</span>
                      </dt>
                    </div>
                    <div>
                      <button
                        @click="login"
                        type="button"
                        class="group relative w-full cursor-pointer flex justify-center py-2 px-4 mb-7 border border-transparent text-sm rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                      >
                        <span class="text-lg">Buy {{ item.title }}</span>
                      </button>
                    </div>
                    <hr />
                    <div>
                      <dd class="mt-3 mb-4 text-lg text-gray-700 font-medium">
                        WHAT'S INCLUDED
                      </dd>
                      <dd
                        class="mt-1 text-lg text-gray-500"
                        v-for="(item, index) in item.details"
                        :key="index"
                      >
                        <button
                          type="button"
                          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          id="main-menu"
                          aria-haspopup="true"
                        >
                          <span class="sr-only">Open main menu</span>
                          <!-- Heroicon name: outline/menu -->
                          <svg
                            class="h-6 w-6 text-emerald-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                        {{ item }}
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Basic",
          price: "0.00",
          text: "",
          details: [
            "Custom Cover Photo.",
            "Limited invoicing.",
            "Limited bids.",
            "Unlimited blogging."
          ]
        },
        {
          title: "Standard",
          price: "7.00",
          text: "",
          details: [
            "Everything basic + ",
            "Verified freelancer work history and reviews on Stem Connect Africa",
            "Customer Support",
            "Invoice your clients.",
            "Unlimited bids."
          ]
        },
        {
          title: "Premium",
          price: "11.00",
          text: "",
          details: [
            "Everything standard +.",
            "Dedicated account management.",
            "Featured Jobs upgrade.",
            "Customized invoicing.",
            "Reporting and insights"
          ]
        }
      ]
    };
  },
  methods: {
    // login
    login(){
      this.$router.push("/login")
    }
  },
};
</script>
