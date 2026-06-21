<template>
  <div>
    <!-- <CoverImage :page="page" :staticImage="staticImage"  /> -->
    <StaticImage :staticImage="staticImage" />
    <CampaignDetails :single-campaign="singleCampaign" />

    <CampaignGallery :image-gallery="imageGallery" />
    <CampaignEligibility :eligibility="eligibilities" />
    <!--    <CampaignTerms :termsCondition="termsCondition" />-->
    <CampaignTerms
      :terms-condition="termsCondition"
      :terms-condition-bangla="termsConditionBangla"
    />
    <FurtherQueries :query-person="queryPerson" />
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
        title: "Campaigns Details",
        title_bangla: "ক্যাম্পেইনের বিস্তারিত",
      },
      page: "campaign_details_page",
      staticImage: {},
      singleCampaign: {},
      imageGallery: [],
      imageGalleryBangla: [],
      eligibilities: [],
      // termsCondition: [],
      termsCondition: {},
      termsConditionBangla: {},
      queryPerson: [],
      imagesForBangla: [],
      imagesForEnglish: [],
    };
  },
  created() {
    this.getSingleCampaign();
  },
  methods: {
    async getSingleCampaign() {
      const response = await this.$axios.get(
        `/single-campaign/${this.$route.query.campaign}`
      );
      // console.log(response.data.singleCampaign);
      this.staticImage = response.data.singleCampaign;
      this.singleCampaign = response.data.singleCampaign;
      const images = response.data.multipleImage;
      images.map((image) => {
        if (image.type === "bangla") {
          this.imagesForBangla.push(image);
        } else {
          this.imagesForEnglish.push(image);
        }
      });
      const pathArray = window.location.pathname.split("/");
      if (pathArray.includes("bn")) {
        this.imageGallery = this.imagesForBangla;
      } else {
        this.imageGallery = this.imagesForEnglish;
      }
      this.eligibilities = response.data.singleCampaign.eligibility;
      this.queryPerson = response.data.queryPerson;
      this.termsCondition = response.data.singleCampaign.term_conditions;
      this.termsConditionBangla =
        response.data.singleCampaign.term_conditions_bangla;
    },
  },
};
</script>

<style lang="scss" scoped></style>
