<template>
  <div>
    <b-navbar type="light" variant="light">
      <b-navbar-nav>
        <b-navbar-brand href="#" v-if="!$auth.user">
          <img
            src="https://nuxtjs.org/logos/built-with-nuxt.svg"
            alt
            width="160"
          />
        </b-navbar-brand>

        <b-input-group size="sm" class="my-2" v-else>
          <b-navbar-brand v-b-modal.modal-1 class="d-block d-lg-none ">
            <b-icon icon="three-dots-vertical"></b-icon>
          </b-navbar-brand>

          <!-- <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="search" placeholder="Search terms"></b-form-input> -->
        </b-input-group>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" variant="primary" v-if="$auth.user">
        <b-nav-item-dropdown right v-if="$auth.user">
          <template v-slot:button-content>
            <span class="text-primary font-weight-regular">
              {{ $auth.user.email }}
            </span>
            <b-icon icon="person" variant="dark"></b-icon>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="$auth.logout()"
            >Log Out</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" variant="primary" v-else>
        <b-button
          variant="outline-dark"
          size="sm"
          type="button"
          class="mx-2"
          to="/login"
          >Go to Login</b-button
        >
      </b-navbar-nav>
    </b-navbar>


  </div>
</template>

<script>
import SideNav from "~/components/SideNav.vue";
export default {
  components: {
    SideNav
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
