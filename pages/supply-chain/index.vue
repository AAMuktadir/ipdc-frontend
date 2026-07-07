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

    <!-- <LoansVideo :page="page" /> -->
    <ApplyNowButtonforLoan
      :termAmountHeading="loanApplyNowText"
      :buttonText="button1"
    />

    <Faqs :page="page" />

    <!-- <DownloadApplicationform
      :page="page"
      :footerApplicationForm="footerApplicationForm"
    /> -->
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "supply_chain");
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
        title: "Supply Chain Finance",
        title_bangla: "সাপ্লাই চেইন ফাইন্যান্স",
      },
      page: "supply_chain",
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
          "Improve cash flow and manage supplier payments with IPDC supply chain finance",
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
      try {
        const response = await this.$axios.get("get-supply-chain");
        const responseData = response.data.data;
        this.corporateScheme = responseData.corporateScheme;
        this.defaultScheme = responseData.corporateScheme[0].id;
        this.requiredDocuments = responseData.requiredDocuments;
      } catch (error) {
        console.log("Error fetching getCorporateFinancialService:", error);
      }
    },

    async getHeadings() {
      try {
        const response = await this.$axios.get(
          `get-supply-chain-headings/${this.page}`
        );
        const resData = response.data.data.heading;

        if (resData.supply_chain_scheme_heading) {
          this.schemeHeading = resData.supply_chain_scheme_heading[0];
        }
        if (resData.supply_chain_footer_application_form) {
          this.footerApplicationForm =
            resData.supply_chain_footer_application_form[0];
        }
        if (resData.supply_chain_special_note) {
          this.specialNote = resData.supply_chain_special_note[0];
        }

        if (resData.supply_chain_document_required_heading) {
          this.documentRequiredHeading =
            resData.supply_chain_document_required_heading[0];
        }

        if (resData.supply_chain_documents_required_heading) {
          this.documentsRequiredHeading =
            resData.supply_chain_documents_required_heading[0];
        }
        if (resData.supply_chain_conditions_heading) {
          this.conditionsHeading = resData.supply_chain_conditions_heading[0];
        }
        if (resData.supply_chain_conditions) {
          this.loanConditions = resData.supply_chain_conditions;
        }
      } catch (error) {
        console.log("Error fetching getHeadings:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
