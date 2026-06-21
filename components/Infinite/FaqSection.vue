<template>
  <section id="faq-section" class="faq-section">
    <div class="container">
      <div class="header-wrap">
        <h2 class="title-gradient">Frequently Asked Questions</h2>
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
              <span class="sl-box">{{ (index + 1) | formatIndex }}</span>
              <h3 class="question">{{ faq.question }}</h3>
            </div>

            <transition
              name="faq-expand"
              @enter="startTransition"
              @after-enter="endTransition"
              @before-leave="startTransition"
              @after-leave="endTransition"
            >
              <div v-show="activeIndex === index" class="faq-answer-container">
                <div class="faq-answer-content" v-html="faq.answer">
                  <!-- <p>{{ faq.answer }}</p> -->
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    faqs: {
      type: Array,
      default: () => [],
    },
  },
  filters: {
    formatIndex(val) {
      return val < 10 ? `0${val}` : val;
    },
  },
  data() {
    return {
      page: "ipdc-infinite",
      activeIndex: 0,
      currentCardIndex: 0,
      autoplayInterval: null,
      touchStartX: 0,
      touchEndX: 0,
      minSwipeDistance: 50, // Minimum pixels to trigger swipe
      observer: null,
      // faqs: [
      //   {
      //     question: "What is the IPDC Infinite?",
      //     answer:
      //       "The IPDC Infinite is a premium customer proposition designed to offer enhanced financial services, priority support, and exclusive lifestyle benefits to our valued clients. It goes beyond traditional financial services to provide a more personalized and rewarding experience.",
      //   },
      //   {
      //     question: "What are the different tiers in the IPDC Infinite?",
      //     answer:
      //       "The Infinite Segment has two tiers: • IPDC Elite – for customers maintaining BDT 50 lac to less than BDT 2 crore • IPDC Infinite – for customers maintaining BDT 2 crore and above Each tier offers a distinct set of benefits based on your relationship with IPDC.",
      //   },
      //   {
      //     question: "How do I qualify for IPDC Elite or Infinite?",
      //     answer:
      //       "You are automatically eligible based on your total relationship balance with IPDC. Once you meet the required threshold, you will be onboarded into the respective segment.",
      //   },
      //   {
      //     question: "Will I be notified if I become eligible?",
      //     answer:
      //       "Yes. Once you qualify, you will receive an official communication from IPDC along with your welcome details and benefit information.",
      //   },
      //   {
      //     question: "What kind of benefits do I receive?",
      //     answer:
      //       "Depending on your segment, you can enjoy:• Dedicated Relationship Manager • Priority service and faster response • Doorstep banking services • Airport lounge access • Lifestyle, dining, and shopping offers • Travel and wellness benefits • Exclusive IPDC Privilege Cards Higher-tier customers (Infinite) receive additional and more personalized benefits.",
      //   },
      //   {
      //     question:
      //       "Are the benefits the same for Elite and Infinite customers?",
      //     answer:
      //       "No. While both segments enjoy premium services, Infinite customers receive higher limits, additional benefits, and more personalized services compared to Elite customers.",
      //   },
      //   {
      //     question: "How long are the benefits valid?",
      //     answer:
      //       "Your benefits remain valid as long as you maintain the required balance for your respective segment.",
      //   },
      //   {
      //     question: "Can my segment status change over time?",
      //     answer:
      //       "Yes. Your segment may be upgraded or downgraded based on changes in your relationship balance with IPDC.",
      //   },
      //   {
      //     question: "Who do I contact for assistance?",
      //     answer:
      //       "You can contact: • Your Dedicated Relationship Manager, or • The IPDC Priority Call Center Line. We are always here to assist you.",
      //   },
      // ],
    };
  },
  mounted() {
    // this.startAutoplay();
    this.initFaqObserver();
  },
  beforeDestroy() {
    clearInterval(this.autoplayInterval);
  },
  methods: {
    initFaqObserver() {
      const options = {
        root: null,
        threshold: 0.15,
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateFaqList();
            this.observer.disconnect();
          }
        });
      }, options);

      if (this.$refs.faqList) {
        this.observer.observe(this.$refs.faqList);
      }
    },

    animateFaqList() {
      this.$nextTick(() => {
        this.$gsap.fromTo(
          this.$refs.faqItems,
          {
            opacity: 0,
            y: 50,
          },
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
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    // Transition hooks for height-based smoothing
    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },
    endTransition(el) {
      el.style.height = "";
    },
    // Logic to assign "orbit" positions based on current index
    getOrbitClass(i) {
      const total = this.stackCards.length;
      const position = (i - this.currentCardIndex + total) % total;

      if (position === 0) return "pos-active"; // Left focus
      if (position === 1) return "pos-top-right";
      if (position === 2) return "pos-right";
      return "pos-bottom-right";
    },

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
      // this.autoplayInterval = setInterval(() => this.nextCard(), 5000);
    },
    resetAutoplay() {
      // clearInterval(this.autoplayInterval);
      // this.startAutoplay();
    },
  },
};
</script>

