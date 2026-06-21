<template>
  <div>
    <CoverImage :page="page" :cover="cover" />
    <EventDetails
      :singleEvent="singleEvent"
      :singleEventImages="singleEventImages"
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
      page: "event_details",
      cover: {
        title: "Event Details",
        title_bangla: "ইভেন্টের বিস্তারিত",
        image_url: "/_nuxt/assets/image/cover/News-Media.jpg",
        description:
          "We believe our financial health is our wealth and take cautious steps in managing and communicating information to the public pertaining to the company's operations, managerial organization, and financial standing.",
      },
      singleEvent: {},
      singleEventImages: [],
    };
  },
  created() {
    this.getSingleEvent();
  },
  methods: {
    async getSingleEvent() {
      try {
        const response = await this.$axios.get(
          `/get-regular-event-details/${this.$route.query.id}`
        );
        if (response.data.code === 200) {
          const data = response.data.data || {}; // Ensure data is an empty object if null
          this.singleEvent = data;
          this.singleEventImages = data.event_images || []; // Default to an empty array if event_images is undefined
        } else {
          console.error("Error fetching files: Code not 200");
        }
      } catch (error) {
        console.error("Error fetching single event data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
