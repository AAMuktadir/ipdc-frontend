<template>
  <div>
    <CoverImage :page="page" />
    <UserJourney :missionVisionOurJourney="missionVisionOurJourney" />
    <MissionVisionCards
      :missionVisionFooterCard="missionVisionFooterCard"
      :customerExperienceHeading="customerExperienceHeading"
    />
    <MissionVisionCustomerExperience
      :missionVisionCustomerExperience="missionVisionCustomerExperience"
    />

    <ExtraMile
      :balanceSheetTitle="balanceSheetTitle"
      :balanceSheet="balanceSheet"
      :asOnDate="asOnDate"
      :firstCustomers="firstCustomers"
    />

    <IpdcHistory :ourJourney="ourJourney" />
    <OurVision :ourVision="ourVision" />
    <OurMission :ourMission="ourMission" />

    <!-- <MissionVisionCircleCards :missionVisionCircleCards="missionVisionCircleCards" /> -->
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
        title: "About IPDC",
        title_bangla: "আইপিডিসি সম্পর্কে",
      },
      customerExperienceHeading: {},
      page: "mission_vision_and_values",
      missionVisionOurJourney: {},
      missionVisionCustomerExperience: [],
      ourJourney: [],
      ourVision: {},
      ourMission: {},
      missionVisionFooterCard: [],
      missionVisionCircleCards: [],

      balanceSheet: [],
      balanceSheetTitle: null,
      asOnDate: {},
      firstCustomers: [],
    };
  },
  created() {
    this.missionVisionContent();
  },
  methods: {
    async missionVisionContent() {
      try {
        const response = await this.$axios.get(
          `/get-mission-vision/${this.page}`
        );
        const resHeading = response.data.data.heading;
        this.missionVisionCustomerExperience =
          response.data.data.missionVisionCustomerExperience;
        this.ourJourney = response.data.data.ourJourney;
        this.ourVision = response.data.data.ourVision;
        this.ourMission = response.data.data.ourMission;
        this.missionVisionFooterCard =
          response.data.data.missionVisionFooterCard;
        this.missionVisionCircleCards =
          response.data.data.missionVisionCircleCards;

        if (resHeading.mission_vission_customer_experience_heading) {
          this.customerExperienceHeading =
            resHeading.mission_vission_customer_experience_heading[0];
        }
        if (resHeading.mission_vission_our_journey_heading) {
          this.missionVisionOurJourney =
            resHeading.mission_vission_our_journey_heading[0];
        }
        const response2 = await this.$axios.get(
          `https://ipdc.com/demo/api/get-extra-mile-data.php`
        );
        this.balanceSheet = response2.data.data.dataItems;
        this.balanceSheetTitle = response2.data.data.dataTitle;
        this.asOnDate = response2.data.data.asOnDate;
        this.firstCustomers = response2.data.data.firstCustomers;
        // console.log(this.missionVisionCustomerExperience);
      } catch (error) {
        console.log("Error fetching missionVisionContent:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
