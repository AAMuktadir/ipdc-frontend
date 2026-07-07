<template>
  <div class="ez-demo-page">
    <HeroSection :content="hero" />
    <AboutEzSection :content="about" />
    <FeaturesSection :content="features" />
    <ScreensPreviewSection :content="screensPreview" />
    <LaunchVideoSection :content="launchVideo" />
    <!-- <ExplainerSection :content="explainer" /> -->
    <CampaignSection :content="campaign" />
    <FaqSection :page="page" />
    <DownloadSection :content="download" />
  </div>
</template>

<script>
import HeroSection from "@/components/ez/HeroSection.vue";
import AboutEzSection from "@/components/ez/AboutEzSection.vue";
import FeaturesSection from "@/components/ez/FeaturesSection.vue";
import ScreensPreviewSection from "@/components/ez/ScreensPreviewSection.vue";
import LaunchVideoSection from "@/components/ez/LaunchVideoSection.vue";
import ExplainerSection from "@/components/ez/ExplainerSection.vue";
import CampaignSection from "@/components/ez/CampaignSection.vue";
import FaqSection from "@/components/ez/FaqSection.vue";
import DownloadSection from "@/components/ez/DownloadSection.vue";

export default {
  components: {
    HeroSection,
    AboutEzSection,
    FeaturesSection,
    ScreensPreviewSection,
    LaunchVideoSection,
    ExplainerSection,
    CampaignSection,
    FaqSection,
    DownloadSection,
  },
  data() {
    return {
      page: "ez-app",
      // filled from GET /api/v1/get-ez-content (see loadContent below).
      // Each section component also keeps its own fallback defaults, so the
      // page renders correctly even before this resolves or if it fails.
      sections: {},
    };
  },
  computed: {
    hero() {
      return this.sections.hero || {};
    },
    about() {
      return this.sections.about || {};
    },
    features() {
      return this.sections.features || {};
    },
    screensPreview() {
      return this.sections.screens_preview || {};
    },
    launchVideo() {
      return this.sections.launch_video || {};
    },
    explainer() {
      return this.sections.explainer || {};
    },
    campaign() {
      return this.sections.campaign || {};
    },
    download() {
      return this.sections.download || {};
    },
  },
  async mounted() {
    await this.loadContent();
  },
  methods: {
    async loadContent() {
      try {
        const res = await this.$axios.get("/get-ez-content");
        this.sections = (res && res.data && res.data.data) || {};
      } catch (error) {
        console.error("EZ content load failed:", error);
      }
    },
  },
};
</script>

<style scoped>
.ez-demo-page {
  background: #000;
}
</style>
