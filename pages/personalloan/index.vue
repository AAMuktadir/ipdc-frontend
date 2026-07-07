<template>
  <div>
    <CoverImageWithButtonBelow :page="page" />

    <NewCompo3 />

    <WhatWeOffer
      :loanWhatWeOfferCards="personalLoanWhatWeOfferCard"
      :offerHeading="offerHeading"
    />

    <!--    <PersonalLoanOffer :personalLoanWhatWeOfferCard="personalLoanWhatWeOfferCard" :offerHeading="offerHeading" />-->
    <Eligibility
      :loanEligibilities="personalLoanEligibility"
      :eligibleHeading="eligibleHeading"
    />
    <TermAmount
      :loanTermAmount="personalLoanTermAmount"
      :termAmountHeading="termAmountHeading"
    />
    <!--    <PersonalTermAmont :personalLoanTermAmount="personalLoanTermAmount" :termAmountHeading="termAmountHeading"/>-->
    <RequiredDocuments
      :loanRequiredDocuments="personalLoanDocumentsRequired"
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
    <!-- <LoansVideo :page="page" /> -->
    <Faqs :page="page" />
    <OngoingCampaigns :page="page" />
    <DownloadApplicationform
      :footerApplicationForm="personalLoanFooterApplicationForm"
      :page="page"
    />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "personal_loan");
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
        title: "IPDC Personal Loan",
        title_bangla: "আইপিডিসি পার্সোনাল লোন",
      },
      page: "personal_loan",
      offerHeading: {},
      eligibleHeading: {},
      termAmountHeading: {},
      documentsRequiredHeading: {},
      personalLoanWhatWeOfferCard: [],
      personalLoanEligibility: [],
      personalLoanDocumentsRequired: [],
      personalLoanTermAmount: [],
      personalLoanFooterApplicationForm: {},
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
          "Get Your Personal Loan Easily With Fast Approval And Simple Process",
        title_bangla: "আবেদন করুন এখনই ",
        sub_title: "",
        sub_title_bangla: "",
      },
    };
  },
  created() {
    this.personalLoanContent();
  },
  methods: {
    async personalLoanContent() {
      try {
        const response = await this.$axios.get(
          `/get-personal-loan-content/${this.page}`
        );
        this.personalLoanWhatWeOfferCard =
          response.data.data.personalLoanWhatWeOfferCard;
        this.personalLoanEligibility =
          response.data.data.personalLoanEligibility;
        this.personalLoanDocumentsRequired =
          response.data.data.personalLoanDocumentsRequired;
        this.personalLoanTermAmount = response.data.data.personalLoanTermAmount;
        this.personalLoanFaq = response.data.data.personalLoanFaq;
        this.personalLoanFooterApplicationForm =
          response.data.data.personalLoanFooterApplicationForm;
        const resHeading = response.data.data.heading;

        this.offerHeading = resHeading.personal_loan_what_we_offer_heading[0];
        this.eligibleHeading = resHeading.personal_loan_eligibility_heading[0];
        this.termAmountHeading =
          resHeading.personal_loan_term_amount_heading[0];
        this.documentsRequiredHeading =
          resHeading.personal_loan_documents_required_heading[0];

        if (resHeading.personal_loan_conditions_heading) {
          this.conditionsHeading =
            resHeading.personal_loan_conditions_heading[0];
        }

        if (resHeading.personal_loan_conditions) {
          this.loanConditions = resHeading.personal_loan_conditions;
        }
      } catch (error) {
        console.log("Error fetching personalLoanContent:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
