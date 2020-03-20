<template>
  <div class="container py-3">
    <h1>Users</h1>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Species</th>
            <th scope="col">Type</th>
            <th scope="col">Gender</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <th scope="row">
              <img
                :src="item.image"
                :alt="item.name"
                class="rounded-circle"
                width="48"
              />
            </th>
            <td>{{ item.name }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.species }}</td>
            <td>{{ item.type || "--" }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <nuxt-link :to="`/users/${item.id}`" class="text-success">
                <i class="fas fa-eye"></i>
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async created() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`).then(data => {
    axios.get(`https://rickandmortyapi.com/api/character`).then(data => {
      // axios.get(`http://localhost:8000/api/users`).then(data => {
      this.items = data.data.results;
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
