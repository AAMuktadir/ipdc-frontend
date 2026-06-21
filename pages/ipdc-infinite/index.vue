<template>
  <div class="ipdc-infinte">
    <HeroImage :coverImage="cover" />
    <Heading :heading="heading" />
    <InfinitePrivileges />
    <TravelPrivileges />

    <FeatureSection
      id="elite-card"
      align="left"
      :img="require('~/assets/image/infinite/elite_card_front.avif')"
      :featuresTitle="eliteFeaturesTitle"
      :featuresSubTitle="eliteFeaturesSubTitle"
      :features="eliteFeatures"
      title="Privilege Proposition"
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
    />

    <LifestylePartners
      :pageHeading="lifestylePartnersHeading"
      :partnersList="lifestylePartnersList"
    />

    <LoungeExperience
      :pageHeading="loungeExperienceHeading"
      :partnersList="loungeExperienceList"
    />

    <FaqSection :faqs="faqs" />
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
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get(`/get-faqs/ipdc-infinite`);
      const faqs = response.data.data;
      return {
        faqs: faqs || [],
      };
    } catch (error) {
      console.error("SSR fetch failed:", error);
      return {
        faqs: [],
      };
    }
  },
  // layout: "blank",
  head() {
    return {
      title:
        this.$i18n.locale == "en" ? this.cover.title : this.cover.title_bangla,
      bodyAttrs: {
        // class: "black-bg-only",
      },
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
      cover: {
        title: "Infinite",
        title_bangla: "ইনফিনিট",
      },
      heading: {
        title: "The Infinite Experience",
        title_bangla: "The Infinite Experience",
        sub_title:
          "Redefining Premium Financial Experiences with IPDC Infinite",
        sub_title_bangla:
          "Redefining Premium Financial Experiences with IPDC Infinite",
        description:
          "Step into a world where financing relationship goes beyond transactions and becomes a personalized, elevated experience. IPDC Infinite is designed for individuals who seek more convenience, more exclusivity, and more value from their financial relationships.<br>With a deep understanding of your ambitions and lifestyle, we offer bespoke financial solutions, priority services, and curated privileges that seamlessly integrate into your life. From dedicated advisory to luxury travel and lifestyle benefits, every aspect is crafted to reflect excellence.",
        description_bangla:
          "Step into a world where financing relationship goes beyond transactions and becomes a personalized, elevated experience. IPDC Infinite is designed for individuals who seek more convenience, more exclusivity, and more value from their financial relationships.<br>With a deep understanding of your ambitions and lifestyle, we offer bespoke financial solutions, priority services, and curated privileges that seamlessly integrate into your life. From dedicated advisory to luxury travel and lifestyle benefits, every aspect is crafted to reflect excellence.",
        highlight:
          "IPDC Infinite is not just a financing relationship, it’s a statement of distinction.",
        highlight_bangla:
          "IPDC Infinite is not just a financing relationship, it’s a statement of distinction.",
      },
      cover: {
        id: 57,
        page_id: 52,
        type: "cover_image",
        title: "The Elite Experience",
        sub_title: "",
        image_url: require("~/assets/image/infinite/hero.avif"),
        mobile_image_url: require("~/assets/image/infinite/hero.avif"),
        button_name: null,
        button_link: null,
        title_bangla: "",
        sub_title_bangla: "",
        image_url_bangla: require("~/assets/image/infinite/hero.avif"),
        mobile_image_url_bangla: require("~/assets/image/infinite/hero.avif"),
        button_name_bangla: null,
        status: 0,
        deleted_at: null,
        created_at: "2025-12-08 17:56:02",
        updated_at: "2025-12-10 19:14:04",
      },
      loungeExperienceHeading: {
        title: "Infinite Lounge Experience",
        title_bangla: "Infinite Lounge Experience",
        sub_title: "Your Private Space for Business & Comfort",
        sub_title_bangla: "Your Private Space for Business & Comfort",
        description:
          "Access exclusive lounges designed for privacy, comfort, and productivity.",
        description_bangla:
          "Access exclusive lounges designed for privacy, comfort, and productivity.",
        highlight: null,
        highlight_bangla: null,
      },
      loungeExperienceList: [
        {
          id: 122,
          title: "Strategically located in key business hubs",
          title_bangla: "Strategically located in key business hubs",
          image: "https://ipdc.com/api/uploads/1642499285EHlrn.png",
          button_link: null,
        },
        {
          id: 123,
          title: "Private meeting rooms for personal or professional use",
          title_bangla:
            "Private meeting rooms for personal or professional use",
          image: "https://ipdc.com/api/uploads/1642499314lC2uu.png",
          button_link: null,
        },
        {
          id: 124,
          title: "Premium ambiance for a seamless experience",
          title_bangla: "Premium ambiance for a seamless experience",
          image: "https://ipdc.com/api/uploads/1642499342NyTAa.png",
          button_link: null,
        },
      ],

      lifestylePartnersHeading: {
        title: "Lifestyle Partners",
        title_bangla: "Lifestyle Partners",
        sub_title: "A World of Exclusive Collaborations",
        sub_title_bangla: "A World of Exclusive Collaborations",
        description:
          "Gain access to a curated network of premium partners across categories:",
        description_bangla:
          "Gain access to a curated network of premium partners across categories:",
        highlight:
          "Each partnership is selected to complement your lifestyle with exclusive privileges and offers.",
        highlight_bangla:
          "Each partnership is selected to complement your lifestyle with exclusive privileges and offers.",
      },
      lifestylePartnersList: [
        {
          id: 103,
          title: "Hotels & Resorts",
          title_bangla: "Hotels & Resorts",
          image: "https://ipdc.com/api/uploads/durjoy_dedicated.png",
          button_link: "cards#hotels-resorts",
        },
        {
          id: 104,
          title: "Dining",
          title_bangla: "Dining",
          image: "https://ipdc.com/api/uploads/durjoy_rates.png",
          button_link: "cards#dining",
        },
        {
          id: 105,
          title: "Fashion & Lifestyle",
          title_bangla: "Fashion & Lifestyle",
          image: "https://ipdc.com/api/uploads/durjoy_waiver.png",
          button_link: "cards#lifestyle",
        },
        {
          id: 106,
          title: "Beauty & Salon",
          title_bangla: "Beauty & Salon",
          image: "https://ipdc.com/api/uploads/durjoy_card.png",
          button_link: "cards#health-wellness",
        },
        {
          id: 107,
          title: "Travel & Leisure",
          title_bangla: "Travel & Leisure",
          image: "https://ipdc.com/api/uploads/durjoy_lounge.png",
          button_link: "cards#travel",
        },
        {
          id: 108,
          title: "Health & Wellness",
          title_bangla: "Health & Wellness",
          image: "https://ipdc.com/api/uploads/durjoy_pick_drop.png",
          button_link: "cards#health-wellness",
        },
      ],

      infiniteFeaturesTitle: "IPDC Infinite",
      infiniteFeaturesSubTitle:
        "An ultra-premium experience crafted for distinguished individuals.",

      eliteFeaturesTitle: "IPDC Elite",
      eliteFeaturesSubTitle:
        "Designed for customers seeking premium financing relationship with enhanced lifestyle benefits.",
      // Dummy Features Data

      eliteFeatures: [
        "Lounge Access: 2 complimentary visits per year (with one companion)",
        "Meet & Greet & Pick & Drop: 2 complimentary services per year",
        {
          title: "Travel Benefits (Conditions Apply):",
          items: [
            "Travel Luggage insurance (2 times per year)*",
            "Priority hotel booking discounts*",
          ],
        },
      ],

      infiniteFeatures: [
        "Lounge Access: 3 complimentary visits per year (with one companion)",
        "Meet & Greet & Pick & Drop: 3 complimentary services per year",
        {
          title: "Travel Benefits (Conditions Apply):",
          items: [
            "Travel Luggage insurance (3 times per year)*",
            "Priority hotel booking discounts*",
          ],
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.showSplash = false;

      this.$nextTick(() => {
        // this.initSmoothScroll();
        // this.initSectionTracking();
        this.initResponsiveAnimations();

        // Initial refresh to sync everything after splash hides
        this.$ScrollTrigger.refresh();
      });
    }, 500);
  },
  methods: {
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
