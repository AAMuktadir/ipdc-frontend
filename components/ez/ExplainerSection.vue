<template>
  <section class="explainer-section gsap-fade-up">
    <div class="explainer-grid reverse">
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

      <div class="content-side">
        <h2>{{ title }}</h2>

        <p>{{ subTitle }}</p>
        <p class="sub-text">{{ description }}</p>
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
      defaultTitle: "Watch EZ in Action",
      defaultSubTitle: "A Guide to Smarter Financing",
      defaultDescription:
        "Looking for a easy way to manage your finances? Watch our quick explainer video to see exactly how you can open accounts, manage savings, and download certificates. All from your phone. From first time savers to seasoned investors, EZ is designed to make your financial life effortless. Discover financing, reimagined for the digital age.",
    };
  },
  computed: {
    title() {
      return this.pick(this.content.title, this.content.title_bangla) || this.defaultTitle;
    },
    subTitle() {
      return this.pick(this.content.sub_title, this.content.sub_title_bangla) || this.defaultSubTitle;
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
.explainer-section {
  padding: 100px 0;
  background: radial-gradient(
      circle at top left,
      rgba(163, 46, 128, 0.25),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(163, 46, 128, 0.45),
      transparent 30%
    ),
    #000;
}

.explainer-grid {
  width: 90%;
  max-width: 1800px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 625px;
  gap: 5vw;
  align-items: center;
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

.content-side {
  text-align: right;
  color: #fff;
  margin-bottom: 50px;
}

.content-side h2 {
  font-size: 56px;
  color: white;
  margin-bottom: 20px;
}

.content-side p {
  line-height: 1.8;
  font-size: 1.5rem;
  margin: 80px 0;
  color: rgba(255, 255, 255, 0.75);
}

.content-side .sub-text {
  max-width: 900px;
  margin: 15px auto 0;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 991px) {
  .explainer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