<style scoped>
/* (Styles remain the same as previous version, but ensure stack-wrapper is accessible) */
.faq-section {
  /* min-height: 100vh; */
  background: linear-gradient(180deg, #f9f7f3 0%, #f4f1ec 45%, #efe9df 100%);
  padding: 100px 5vw;
  color: #000;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
/* soft glow background */
/* .faq-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle,
    rgba(230, 194, 122, 0.25) 0%,
    transparent 70%
  );
  pointer-events: none;
} */

.header-wrap {
  text-align: center;
  margin-bottom: 60px;
  width: 100%;
}

.title-gradient {
  font-size: 3rem;
  color: #e6c27a;
}

.content-wrapper {
  display: grid;
  /* grid-template-columns: 1.2fr 0.8fr; */
  gap: 5vw;
  width: 100%;
}

.faq-header {
  display: flex;
  align-items: center; /* Vertical center */
  gap: 20px;
  width: 100%;
}

.sl-box {
  flex-shrink: 0; /* Prevents box from squishing */
  border: 1px solid #1a1718;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: bold;
  min-width: 45px;
  text-align: center;
}

.question {
  color: #1a1718;
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.2;
}

/* 2. Smooth Transition Styles */
.faq-answer-container {
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}

.faq-answer-content {
  padding: 1.5rem 0 0.5rem 65px; /* Aligns text under the question, not the SL box */
  color: #8d8d8e;
  line-height: 1.6;
}

/* Transition Classes */
.faq-expand-enter,
.faq-expand-leave-to {
  height: 0 !important;
  opacity: 0;
}

/* General Layout */
.faq-item {
  border-bottom: 1px solid #8d8d8e;
  padding: 1.8rem 0;
  cursor: pointer;
}

.faq-item.active .question {
  color: #e6c27a;
}

/* Orbit Stage Styles */
.stack-panel {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.orbit-card:not(.portrait-card).pos-active {
  top: 20%;
}

.orbit-card:not(.pos-active).portrait-card.pos-top-right {
  left: 72%;
  top: -50%;
}
.orbit-card:not(.pos-active).portrait-card.pos-right {
  left: 77%;
  top: 0%;
}
.orbit-card:not(.pos-active).portrait-card.pos-bottom-right {
  left: 72%;
  top: 50%;
}

.card-inner {
  width: 320px;
  aspect-ratio: 504 / 316;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  transition: inherit;
}

/* Corrects the vertical card's shape automatically */
.card-inner.is-portrait {
  aspect-ratio: 316 / 504;
  width: 220px; /* Scaled to look proportional */
}

.card-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

/* POSITION STATES (Orbiting Logic) */

/* 1. The Focused Card (Large, Left) */
.pos-active {
  left: 0;
  z-index: 10;
  transform: scale(1.1) rotateY(10deg);
  filter: blur(0) brightness(1);
}

/* 2. Orbiting Cards (Right side stack) */
.pos-top-right,
.pos-right,
.pos-bottom-right {
  left: 60%;
  filter: blur(3px) brightness(0.5);
  z-index: 5;
}

.pos-top-right {
  top: -35%;
  transform: scale(0.45) translateZ(-200px);
}

.pos-right {
  left: 65%;
  top: 17.5%;
  transform: scale(0.45) translateZ(-300px) translateX(40px);
}

.pos-bottom-right {
  top: 70%;
  transform: scale(0.45) translateZ(-200px);
}

/* Reflections and Glows */
.pos-active .card-inner {
  -webkit-box-reflect: below 10px
    linear-gradient(transparent, transparent 70%, rgba(255, 255, 255, 0.1));
}

.glow-element {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(0, 132, 255, 0.15) 0%,
    transparent 70%
  );
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.nav-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s ease;
  max-height: 200px;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 50px;
  }

  .faq-list {
    width: 100%;
  }

  .stack-panel {
    width: 100%;
    align-items: center;
  }

  .stack-wrapper {
    width: 250px; /* Scale down the mini-card stack */
    height: 160px;
  }

  .question {
    font-size: 1rem;
  }
}
</style>
