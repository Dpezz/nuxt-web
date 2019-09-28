<template>
  <div class="container py-4">
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="email" class="form-control" :value="data.name" disabled />
      </div>
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" :value="data.username" disabled />
      </div>
      <div class="form-group">
        <label>Phone</label>
        <input type="email" class="form-control" :value="data.phone" disabled />
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" :value="data.email" disabled />
      </div>
      <div class="form-group">
        <label>Website</label>
        <input type="text" class="form-control" :value="data.website" disabled />
      </div>
      <div class="form-group">
        <label>Company</label>
        <input type="text" class="form-control" :value="data.company.name" disabled />
      </div>
    </form>
    <nuxt-link to="/users">volver</nuxt-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    return { data: data.data };
  },
  middleware: "authenticated",
  methods: {
    save() {}
  },
  data() {
    return {};
  }
};
</script>
