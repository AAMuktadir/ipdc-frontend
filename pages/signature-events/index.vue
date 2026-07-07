<template>
  <div>
    <CoverImage :page="page" />
    <SignatureEventsSlider :all-signature-events="allSignatureEvents" />
    <RegularEventsSlider :all-regular-events="allRegularEvents" />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "signature_events");
      return {
        seo,
      };
    } catch (error) {
      console.error("SEO fetch failed:", error);

      return {
        seo: {},
      };
    }
  },

  head() {
    return generateSeoHead(this.seo);
  },
  data() {
    return {
      page: "signature_events",
      cover: {
        title: "Events",
        title_bangla: "ইভেন্টস",
        description:
          "We believe our financial health is our wealth and take cautious steps in managing and communicating information to the public pertaining to the company's operations, managerial organization, and financial standing.",
      },
      allSignatureEvents: Array,
      allRegularEvents: Array,
    };
  },

  created() {
    this.getAllEvents();
  },
  methods: {
    async getAllEvents() {
      try {
        const response = await this.$axios.get(`/get-event`);
        this.allSignatureEvents = response.data.data.signature;
        this.allRegularEvents = response.data.data.regular;
      } catch (error) {
        console.error("Error fetching Event data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
