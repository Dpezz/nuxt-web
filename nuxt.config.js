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
    "@assets/css/sidebar.css",
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
    "bootstrap-vue/nuxt"
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
