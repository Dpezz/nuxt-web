<template>
  <div class="row mx-0">
    <SideNav v-if="$auth.user" />
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-0">
      <Navbar />
      <nuxt />
    </main>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<script>
import Navbar from "~/components/Navbar.vue";
import SideNav from "~/components/SideNav.vue";

export default {
  components: {
    Navbar,
    SideNav
  }
};
</script>
