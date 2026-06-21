<template>
  <div>
    <CoverImage :page="page" />
    <CampaignBlogs />
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
