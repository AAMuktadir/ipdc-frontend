<template>
  <div>
    <CoverImageWithButton :page="page" />
    <br />
    <ButtonOnly :buttonText="button1" />
    <WhatWeOffer
      :loanWhatWeOfferCards="depositSchemeOfferCard"
      :offerHeading="offerHeading"
    />
    <TermAmount
      :loanTermAmount="depositSchemeTermAmount"
      :termAmountHeading="termAmountHeading"
    />
    <BestFitsNeeds
      :depositSchemePackage="depositSchemePackage"
      :bestFitHeading="bestFitHeading"
    />
    <YoutubePlaylist
      :youtubePlaylists="youtubePlaylists"
      :youtubePlaylistHeading="youtube_playlist_heading"
    />

    <DepositTerms />

    <RequiredDocuments
      :loanRequiredDocuments="depositSchemeDocumentsRequired"
      :documentsRequiredHeading="documentsRequiredHeading"
    />

    <DepositSchemesForm
      :depositSchemeFooterApplicationForm="depositSchemeFooterApplicationForm"
      :downloadable-file="downloadableFile"
    />

    <Employed
      v-if="depositSchemeForIndividualAccount.length"
      :employed="depositSchemeForIndividualAccount"
      :title="depositSchemeForIndividualAccountHeading"
    />
    <SelfEmployed
      v-if="depositSchemeForInstitutionalAccount.length"
      :selfEmployed="depositSchemeForInstitutionalAccount"
      :title="depositSchemeForInstitutionalAccountHeading"
    />

    <Eligibility
      :loanEligibilities="depositSchemeEligibility"
      :eligible-heading="eligibleHeading"
    />
    <ApplyNowButtonforLoan
      :termAmountHeading="loanApplyNowText"
      :buttonText="button2"
    />
    <Faqs :page="page" />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "deposit_scheme");
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
        title: "IPDC Deposit",
        title_bangla: "আইপিডিসি ডিপোজিট",
      },
      button1: {
        url: "/api/uploads/Deposit_Rate_Latest.pdf",
        btnTxt: "Rates for Retail Deposit Products",
        btnTxt_bn: "রিটেইল ডিপোজিট প্রডাক্ট সম্পর্কে বিস্তারিত জানুন",
        bgColor: "#ffffff",
      },
      offerHeading: {},
      bestFitHeading: {},
      eligibleHeading: {},
      termAmountHeading: {},
      documentsRequiredHeading: {},
      page: "deposit_scheme",
      type: "Deposit_Scheme",
      depositSchemeOfferCard: [],
      depositSchemePackage: [],
      depositSchemeDocumentsRequired: [],
      depositSchemeForIndividualAccountHeading: {},
      depositSchemeForIndividualAccount: [],
      depositSchemeForInstitutionalAccountHeading: {},
      depositSchemeForInstitutionalAccount: [],
      depositSchemeFaq: [],
      depositSchemeEligibility: [],
      depositSchemeTermAmount: [],
      depositSchemeFooterApplicationForm: {},
      downloadableFile: [],
      ratesForRetailDepositProduct: {},
      youtubePlaylists: [],
      youtube_playlist_heading: {},
      depositSchemeLearnMoreHeading: {},
      calculatorSettings: {},
      button2: {
        url: "/customer-signup",
        btnTxt: "Apply Now",
        btnTxt_bn: "আবেদন করুন এখনই ",
        bgColor: "#ffffff",
      },

      loanApplyNowText: {
        id: 52,
        title:
          "Start Growing Your Savings with a Trusted, AAA-Rated Financial Institution Today",
        title_bangla: "আবেদন করুন এখনই ",
        sub_title: "",
        sub_title_bangla: "",
      },
    };
  },
  created() {
    this.getDepositSchemeContent();
    this.depositContent();
    this.getCalculatorSettings();
  },
  methods: {
    async getDepositSchemeContent() {
      const response = await this.$axios.get(
        `/get-deposit-scheme-content/${this.page}`
      );

      const resData = response.data.data;
      const resHeading = response.data.data.heading;

      this.depositSchemeOfferCard = resData.depositSchemeOfferCard;
      this.depositSchemePackage = resData.depositSchemePackage;
      this.depositSchemeDocumentsRequired =
        resData.depositSchemeDocumentsRequired;
      this.depositSchemeForIndividualAccountHeading =
        resData.depositSchemeForIndividualAccountHeading[0];
      this.depositSchemeForIndividualAccount =
        resData.depositSchemeForIndividualAccount;
      this.depositSchemeForInstitutionalAccountHeading =
        resData.depositSchemeForInstitutionalAccountHeading[0];
      this.depositSchemeForInstitutionalAccount =
        resData.depositSchemeForInstitutionalAccount;
      this.depositSchemeEligibility = resData.depositSchemeEligibility;
      this.depositSchemeTermAmount = resData.depositSchemeTermAmount;
      this.depositSchemeFooterApplicationForm =
        resData.depositSchemeFooterApplicationForm;
      this.downloadableFile = resData.downloadableFile;
      this.button1.url = resData.ratesForRetailDepositProduct.file_url;
      this.depositSchemeLearnMoreHeading =
        resData.depositSchemeLearnMoreHeading[0];

      if (resHeading.deposit_schemes_what_we_offer_heading) {
        this.offerHeading = resHeading.deposit_schemes_what_we_offer_heading[0];
      }
      if (resData.depositSchemeEligibilityHeading) {
        this.eligibleHeading = resData.depositSchemeEligibilityHeading[0];
      }

      if (
        resHeading.deposit_schemes_choose_a_scheme_which_best_fit_your_needs_heading
      ) {
        this.bestFitHeading =
          resHeading.deposit_schemes_choose_a_scheme_which_best_fit_your_needs_heading[0];
      }

      if (resHeading.deposit_schemes_documents_required_heading) {
        this.documentsRequiredHeading =
          resHeading.deposit_schemes_documents_required_heading[0];
      }

      if (resHeading.deposit_schemes_term_amount_heading) {
        this.termAmountHeading =
          resHeading.deposit_schemes_term_amount_heading[0];
      }
    },
    async depositContent() {
      const response = await this.$axios.get(
        `get-youtube-playlist/${this.page}/${this.type}`
      );
      const resHeading = response.data.heading;
      this.youtubePlaylists = response.data.data;

      if (resHeading.deposit_schemes_youtube_playlist_heading) {
        this.youtube_playlist_heading =
          resHeading.deposit_schemes_youtube_playlist_heading[0];
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

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .loan-term-amount {
    display: none;
  }
}
</style>
