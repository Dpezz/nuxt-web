<template>
  <div
    class="mx-0 px-0 bg-light sidebar"
    :class="(isShort ? 'col-xs' : (isModal ? 'col' : 'col-2'))"
  >
    <div class="py-2 pt-3 pb-5 px-3 text-center">
      <img
        src="https://nuxtjs.org/logos/nuxtjs-typo.svg"
        class="text-center img-scale"
        width="124"
        alt
        v-if="!isShort"
      />
      <img src="https://nuxtjs.org/logos/nuxt-square.svg" class width="36" alt v-if="isShort" />
    </div>

    <div class="sidebar-inner" :class="isShort ? 'text-center' : 'text-left'">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="(item, i) in routes" :key="i" @click="setActive(item.pathname)">
          <nuxt-link class="nav-link" :to="`${item.pathname}`" :class="item.active ? 'active' : ''">
            <b-icon :icon="`${item.icon}`" class="mr-1"></b-icon>
            <span v-if="!isShort">{{ item.name | capitalize }}</span>
          </nuxt-link>
        </li>
      </ul>

      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span v-if="!isShort">Saved reports</span>
        <b-icon icon="bookmark" aria-hidden="true" v-if="!isShort"></b-icon>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item" v-for="(item, i) in reports" :key="i">
          <a class="nav-link" href="#">
            <b-icon icon="check-circle" class="mr-1"></b-icon>
            <span v-if="!isShort">{{ item }}</span>
          </a>
        </li>
      </ul>
      <ul
        class="nav flex-column mb-2 fixed-bottom px-0 d-none d-lg-block"
        :class="isShort ? 'col-xs' : 'col-2'"
      >
        <li class="nav-item">
          <a
            class="nav-link px-3"
            @click="changeSize()"
            :class="isShort ? 'text-center' : 'text-right'"
          >
            <b-icon icon="arrow-left-circle" v-if="!isShort"></b-icon>
            <b-icon icon="arrow-right-circle" v-if="isShort"></b-icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isModal"],
  data() {
    return {
      routes: [
        {
          pathname: "/home",
          name: "home",
          icon: "house",
          active: false
        },
        {
          pathname: "/users",
          name: "users",
          icon: "people",
          active: false
        }
      ],
      reports: [
        "Current month",
        "Last quarter",
        "Social engagement",
        "Year-end sale"
      ],
      isShort: false
    };
  },
  mounted() {
    this.setActive(window.location.pathname);
    console.log(this.isModal);
  },
  methods: {
    changeSize() {
      this.isShort = !this.isShort;
    },
    setActive(item) {
      this.routes.map(route => {
        route.active = item.includes(route.name.toLowerCase()) ? true : false;
      });
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
