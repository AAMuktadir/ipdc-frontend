<template>
  <div>
    <CoverImageWithButton :page="page" />
    <WhatWeOffer
      :loanWhatWeOfferCards="homeLoanWhatWeOfferCards"
      :offerHeading="offerHeading"
    />
    <!--    <OffersWeHave />-->
    <Eligibility
      :eligibleHeading="eligibleHeading"
      :loanEligibilities="homeLoanEligibilities"
    />
    <!--    <Employed :employed="homeLoanForEmployed" />-->
    <!--    <SelfEmployed :selfEmployed="homeLoanForSelfEmployed" />-->
    <TermAmount
      :loanTermAmount="homeLoanTermAmount"
      :termAmountHeading="termAmountHeading"
    />
    <HomeLoanDrivedream />
    <RequiredDocuments
      :loanRequiredDocuments="homeLoanRequiredDocuments"
      :documentsRequiredHeading="documentsRequiredHeading"
    />
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
    <DownloadApplicationform
      :footerApplicationForm="homeLoanFooterApplicationForm"
      :page="page"
    />
  </div>
</template>

<script>
import WhatWeOffer from "../../components/WhatWeOffer";
export default {
  head() {
    return {
      title:
        this.$i18n.locale == "en" ? this.cover.title : this.cover.title_bangla,
    };
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
        title: "Apply Now",
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
