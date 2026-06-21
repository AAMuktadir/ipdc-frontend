<template>
  <div>
    <CoverImageWithoutButtonBelow :cover="cover" />

    <SliderImageCarouselFinLit
      :heading="heading_5"
      :carouselsize="1"
      :images="social_media_post_2026"
    />

    <SliderImageCarouselFinLit
      :heading="heading_4"
      :carouselsize="1"
      :images="social_media_post_2025"
    />

    <SliderImageCarouselFinLit
      :heading="heading_0"
      :carouselsize="1"
      :images="financial_literacy_day_2025"
    />

    <SliderImageCarouselFinLit
      :heading="heading_1"
      :carouselsize="1"
      :images="financial_literacy_abcd"
    />
    <SliderImageCarouselFinLit
      :carouselsize="1"
      :images="financial_literacy_abcd_bg"
    />

    <SliderImageWithLink :heading="heading_2" />

    <SliderImageCarousel
      v-for="event in financial_literacy_events"
      :key="event.id"
      :heading="event"
      :carouselsize="3"
      :fullwidth="true"
      :images="event.image_urls"
    />

    <!-- <SliderImageCarousel />
    <SliderImageWithLink :heading="heading_2" />
    <SliderImageCarousel
      :heading="heading_3"
      :carouselsize="3"
      :fullwidth="true"
    />

    <SliderImageOnly :page="page" /> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const [coverRes] = await Promise.all([
        $axios.get(`/get-cover-image/financial-literacy`),
      ]);

      const responseData = coverRes.data.data;

      // console.log(responseData);

      return {
        page: "financial-literacy",
        cover: responseData || {
          title: "Financial Literacy",
          title_bangla: "আর্থিক সাক্ষরতা",
          image_url: "/_nuxt/assets/image/cover/News-Media.jpg",
          description_bangla:
            "আর্থিক সাক্ষরতা বা সহজ ভাষায় আর্থিক বিষয়ে পরিষ্কার জ্ঞান থাকা আজকের যুগে একজন নাগরিকের জন্য অত্যাবশ্যক। তাই অর্থ সংক্রান্ত সব বিষয়ে ধারণা প্রদান করে জনসাধারণের আর্থিক সাক্ষরতা বৃদ্ধির লক্ষ্যে আইপিডিসি-র বিশেষ উদ্যোগ 'অর্থের অ আ ক খ'। আর্থিক সেবা, আর্থিক অন্তর্ভুক্তি ও আর্থিক প্রতিষ্ঠানসমূহের বিভিন্ন বিষয়ে সম্যক ধারণাকে তুলে ধরার মাধ্যমে 'অর্থের অ আ ক খ' এই সংক্রান্ত জ্ঞানকে ছড়িয়ে দিতে চায় সবার মাঝে। আসুন, আর্থিক সাক্ষরতা, তথা, বাজেটিং, বিনিয়োগ, আর্থিক ব্যবস্থাপনা ইত্যাদির মতো আর্থিক ধারণাগুলোকে বোঝার এবং প্রয়োগ করার সক্ষমতা অর্জন করি, বেঁচে থাকি জীবনের উচ্ছ্বাসে!",
          description:
            "Financial literacy or in simple words having a clear knowledge about finances is essential for a citizen in today's age. Hence IPDC's special initiative 'Orther Aa Aa Bh' aims to increase the financial literacy of the public by imparting knowledge on all matters related to finance.It wants to spread the knowledge about 'A A A A B B' of financial services, financial inclusion and various aspects of financial institutions among all. Let's gain financial literacy, the ability to understand and apply financial concepts like budgeting, investing, financial management, etc., live in the spirit of life!",
        },
      };
    } catch (error) {
      console.error("SSR fetch failed:", error);

      return {
        page: "financial-literacy",
        cover: {
          title: "Financial Literacy",
          title_bangla: "আর্থিক সাক্ষরতা",
          image_url: "/_nuxt/assets/image/cover/News-Media.jpg",
          description_bangla:
            "আর্থিক সাক্ষরতা বা সহজ ভাষায় আর্থিক বিষয়ে পরিষ্কার জ্ঞান থাকা আজকের যুগে একজন নাগরিকের জন্য অত্যাবশ্যক। তাই অর্থ সংক্রান্ত সব বিষয়ে ধারণা প্রদান করে জনসাধারণের আর্থিক সাক্ষরতা বৃদ্ধির লক্ষ্যে আইপিডিসি-র বিশেষ উদ্যোগ 'অর্থের অ আ ক খ'। আর্থিক সেবা, আর্থিক অন্তর্ভুক্তি ও আর্থিক প্রতিষ্ঠানসমূহের বিভিন্ন বিষয়ে সম্যক ধারণাকে তুলে ধরার মাধ্যমে 'অর্থের অ আ ক খ' এই সংক্রান্ত জ্ঞানকে ছড়িয়ে দিতে চায় সবার মাঝে। আসুন, আর্থিক সাক্ষরতা, তথা, বাজেটিং, বিনিয়োগ, আর্থিক ব্যবস্থাপনা ইত্যাদির মতো আর্থিক ধারণাগুলোকে বোঝার এবং প্রয়োগ করার সক্ষমতা অর্জন করি, বেঁচে থাকি জীবনের উচ্ছ্বাসে!",
          description:
            "Financial literacy or in simple words having a clear knowledge about finances is essential for a citizen in today's age. Hence IPDC's special initiative 'Orther Aa Aa Bh' aims to increase the financial literacy of the public by imparting knowledge on all matters related to finance.It wants to spread the knowledge about 'A A A A B B' of financial services, financial inclusion and various aspects of financial institutions among all. Let's gain financial literacy, the ability to understand and apply financial concepts like budgeting, investing, financial management, etc., live in the spirit of life!",
        },
      };
    }
  },
  head() {
    return {
      title:
        this.$i18n.locale == "en" ? this.cover.title : this.cover.title_bangla,
    };
  },
  data() {
    return {
      page: "financial-literacy",
      // cover: {
      //   title: "Financial Literacy",
      //   title_bangla: "আর্থিক সাক্ষরতা",
      //   image_url: "/_nuxt/assets/image/cover/News-Media.jpg",
      //   description_bangla:
      //     "আর্থিক সাক্ষরতা বা সহজ ভাষায় আর্থিক বিষয়ে পরিষ্কার জ্ঞান থাকা আজকের যুগে একজন নাগরিকের জন্য অত্যাবশ্যক। তাই অর্থ সংক্রান্ত সব বিষয়ে ধারণা প্রদান করে জনসাধারণের আর্থিক সাক্ষরতা বৃদ্ধির লক্ষ্যে আইপিডিসি-র বিশেষ উদ্যোগ 'অর্থের অ আ ক খ'। আর্থিক সেবা, আর্থিক অন্তর্ভুক্তি ও আর্থিক প্রতিষ্ঠানসমূহের বিভিন্ন বিষয়ে সম্যক ধারণাকে তুলে ধরার মাধ্যমে 'অর্থের অ আ ক খ' এই সংক্রান্ত জ্ঞানকে ছড়িয়ে দিতে চায় সবার মাঝে। আসুন, আর্থিক সাক্ষরতা, তথা, বাজেটিং, বিনিয়োগ, আর্থিক ব্যবস্থাপনা ইত্যাদির মতো আর্থিক ধারণাগুলোকে বোঝার এবং প্রয়োগ করার সক্ষমতা অর্জন করি, বেঁচে থাকি জীবনের উচ্ছ্বাসে!",
      //   description:
      //     "Financial literacy or in simple words having a clear knowledge about finances is essential for a citizen in today's age. Hence IPDC's special initiative 'Orther Aa Aa Bh' aims to increase the financial literacy of the public by imparting knowledge on all matters related to finance.It wants to spread the knowledge about 'A A A A B B' of financial services, financial inclusion and various aspects of financial institutions among all. Let's gain financial literacy, the ability to understand and apply financial concepts like budgeting, investing, financial management, etc., live in the spirit of life!",
      // },
      financial_literacy: [],
      financial_literacy_day_2025: [],
      financial_literacy_abcd: [],
      financial_literacy_abcd_bg: [],
      financial_literacy_events: {},
      social_media_post_2025: [],
      social_media_post_2026: [],

      heading_0: {},
      heading_1: {},
      heading_2: {},
      heading_3: {},
      heading_4: {},
      heading_5: {},
    };
  },
  mounted() {
    this.financialLiteracyContent();
  },
  methods: {
    async financialLiteracyContent() {
      try {
        const response = await this.$axios.get(
          `https://ipdc.com/demo/api/get-financial-literacy-data.php`
        );
        this.financial_literacy = response.data.data.financial_literacy;
        this.financial_literacy_day_2025 =
          response.data.data.financial_literacy_day_2025;
        this.financial_literacy_abcd =
          response.data.data.financial_literacy_abcd;
        this.financial_literacy_abcd_bg =
          response.data.data.financial_literacy_abcd_bg;
        this.social_media_post_2025 = response.data.data.social_media_post_2025;
        this.social_media_post_2026 = response.data.data.social_media_post_2026;
        this.financial_literacy_events =
          response.data.data.financial_literacy_events;
        this.heading_0 = response.data.data.all_headings.heading_0;
        this.heading_1 = response.data.data.all_headings.heading_1;
        this.heading_2 = response.data.data.all_headings.heading_2;
        this.heading_3 = response.data.data.all_headings.heading_3;
        this.heading_4 = response.data.data.all_headings.heading_4;
        this.heading_5 = response.data.data.all_headings.heading_5;
      } catch (error) {
        console.error("Error fetching shareholder data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
