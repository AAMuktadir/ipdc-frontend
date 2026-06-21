<template>
  <div>
    <CoverImage :page="page" />
    <LifeAtIpdc
      :careerLifeAtIpdc="careerLifeAtIpdc"
      :lifeAtIpdcHeaing="lifeAtIpdcHeaing"
    />
    <IpdcCulture :careerCultureAtIpdc="careerCultureAtIpdc" />
    <IpdcHiring :jobPosts="jobPosts" :hiringNowHeading="hiringNowHeading" />
    <WordsFromEmployees
      :careerWordsFromOurEmployees="careerWordsFromOurEmployees"
      :wordsFromOurEmployeesHeading="wordsFromOurEmployeesHeading"
    />
    <RelevantVacancy />
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
      lifeAtIpdcHeaing: {},
      hiringNowHeading: {},
      wordsFromOurEmployeesHeading: {},

      page: "career",
      cover: {
        title: "Career",
        title_bangla: "ক্যারিয়ার",
        image_url: null,
      },
      coverImage: {},
      careerLifeAtIpdc: [],
      careerCultureAtIpdc: [],
      jobPosts: [],
      careerWordsFromOurEmployees: [],
    };
  },
  created() {
    this.missionVisionContent();
  },
  methods: {
    async missionVisionContent() {
      const response = await this.$axios.get(
        `/get-career-content/${this.page}`
      );
      const resHeading = response.data.data.heading;
      this.careerLifeAtIpdc = response.data.data.careerLifeAtIpdc;
      this.careerCultureAtIpdc = response.data.data.careerCultureAtIpdc;
      this.careerWordsFromOurEmployees =
        response.data.data.careerWordsFromOurEmployees;
      this.jobPosts = response.data.data.jobPosts;

      if (resHeading.career_life_at_ipdc_heading) {
        this.lifeAtIpdcHeaing = resHeading.career_life_at_ipdc_heading[0];
      }

      if (resHeading.career_hiring_now_heading) {
        this.hiringNowHeading = resHeading.career_hiring_now_heading[0];
      }

      if (resHeading.career_words_from_our_employees_heading) {
        this.wordsFromOurEmployeesHeading =
          resHeading.career_words_from_our_employees_heading[0];
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
