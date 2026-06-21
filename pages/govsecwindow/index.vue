<template>
  <div>
    <CoverImage :page="page" :cover="cover" />
    <GovSecWindow :personData="personData" />
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
      page: "govsecwindow",
      cover: {
        title: "Government Securities Investment Window",
        title_bangla: "সরকারি নিরাপত্তা বিনিয়োগ উইন্ডো",
        image_url: "/_nuxt/assets/image/cover/contactus.jpg",
        description:
          "We are always happy to help you find the right solution for your needs. Please feel free to visit any of our branches throughout the country.",
        description_bangla:
          "আর্থিক সাক্ষরতা বা সহজ ভাষায় আর্থিক বিষয়ে পরিষ্কার জ্ঞান থাকা আজকের যুগে একজন নাগরিকের জন্য অত্যাবশ্যক। তাই অর্থ সংক্রান্ত সব বিষয়ে ধারণা প্রদান করে জনসাধারণের আর্থিক সাক্ষরতা বৃদ্ধির লক্ষ্যে আইপিডিসি-র বিশেষ উদ্যোগ 'অর্থের অ আ ক খ'। আর্থিক সেবা, আর্থিক অন্তর্ভুক্তি ও আর্থিক প্রতিষ্ঠানসমূহের বিভিন্ন বিষয়ে সম্যক ধারণাকে তুলে ধরার মাধ্যমে 'অর্থের অ আ ক খ' এই সংক্রান্ত জ্ঞানকে ছড়িয়ে দিতে চায় সবার মাঝে। আসুন, আর্থিক সাক্ষরতা, তথা, বাজেটিং, বিনিয়োগ, আর্থিক ব্যবস্থাপনা ইত্যাদির মতো আর্থিক ধারণাগুলোকে বোঝার এবং প্রয়োগ করার সক্ষমতা অর্জন করি, বেঁচে থাকি জীবনের উচ্ছ্বাসে!",
      },
      personData: [],
    };
  },
  mounted() {
    this.govsecwindowContent();
  },
  methods: {
    async govsecwindowContent() {
      try {
        const response = await this.$axios.get(`/get-gsiw-data`);
        this.personData = response.data.data;
      } catch (error) {
        console.error(
          "Error fetching Government Securities Investment Window data:",
          error
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
