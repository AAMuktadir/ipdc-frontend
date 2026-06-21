<template>
  <div>
    <CoverImage :page="page" />
    <IpdcAwards :allAwards="allAwards" />
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
      page: "awards",
      cover: {
        title: "IPDC Awards",
        title_bangla: "আইপিডিসির অর্জিত পুরস্কার",
        description:
          "We believe our financial health is our wealth and take cautious steps in managing and communicating information to the public pertaining to the company's operations, managerial organization, and financial standing.",
      },
      allAwards: [],
    };
  },
  created() {
    this.getAllAwards();
  },
  methods: {
    async getAllAwards() {
      try {
        const response = await this.$axios.get(`/get-all-awards/${this.page}`);
        this.allAwards = response.data.data;
      } catch (error) {
        console.log("Error fetching getAllAwards:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
