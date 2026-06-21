<template>
  <div>
    <CoverImage :page="page" :cover="cover" />
    <MediaHighlights :highlights="highlights" />
    <MediaRecentUpdates :all-medias="allMedias" :active-years="activeYears" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get(`/get-media-content/media`, {
        params: { year: "All" },
      });

      const data = response.data.data;

      return {
        highlights: data.highlights || [],
        allMedias: data.allData || data.allMedias || [],
        activeYears: data.activeYears || [
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
    } catch (error) {
      console.error("SSR fetch failed:", error);

      return {
        highlights: [],
        allMedias: [],
        activeYears: [],
      };
    }
  },
  head() {
    return {
      title:
        this.$i18n.locale == "en" ? this.cover.title : this.cover.title_bangla,
    };
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
