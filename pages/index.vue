<template>
  <div class="container">
    <div class="text-center p-5">
      <!-- <logo /> -->
      <h1 class="display-1 text-success mb-0">nuxt-web</h1>
      <h2 class="display-4 text-muted mt-0">My sweet Nuxt.js project</h2>
      <div class="my-4">
        <nuxt-link class="btn btn-dark" to="/login">Go to login</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from "~/components/Logo.vue";

export default {
  // components: {
  //   Logo
  // },
  middleware: "notAuthenticated"
};
</script>
