<template>
  <div class="ipdc-infinte">
    <HeroImage :coverImage="cover" />
    <Heading :heading="heading" />
    <InfinitePrivileges :data="infinitePrivileges" />
    <TravelPrivileges :data="travelPrivileges" />

    <FeatureSection
      id="elite-card"
      align="left"
      :img="require('~/assets/image/infinite/elite_card_front.avif')"
      :featuresTitle="eliteFeaturesTitle"
      :featuresSubTitle="eliteFeaturesSubTitle"
      :features="eliteFeatures"
      :title="eliteTitle"
      :title_bangla="eliteTitleBangla"
    />
    <FeatureSection
      id="infinite-card"
      align="right"
      :img="
        require('~/assets/image/infinite/infinite_card_front_horizontal.avif')
      "
      :featuresTitle="infiniteFeaturesTitle"
      :featuresSubTitle="infiniteFeaturesSubTitle"
      :features="infiniteFeatures"
      :title="infiniteTitle"
      :title_bangla="infiniteTitleBangla"
    />

    <LifestylePartners
      :pageHeading="lifestylePartnersHeading"
      :partnersList="lifestylePartnersList"
    />

    <LoungeExperience
      :pageHeading="loungeExperienceHeading"
      :partnersList="loungeExperienceList"
    />

    <FaqSection />
    <TermsAndConditions />
    <Footer />
  </div>
</template>

<script>
import HeroImage from "@/components/Infinite/HeroImage.vue";
import Heading from "@/components/Infinite/Heading.vue";
import InfinitePrivileges from "@/components/Infinite/InfinitePrivileges.vue";
import TravelPrivileges from "@/components/Infinite/TravelPrivileges.vue";
import FeatureSection from "@/components/Infinite/FeatureSection.vue";
import LifestylePartners from "@/components/Infinite/LifestylePartners.vue";
import LoungeExperience from "@/components/Infinite/LoungeExperience.vue";
import FaqSection from "@/components/Infinite/FaqSection.vue";
import TermsAndConditions from "@/components/Infinite/TermsAndConditions.vue";
import Footer from "@/components/Infinite/Footer.vue";

