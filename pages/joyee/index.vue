<template>
  <div
    style="
      background-image: url(https://ipdc.com/api/uploads/joyee/ipdc-bg.webp);
      background-size: cover;
    "
  >
    <div class="joyeesidebar1">
      <div class="joyeeflink">
        <span
          ><a href="#alapon" v-scroll>{{
            $i18n.locale == "en" ? "Alapon" : "আলাপন"
          }}</a></span
        >
      </div>
      <div class="joyeeflink2">
        <span
          ><a href="#pathsala" v-scroll>{{
            $i18n.locale == "en" ? "Pathsala" : "পাঠশালা"
          }}</a></span
        >
      </div>
    </div>
    <JoyeeCoverImage :page="page" :coverImage="coverImage" />
    <StaticImageSingle :staticImage="staticImage" />
    <JoyeeProjectSection
      :images="projectSectionImages"
      :texts="projectSectionTexts"
    />
    <JoyeeSliderImageCarousel :heading="joyee_360" :images="joyee_360_images" />
    <JoyeeSliderCard
      :heading="joyee_creativity"
      :images="joyee_creativity_stories"
    />
    <JoyeeSliderVideoCarousel
      :videos="stories_of_joyees"
      :heading="stories_of_joyees_heading"
      :images="news_images_section"
    />
    <JoyeeAlapon :images="joyee_alapon_images" id="alapon" />
    <JoyeePathsala :images="joyee_pathsala_images" id="pathsala" />
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
      page: "joyee",
      cover: {
        title: "Joyee",
        title_bangla: "জয়ী",
      },
      coverImage: {},
      staticImage: {},
      projectSectionImages: {},
      projectSectionTexts: {},
      joyee_360: {},
      joyee_360_images: [],
      joyee_creativity: {},
      joyee_creativity_stories: [],
      stories_of_joyees: [],
      stories_of_joyees_heading: {
        heading: "Stories of Joyee Entrepreneurs",
        heading_bn: "জয়ীদের গল্প",
      },
      news_images_section: {},
      // joyee_alapon_images: [],
      // joyee_pathsala_images: [],
      joyee_alapon_images: [
        "https://ipdc.com/api/uploads/joyee/joyee-alapon-1.webp",
        "https://ipdc.com/api/uploads/joyee/joyee-alapon-2.webp",
      ],
      joyee_pathsala_images: [
        "https://ipdc.com/api/uploads/joyee/Joyee-patshala-1.webp",
        "https://ipdc.com/api/uploads/joyee/Joyee-patshala-2.webp",
        "https://ipdc.com/api/uploads/joyee/Joyee-patshala-3.webp",
        "https://ipdc.com/api/uploads/joyee/Joyee-patshala-4.webp",
      ],
    };
  },

  mounted() {
    this.joyeeContent();
  },
  methods: {
    async joyeeContent() {
      try {
        const response = await this.$axios.get(
          `https://ipdc.com/demo/api/get-joyee-data.php`
        );
        this.coverImage = response.data.data.cover_image;
        this.projectSectionImages = response.data.data.project_section_image;
        this.projectSectionTexts = response.data.data.project_section_text;
        this.joyee_360 = response.data.data.joyee_360;
        this.joyee_360_images = response.data.data.joyee_360.joyee_360_images;
        this.joyee_creativity = response.data.data.joyee_section_creativity;
        this.joyee_creativity_stories =
          response.data.data.joyee_section_creativity.stories;
        this.stories_of_joyees = response.data.data.stories_of_joyees;
        this.staticImage = response.data.data.joyee_360_logo;

        this.news_images_section = response.data.data.news_images_section;
        // this.joyee_alapon_images = response.data.data.joyee_alapon_images;
        // this.joyee_pathsala_images = response.data.data.joyee_pathsala_images;
      } catch (error) {
        console.error("Error fetching Joyee data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.joyeesidebar1 {
  position: fixed;
  top: 40%;
  z-index: 999;
  left: 17px;

  .joyeeflink {
    background-color: #ed017f;
    bottom: 0;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    height: 30px;
    margin-top: 28px;
    text-align: center;
    transform: rotate(-90deg);
    width: 120px;
    position: absolute;
    left: -62px;
    border-top: 0 solid #0ef27c;
    font-weight: 400;
    text-transform: uppercase;
    border-radius: 0 0 5px 5px;

    span {
      margin-left: 5px;
      a {
        color: #fff;
        text-decoration: none;
        outline: 0 !important;

        &:hover {
          color: #9b9c9d;
        }
      }
    }
  }
  .joyeeflink2 {
    background-color: #ed017f;
    bottom: 0;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    height: 30px;
    margin-top: 28px;
    text-align: center;
    transform: rotate(-90deg);
    width: 120px;
    position: absolute;
    left: -62px;
    font-weight: 400;
    text-transform: uppercase;
    top: 65px;
    border-radius: 0 0 5px 5px;

    span {
      margin-left: 5px;
      a {
        color: #fff;
        text-decoration: none;
        outline: 0 !important;

        &:hover {
          color: #9b9c9d;
        }
      }
    }
  }
}
</style>
