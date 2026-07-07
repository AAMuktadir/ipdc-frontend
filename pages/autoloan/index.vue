<template>
  <div>
    <CoverImageWithButton :page="page" />
    <WhatWeOffer
      :loanWhatWeOfferCards="autoLoanWhatWeOfferCards"
      :offerHeading="offerHeading"
    />
    <Eligibility
      :loanEligibilities="autoLoanEligibilities"
      :eligibleHeading="eligibleHeading"
    />
    <TermAmount
      :loanTermAmount="autoLoanTermAmount"
      :termAmountHeading="termAmountHeading"
    />
    <RequiredDocuments
      :loanRequiredDocuments="autoLoanRequiredDocuments"
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
    <OngoingCampaigns :page="page" />
    <DownloadApplicationform
      :page="page"
      :footerApplicationForm="autoLoanFooterApplicationForm"
    />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "auto_loan_page");
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
        title: "Auto Loan",
        title_bangla: "অটো লোন",
      },
      offerHeading: {},
      purposeHeading: {},
      eligibleHeading: {},
      termAmountHeading: {},
      documentsRequiredHeading: {},
      faqHeading: {},
      page: "auto_loan_page",
      autoLoanWhatWeOfferCards: [],
      autoLoanEligibilities: [],
      autoLoanRequiredDocuments: [],
      autoLoanTermAmount: [],
      autoLoanPurpose: [],
      autoLoanFooterApplicationForm: {},
      conditionsHeading: {},
      loanConditions: [],
      calculatorSettings: {},
      button1: {
        url: "/customer-signup",
        btnTxt: "Apply Now",
        btnTxt_bn: "আবেদন করুন এখনই ",
        bgColor: "#ffffff",
      },

      loanApplyNowText: {
        id: 52,
        title:
          "Make Car Ownership Simple With A Fast And Flexible Auto Loan Process",
        title_bangla: "আবেদন করুন এখনই ",
        sub_title: "",
        sub_title_bangla: "",
      },
    };
  },
  created() {
    this.autoLoanContent();
    this.getCalculatorSettings();
  },
  methods: {
    async autoLoanContent() {
      const response = await this.$axios.get(
        `/get-auto-loan-content/${this.page}`
      );
      // console.log(response.data.data);
      this.autoLoanWhatWeOfferCards =
        response.data.data.autoLoanWhatWeOfferCard;
      this.autoLoanEligibilities = response.data.data.autoLoanEligibility;
      this.autoLoanRequiredDocuments =
        response.data.data.autoLoanDocumentsRequired;
      this.autoLoanTermAmount = response.data.data.autoLoanTermAmount;
      this.autoLoanPurpose = response.data.data.autoLoanPurpose;
      this.autoLoanFooterApplicationForm =
        response.data.data.autoLoanFooterApplicationForm;

      const resHeading = response.data.data.heading;

      if (resHeading.auto_loan_what_we_offer_heading) {
        this.offerHeading = resHeading.auto_loan_what_we_offer_heading[0];
      }

      if (resHeading.auto_loan_pupose_heading) {
        this.purposeHeading = resHeading.auto_loan_pupose_heading[0];
      }

      if (resHeading.auto_loan_pupose_heading) {
        this.purposeHeading = resHeading.auto_loan_pupose_heading[0];
      }
      if (resHeading.auto_loan_pupose_heading) {
        this.purposeHeading = resHeading.auto_loan_pupose_heading[0];
      }

      if (resHeading.auto_loan_eligibility_heading) {
        this.eligibleHeading = resHeading.auto_loan_eligibility_heading[0];
      }

      if (resHeading.auto_loan_term_amount_heading) {
        this.termAmountHeading = resHeading.auto_loan_term_amount_heading[0];
      }

      if (resHeading.auto_loan_documents_required_heading) {
        this.documentsRequiredHeading =
          resHeading.auto_loan_documents_required_heading[0];
      }

      if (resHeading.auto_loan_conditions_heading) {
        this.conditionsHeading = resHeading.auto_loan_conditions_heading[0];
      }

      if (resHeading.auto_loan_conditions) {
        this.loanConditions = resHeading.auto_loan_conditions;
      }
    },
    async getCalculatorSettings() {
      const response = await this.$axios.get(
        `get-calculator-settings/${this.page}`
      );
      this.calculatorSettings = response.data.data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
