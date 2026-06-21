<template>
  <div>
    <CoverImageWithButton :page="page" />
    <CoverImageWithLink :coverImage="coverImageLink" />
    <!--    <SmeBestFits :smeScheme="smeScheme" :defaultScheme="defaultScheme"/>-->
    <CorporateBestFits
      :corporateScheme="smeScheme"
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
    <DownloadApplicationform
      :page="page"
      :footerApplicationForm="footerApplicationForm"
    />
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
        title: "SME Financing",
        title_bangla: "এসএমই ফাইন্যান্স",
      },
      page: "ipdc-sme",
      smeScheme: [],
      defaultScheme: null,
      requiredDocuments: [],
      footerApplicationForm: null,
      specialNote: {},
      schemeHeading: {},
      documentRequiredHeading: {},
      conditionsHeading: {},
      loanConditions: [],
      coverImageLink: {
        image_url: "/api/uploads/background/A2GF-Banner.png",
        link_url: "https://a2gf.ipdc.com/",
      },
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
    this.getIpdcSmeFinancing();
    this.getHeadings();
  },
  methods: {
    async getIpdcSmeFinancing() {
      const response = await this.$axios.get(`get-ipdc-sme-financing`);
      const responseData = response.data.data;
      this.smeScheme = responseData.smeScheme;
      if (this.smeScheme.length > 0) {
        this.defaultScheme = this.smeScheme[0].id;
      }
      this.requiredDocuments = responseData.requiredDocuments;
    },

    async getHeadings() {
      const response = await this.$axios.get(
        `get-ipdc-sme-headings/${this.page}`
      );
      const resData = response.data.data.heading;

      if (resData.ipdc_sme_footer_application_form) {
        this.footerApplicationForm =
          resData.ipdc_sme_footer_application_form[0];
      }

      if (resData.sme_special_note) {
        this.specialNote = resData.sme_special_note[0];
      }

      if (resData.sme_scheme_heading) {
        this.schemeHeading = resData.sme_scheme_heading[0];
      }

      if (resData.sme_document_required_heading) {
        this.documentRequiredHeading = resData.sme_document_required_heading[0];
      }

      if (resData.ipdc_sme_conditions_heading) {
        this.conditionsHeading = resData.ipdc_sme_conditions_heading[0];
      }

      if (resData.ipdc_sme_conditions) {
        this.loanConditions = resData.ipdc_sme_conditions;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
