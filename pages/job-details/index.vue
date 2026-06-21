<template>
  <div>
    <CoverImage :page="page" />
    <JobDetails :singleJob="singleJob" />
    <JobContext :singleJob="singleJob" />
    <JobRequirements :singleJob="singleJob" />
    <!-- <RelevantVacancy /> -->
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
      page: "job_details",
      singleJob: {},
      cover: {
        title: "Job Details",
        title_bangla: "ক্যারিয়ার বিস্তারিত",
      },
    };
  },
  created() {
    this.getSingleJob();
  },
  methods: {
    async getSingleJob() {
      try {
        const response = await this.$axios.get(
          `/get-single-job/${this.$route.query.job}`
        );
        this.singleJob = response.data.data;
      } catch (error) {
        console.log("Error fetching getSingleJob:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
