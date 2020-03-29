<template>
  <div class="container py-3">
    <form>
      <img
        :src="data.image"
        :alt="data.name"
        class="rounded-circle mx-auto d-block"
        width="200"
      />

      <div class="form-group">
        <label>Name</label>
        <input type="email" class="form-control" v-model="data.name" disabled />
      </div>
      <div class="form-group">
        <label>Status</label>
        <input
          type="text"
          class="form-control"
          v-model="data.status"
          disabled
        />
      </div>
      <div class="form-group">
        <label>Species</label>
        <input
          type="email"
          class="form-control"
          v-model="data.species"
          disabled
        />
      </div>
      <div class="form-group" v-if="data.type">
        <label>Type</label>
        <input type="email" class="form-control" v-model="data.type" disabled />
      </div>
      <div class="form-group">
        <label>Gender</label>
        <input
          type="text"
          class="form-control"
          v-model="data.gender"
          disabled
        />
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
      // `https://jsonplaceholder.typicode.com/users/${params.id}`
      `https://rickandmortyapi.com/api/character/${params.id}`
    );
    console.log(data.data);
    return { data: data.data };
  },
  layout: 'private',
  middleware: "auth",
  methods: {
    save() {}
  },
  data() {
    return {};
  }
};
</script>
