<template>
  <div>
    <SustainabilityCoverImage :coverImage="coverImage" />

    <b-navbar sticky class="sustainability-navbar" v-b-scrollspy="150">
      <b-navbar-nav>
        <b-nav-item href="#products" v-scroll
          >Sustainable Finance Products</b-nav-item
        >
        <b-nav-item href="#disclosures" v-scroll>Disclosures</b-nav-item>
        <b-nav-item href="#testimonials" v-scroll
          >Customer Testimonials</b-nav-item
        >
        <b-nav-item href="#awards" v-scroll>Awards</b-nav-item>
        <b-nav-item href="#csr" v-scroll>CSR Activity</b-nav-item>
        <b-nav-item href="#contact" v-scroll>Contact Point</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <SustainabilityProductsCover
      :coverImage="coverImage.products"
      id="products"
    />
    <CoverImageWithLink :coverImage="coverImageLink" />

    <SustainableFinanceProducts :coverImage="coverImage.products" />

    <SustainabilitySectionCover
      :coverImage="coverImage.disclosures"
      id="disclosures"
    />
    <SustainableFinanceDisclosures
      :annualReports="annualReports"
      :genderData="genderData"
      :portfolioData="portfolioData"
      :portfolioFixedData="portfolioFixedData"
      :capacityBuilding="capacityBuilding"
      :capacityBuildingImages="capacityBuildingImages"
    />

    <SustainabilitySectionCover
      :coverImage="coverImage.testimonal"
      id="testimonials"
    />
    <SustainableFinanceTestimonials
      :customerTestimonial="customerTestimonial"
    />

    <SustainabilitySectionCover :coverImage="coverImage.awards" id="awards" />
    <SustainableFinanceAwards :sustainabilityAwards="sustainabilityAwards" />

    <SustainableFinanceCSR :coverImage="coverImage.csr" id="csr" />

    <SustainableFinanceContact id="contact" />
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "sustainability");
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
      annualReports: [],
      genderData: {},
      portfolioData: {},
      portfolioFixedData: {},
      capacityBuilding: {},
      capacityBuildingImages: [],
      customerTestimonial: [],
      sustainabilityAwards: [],

      page: "sustainability",
      cover: {
        title: "Sustainability",
        title_bangla: "Sustainability",
        description:
          "We believe our financial health is our wealth and take cautious steps in managing and communicating information to the public pertaining to the company's operations, managerial organization, and financial standing.",
      },
      coverImageLink: {
        image_url: "/api/uploads/background/A2GF-Banner.png",
        link_url: "https://a2gf.ipdc.com/",
      },
      coverImage: {
        id: 1,
        image_url:
          "https://ipdc.com/api/uploads/sustainable/Green-Banking1.jpg",
        image_mobile_url:
          "https://ipdc.com/api/uploads/sustainable/Green-Banking1.jpg",
        title: "Sustainability",
        title_bangla: "Sustainability",
        products: {},
        disclosures: {
          id: 1,
          image_url: "https://ipdc.com/api/uploads/1677062941u9YR2.jpg",
          image_mobile_url: "https://ipdc.com/api/uploads/1677062941u9YR2.jpg",
          title: "Disclosures",
          title_bangla: "Disclosures",
        },
        testimonal: {
          id: 1,
          image_url: "https://ipdc.com/api/uploads/1677127153Tzi1o.jpg",
          image_mobile_url: "https://ipdc.com/api/uploads/1677127153Tzi1o.jpg",
          title: "Customer Testimonials",
          title_bangla: "Customer Testimonials",
        },
        awards: {
          id: 1,
          image_url: "https://ipdc.com/api/uploads/1677062313Hm1Tg.jpg",
          image_mobile_url: "https://ipdc.com/api/uploads/1677062313Hm1Tg.jpg",
          title: "Awards",
          title_bangla: "Awards",
        },
        csr: {
          id: 1,
          image_url: "https://ipdc.com/api/uploads/sustainable/csr/Banner.png",
          image_mobile_url:
            "https://ipdc.com/api/uploads/sustainable/csr/Banner.png",
          title: "CSR Activities",
          title_bangla: "CSR Activities",
          sub_title:
            "Our unbound commitment is to uplift society, empower women and youth, nurture the environment, and elevate stakeholders, cultivating a legacy of sustainable and ethical growth.",
          sub_title_bangla:
            "Our unbound commitment is to uplift society, empower women and youth, nurture the environment, and elevate stakeholders, cultivating a legacy of sustainable and ethical growth.",
        },
        contact: {
          id: 1,
          image_url: "https://ipdc.com/api/uploads/1677127619J5b0S.jpg",
          image_mobile_url: "https://ipdc.com/api/uploads/1677127619J5b0S.jpg",
          title: "Contact Point For Sustainable Finance",
          title_bangla: "জয়ী হবার লক্ষ্যে",
        },
      },
      staticImage: {},
      images: {
        accessInformation:
          "https://ipdc.com/api/uploads/joyee/Joyee_Access_to_Information.webp",
        accessToMarket:
          "https://ipdc.com/api/uploads/joyee/Joyee_Access_to_Market.webp",
        accessToFinance:
          "https://ipdc.com/api/uploads/joyee/Joyee_Access_to_finance.webp",
        accessToBusinessDevelopment:
          "https://ipdc.com/api/uploads/joyee/Joyee_Access_to_bussiness.webp",
      },
      texts: {
        accessToBusinessSupport: "Access to Business Support",
        accessToBusinessSupport_bn: "অ্যাক্সেস টু বিজনেস সাপোর্ট",
        businessSupportDescription:
          "'IPDC Joyee' also provides counseling services for women entrepreneurs regarding business preparation information, trade license, how to prepare various legal documents etc.",
        businessSupportDescription_bn:
          "নারী উদ্যোক্তাদের জন্য ব্যবসা শুরু করার প্রস্তুতি সংক্রান্ত তথ্যাবলি, ট্রেড লাইসেন্স, বিভিন্ন বৈধ কাগজপত্র কীভাবে তৈরি করা যায় ইত্যাদি সম্পর্কে পরামর্শ সেবা নেওয়ার ব্যবস্থাও করে দিয়ে থাকে ‘আইপিডিসি জয়ী’।",
        accessToMarket: "Access to Market",
        accessToMarket_bn: "অ্যাক্সেস টু মার্কেট",
        marketAccessDescription:
          "In order for women entrepreneurs to get access to the right buyers or markets for their products, get to know about their needs by establishing contact with buyers and increase their own networking to advance the venture towards more success, 'IPDC Joyee' finances the organization of various entrepreneurial fairs, events, etc.",
        marketAccessDescription_bn:
          "নারী উদ্যোক্তারা যেন তাদের পণ্য সঠিক ক্রেতা বা মার্কেটের অ্যাক্সেস পায়, ক্রেতাদের সাথে যোগাযোগ স্থাপন করে তাদের চাহিদা সম্পর্কে জানতে পারেন এবং নিজেদের নেটওয়ার্কিং বাড়িয়ে উদ্যোগকে আরও সফলতার দিকে এগিয়ে নিতে পারেন এজন্য ‘জয়ী’ বিভিন্ন উদ্যোক্তা মেলা, ইভেন্ট ইত্যাদির আয়োজনে অর্থায়ন করে থাকে।",
        accessToFinance: "Access to Finance",
        accessToFinance_bn: "অ্যাক্সেস টু ফাইন্যান্স",
        financeAccessDescription:
          "To ensure that women entrepreneurs do not get cut off from financial support, 'IPDC Joyee' provides unsecured entrepreneur loans.",
        financeAccessDescription_bn:
          "নারী উদ্যোক্তাদের যেন চলার পথে আর্থিক যোগান বন্ধ হয়ে না যায়, সেই বিষয়টি খেয়াল রাখতে ‘আইপিডিসি জয়ী’ প্রদান করে জামানতবিহীন উদ্যোক্তা লোন।",
        accessToCapacityDevelopment: "Access to Capacity Development",
        accessToCapacityDevelopment_bn: "অ্যাক্সেস টু ক্যাপাসিটি ডেভেলপমেন্ট",
        capacityDevelopmentDescription:
          "Not only providing opportunities for product sales, but also engaging in workshops under the initiative of 'IPDC Joyee' to enhance the skills of women entrepreneurs, offering various trainings on digital marketing and e-commerce, aiming to expand business not only offline but also online.",
        capacityDevelopmentDescription_bn:
          "শুধু পণ্য বিক্রির সুযোগ করে দেওয়াই নয়, নারী উদ্যোক্তাদের দক্ষতা বৃদ্ধির লক্ষ্যে বিভিন্ন ট্রেনিং, অফলাইন ব্যবসা ছাড়াও অনলাইনে ব্যবসা প্রসারের জন্য ডিজিটাল মার্কেটিং, ডিজিটাল কমার্স বিষয়ক বিভিন্ন ধারণা দিতে কর্মশালাসমূহ পরিচালনার উদ্যোগে সামিল হয় ‘আইপিডিসি জয়ী’।",
      },
      joyee_360: {},
      joyee_360_images: [],
      joyee_creativity: {},
      joyee_creativity_stories: [],
      stories_of_joyees: [],
      stories_of_joyees_heading: {
        heading: "Stories of 'Joyee's",
        heading_bn: "জয়ীদের গল্প",
      },
      news_images_section: [],
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
    this.getPageData();
    this.getAnnualReport();

    this.getSustainabilityPortfolioData();
    this.getSustainabilityPortfolioFixedData();
    this.getGenderData();
    this.getCapacityBuilding();
    this.getcustomerTestimonial();
    this.getSustainabilityAwards();
  },
  methods: {
    async getPageData() {
      try {
        const response = await this.$axios.get("get-sustainability-page-data");
        this.coverImage.products = response.data.data[0];
      } catch (error) {
        console.log("Error fetching getPageData:", error);
      }
    },

    async getAnnualReport() {
      try {
        const response = await this.$axios.get("get-code-of-conduct");
        const codeOfConductList = response.data.data.codeOfConduct;

        const sustainability = codeOfConductList.find(
          (item) => item.tab_name === "Sustainability Report"
        );

        this.annualReports = sustainability ? sustainability.conduct : [];
      } catch (error) {
        console.log("Error fetching getAnnualReport:", error);
      }
    },

    // async getAnnualReport() {
    //   try {
    //     const response = await this.$axios.get("get-code-of-conduct");
    //     this.annualReports = response.data.data.codeOfConduct[1].conduct;
    //   } catch (error) {
    //     console.log("Error fetching getAnnualReport:", error);
    //   }
    // },

    async getSustainabilityPortfolioData() {
      try {
        const response = await this.$axios.get(
          "get-sustainability-portfolio-data"
        );
        this.portfolioData = response.data;
      } catch (error) {
        console.error("Error fetching Portfolio data:", error);
      }
    },

    async getSustainabilityPortfolioFixedData() {
      try {
        const response = await this.$axios.get(
          "get-sustainability-portfolio-fixed-data"
        );
        this.portfolioFixedData = response.data.data[0];
        // console.log(this.portfolioFixedData);
      } catch (error) {
        console.error("Error fetching Portfolio data:", error);
      }
    },

    async getGenderData() {
      try {
        const response = await this.$axios.get(
          "get-sustainability-demographic-data"
        );
        this.genderData = response.data.data;
      } catch (error) {
        console.error("Error fetching Gender data:", error);
      }
    },

    async getCapacityBuilding() {
      try {
        const response = await this.$axios.get(
          "get-sustainability-capacity-building-data"
        );
        this.capacityBuilding = response.data.data;
        this.capacityBuildingImages = response.data.data.images;
      } catch (error) {
        console.error("Error fetching Gender data:", error);
      }
    },

    async getcustomerTestimonial() {
      try {
        const response = await this.$axios.get(
          "get-sustainability-testimonial-data"
        );
        this.customerTestimonial = response.data.data;
      } catch (error) {
        console.error("Error fetching Gender data:", error);
      }
    },

    async getSustainabilityAwards() {
      try {
        const response = await this.$axios.get(
          "get-sustainability-awards-data"
        );
        this.sustainabilityAwards = response.data.data;
      } catch (error) {
        console.error("Error fetching Gender data:", error);
      }
    },

    async joyeeContent() {
      try {
        const response = await this.$axios.get('get-joyee-data');
        this.joyee_360 = response.data.data.joyee_360;
        this.joyee_360_images = response.data.data.joyee_360.joyee_360_images;
        this.joyee_creativity = response.data.data.joyee_section_creativity;
        this.joyee_creativity_stories =
          response.data.data.joyee_section_creativity.stories;
        this.stories_of_joyees = response.data.data.stories_of_joyees;
        this.staticImage = response.data.data.joyee_360_logo;

        this.news_images_section = response.data.data.news_images_section;
      } catch (error) {
        console.error("Error fetching Joyee data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sustainability-navbar {
  padding: unset;
  height: 56px;
  top: 86px;
  z-index: 99;
  justify-content: center;
  text-align: center;
  // transform: translateY(-100%);
  background-image: linear-gradient(
    68.6deg,
    rgb(110 122 51 / 65%) 15%,
    rgb(229 190 20 / 50%) 50%,
    rgb(10 175 92 / 75%) 85%
  );
  backdrop-filter: blur(11px);
  text-align: center;

  .nav-item {
    &:hover {
      background-color: #fadeb380;
      border-radius: 10px;
      transition: all 0.5s ease-in-out;
    }
    .active {
      height: 100%;
      background-color: #f5deb3;
      border-radius: 10px;
      transition: all 0.5s ease-in-out;
    }
  }

  .navbar-nav {
    .nav-link {
      color: #ffffff;
      // color: #035c03;
      &.active {
        color: #035c03;
      }

      &:hover {
        color: #035c03;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    top: 69px;
    transition: all 0.5s ease-in-out;
    &:hover {
      height: 256px;
      transition: all 0.5s ease-in-out;
      .navbar-nav {
        height: unset;
        overflow-y: visible;
        .nav-item {
          display: block;
        }
      }
    }

    .navbar-nav {
      flex-direction: column;
      height: 40px;
      overflow-y: hidden;

      .nav-item {
        display: none;
        &.active {
          display: block;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
}
</style>
