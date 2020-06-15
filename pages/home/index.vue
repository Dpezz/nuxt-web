<template>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1 class="display-4">Home!</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  layout: "private",
  middleware: "auth",
  methods: {}
};
</script>
