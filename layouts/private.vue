<template>
  <div class="row mx-0">
    <SideNav :isModal="false" v-if="$auth.user" class="d-none d-sm-none d-md-none d-lg-block" />
    <main role="main" class="col ml-sm-auto px-0">
      <Navbar />
      <nuxt />
    </main>

    <div>
      <b-modal id="modal-1" title="BootstrapVue" hide-header hide-footer>
        <SideNav :isModal="true" />
      </b-modal>
    </div>
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
