<template>
  <section class="video-section gsap-fade-up">
    <div class="video-grid">
      <div class="content-side">
        <h2>{{ title }}</h2>

        <p>{{ description }}</p>
      </div>

      <div class="video-card parallax-card">
        <video
          :key="videoSrc"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          class="video-player"
        >
          <source :src="videoSrc" type="video/mp4" />
        </video>
      </div>
    </div>
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
      defaultVideo: require("~/assets/image/ez/launch-video.mp4"),
      defaultTitle: "Finance is Easier with EZ",
      defaultDescription:
        "Take a scroll through the app and see how IPDC EZ simplifies your finances; from account opening to document downloads, all in one smartly designed interface.",
    };
  },
  computed: {
    title() {
      return this.pick(this.content.title, this.content.title_bangla) || this.defaultTitle;
    },
    description() {
      return (
        this.pick(this.content.description, this.content.description_bangla) ||
        this.defaultDescription
      );
    },
    videoSrc() {
      return this.src(this.content.video, this.defaultVideo);
    },
  },
  methods: {
    pick(en, bn) {
      const isBn = this.$i18n && this.$i18n.locale === "bn";
      if (isBn && bn) return bn;
      return en || "";
    },
    src(path, fallback) {
      // use the API value only when it is a runtime-usable URL,
      // otherwise fall back to the bundled asset
      return path && /^(https?:|\/|data:)/.test(path) ? path : fallback;
    },
  },
};
</script>

<style scoped>
.video-section {
  padding: 100px 0;
  background: radial-gradient(
      circle at top right,
      rgba(163, 46, 128, 0.45),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(163, 46, 128, 0.25),
      transparent 30%
    ),
    #000;
}

.video-grid {
  width: 90%;
  max-width: 1800px;
  margin: auto;
  display: grid;
  grid-template-columns: 625px 1fr;
  gap: 5vw;
  align-items: center;
}

.content-side h2 {
  font-size: 48px;
  color: white;
  margin-bottom: 10px;
}

.content-side p {
  line-height: 1.5;
  font-size: 1.2rem;
  margin-top: 50px;
  color: rgba(255, 255, 255, 0.75);
}

.video-card {
  background: rgba(255, 255, 255, 0.08);
  /* padding: 20px; */
  border-radius: 30px;
  backdrop-filter: blur(15px);
  overflow: hidden;
}

.video-player {
  width: 100%;
  border-radius: 24px;
  display: block;
}

@media (max-width: 991px) {
  .video-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
