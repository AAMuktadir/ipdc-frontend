<template>
  <section class="hero-section">
    <img
      :src="src(content.banner, defaultBanner)"
      alt="EZ Hero Banner"
      class="hero-banner"
      loading="lazy"
    />
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultBanner: require("~/assets/image/ez/hero-banner.avif"),
    };
  },
  methods: {
    src(path, fallback) {
      // use the API value only when it is a runtime-usable URL,
      // otherwise fall back to the bundled asset
      return path && /^(https?:|\/|data:)/.test(path) ? path : fallback;
    },
  },
};
</script>

<style scoped>
.hero-section {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  /* margin-top: 87px; */
}

.hero-banner {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
