<template>
  <div>
    <CoverImage :page="page" />
    <MediaDetails :singleMedia="singleMedia" />
    <!-- <MediaSocialSources /> -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      title:
        this.$i18n.locale == "en" ? this.cover.title : this.cover.title_bangla,
    };
  },
  data() {
    return {
      page: "media_details",
      cover: {
        title: "Media Details",
        title_bangla: "মিডিয়া বিস্তারিত",
        description:
          "We believe our financial health is our wealth and take cautious steps in managing and communicating information to the public pertaining to the company's operations, managerial organization, and financial standing.",
      },
      singleMedia: {},
    };
  },
  created() {
    this.getSingleMedia();
  },
  methods: {
    async getSingleMedia() {
      try {
        const response = await this.$axios.get(
          `/get-single-media/${this.$route.query.media}`
        );
        this.singleMedia = response.data.data;
      } catch (error) {
        console.log("Error fetching getSingleMedia:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
