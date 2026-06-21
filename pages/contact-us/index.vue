<template>
  <div>
    <CoverImage :page="page" />
    <ContactInformation :contactInfo="contactCards" />
    <IpdcBranches :heading="contactUsBranchesHeading" />
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
      page: "contact_us",
      cover: {
        title: "Contact Us",
        title_bangla: "যোগাযোগ করুন",
        description:
          "We are always happy to help you find the right solution for your needs. Please feel free to visit any of our branches throughout the country",
      },
      contactInfo: {
        title: "What We Offer",
        description: "Safest Deposit Schemes.",
      },
      contactCards: [],
      contactUsBranchesHeading: null,
    };
  },
  created() {
    this.getDepositSchemeContent();
  },
  methods: {
    async getDepositSchemeContent() {
      const response = await this.$axios.get(`/get-contact-card/${this.page}`);
      this.contactCards = response.data.data.contactCard;
      // console.log(this.contactCards[0].title)
      if (response.data.data.heading.contact_us_branches_heading) {
        this.contactUsBranchesHeading =
          response.data.data.heading.contact_us_branches_heading[0];
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
