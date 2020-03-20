<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <div class="container-fluid">
      <!-- <b-navbar-brand href="#">
        <img
          src="https://nuxtjs.org/logos/built-with-nuxt-white.svg"
          alt
          width="160"
        />
      </b-navbar-brand> -->
      <b-collapse id="nav-collapse" is-nav>
        <div>
          <b-navbar type="light" variant="transparent">
            <b-nav-form>
              <b-input-group size="sm" prepend="@">
                <b-form-input size="sm" placeholder="Search..."></b-form-input>
              </b-input-group>
            </b-nav-form>
          </b-navbar>
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-nav class="ml-auto" variant="primary">
          <b-nav-item href="#">
            <i class="fas fa-envelope text-muted"></i>
          </b-nav-item>
          <b-nav-item href="#" class="pr-3">
            <i class="fas fa-bell text-muted"></i>
          </b-nav-item>

          <b-nav-item-dropdown right v-if="$store.state.login.auth">
            <template v-slot:button-content>
              <i class="fas fa-user-circle text-muted"></i>
              <!-- <span class="text-primary font-weight-regular">Admin</span> -->
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
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
