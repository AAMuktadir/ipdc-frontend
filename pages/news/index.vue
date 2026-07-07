<template>
  <div>
    <CoverImage :page="page" />
    <MediaHighlights :highlights="highlights" />
    <MediaRecentUpdates :all-medias="allMedias" :active-years="activeYears" />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "media");
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
      page: "media",
      cover: {
        title: "News",
        title_bangla: "খবর",
        image_url: "/_nuxt/assets/image/cover/News-Media.jpg",
        description:
          "Outsiders often have an insight that an insider doesn't quite have. It’s as basic as this, If you need to be altogether educated about all that is making news and all that is not in the nation, read up!",
      },
      highlights: [],
      allMedias: [],
      activeYears: [
        "All",
        "2026",
        "2025",
        "2024",
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
      ],
    };
  },
  created() {
    this.getMediaContent();
  },
  methods: {
    async getMediaContent() {
      try {
        const response = await this.$axios.get(
          `/get-media-content/${this.page}`
        );
        this.highlights = response.data.data.highlights;
        this.allMedias = response.data.data.allMedias;
      } catch (error) {
        console.log("Error fetching getMediaContent:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
