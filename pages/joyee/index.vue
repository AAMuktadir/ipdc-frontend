<template>
  <div>
    <!-- Cover banner -->
    <JoyeeCoverImage :page="page" :coverImage="coverImage" />

    <!-- Project section: 4 "Access to..." pillars -->
    <JoyeeProjectSection :images="projectSectionImage" :texts="projectSectionText" />

    <!-- Creativity at its Best (stories cards) -->
    <JoyeeSliderCard :heading="sectionCreativity" :images="creativityStories" />

    <!-- Joyee 360 (heading + description + image gallery) -->
    <JoyeeSliderImageCarousel :heading="joyee360" :images="joyee360Images" />

    <!-- Joyee 360 logo banner (self-fetches cover title via /get-cover-image) -->
    <JoyeeStaticImage :page="page" :staticImage="joyee360Logo" />

    <!-- Stories of Joyees videos + News cards (left/right) -->
    <JoyeeSliderVideoCarousel
      :heading="storiesHeading"
      :videos="storiesOfJoyees"
      :images="newsImagesSection"
    />

    <!-- Joyee Alapon gallery (component supplies its own default heading) -->
    <JoyeeAlapon :images="alaponImages" />

    <!-- Joyee Pathshala gallery (component supplies its own default heading) -->
    <JoyeePathsala :images="pathsalaImages" />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "joyee");
      return { seo };
    } catch (error) {
      console.error("SEO fetch failed:", error);
      return { seo: {} };
    }
  },

  head() {
    return generateSeoHead(this.seo);
  },

  data() {
    return {
      page: "joyee",
      coverImage: {},
      projectSectionImage: {},
      projectSectionText: {},
      creativityStories: [],
      sectionCreativity: {},
      joyee360: {},
      joyee360Images: [],
      joyee360Logo: {},
      storiesOfJoyees: [],
      newsImagesSection: { section_left: [], section_right: [] },
      alaponImages: [],
      pathsalaImages: [],
      // The videos section has no heading in the API. Leave null so no empty
      // heading renders; set an object { heading, heading_bn } here if you want one.
      storiesHeading: null,
    };
  },

  created() {
    this.getJoyeeContent();
  },

  methods: {
    async getJoyeeContent() {
      try {
        // Live backend endpoint (routes/api.php -> JoyeeController@getJoyeeData)
        const response = await this.$axios.get(`/get-joyee-data/${this.page}`);
        const data = response.data.data;

        this.coverImage = data.cover_image || {};
        this.projectSectionImage = data.project_section_image || {};
        this.projectSectionText = data.project_section_text || {};

        this.sectionCreativity = data.joyee_section_creativity || {};
        this.creativityStories =
          (data.joyee_section_creativity &&
            data.joyee_section_creativity.stories) ||
          [];

        this.joyee360 = data.joyee_360 || {};
        this.joyee360Images =
          (data.joyee_360 && data.joyee_360.joyee_360_images) || [];

        this.joyee360Logo = data.joyee_360_logo || {};
        this.storiesOfJoyees = data.stories_of_joyees || [];
        this.newsImagesSection =
          data.news_images_section || { section_left: [], section_right: [] };

        this.alaponImages = data.joyee_alapon_images || [];
        this.pathsalaImages = data.joyee_pathsala_images || [];
      } catch (error) {
        console.log("Error fetching getJoyeeContent:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
