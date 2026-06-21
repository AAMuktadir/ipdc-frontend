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

        <div class="stack-panel">
          <div
            class="orbit-container"
            @pointerdown="handlePointerDown"
            @pointerup="handlePointerUp"
            style="touch-action: none; cursor: grab"
          >
            <div
              v-for="(card, i) in stackCards"
              :key="i"
              class="orbit-card"
              :class="[getOrbitClass(i), { 'portrait-card': card.isPortrait }]"
            >
              <div
                class="card-inner"
                :class="{ 'is-portrait': card.isPortrait }"
              >
                <img :src="card.img" alt="Card" draggable="false" />
              </div>
            </div>
          </div>
          <!-- <div class="glow-element"></div> -->
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
      activeIndex: 0,
      currentCardIndex: 0,
      autoplayInterval: null,
      touchStartX: 0,
      touchEndX: 0,
      minSwipeDistance: 50, // Minimum pixels to trigger swipe
      observer: null,
      // faqs: [
      //   {
      //     question: "What is the IPDC Ucchash Card?",
      //     answer:
      //       "The IPDC Ucchash Card is a privilege card that allows you to enjoy exclusive discounts, partner offers, and value-added services across various lifestyle categories.",
      //   },
      //   {
      //     question: "Is this a credit or debit card?",
      //     answer:
      //       "No. This is not a payment card. It cannot be used for transactions or withdrawals. It is only used to avail privileges and offers.",
      //   },
      //   {
      //     question: "Who is eligible for the Ucchash Card?",
      //     answer:
      //       "All IPDC retail customers are eligible. Cards are issued based on your segment.",
      //   },
      //   {
      //     question: "What benefits will I get?",
      //     answer:
      //       "You can enjoy offers across dining, travel, healthcare, electronics, lifestyle shopping, education, and others. Benefits vary depending on partner and availability.",
      //   },
      //   {
      //     question: "How do I use the card?",
      //     answer:
      //       "Visit a partner outlet, show your card, the merchant scans the QR/barcode, and once verified, you can enjoy the offer.",
      //   },
      //   {
      //     question: "Is there any cost for the card?",
      //     answer:
      //       "There is a Service Reimbursement Fee depending on your card type. Please contact your Relationship Manager or IPDC for details.",
      //   },
      //   {
      //     question: "What should I do if I lose my card?",
      //     answer:
      //       "Immediately inform IPDC via Customer Care or your RM. A replacement card can be issued with applicable charges.",
      //   },
      //   {
      //     question: "Are the offers always available?",
      //     answer:
      //       "Offers depend on partner availability, validity period, and terms & conditions. IPDC may update or change offers from time to time.",
      //   },
      //   {
      //     question: "How will I know about new offers?",
      //     answer:
      //       "You will be informed through SMS, Email, IPDC website/social media, and RM updates.",
      //   },
      //   {
      //     question: "Can I use the card outside Bangladesh?",
      //     answer:
      //       "Currently, the card is designed for partner offers within Bangladesh unless specified otherwise.",
      //   },
      // ],
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
        }, // 316x504 Portrait
      ],
    };
  },
  mounted() {
    this.startAutoplay();
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
      const prevIndex = this.activeIndex;
      this.activeIndex = this.activeIndex === index ? null : index;

      this.$nextTick(() => {
        const items = this.$refs.faqItems;

        // Animate opened item
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

        // Animate closed item (optional polish)
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
      this.autoplayInterval = setInterval(() => this.nextCard(), 5000);
    },
    resetAutoplay() {
      clearInterval(this.autoplayInterval);
      this.startAutoplay();
    },
  },
};
</script>

<style scoped>
/* (Styles remain the same as previous version, but ensure stack-wrapper is accessible) */
.faq-section {
  min-height: 100vh;
  background: #000;
  padding: 100px 5vw;
  color: #fff;
  display: flex;
  align-items: center;
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
}

.faq-header {
  display: flex;
  align-items: center; /* Vertical center */
  gap: 20px;
  width: 100%;
}

.sl-box {
  flex-shrink: 0; /* Prevents box from squishing */
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

/* 2. Smooth Transition Styles */
.faq-answer-container {
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}

.faq-answer-content {
  padding: 1.5rem 0 0.5rem 65px; /* Aligns text under the question, not the SL box */
  color: #eeeeee;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.8rem 0;
  cursor: pointer;
  opacity: 0;
  transform: translateY(40px);
}

.faq-item.active .question {
  color: #ed017f;
}

/* Orbit Stage Styles */
.stack-panel {
  position: relative;
  height: 500px;
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
  transform: scale(1) rotateY(10deg);
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
    grid-template-columns: 1fr;
  }

  .faq-list {
    width: 100%;
  }

  .stack-panel {
    width: 65%;
    align-items: center;
    transform: scale(0.8);
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
