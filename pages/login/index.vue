<template>
  <div class="form-signin text-center my-4">
    <img class="mb-4" src="https://nuxtjs.org/logos/nuxt-square.svg" alt width="124" />
    <h1 class="h3 mb-3 font-weight-normal">Login</h1>

    <b-form>
      <b-form-group>
        <b-form-input
          id="input-1"
          type="email"
          v-model="userInfo.email"
          placeholder="Enter email"
          required
          autofocus
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="input-2"
          type="password"
          v-model="userInfo.password"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button variant="primary" size="lg" block pill @click="login(userInfo)">Login</b-button>
    </b-form>

    <nuxt-link class="text-center" to="/">volver</nuxt-link>
  </div>
</template>

<script>
const cookie = process.client ? require("js-cookie") : undefined;

export default {
  data() {
    return {
      date: new Date(),
      userInfo: {
        email: "jara@jara.cl",
        password: "12345"
      }
    };
  },
  // middleware: "notAuthenticated",
  auth: "guest",
  methods: {
    login(userInfo) {
      // const auth = {
      //   accessToken: "someStringGotFromApiServiceWithAjax",
      //   accessDate: new Date()
      // };
      // this.$store.commit("login/setAuth", auth); // mutating to store for client rendering
      // cookie.set("auth", auth); // saving token in cookie for server rendering
      // this.$router.push("/users");
      this.$auth.loginWith("local", { data: userInfo });
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
