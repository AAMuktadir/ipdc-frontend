<template>
  <section id="faq-section" class="faq-section">
    <div class="container">
      <div class="header-wrap">
        <h2 class="title-gradient">
          {{
            $i18n.locale == "en"
              ? "Frequently Asked Questions"
              : "বহুল জিজ্ঞাসিত প্রশ্নসমূহ"
          }}
        </h2>
      </div>

      <div class="content-wrapper">
        <div class="faq-list" ref="faqList">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq-item"
            :class="{ active: activeIndex === index }"
            @click="toggleFaq(index)"
            ref="faqItems"
          >
            <div class="faq-header">
              <span class="sl-box">{{ formatSerial(index) }}</span>
              <h3 class="question" v-if="$i18n.locale == 'en'">
                {{ faq.question }}
              </h3>
              <h3 class="question" v-else>{{ faq.question_bangla }}</h3>
            </div>

            <transition
              name="faq-expand"
              @enter="startTransition"
              @after-enter="endTransition"
              @before-leave="startTransition"
              @after-leave="endTransition"
            >
              <div v-show="activeIndex === index" class="faq-answer-container">
                <div
                  class="faq-answer-content"
                  v-if="$i18n.locale == 'en'"
                  v-html="faq.answer"
                ></div>
                <div
                  class="faq-answer-content"
                  v-else
                  v-html="faq.answer_bangla"
                ></div>
              </div>
            </transition>
          </div>
        </div>

        <div class="stack-panel">
          <div
            class="orbit-container"
            @pointerdown="handlePointerDown"
            @pointerup="handlePointerUp"
            @mouseenter="pauseAutoplay"
            @mouseleave="resumeAutoplay"
            style="touch-action: none; cursor: grab"
          >
            <div
              v-for="(card, i) in stackCards"
              :key="i"
              class="orbit-card"
              :class="{ 'is-active': currentCardIndex === i, 'portrait-card': card.isPortrait }"
              :style="getOrbitStyle(i)"
            >
              <div
                class="card-inner"
                :class="{ 'is-portrait': card.isPortrait }"
              >
                <img :src="card.img" alt="Card" draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faqs: [],
      faqHeading: {},
      activeIndex: 0,
      currentCardIndex: 0,
      autoplayInterval: null,
      touchStartY: 0,
      touchEndY: 0,
      minSwipeDistance: 50,
      observer: null,
      isMobile: false,
      prefersReducedMotion: false,
      stackCards: [
        {
          img: require("~/assets/image/card/jagoo_card_front.avif"),
          isPortrait: false,
        },
        {
          img: require("~/assets/image/card/joyee_card_front.avif"),
          isPortrait: true,
        },
        {
          img: require("~/assets/image/card/elite_card_front.avif"),
          isPortrait: false,
        },
        {
          img: require("~/assets/image/card/infinite_card_front.avif"),
          isPortrait: true,
        },
        {
          img: require("~/assets/image/card/progga_card_front.avif"),
          isPortrait: false,
        },
        {
          img: require("~/assets/image/card/protisruti_card_front.avif"),
          isPortrait: false,
        },
      ],
    };
  },
  async mounted() {
    this.prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    this.updateViewport();
    window.addEventListener("resize", this.updateViewport);
    await this.getFaqByPage();
    this.startAutoplay();
    this.initFaqObserver();
  },
  beforeDestroy() {
    clearInterval(this.autoplayInterval);
    window.removeEventListener("resize", this.updateViewport);
  },
  methods: {
    updateViewport() {
      this.isMobile = window.innerWidth <= 768;
    },
    async getFaqByPage() {
      try {
        const response = await this.$axios.get(`/get-faqs/cards`);
        this.faqs = response.data.data;
        this.faqHeading = response.data.faqHeading[0];
      } catch (error) {
        console.log("Error fetching getFaqByPage:", error);
      }
    },
    formatSerial(index) {
      const serial = index < 9 ? `0${index + 1}` : `${index + 1}`;
      if (this.$i18n.locale !== "bn") return serial;
      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return serial.replace(/\d/g, (digit) => bnDigits[digit]);
    },
    initFaqObserver() {
      const options = { root: null, threshold: 0.15 };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateFaqList();
            this.observer.disconnect();
          }
        });
      }, options);
      if (this.$refs.faqList) this.observer.observe(this.$refs.faqList);
    },
    animateFaqList() {
      this.$nextTick(() => {
        this.$gsap.fromTo(
          this.$refs.faqItems,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          }
        );
      });
    },
    toggleFaq(index) {
      const prevIndex = this.activeIndex;
      this.activeIndex = this.activeIndex === index ? null : index;

      this.$nextTick(() => {
        const items = this.$refs.faqItems;
        if (this.activeIndex !== null) {
          const el = items[this.activeIndex].querySelector(
            ".faq-answer-content"
          );
          this.$gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
          );
        }
        if (prevIndex !== null && prevIndex !== this.activeIndex) {
          const el = items[prevIndex].querySelector(".faq-answer-content");
          this.$gsap.to(el, {
            opacity: 0,
            y: 10,
            duration: 0.3,
            ease: "power1.in",
          });
        }
      });
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },
    endTransition(el) {
      el.style.height = "";
    },

    /* --------------------------------
       ORBIT POSITION (data-driven coverflow)
    -------------------------------- */
    getOrbitStyle(i) {
      const total = this.stackCards.length;
      const fwd = (i - this.currentCardIndex + total) % total; // 0 = focused

      /* ---------- MOBILE: centred focus + blurred deck behind ---------- */
      if (this.isMobile) {
        if (fwd === 0) {
          return {
            left: "50%",
            top: "58%",
            transform: "translate(-50%, -50%) translateZ(0) scale(0.95)",
            filter: "none",
            opacity: 1,
            zIndex: 60,
          };
        }
        const sideCount = total - 1;
        const t = sideCount > 1 ? (fwd - 1) / (sideCount - 1) : 0;
        const top = 58 - (10 + 16 * t);
        const scale = 0.78 - 0.16 * t;
        const blur = 2 + 3 * t;
        const brightness = 0.7 - 0.22 * t;
        return {
          left: "50%",
          top: `${top}%`,
          transform: `translate(-50%, -50%) translateZ(${-60 - 70 * t}px) scale(${scale})`,
          filter: `blur(${blur}px) brightness(${brightness})`,
          opacity: 1,
          zIndex: 40 - fwd,
        };
      }

      /* ---------- DESKTOP: focus left, blurred fan pushed to the right ---------- */
      if (fwd === 0) {
        return {
          left: "28%",
          top: "50%",
          transform:
            "translate(-50%, -50%) translateZ(0) scale(0.95) rotateY(8deg)",
          filter: "none",
          opacity: 1,
          zIndex: 60,
        };
      }
      const sideCount = total - 1;
      const t = sideCount > 1 ? (fwd - 1) / (sideCount - 1) : 0;
      const top = 8 + (88 - 8) * t;
      const scale = 0.46 - 0.05 * t;
      const blur = 2.5 + 3 * t;
      const brightness = 0.62 - 0.2 * t;
      return {
        left: "80%",
        top: `${top}%`,
        transform: `translate(-50%, -50%) translateZ(${-180 - 90 * t}px) scale(${scale})`,
        filter: `blur(${blur}px) brightness(${brightness})`,
        opacity: 1,
        zIndex: 40 - fwd,
      };
    },

    /* --------------------------------
       DRAG (vertical) + AUTOPLAY
    -------------------------------- */
    handlePointerDown(e) {
      this.touchStartY = e.clientY;
      e.currentTarget.style.cursor = "grabbing";
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    handlePointerUp(e) {
      this.touchEndY = e.clientY;
      e.currentTarget.style.cursor = "grab";
      const distance = this.touchEndY - this.touchStartY;
      if (Math.abs(distance) > this.minSwipeDistance) {
        distance > 0 ? this.nextCard() : this.prevCard();
      }
    },
    nextCard() {
      this.currentCardIndex =
        (this.currentCardIndex + 1) % this.stackCards.length;
      this.resetAutoplay();
    },
    prevCard() {
      this.currentCardIndex =
        (this.currentCardIndex - 1 + this.stackCards.length) %
        this.stackCards.length;
      this.resetAutoplay();
    },
    startAutoplay() {
      if (this.prefersReducedMotion) return;
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = setInterval(() => this.nextCard(), 5000);
    },
    pauseAutoplay() {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    },
    resumeAutoplay() {
      this.startAutoplay();
    },
    resetAutoplay() {
      this.startAutoplay();
    },
  },
};
</script>

