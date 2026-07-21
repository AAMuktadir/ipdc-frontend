/* eslint-disable vue/no-unused-components */
<template>
  <div class="homepage">
    <CoverImageWithoutButtonBelow :cover="cover" />
    <Loans />
    <MessageScroller />
    <Whyipdc
      :why-choose-cards="whyChooseCards"
      :home_why_choose_heading="home_why_choose_heading"
    />
    <IpdcGlance :home-ata-glance="homeAtaGlance" />
    <CustomerExperience
      :home-customer-experience="homeCustomerExperience"
      :home_customer_experience_heading="home_customer_experience_heading"
    />
    <BalanceSheet
      :balance-sheet="balanceSheet"
      :home_strongest_balance_sheet_heading="
        home_strongest_balance_sheet_heading
      "
    />

    <div>
      <b-modal id="modalAnnounce" hide-footer hide-header centered>
        <img
          src="https://ipdc.com/api/uploads/banner_active.webp"
          class="modal-image"
        />
        <button aria-label="Close" class="close" @click="closeModal">×</button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { getSeoData, generateSeoHead } from "@/utils/seo";

const META_TITLE =
  "IPDC Finance PLC | Bangladesh's #1 Private NBFI Since 1981";

const META_DESCRIPTION =
  "From home loans to SME finance, IPDC Finance PLC is Bangladesh's first private NBFI, trusted by individuals, entrepreneurs & corporates for 40+ years.";

export default {
  async asyncData({ $axios }) {
    try {
      const seo = await getSeoData($axios, "home_page");

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
    const seoHead = generateSeoHead(this.seo) || {};
    const existingMeta = Array.isArray(seoHead.meta) ? seoHead.meta : [];

    return {
      ...seoHead,
      title: META_TITLE,
      meta: [
        ...existingMeta.filter(
          (meta) => meta.hid !== "description" && meta.name !== "description"
        ),
        {
          hid: "description",
          name: "description",
          content: META_DESCRIPTION,
        },
      ],
    };
  },

  mounted() {
    this.showModal();
  },

  data() {
    return {
      page: "home_page",
      seo: {},
      whyChooseCards: [],
      shareholders: [],
      homeAtaGlance: {},
      homeCustomerExperience: [],
      home_why_choose_heading: {},
      home_campaign_heading: {},
      home_customer_experience_heading: {},
      home_strongest_balance_sheet_heading: {},
      homeBlog: [],
      balanceSheet: [],
      cover: null,
    };
  },

  created() {
    this.getHomePageData();
  },

  methods: {
    showModal() {
      const imageUrl = "https://ipdc.com/api/uploads/banner_active.webp";
      const img = new Image();

      img.onload = () => {
        // Image exists and loaded successfully
        this.$bvModal.show("modalAnnounce");
      };

      img.onerror = () => {
        // Image does NOT exist
        return;
      };

      img.src = imageUrl;
    },

    closeModal() {
      this.$bvModal.hide("modalAnnounce");
    },

    async getHomePageData() {
      try {
        const [homeRes, blogRes, balanceRes, coverRes, balancesheetBack] =
          await Promise.all([
            this.$axios.get(`/get-home-page-data/home_page`),
            this.$axios.get(`/get-blog`),
            this.$axios.get(`/get-balance-sheet`),
            this.$axios.get(`/get-cover-image/home_page`),
            this.$axios.get(`/get-background-image/3/Bottom`),
          ]);

        const responseData = homeRes.data.data;

        this.page = "home_page";
        this.whyChooseCards = responseData.home_why_choose || [];
        this.shareholders = responseData.shareholders || [];
        this.homeAtaGlance = responseData.home_at_a_glance?.[0] || {};
        this.homeCustomerExperience =
          responseData.home_customer_experience || [];
        this.home_why_choose_heading =
          responseData.home_why_choose_heading?.[0] || {};
        this.home_campaign_heading =
          responseData.home_campaign_heading?.[0] || {};
        this.home_customer_experience_heading =
          responseData.home_customer_experience_heading?.[0] || {};
        this.home_strongest_balance_sheet_heading =
          responseData.home_strongest_balance_sheet_heading?.[0] || {};
        this.homeBlog = blogRes.data.data || [];
        this.balanceSheet = balanceRes.data.data || [];
        this.cover = coverRes.data.data || null;
      } catch (error) {
        console.error("Data fetch failed:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  position: relative;
}

#modalAnnounce {
  .modal-image {
    width: 100%;
    box-sizing: border-box;
  }

  .close {
    position: absolute;
    top: 12px;
    right: 12px;

    width: 36px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    line-height: 1;

    color: #333;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(6px);

    border: none;
    border-radius: 50%;

    cursor: pointer;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.25s ease;

    &:hover {
      background: #000;
      color: #fff;
      transform: scale(1.1);
    }

    &:focus {
      outline: none;
    }
  }
}
</style>