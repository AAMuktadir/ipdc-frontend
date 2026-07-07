<template>
  <div class="privilege-page">
    <StickyNav ref="stickyNav" />

    <transition name="fade">
      <button
        v-if="scrolledPastHero"
        class="scroll-to-top"
        @click="scrollTop"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </transition>

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HeroSection />
        <CardReveal
          :features="keyFeatures"
          :features_bangla="keyFeatures_bangla"
        />

        <BenefitsSection />

        <!-- Barikoi Map Section -->
        <client-only>
          <OfferMap />
        </client-only>

        <TermsGrid />
        <FaqSection />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import StickyNav from "@/components/Cards/StickyNav.vue";
import HeroSection from "@/components/Cards/HeroSection.vue";
import CardReveal from "@/components/Cards/CardReveal.vue";
import BenefitsSection from "@/components/Cards/BenefitsSection.vue";
import TermsGrid from "@/components/Cards/TermsGrid.vue";
import FaqSection from "@/components/Cards/FaqSection.vue";
import OfferMap from "@/components/Cards/OfferMap.vue";

export default {
  layout: "blank",
  head() {
    return {
      title:
        this.$i18n.locale == "en" ? this.cover.title : this.cover.title_bangla,
      bodyAttrs: {
        class: "black-bg-only",
      },
    };
  },
  components: {
    StickyNav,
    HeroSection,
    CardReveal,
    BenefitsSection,
    TermsGrid,
    FaqSection,
    OfferMap,
  },
  data() {
    return {
      cover: {
        title: "Ucchas Card",
        title_bangla: "উচ্ছ্বাস কার্ড",
      },
      scrolledPastHero: false,
      smoother: null,
      navbarOffset: 87,
      keyFeatures: [
        "Special discounts, BOGO, and privileges at selected restaurants, cafés, and food outlets.",
        "Exclusive offers on fashion, grooming, fitness, and everyday lifestyle brands.",
        "Special subscription offers on popular streaming and digital entertainment platforms.",
        "Attractive rates, seasonal offers, and added benefits at partner hotels and resorts",
        "Savings on diagnostic services, hospitals, fitness centers, pharmacies, and wellness providers.",
        "Attractive discounts on consumer electronics, gadgets, and household appliances from partner retailers.",
        "Discounts on air tickets, travel agencies, tour packages, and related travel services.",
      ],
      keyFeatures_bangla: [
        "আমাদের সিলেক্ট করা নির্দিষ্ট সব রেস্ট্যুর‍্যন্ট ও ক্যাফেতে পাবেন স্পেশাল ডিসকাউন্ট, বাই ১ গেট ১ (BOGO) এবং দারুণ সব প্রিভিলেজ।",
        "সেরা সব ফ্যাশন, গ্রুমিং, ফিটনেস এবং লাইফস্টাইল ব্র্যান্ডে থাকছে এক্সক্লুসিভ সব অফার।",
        "জনপ্রিয় সব স্ট্রিমিং প্ল্যাটফর্ম এবং ডিজিটাল এন্টারটেইনমেন্ট সার্ভিসে উপভোগ করুন আকর্ষণীয় সাবস্ক্রিপশন অফার।",
        "আমাদের পার্টনার হোটেল ও রিসোর্টগুলোতে থাকছে চমৎকার রেট, সিজনাল অফার এবং আরো অনেক বাড়তি সুবিধা।",
        "ডায়াগনস্টিক সার্ভিস, হসপিটাল, জিম, ফার্মেসি এবং ওয়েলনেস সেন্টারগুলোতে পাবেন বিশেষ সেভিংসের সুযোগ।",
        "পার্টনার রিটেইলারদের কাছ থেকে কনজ্যুমার ইলেকট্রনিক্স, গ্যাজেট এবং হোম অ্যাপ্লায়েন্স কিনলেই পাচ্ছেন দারুণ ডিসকাউন্ট।",
        "বিমান টিকেট, ট্রাভেল এজেন্সি এবং আকর্ষণীয় সব ট্যুর প্যাকেজে থাকছে স্পেশাল ছাড়।",
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        this.initSmoothScroll();
        this.initSectionTracking();
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

.privilege-page {
  background: #000 !important;
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