<style scoped>
.faq-section {
  min-height: 100vh;
  background: #000;
  padding: 100px 5vw;
  color: #fff;
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.header-wrap {
  text-align: center;
  margin-bottom: 60px;
  width: 100%;
}

.title-gradient {
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  background: linear-gradient(180deg, #ed017f 30%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 5vw;
  width: 100%;
  align-items: center;
}

.faq-header {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.sl-box {
  flex-shrink: 0;
  border: 1px solid #fff;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: bold;
  min-width: 45px;
  text-align: center;
}

.question {
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.2;
}

.faq-answer-container {
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}

.faq-answer-content {
  padding: 1.5rem 0 0.5rem 65px;
  color: #eeeeee;
  line-height: 1.6;
}

.faq-expand-enter,
.faq-expand-leave-to {
  height: 0 !important;
  opacity: 0;
}

.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.8rem 0;
  cursor: pointer;
  opacity: 0;
  transform: translateY(40px);
}

.faq-item.active .question {
  color: #ed017f;
}

/* Orbit Stage */
.stack-panel {
  position: relative;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
}

.orbit-container {
  position: relative;
  width: 100%;
  height: 400px;
  perspective: 1500px;
  transform-style: preserve-3d;
}

.orbit-card {
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform, filter;
  /* Springy overshoot = gentle "gravity" settle */
  transition: top 0.9s cubic-bezier(0.34, 1.5, 0.55, 1),
    left 0.9s cubic-bezier(0.34, 1.5, 0.55, 1),
    transform 0.9s cubic-bezier(0.34, 1.5, 0.55, 1), filter 0.6s ease,
    opacity 0.5s ease;
}

.card-inner {
  width: clamp(160px, 20vw, 300px);
  aspect-ratio: 504 / 316;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  transition: inherit;
}

.card-inner.is-portrait {
  aspect-ratio: 316 / 504;
  width: clamp(120px, 14vw, 210px);
}

.card-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.orbit-card.is-active .card-inner {
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.7), 0 0 60px rgba(237, 1, 127, 0.25);
  -webkit-box-reflect: below 10px
    linear-gradient(transparent, transparent 70%, rgba(255, 255, 255, 0.12));
}

@media (prefers-reduced-motion: reduce) {
  .orbit-card {
    transition-duration: 0.001ms !important;
  }
}

/* ---------- TABLET ---------- */
@media (max-width: 991px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .stack-panel {
    order: -1;
    height: 380px;
  }
}

/* ---------- MOBILE ---------- */
@media (max-width: 768px) {
  .faq-section {
    padding: 70px 5vw;
  }
  .header-wrap {
    margin-bottom: 36px;
  }
  .content-wrapper {
    gap: 30px;
  }
  .stack-panel {
    width: 100%;
    height: 320px;
  }
  .orbit-container {
    height: 300px;
  }
  .faq-answer-content {
    padding-left: 0;
  }
  .question {
    font-size: 1rem;
  }
  .card-inner {
    width: clamp(190px, 64vw, 280px);
  }
  .card-inner.is-portrait {
    width: clamp(150px, 46vw, 210px);
  }
}

@media (max-width: 420px) {
  .stack-panel {
    height: 290px;
  }
  .card-inner {
    width: clamp(170px, 70vw, 250px);
  }
}
</style>