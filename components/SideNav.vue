<template>
  <div class="bg-primary border-right position-fixed" id="sidebar-wrapper">
    <div class="px-4 py-1 pb-5">
      <img
        src="https://nuxtjs.org/logos/nuxt-icon-white.png"
        class="text-center"
        width="56"
        alt=""
      />
    </div>
    <div class="list-group list-group-flush text-center">
      <a href="#" class="list-group-item list-group-item-action bg-transparent">
        <i class="fas fa-users text-light"></i>
      </a>
      <a href="#" class="list-group-item list-group-item-action bg-transparent">
        <i class="fas fa-file-alt text-light"></i>
      </a>
    </div>
    <div class="list-group list-group-flush text-center fixed-bottom pb-2">
      <a href="#" class="list-group-item list-group-item-action bg-transparent">
        <i class="fas fa-ellipsis-h text-light"></i>
      </a>
      <a href="#" class="list-group-item list-group-item-action bg-transparent">
        <i class="fas fa-sign-out-alt text-light"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>
