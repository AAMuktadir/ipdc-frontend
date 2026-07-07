<template>
  <div>
    <CoverImage :page="page" :cover="cover" />
    <!-- <CoverImageWithoutButtonBelow :page="page" /> -->

    <!-- <Shareholders /> -->
    <Shareholders
      :foundingShareholders="foundingShareholders"
      :share_summary="share_summary"
      :currentShareholders="currentShareholders"
    />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "shareholders");
      return {
        seo,
      };
    } catch (error) {
      console.error("SEO fetch failed:", error);

      return {
        seo: {},
      };
    }
  },

  head() {
    return generateSeoHead(this.seo);
  },
  data() {
    return {
      page: "shareholders",
      cover: {
        title: "Shareholders",
        title_bangla: "শেয়ারহোল্ডারগণ",
        // image_url: "~/assets/image/cover/shareholders.jpg",
        description:
          "Time and again the leading institutions of the state have shown their profound interest in bestowing their confidence upon us and never have we ever let them down of their expectations.",
      },
      share_summary: {},
      currentShareholders: [],
      foundingShareholders: [
        {
          id: 1,
          image:
            "https://ipdc.com/api/uploads/shareholders/63bd102dd809783e27ecf680034650f0.png",
          image_bangla:
            "https://ipdc.com/api/uploads/shareholders/63bd102dd809783e27ecf680034650f0.png",
          name: "Government of the People's Republic of Bangladesh",
          name_bangla: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
          link: "http://www.bangladesh.gov.bd",
        },
        {
          id: 2,
          image:
            "https://ipdc.com/api/uploads/shareholders/73dd8f772ef2b325c3cada448afe461a.png",
          image_bangla:
            "https://ipdc.com/api/uploads/shareholders/73dd8f772ef2b325c3cada448afe461a.png",
          name: "Aga Khan Fund for Economic Development ",
          name_bangla: "আগা খান ফান্ড ফর ইকোনমিক ডেভেলপমেন্ট",
          link: "http://www.akdn.org/our-agencies/aga-khan-fund-economic-development",
        },
        {
          id: 3,
          image:
            "https://ipdc.com/api/uploads/shareholders/70e56f6731ee603366334e661a4d16cb.jpg",
          image_bangla:
            "https://ipdc.com/api/uploads/shareholders/70e56f6731ee603366334e661a4d16cb.jpg",
          name: "International Finance Corporation",
          name_bangla: "ইন্টারন্যাশনাল ফাইন্যান্স করপোরেশন",
          link: "http://www.ifc.org/",
        },
        {
          id: 4,
          image:
            "https://ipdc.com/api/uploads/shareholders/3220853c710016c3b7e245e2fe8698bf.jpg",
          image_bangla:
            "https://ipdc.com/api/uploads/shareholders/3220853c710016c3b7e245e2fe8698bf.jpg",
          name: "German Investment and Development Company",
          name_bangla: "জার্মান ইনভেস্টমেন্ট অ্যান্ড ডেভেলপমেন্ট কোম্পানি",
          link: "https://www.deginvest.de/Internationale-Finanzierung/DEG/",
        },
        {
          id: 5,
          image:
            "https://ipdc.com/api/uploads/shareholders/ebd37bd63b098c59cb82e85f70e94a1c.png",
          image_bangla:
            "https://ipdc.com/api/uploads/shareholders/ebd37bd63b098c59cb82e85f70e94a1c.png",
          name: "Commonwealth Development Corporation",
          name_bangla: "কমনওয়েলথ  ডেভেলপমেন্ট ব্যাঙ্ক ",
          link: "http://www.cdcgroup.com/",
        },
      ],
    };
  },
  mounted() {
    this.shareholderContent();
  },
  methods: {
    async shareholderContent() {
      try {
        const response = await this.$axios.get(`/get-shareholder-data`);
        this.share_summary = response.data.data.share_summary;
        this.currentShareholders = response.data.data.shareholder;
      } catch (error) {
        console.error("Error fetching shareholder data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
