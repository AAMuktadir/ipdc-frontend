<template>
  <div>
    <CoverImage :page="page" />
    <CampaignBlogs />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "campaign_page");
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
      cover: {
        title: "Ongoing Campaigns",
        title_bangla: "চলমান ক্যাম্পেইন",
        description:
          "Browse and select from our various ongoing campaigns to pick what fits you best.At IPDC, we believe one size does not fit all, so we listen to you and tailor to your needs.",
      },
      page: "campaign_page",
      allCampaigns: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
