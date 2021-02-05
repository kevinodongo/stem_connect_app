<template>
  <div class="top-section">
    <nav class="bg-black sticky top-0">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              @click="showmenu = !showmenu"
              class="inline-flex cursor-pointer items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Icon when menu is open. -->
              <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                class="hidden h-6 w-6"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 mt-2 flex items-center">
              <img
                class="block lg:hidden h-10 w-auto"
                src="/QMzUwlS-removebg-preview.png"
                alt="Workflow"
              />
              <img
                class="hidden lg:block h-10 w-auto"
                src="/QMzUwlS-removebg-preview.png"
                alt="Workflow"
              />
            </div>
            <h1
              class="ml-3 mt-2 tracking-tight font-semibold text-white md:text-xl"
            >
              <span class="block xl:inline">Stem Connect Africa</span>
            </h1>

            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                  @click="howitworks"
                  class="bg-gray-900 cursor-pointer mt-2 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >How it works</a
                >
              </div>
            </div>
          </div>
          <div
            class="absolute hidden sm:block  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <a
              @click="login"
              class="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Login</a
            >
            <a
              @click="signup"
              class="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Sign up</a
            >
          </div>
        </div>
      </div>
      <div v-if="showmenu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            @click="howitworks"
            class="bg-gray-900 text-white cursor-pointer block px-3 py-2 rounded-md text-base font-medium"
            >How it works</a
          >
          <a
            @click="signup"
            class="text-gray-300 hover:bg-gray-700 cursor-pointer hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Sign up</a
          >
          <a
            @click="login"
            class="text-gray-300 hover:bg-gray-700 cursor-pointer hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Login</a
          >
        </div>
      </div>
    </nav>

    <div
      style="background-image: url('https://res.cloudinary.com/dk5ch7wqm/image/upload/v1612462736/nasa-Q1p7bh3SHj8-unsplash_ywkfyu.jpg')"
      class="flex justify-center bg-black min-h-screen content-center flex-wrap"
    >
      <div>
        <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1
              class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline"
                >Explore Ideas At Stem Connect Africa</span
              >
            </h1>
            <h1
              class="text-4xl mt-5 tracking-tight font-extrabold text-white sm:text-4xl md:text-5xl"
            >
              <span class="block xl:inline"
                >Find Talent At Stem Connect Africa</span
              >
            </h1>
            <p class="text-white mt-5 mb-24 md:text-xl">
              <span class="block xl:inline"
                >Combining, Science, Technology, Engineering And
                Mathematics</span
              >
            </p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showmenu: false
    };
  },
  methods: {
    // login
    login() {
      this.$router.push("/login");
    },
    // signup
    signup() {
      this.$router.push("/signup");
    },
    // login help
    howitworks() {
      //this.$router.push("/how-it-works");
      window.open(
        "https://master.d12acev5deb288.amplifyapp.com/#/how-it-works",
        "_blank"
      );
    }
  }
};
</script>
