<template>
  <div>
    <CoverImageWithButton :page="page" />
    <WhatWeOfferPriti
      :loanWhatWeOfferCards="loanWhatWeOfferCards"
      :offerHeading="offerHeading"
    />

    <PritiPoints />

    <PritiBestFitsNeeds
      :bestFitsHeading="bestFitsHeading"
      :bestFitsData="bestFitsData"
    />
    <PritiPartners
      :partnersHeading="partnersHeading"
      :partnersData="partnersData"
    />

    <!--    <Eligibility :eligibleHeading="eligibleHeading" :loanEligibilities="loanEligibilities" />-->
    <!--    <Employed :employed="loanForEmployed" />-->
    <!--    <SelfEmployed :selfEmployed="loanForSelfEmployed" />-->
    <!--    <TermAmount :loanTermAmount="loanTermAmount" :termAmountHeading="termAmountHeading"/>-->
    <!--    <HomeLoanDrivedream />-->
    <!--    <RequiredDocuments :loanRequiredDocuments="loanRequiredDocuments" :documentsRequiredHeading="documentsRequiredHeading"/>-->
    <Conditions
      :loanConditions="loanConditions"
      :conditionsHeading="conditionsHeading"
    />
    <!-- <LoansVideo :page="page" /> -->
    <ApplyNowButtonforLoan
      :termAmountHeading="loanApplyNowText"
      :buttonText="button1"
    />
    <Faqs :page="page" />
    <OngoingCampaigns :page="page" />
    <!-- <DownloadApplicationform
      :footerApplicationForm="loanFooterApplicationForm"
      :page="page"
    /> -->
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
        title: "Priti",
        title_bangla: "প্রীতি",
      },
      offerHeading: {},
      eligibleHeading: {},
      termAmountHeading: {},
      documentsRequiredHeading: {},
      page: "priti",
      loanWhatWeOfferCards: [],
      loanEligibilities: [],
      loanRequiredDocuments: [],
      loanForEmployed: [],
      loanForSelfEmployed: [],
      loanTermAmount: [],
      loanFooterApplicationForm: {},
      conditionsHeading: {},
      loanConditions: [],
      bestFitsHeading: {},
      bestFitsData: [],
      partnersHeading: {},
      partnersData: [],
      button1: {
        url: "/customer-signup",
        btnTxt: "Apply Now",
        btnTxt_bn: "আবেদন করুন এখনই ",
        bgColor: "#ffffff",
      },

      loanApplyNowText: {
        id: 52,
        title: "Apply Now",
        title_bangla: "আবেদন করুন এখনই ",
        sub_title: "",
        sub_title_bangla: "",
      },
    };
  },
  created() {
    this.loanContent();
  },
  methods: {
    async loanContent() {
      try {
        const response = await this.$axios.get(
          `/get-priti-content/${this.page}`
        );
        const resData = response.data.data;
        const resHeading = response.data.data.heading;

        this.loanWhatWeOfferCards = resData.loanWhatWeOfferCard;
        this.loanEligibilities = resData.loanEligibility;
        this.loanRequiredDocuments = resData.loanDocumentsRequired;
        this.loanForEmployed = resData.loanForEmployed;
        this.loanForSelfEmployed = resData.loanForSelfEmployed;
        this.loanTermAmount = resData.loanTermAmount;
        this.loanFooterApplicationForm = resData.loanFooterApplicationForm;

        if (resHeading.priti_what_we_offer_heading) {
          this.offerHeading = resHeading.priti_what_we_offer_heading[0];
        }

        if (resHeading.priti_eligibility_heading) {
          this.eligibleHeading = resHeading.priti_eligibility_heading[0];
        }

        if (resHeading.priti_term_amount_heading) {
          this.termAmountHeading = resHeading.priti_term_amount_heading[0];
        }
        if (resHeading.priti_conditions_heading) {
          this.conditionsHeading = resHeading.priti_conditions_heading[0];
        }

        if (resHeading.priti_conditions) {
          this.loanConditions = resHeading.priti_conditions;
        }

        if (resHeading.priti_best_fits_heading) {
          this.bestFitsHeading = resHeading.priti_best_fits_heading[0];
        }

        if (resHeading.priti_best_fits) {
          this.bestFitsData = resHeading.priti_best_fits;
        }

        if (resHeading.priti_partners_heading) {
          this.partnersHeading = resHeading.priti_partners_heading[0];
        }

        if (resHeading.priti_partners) {
          this.partnersData = resHeading.priti_partners;
        }
      } catch (error) {
        console.log("Error fetching loanContent:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
