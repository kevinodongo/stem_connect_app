<template>
  <div class="about">
    <Header />
    <Details />
    <Pricing />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/parts/Header";
import Details from "../components/parts/Details";
import Pricing from "../components/parts/Pricing";
import Footer from "../components/parts/Footer";
import Contact from "../components/parts/Contact";
export default {
  name: "About",
  components: { Header, Details, Pricing, Footer, Contact },
  data() {
    return {
      //
    };
  }
};
</script>
