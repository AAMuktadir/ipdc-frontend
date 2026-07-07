<template>
  <div>
    <CoverImageWithButton :page="page" />
    <CorporateBestFits
      :corporateScheme="corporateScheme"
      :defaultScheme="defaultScheme"
      :schemeHeading="schemeHeading"
    />
    <CommonDocumentsRequired
      :requiredDocuments="requiredDocuments"
      :documentRequiredHeading="documentRequiredHeading"
    />
    <AdditionalText :specialNote="specialNote" />
    <Conditions
      :loanConditions="loanConditions"
      :conditionsHeading="conditionsHeading"
    />
    <OngoingCampaigns :page="page" />
    <ApplyNowButtonforLoan
      :termAmountHeading="loanApplyNowText"
      :buttonText="button1"
    />
    <Faqs :page="page" />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "corporate_financial_service_page");
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
        title: "Corporate Financial Services",
        title_bangla: "কর্পোরেট আর্থিক সেবা",
      },
      page: "corporate_financial_service_page",
      corporateScheme: [],
      defaultScheme: null,
      requiredDocuments: [],
      footerApplicationForm: "",
      specialNote: {},
      schemeHeading: {},
      documentRequiredHeading: {},
      conditionsHeading: {},
      loanConditions: [],
      button1: {
        url: "/customer-signup",
        btnTxt: "Apply Now",
        btnTxt_bn: "আবেদন করুন এখনই ",
        bgColor: "#ffffff",
      },

      loanApplyNowText: {
        id: 52,
        title:
          "Take the next step in your business journey with corporate financing from IPDC",
        title_bangla: "আবেদন করুন এখনই ",
        sub_title: "",
        sub_title_bangla: "",
      },
    };
  },

  created() {
    this.getCorporateFinancialService();
    this.getHeadings();
  },
  methods: {
    async getCorporateFinancialService() {
      const response = await this.$axios.get("get-corporate-financial-service");
      const responseData = response.data.data;
      this.corporateScheme = responseData.corporateScheme;
      this.defaultScheme = responseData.corporateScheme[0].id;
      this.requiredDocuments = responseData.requiredDocuments;
    },

    async getHeadings() {
      const response = await this.$axios.get(
        `get-corporate-headings/${this.page}`
      );
      const resData = response.data.data.heading;

      if (resData.corporate_footer_application_form) {
        this.footerApplicationForm =
          resData.corporate_footer_application_form[0];
      }
      if (resData.corporate_special_note) {
        this.specialNote = resData.corporate_special_note[0];
      }

      if (resData.corporate_scheme_heading) {
        this.schemeHeading = resData.corporate_scheme_heading[0];
      }

      if (resData.corporate_document_required_heading) {
        this.documentRequiredHeading =
          resData.corporate_document_required_heading[0];
      }
      if (resData.corporate_conditions_heading) {
        this.conditionsHeading = resData.corporate_conditions_heading[0];
      }

      if (resData.corporate_conditions) {
        this.loanConditions = resData.corporate_conditions;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
