<template>
  <div>
    <CoverImage :page="page" />
    <CitizenCharterTop :downloadAbleFile="downloadAbleFile" />

    <!-- <DownloadApplicationform :page="page" :footerApplicationForm="footerApplicationForm" /> -->
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
      page: "citizen-charter",
      cover: {
        title: "Citizen's Charter",
        title_bangla: "সিটিজেন চার্টার",
        description: "IPDC Finance PLC. citizen's charter",
      },
      downloadAbleFile: [],
    };
  },
  created() {
    this.getCitizenCharterData();
  },
  methods: {
    async getCitizenCharterData() {
      const response = await this.$axios.get(
        `/get-citizen-charter-data/${this.page}`
      );
      this.downloadAbleFile = response.data.data.downloadAbleFile;
    },
  },
};
</script>

<style lang="scss" scoped></style>
