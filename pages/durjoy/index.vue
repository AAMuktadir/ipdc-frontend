<template>
  <div>
    <CoverImageWithButtonBelowDurjoy :page="page" />
    <WhatWeOffer
      :loanWhatWeOfferCards="autoLoanWhatWeOfferCards"
      :offerHeading="offerHeading"
    />
    <Eligibility
      :loanEligibilities="loanConditions"
      :eligibleHeading="conditionsHeading"
    />
    <Eligibility
      :loanEligibilities="autoLoanEligibilities"
      :eligibleHeading="eligibleHeading"
    />
    <RequiredDocuments
      :loanRequiredDocuments="autoLoanRequiredDocuments"
      :documentsRequiredHeading="documentsRequiredHeading"
    />
    <!-- <LoansVideo :page="page" /> -->
    <ApplyNowButtonforLoan
      :termAmountHeading="loanApplyNowText"
      :buttonText="button1"
    />
    <Faqs :page="page" />
    <!-- <OngoingCampaigns :page="page" /> -->
    <!-- <DownloadApplicationform
      :page="page"
      :footerApplicationForm="autoLoanFooterApplicationForm"
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
        title: "Durjoy",
        title_bangla: "দুর্জয়",
      },
      offerHeading: {},
      purposeHeading: {},
      eligibleHeading: {},
      termAmountHeading: {},
      documentsRequiredHeading: {},
      faqHeading: {},
      page: "durjoy",
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
          // `/get-durjoy-content/${this.page}`
          // "http://localhost:8000/get-durjoy-content.php"
          `https://ipdc.com/demo/api/get-durjoy-content.php`
        );
        this.autoLoanWhatWeOfferCards =
          response.data.data.autoLoanWhatWeOfferCard;
        this.autoLoanEligibilities = response.data.data.autoLoanEligibility;
        this.autoLoanRequiredDocuments =
          response.data.data.autoLoanDocumentsRequired;
        this.autoLoanTermAmount = response.data.data.autoLoanTermAmount;
        this.autoLoanPurpose = response.data.data.autoLoanPurpose;
        this.autoLoanFooterApplicationForm =
          response.data.data.autoLoanFooterApplicationForm;

        this.loanConditions = response.data.data.auto_loan_conditions;

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

        // console.log(this.loanConditions);
      } catch (error) {
        console.log("Error fetching loanContent:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
