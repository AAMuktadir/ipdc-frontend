export default {
  debug: false,
  target: "static",
  generate: {
    fallback: "404.html",
  },

  // // 1. SECURITY HEADERS MITIGATION
  // // This addresses the VAPT findings for Clickjacking and other header risks
  // render: {
  //   static: {
  //     setHeaders(res) {
  //       res.setHeader('X-Frame-Options', 'DENY'); // Prevents Clickjacking
  //       res.setHeader('X-Content-Type-Options', 'nosniff');
  //       res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  //       res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  //       res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  //       res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  //       res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
  //       res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  //       // Content Security Policy (Adjusted to allow your Recaptcha)
  //       res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com/recaptcha/ https://www.gstatic.com; style-src 'self' 'unsafe-inline'; frame-src 'self' https://www.google.com/;");
  //     }
  //   }
  // },

  head: {
    titleTemplate: (titleChunk) => {
      const locales = {
        en: "IPDC Finance PLC.",
        bn: "আইপিডিসি ফাইন্যান্স পিএলসি.",
      };

      const currentLocale = process.browser
        ? document.documentElement.lang || "en"
        : "en";

      const siteName = locales[currentLocale] || locales.en;

      return titleChunk ? `${siteName} - ${titleChunk}` : siteName;
    },
    script: [
      {
        hid: "gtm-script",
        innerHTML: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TX8JQH5M');
        `,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      "gtm-script": ["innerHTML"],
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "version", content: "version=0.25.07.26" },
      {
        hid: "facebook-domain-verification",
        name: "facebook-domain-verification",
        content: "aikqissxz92nm3k5k1iboqkjdne7dr",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["~/assets/css/main.scss"],

  plugins: [
    { src: "~/plugins/owl.js", ssr: false },
    { src: "~/plugins/chart.js", ssr: false },
    { src: "~/plugins/vue-notification.js", ssr: false },
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/video.js", ssr: false },
    { src: "~/plugins/vue-apexcharts.js", mode: "client" },
    { src: "~/plugins/gsap.js", mode: "client" },
    "~/plugins/scroll.js",
    "~/plugins/axios-retry.js",
    { src: "~/plugins/bkoi.js", mode: "client" },
  ],

  purgeCSS: {
    whitelist: [
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
      "zoom-in",
    ],
  },

  components: true,

  buildModules: ["@nuxtjs/pwa"],

  modules: [
    [
      "nuxt-i18n",
      {
        locales: ["en", "bn"],
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          silentFallbackWarn: true,
          messages: {
            en: {
              greeting: "Hello world!",
            },
            bn: {
              greeting: "ওহে বিশ্ব!",
            },
          },
        },
      },
    ],
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "bootstrap-vue/nuxt",
    [
      "vue-toastification/nuxt",
      {
        timeout: 1000,
        draggable: true,
      },
    ],
    "@nuxtjs/recaptcha",
  ],

  publicRuntimeConfig: {
    recaptcha: {
      hideBadge: false,
      mode: "base",
      siteKey: "6LcUY9IjAAAAAAUzC1K3lKPWCB8qDMYE5ctPIACt",
      version: 2,
      size: "normal",
    },
    BARIKOI_API_KEY:
      "bkoi_5176abc61fb836805c1b255dfd8e68cfda2045d7734b1856eea1da2cce6d2f78",
  },

  axios: {
    // baseUrl: "http://localhost/api/api/v1/",
    baseUrl: "https://ipdc.com/api/api/v1/",
  },

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  build: {
    transpile: ["bkoi-gl"],

    babel: {
      plugins: ["@babel/plugin-transform-runtime"],
      ignore: ["node_modules/bootstrap-vue/src/icons"],
    },
  },
};
