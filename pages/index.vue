/* eslint-disable vue/no-unused-components */
<template>
  <div class="homepage">
    <!-- <Slider :page="page" /> -->
    <CoverImageWithoutButtonBelow :cover="cover" />

    <Loans />

    <MessageScroller />

    <Whyipdc
      :why-choose-cards="whyChooseCards"
      :home_why_choose_heading="home_why_choose_heading"
    />

    <!-- <FindPriorites /> -->

    <!-- <Shareholders :shareholders="shareholders" /> -->

    <IpdcGlance :home-ata-glance="homeAtaGlance" />

    <OngoingCampaigns
      :page="page"
      :home_campaign_heading="home_campaign_heading"
    />

    <CustomerExperience
      :home-customer-experience="homeCustomerExperience"
      :home_customer_experience_heading="home_customer_experience_heading"
    />

    <!-- <ReadBlog :home-blog="homeBlog" /> -->

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
export default {
  async asyncData({ $axios }) {
    try {
      const [homeRes, blogRes, balanceRes, coverRes] = await Promise.all([
        $axios.get(`/get-home-page-data/home_page`),
        $axios.get(`/get-blog`),
        $axios.get(`/get-balance-sheet`),
        $axios.get(`/get-cover-image/home_page`),
      ]);

      const responseData = homeRes.data.data;

      // console.log(coverRes.data.data);

      return {
        page: "home_page",
        whyChooseCards: responseData.home_why_choose || [],
        shareholders: responseData.shareholders || [],
        homeAtaGlance: responseData.home_at_a_glance?.[0] || {},
        homeCustomerExperience: responseData.home_customer_experience || [],
        home_why_choose_heading:
          responseData.home_why_choose_heading?.[0] || {},
        home_campaign_heading: responseData.home_campaign_heading?.[0] || {},
        home_customer_experience_heading:
          responseData.home_customer_experience_heading?.[0] || {},
        home_strongest_balance_sheet_heading:
          responseData.home_strongest_balance_sheet_heading?.[0] || {},
        homeBlog: blogRes.data.data || [],
        balanceSheet: balanceRes.data.data || [],
        cover: coverRes.data.data || null,
      };
    } catch (error) {
      console.error("SSR fetch failed:", error);

      return {
        page: "home_page",
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
    }
  },
  head() {
    return {
      title: "IPDC Finance PLC | Bangladesh's #1 Private NBFI Since 1981",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "From home loans to SME finance, IPDC Finance PLC is Bangladesh's first private NBFI, trusted by individuals, entrepreneurs & corporates for 40+ years.",
        },
      ],
    };
  },
  mounted() {
    this.showModal();
  },

  methods: {
    showModal() {
      const imageUrl = "https://ipdc.com/api/uploads/banner_active.webp";

      const img = new Image();

      img.onload = () => {
        this.$bvModal.show("modalAnnounce");
      };

      img.onerror = () => {};

      img.src = imageUrl;
    },

    closeModal() {
      this.$bvModal.hide("modalAnnounce");
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
