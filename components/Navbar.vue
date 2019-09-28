<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">
      <img src="https://nuxtjs.org/logos/built-with-nuxt-white.svg" alt width="160" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>-->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="$store.state.login.auth">
          <template v-slot:button-content class="text-light">
            <span class="font-weight-regular">Admin</span>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
const cookie = process.client ? require("js-cookie") : undefined;

export default {
  data() {
    return {};
  },
  // async asyncData({ params }) {
  //   const is_login = (await cookie.get("auth")) ? true : false;
  //   return { data: data.data };
  // },
  methods: {
    logout() {
      // Code will also be required to invalidate the JWT Cookie on external API
      cookie.remove("auth");
      this.$store.commit("login/setAuth", null);
      this.$router.push(`/login`);
      console.log("exit =>", new Date());
    }
  }
};
</script>
