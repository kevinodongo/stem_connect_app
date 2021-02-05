<template>
  <div class="details">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="py-12 bg-gray-900 min-h-96">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mt-10">
          <dl
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <img
                    class="h-10 w-auto"
                    src="/QMzUwlS-removebg-preview.png"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div>
                <h1
                  class="ml-1 mt-2 tracking-tight font-semibold text-white md:text-xl"
                >
                  <span class="block xl:inline">Stem Connect Africa</span>
                </h1>
                <dd class="mt-4 text-base text-gray-400">
                  The major objectives to achieve in STEM education include
                  developing a solid knowledge base among students and enhancing
                  their interest in Science, Technology and Mathematics;
                  strengthening their ability to integrate and apply knowledge
                  and skills; nurturing their creativity, collaboration and
                  problem solving skills.
                </dd>
              </div>
            </div>
          </dl>
          <hr class="mt-12" />
          <div class="flex flex-row items-center sm:justify-end  mt-3">
            <div>
              <button
                @click="twitter"
                type="button"
                class="w-full inline-flex cursor-pointer justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lightBlue-20 text-base font-medium text-lightBlue-500 focus:outline-none sm:ml-3 sm:w-auto sm:text-base"
              >
                Twitter
              </button>
              <button
                type="button"
                class="w-full inline-flex cursor-pointer justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-20 text-base font-medium text-red-400 focus:outline-none sm:ml-3 sm:w-auto sm:text-base"
              >
                Instagram
              </button>
              <button
                type="button"
                @click="facebook"
                class="w-full inline-flex cursor-pointer justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-20 text-base font-medium text-blue-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-base"
              >
                Facebook
              </button>
              <button
               @click="terms"
                type="button"
                class="w-full cursor-pointer inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-20 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-base"
              >
                Terms & Services
              </button>
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
      //
    };
  },
  methods: {
    // facebook
    facebook() {
      window.open(
        "https://www.facebook.com/stemconnectafricatalent/",
        "_blank"
      );
    },
    // twitter
    twitter() {
      window.open("https://twitter.com/connect_stem", "_blank");
    },
    // terms
    terms(){
      window.open("/Terms and Privacy.pdf", "_blank")
    }
  }
};
</script>
