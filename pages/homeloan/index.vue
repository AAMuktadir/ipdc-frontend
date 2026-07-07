<template>
  <div>
    <CoverImageWithButton :page="page" />
    <WhatWeOffer
      :loanWhatWeOfferCards="homeLoanWhatWeOfferCards"
      :offerHeading="offerHeading"
    />
    <Eligibility
      :eligibleHeading="eligibleHeading"
      :loanEligibilities="homeLoanEligibilities"
    />
    <TermAmount
      :loanTermAmount="homeLoanTermAmount"
      :termAmountHeading="termAmountHeading"
    />
    <RequiredDocuments
      :loanRequiredDocuments="homeLoanRequiredDocuments"
      :documentsRequiredHeading="documentsRequiredHeading"
    />
    <Conditions
      :loanConditions="loanConditions"
      :conditionsHeading="conditionsHeading"
    />
    <ApplyNowButtonforLoan
      :termAmountHeading="loanApplyNowText"
      :buttonText="button1"
    />
    <Faqs :page="page" />
    <DownloadApplicationform
      :footerApplicationForm="homeLoanFooterApplicationForm"
      :page="page"
    />
  </div>
</template>

<script>
import WhatWeOffer from "../../components/WhatWeOffer";
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "home_loan");
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
  components: { WhatWeOffer },
  data() {
    return {
      cover: {
        title: "Home Loan",
        title_bangla: "হোম লোন",
      },
      offerHeading: {},
      eligibleHeading: {},
      termAmountHeading: {},
      documentsRequiredHeading: {},
      page: "home_loan",
      homeLoanWhatWeOfferCards: [],
      homeLoanEligibilities: [],
      homeLoanRequiredDocuments: [],
      homeLoanForEmployed: [],
      homeLoanForSelfEmployed: [],
      homeLoanTermAmount: [],
      homeLoanFooterApplicationForm: {},
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
          "Progress Toward Your Own Home With A Structured And Supportive Loan Process",
        title_bangla: "আবেদন করুন এখনই ",
        sub_title: "",
        sub_title_bangla: "",
      },
    };
  },
  created() {
    this.homeLoanContent();
  },
  methods: {
    async homeLoanContent() {
      const response = await this.$axios.get(
        `/get-home-loan-content/${this.page}`
      );
      const resData = response.data.data;
      const resHeading = response.data.data.heading;

      this.homeLoanWhatWeOfferCards = resData.homeLoanWhatWeOfferCard;
      this.homeLoanEligibilities = resData.homeLoanEligibility;
      this.homeLoanRequiredDocuments = resData.homeLoanDocumentsRequired;
      this.homeLoanForEmployed = resData.homeLoanForEmployed;
      this.homeLoanForSelfEmployed = resData.homeLoanForSelfEmployed;
      this.homeLoanTermAmount = resData.homeLoanTermAmount;
      this.homeLoanFooterApplicationForm =
        resData.homeLoanFooterApplicationForm;

      if (resHeading.home_loan_what_we_offer_heading) {
        this.offerHeading = resHeading.home_loan_what_we_offer_heading[0];
      }

      if (resHeading.home_loan_eligibility_heading) {
        this.eligibleHeading = resHeading.home_loan_eligibility_heading[0];
      }

      if (resHeading.home_loan_term_amount_heading) {
        this.termAmountHeading = resHeading.home_loan_term_amount_heading[0];
      }

      if (resHeading.home_loan_documents_required_heading) {
        this.documentsRequiredHeading =
          resHeading.home_loan_documents_required_heading[0];
      }

      if (resHeading.home_loan_conditions_heading) {
        this.conditionsHeading = resHeading.home_loan_conditions_heading[0];
      }

      if (resHeading.home_loan_conditions) {
        this.loanConditions = resHeading.home_loan_conditions;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
