<template>
  <div>
    <CoverImage :page="page" />
    <CitizenCharterTop :downloadAbleFile="downloadAbleFile" />

    <!-- <DownloadApplicationform :page="page" :footerApplicationForm="footerApplicationForm" /> -->
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "citizen-charter");
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