export default {
  head() {
    return {
      title:
        this.$i18n.locale == "en" ? this.cover.title : this.cover.title_bangla,
      bodyAttrs: {},
    };
  },
  components: {
    HeroImage,
    Heading,
    InfinitePrivileges,
    TravelPrivileges,
    FeatureSection,
    LifestylePartners,
    LoungeExperience,
    FaqSection,
    TermsAndConditions,
    Footer,
  },
  data() {
    return {
      // ---- non-content / UI state ----
      showSplash: false,
      navbarOffset: 70,
      scrolledPastHero: false,
      smoother: null,

      // ---------------------------------------------------------------
      // All page text now comes from GET /api/v1/get-infinite-content
      // (see loadContent / applyContent below). The values below are only
      // safe skeletons so the components never read undefined before the
      // request resolves.
      //
      // NOTE on the cover: the admin "cover" section manages only the title
      // text. The hero banner image is a build asset, so it is kept here and
      // the API title is merged on top.
      // ---------------------------------------------------------------
      cover: {
        title: "The Infinite Experience",
        title_bangla: "দ্য ইনফিনিট এক্সপেরিয়েন্স",
        image_url: require("~/assets/image/infinite/hero.avif"),
        mobile_image_url: require("~/assets/image/infinite/hero.avif"),
        image_url_bangla: require("~/assets/image/infinite/hero.avif"),
        mobile_image_url_bangla: require("~/assets/image/infinite/hero.avif"),
      },

      heading: {
        title: "",
        title_bangla: "",
        sub_title: "",
        sub_title_bangla: "",
        description: "",
        description_bangla: "",
        highlight: "",
        highlight_bangla: "",
      },

      infinitePrivileges: {
        title: "",
        title_bangla: "",
        sub_title: "",
        sub_title_bangla: "",
        description: "",
        description_bangla: "",
        privileges: [],
      },

      travelPrivileges: {
        title: "",
        title_bangla: "",
        sub_title: "",
        sub_title_bangla: "",
        description: "",
        description_bangla: "",
        privileges: [],
      },

      // elite feature card
      eliteTitle: "",
      eliteTitleBangla: "",
      eliteFeaturesTitle: { en: "", bn: "" },
      eliteFeaturesSubTitle: "",
      eliteFeatures: { en: [], bn: [] },

      // infinite feature card
      infiniteTitle: "",
      infiniteTitleBangla: "",
      infiniteFeaturesTitle: { en: "", bn: "" },
      infiniteFeaturesSubTitle: "",
      infiniteFeatures: { en: [], bn: [] },

      lifestylePartnersHeading: {
        title: "",
        title_bangla: "",
        sub_title: "",
        sub_title_bangla: "",
        description: "",
        description_bangla: "",
        highlight: "",
        highlight_bangla: "",
      },
      lifestylePartnersList: [],

      loungeExperienceHeading: {
        title: "",
        title_bangla: "",
        sub_title: "",
        sub_title_bangla: "",
        description: "",
        description_bangla: "",
        highlight: "",
        highlight_bangla: "",
      },
      loungeExperienceList: [],
    };
  },
  async mounted() {
    await this.loadContent();

    setTimeout(() => {
      this.showSplash = false;

      this.$nextTick(() => {
        // this.initSmoothScroll();
        // this.initSectionTracking();
        this.initResponsiveAnimations();

        // Initial refresh to sync everything after content + splash settle
        this.$ScrollTrigger.refresh();
      });
    }, 500);
  },
  methods: {
    /**
     * Pull all section content from the admin-managed endpoint.
     * Mirrors the FaqSection axios pattern; on failure we keep the skeletons
     * so the page structure still renders.
     */
    async loadContent() {
      try {
        const res = await this.$axios.get("/get-infinite-content");
        const data = (res && res.data && res.data.data) || {};
        this.applyContent(data);
      } catch (error) {
        console.error("Infinite content load failed:", error);
      }
    },

    /** Map the API response (keyed by section_key) onto the component props. */
    applyContent(data) {
      // cover: keep the local banner image, overlay the managed title text
      const cover = data.cover || {};
      this.cover = {
        ...this.cover,
        title: cover.title || this.cover.title,
        title_bangla: cover.title_bangla || this.cover.title_bangla,
      };

      if (data.heading) this.heading = data.heading;
      if (data.infinite_privileges)
        this.infinitePrivileges = data.infinite_privileges;
      if (data.travel_privileges)
        this.travelPrivileges = data.travel_privileges;

      // feature cards are reshaped server-side into { en, bn } structures
      const elite = data.feature_elite || {};
      this.eliteTitle = elite.title || "";
      this.eliteTitleBangla = elite.title_bangla || "";
      this.eliteFeaturesTitle = elite.featuresTitle || { en: "", bn: "" };
      this.eliteFeaturesSubTitle = elite.featuresSubTitle || "";
      this.eliteFeatures = elite.features || { en: [], bn: [] };

      const infinite = data.feature_infinite || {};
      this.infiniteTitle = infinite.title || "";
      this.infiniteTitleBangla = infinite.title_bangla || "";
      this.infiniteFeaturesTitle = infinite.featuresTitle || { en: "", bn: "" };
      this.infiniteFeaturesSubTitle = infinite.featuresSubTitle || "";
      this.infiniteFeatures = infinite.features || { en: [], bn: [] };

      // lifestyle partners: split heading vs list, inject a key id
      const lp = data.lifestyle_partners || {};
      this.lifestylePartnersHeading = this.pickHeading(lp);
      this.lifestylePartnersList = this.withIds(lp.items);

      // lounge experience: same shape as lifestyle partners
      const le = data.lounge_experience || {};
      this.loungeExperienceHeading = this.pickHeading(le);
      this.loungeExperienceList = this.withIds(le.items);
    },

    /** Heading fields shared by the partner-style sections. */
    pickHeading(section) {
      return {
        title: section.title || "",
        title_bangla: section.title_bangla || "",
        sub_title: section.sub_title || "",
        sub_title_bangla: section.sub_title_bangla || "",
        description: section.description || "",
        description_bangla: section.description_bangla || "",
        highlight: section.highlight || "",
        highlight_bangla: section.highlight_bangla || "",
      };
    },

    /** The list components use :key="item.id"; the API items have none. */
    withIds(items) {
      if (!Array.isArray(items)) return [];
      return items.map((it, i) => ({
        ...it,
        id: it && it.id != null ? it.id : i,
      }));
    },

    initSmoothScroll() {
      this.smoother = this.$ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        effects: true,
      });
      this.$root.smoother = this.smoother;
    },
    scrollTop() {
      const section = document.getElementById("hero");
      if (!section) return;

      const smoother = this.$root.smoother;

      if (smoother) {
        // Proper offset calculation
        const y =
          section.getBoundingClientRect().top +
          smoother.scrollTop() -
          this.navbarOffset;

        smoother.scrollTo(y, true);
      } else {
        this.$gsap.to(window, {
          duration: 1.2,
          scrollTo: {
            y: section,
            offsetY: this.navbarOffset,
          },
          ease: "power4.inOut",
        });
      }
    },
    initSectionTracking() {
      const ScrollTrigger = this.$ScrollTrigger;
      const navComponent = this.$refs.stickyNav;

      if (!navComponent) return;

      navComponent.items.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        ScrollTrigger.create({
          trigger: section,
          start: `top-=${this.navbarOffset + 5} top`,
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) navComponent.active = item.id;
          },
          onEnterBack: () => (navComponent.active = item.id),
        });
      });

      // Show/Hide Scroll to Top Button based on Hero section
      ScrollTrigger.create({
        trigger: "#hero",
        // Start triggering when the bottom of the hero hits the top of the viewport
        start: "bottom top",
        onEnter: () => {
          this.scrolledPastHero = true;
        },
        onLeaveBack: () => {
          this.scrolledPastHero = false;
        },
        // refreshPriority helps ensure this triggers correctly after other layout changes
        refreshPriority: 1,
      });
    },
    initResponsiveAnimations() {
      this.$ScrollTrigger.matchMedia({
        "(max-width: 768px)": () => {
          this.$gsap.globalTimeline.timeScale(0.9);
        },
        "(min-width: 769px)": () => {
          this.$gsap.globalTimeline.timeScale(1);
        },
      });
    },
  },
};
</script>

<style lang="scss">
body.black-bg-only {
  background-color: #000 !important;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.ipdc-infinte {
  // background: #000 !important;
  color: #fff;
  min-height: 100vh;
}

/* Scroll to Top Styles */
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: #ed017fd8; /* Gold to match hero */
  color: black;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: #ed017f;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 768px) {
  .footer {
    background: rgba(253, 225, 240, 0.1) !important;
  }
}
@media screen and (max-width: 830px) {
  .footer {
    background: rgba(253, 225, 240, 0.1) !important;
  }
}
</style>