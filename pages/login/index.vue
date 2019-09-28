<template>
  <div class="container text-center">
    <form class="form-signin text-center my-4">
      <img class="mb-4" src="https://nuxtjs.org/logos/nuxt-square.svg" alt width="124" />
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />

      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Log in</button>
    </form>
    <nuxt-link class="text-center" to="/">volver</nuxt-link>
  </div>
</template>

<script>
const cookie = process.client ? require("js-cookie") : undefined;

export default {
  data() {
    return {
      date: new Date()
    };
  },
  middleware: "notAuthenticated",
  methods: {
    login() {
      const auth = {
        accessToken: "someStringGotFromApiServiceWithAjax",
        accessDate: new Date()
      };
      this.$store.commit("login/setAuth", auth); // mutating to store for client rendering
      cookie.set("auth", auth); // saving token in cookie for server rendering
      this.$router.push("/users");
    }
  }
};
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>