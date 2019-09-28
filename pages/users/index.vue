<template>
  <div class="container py-5">
    <h1>Users</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">WebSite</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.website }}</td>
          <td>
            <nuxt-link :to="`/users/${item.id}`" class="text-success">
              <i class="fas fa-eye"></i>
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(data => {
      this.items = data.data;
    });
  },
  middleware: "authenticated",
  methods: {
    // edit(item) {
    //   this.$router.push(`/users/${item}`);
    // },
    // destroy(item) {
    //   console.log(item);
    // }
  },
  data() {
    return {
      items: []
    };
  }
};
</script>
