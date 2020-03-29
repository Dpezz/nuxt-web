<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar p-0 pt-2">
    <div class="py-2 pb-5 px-3">
      <img src="https://nuxtjs.org/logos/built-with-nuxt.svg" class="text-center" width="176" alt />
    </div>

    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <nuxt-link class="nav-link active" to="/home">
            <b-icon icon="house"></b-icon>Dashboard
            <span class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/users">
            <b-icon icon="people"></b-icon>Users
          </nuxt-link>
        </li>
      </ul>

      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>Saved reports</span>
        <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
          <b-icon icon="bookmark" aria-hidden="true"></b-icon>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <b-icon icon="check-circle"></b-icon>Current month
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <b-icon icon="check-circle"></b-icon>Last quarter
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <b-icon icon="check-circle"></b-icon>Social engagement
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <b-icon icon="check-circle"></b-icon>Year-end sale
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>