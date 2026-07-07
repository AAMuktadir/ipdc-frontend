<template>
  <div>
    <CoverImage :page="page" />
    <TowardsGreenBanking :towardsGreenBanking="towardsGreenBanking" />
    <GreenBankingReport :downloadAbleFile="downloadAbleFile" />
    <GreenFinancing :greenFinancing="greenFinancing" />
    <Conditions
      :loanConditions="loanConditions"
      :conditionsHeading="conditionsHeading"
    />
    <!-- <DownloadApplicationform :page="page" :footerApplicationForm="footerApplicationForm" /> -->
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "green_banking");
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
      page: "green_banking",
      cover: {
        title: "Green Banking",
        title_bangla: "গ্রীন ব্যাংকিং",
        description:
          "IPDC Finance PLC. is committed to comply with environmental regulation for maintaining ecological as well as social balance and retaining the globe safe habitable for all living beings and their future generation.",
      },
      towardsGreenBanking: {},
      greenFinancing: {},
      downloadAbleFile: [],
      footerApplicationForm: {},
      conditionsHeading: {},
      loanConditions: [],
    };
  },
  created() {
    this.getGreenBankingData();
  },
  methods: {
    async getGreenBankingData() {
      const response = await this.$axios.get(
        `/get-green-banking-data/${this.page}`
      );
      this.towardsGreenBanking = response.data.data.greenBankingOurStepTowards;
      this.greenFinancing = response.data.data.greenFinancing;
      this.downloadAbleFile = response.data.data.downloadAbleFile;

      const resHeading = response.data.data.heading;

      if (resHeading.green_banking_footer_application_form) {
        this.footerApplicationForm =
          resHeading.green_banking_footer_application_form[0];
      }

      if (resHeading.green_banking_conditions_heading) {
        this.conditionsHeading = resHeading.green_banking_conditions_heading[0];
      }

      if (resHeading.green_banking_conditions) {
        this.loanConditions = resHeading.green_banking_conditions;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
