export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "https://nuxtjs.org/logos/nuxt-emoji.png"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#00c48d" },
  /*
   ** Global CSS
   */
  css: [
    "@fortawesome/fontawesome-free/css/all.min.css",
    "@assets/css/sidenav.css",
    "@assets/css/style.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],

  bootstrapVue: {
    icons: true
  },

  axios: {
    baseURL: "http://localhost:8000/api"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  router: {
    middleware: ["auth"]
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "access_token"
          },
          logout: { url: "/auth/logout", method: "delete" },
          user: { url: "/auth/profile", method: "get", propertyName: "user" }
        },
        tokenRequired: true
        // tokenType: 'bearer'
        // autoFetchUser: true
      }
    },
    redirect: {
      login: "/login",
      logout: "/login",
      home: "/home"
    },
    cookie: {
      options: {
        expires: 1
        // maxAge: 60
      }
    }
  }
};
