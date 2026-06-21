<template>
  <div>
    <CoverImageWithButton :page="page" />
    <WhatWeOffer
      :loanWhatWeOfferCards="loanWhatWeOfferCards"
      :offerHeading="offerHeading"
    />
    <!--    <OffersWeHave />-->

    <!-- Extra things added later -->
    <Eligibility
      :eligibleHeading="extra_heading_1"
      :loanEligibilities="extra_item_1"
    />
    <Eligibility
      :eligibleHeading="extra_heading_2"
      :loanEligibilities="extra_item_2"
    />
    <Eligibility
      :eligibleHeading="extra_heading_3"
      :loanEligibilities="extra_item_3"
    />

    <!-- Actual data from database -->
    <Eligibility
      :eligibleHeading="eligibleHeading"
      :loanEligibilities="loanEligibilities"
    />

    <!--    <Employed :employed="loanForEmployed" />-->
    <!--    <SelfEmployed :selfEmployed="loanForSelfEmployed" />-->
    <TermAmount
      :loanTermAmount="loanTermAmount"
      :termAmountHeading="termAmountHeading"
    />
    <HomeLoanDrivedream />
    <RequiredDocuments
      :loanRequiredDocuments="loanRequiredDocuments"
      :documentsRequiredHeading="documentsRequiredHeading"
    />
    <!-- <LoansVideo :page="page" /> -->
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
        title: "Bhalo Basha Loan",
        title_bangla: "ভালো বাসা লোন",
      },
      offerHeading: {},
      eligibleHeading: {},
      termAmountHeading: {},
      documentsRequiredHeading: {},
      page: "bhalobasa_loan",
      loanWhatWeOfferCards: [],
      loanEligibilities: [],
      loanRequiredDocuments: [],
      loanForEmployed: [],
      loanForSelfEmployed: [],
      loanTermAmount: [],
      loanFaq: [],
      loanFooterApplicationForm: {},
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

      extra_heading_1: {
        title: "Bhalo Basha Home Loan – Key Features",
        title_bangla: "ভালো বাসা গৃহঋণ সুবিধাসমূহ এক নজরে",
      },
      extra_heading_2: {
        title: "Who Is Eligible for This Home Loan?",
        title_bangla: "কাদের জন্য এই গৃহঋণ সুবিধা?",
      },
      extra_heading_3: {
        title: "Purposes for Which This Loan Can Be Availed",
        title_bangla: "কী কী উদ্দেশ্যে এই ঋণ প্রদান করা যাবে?",
      },
      extra_item_1: [
        {
          id: 1001,
          title: "The country’s most extensive home loan service network.",
          title_bangla:
            "দেশের সর্বাধিক বিস্তৃত গৃহঋণ প্রদানের জন্য নেটওয়ার্ক।",
        },
        {
          id: 1002,
          title: "Easy application process with minimal documentation.",
          title_bangla:
            "ন্যূনতম কাগজপত্র জমা দিয়েই এই ঋণের জন্য আবেদন করা সম্ভব।",
        },
        {
          id: 1003,
          title:
            "Comprehensive advisory services on home construction and home loan matters.",
          title_bangla: "গৃহ নির্মাণ ও ঋণ সংক্রান্ত সকল ধরনের পরামর্শ সেবা।",
        },
        {
          id: 1004,
          title: "Loan facility of up to 90% of the property value.",
          title_bangla: "সম্পত্তির মূল্যমানের ৯০% পর্যন্ত ঋণ সুবিধা।",
        },
        {
          id: 1005,
          title:
            "Loan amount assessment considers the expected income from the property under construction.",
          title_bangla:
            "ঋণের পরিমাণ নির্ধারণে নির্মিতব্য গৃহ হতে প্রত্যাশিত আয় বিবেচনা।",
        },
      ],
      extra_item_2: [
        {
          id: 1011,
          title: "Government employees",
          title_bangla: "সরকারি চাকুরিজীবী",
        },
        {
          id: 1012,
          title: "Private sector employees",
          title_bangla: "বেসরকারি চাকুরিজীবী",
        },
        {
          id: 1013,
          title: "Doctors",
          title_bangla: "ডাক্তার",
        },
        {
          id: 1014,
          title: "Home owners",
          title_bangla: "বাড়ির মালিক",
        },
        {
          id: 1015,
          title: "Business owners",
          title_bangla: "ব্যবসায়ী",
        },
        {
          id: 1016,
          title: "Expatriates who send regular remittances",
          title_bangla: "নিয়মিত রেমিট্যান্স পাঠাচ্ছে এমন প্রবাসী",
        },
      ],
      extra_item_3: [
        {
          id: 1021,
          title: "Home construction",
          title_bangla: "বাড়ি বানানো।",
        },
        {
          id: 1022,
          title: "Home renovation / home extension",
          title_bangla: "বাড়ির উন্নয়ন / বাড়ির সম্প্রসারণ।",
        },
        {
          id: 1023,
          title: "Home purchase",
          title_bangla: "বাড়ি ক্রয়।",
        },
        {
          id: 1024,
          title: "Loan takeover",
          title_bangla: "লোন টেকওভার।",
        },
        {
          id: 1025,
          title: "Loan against property",
          title_bangla: "বাড়ির বিপরীতে ঋণ।",
        },
      ],
    };
  },
  created() {
    this.loanContent();
  },
  methods: {
    async loanContent() {
      const response = await this.$axios.get(
        `/get-bhalobasa-loan-content/${this.page}`
      );
      const resData = response.data.data;

      // console.log("badhon =>", resData);

      const resHeading = response.data.data.heading;

      this.loanWhatWeOfferCards = resData.loanWhatWeOfferCard;
      this.loanEligibilities = resData.loanEligibility;
      this.loanRequiredDocuments = resData.loanDocumentsRequired;
      this.loanForEmployed = resData.loanForEmployed;
      this.loanForSelfEmployed = resData.loanForSelfEmployed;
      this.loanTermAmount = resData.loanTermAmount;

      this.loanFooterApplicationForm = resData.loanFooterApplicationForm;

      if (resHeading.bhalobasa_loan_what_we_offer_heading) {
        this.offerHeading = resHeading.bhalobasa_loan_what_we_offer_heading[0];
      }

      if (resHeading.bhalobasa_loan_eligibility_heading) {
        this.eligibleHeading = resHeading.bhalobasa_loan_eligibility_heading[0];
      }

      if (resHeading.bhalobasa_loan_term_amount_heading) {
        this.termAmountHeading =
          resHeading.bhalobasa_loan_term_amount_heading[0];
      }

      if (resHeading.bhalobasa_loan_documents_required_heading) {
        this.documentsRequiredHeading =
          resHeading.bhalobasa_loan_documents_required_heading[0];
      }

      if (resHeading.bhalobasa_loan_conditions_heading) {
        this.conditionsHeading =
          resHeading.bhalobasa_loan_conditions_heading[0];
      }

      if (resHeading.bhalobasa_loan_conditions) {
        this.loanConditions = resHeading.bhalobasa_loan_conditions;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
