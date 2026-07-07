<template>
  <section id="faq-section" class="faq-section">
    <div class="container">
      <div class="header-wrap">
        <h2 class="title-gradient">
          {{ $i18n.locale == "en" ? "Terms & Conditions" : "শর্তাবলি" }}
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      currentCardIndex: 0,
      autoplayInterval: null,
      touchStartX: 0,
      touchEndX: 0,
      minSwipeDistance: 50, // Minimum pixels to trigger swipe
      observer: null,
      faqs: [
        {
          question: "Introduction",
          answer:
            "The IPDC Infinite is an exclusive program offered by IPDC Finance PLC to selected customers based on their relationship value. By participating in this program, customers agree to the following Terms & Conditions.",
          question_bangla: "পরিচিতি",
          answer_bangla:
            "আইপিডিসি ইনফিনিট হলো আইপিডিসি ফাইন্যান্স পিএলসি’র একটি এক্সক্লুসিভ প্রোগ্রাম, যা নির্দিষ্ট কিছু গ্রাহকদের মোট ব্যালেন্স বা জমার পরিমাণের ওপর ভিত্তি করে অফার করা হয়। এই প্রোগ্রামে অন্তর্ভুক্ত হওয়ার মাধ্যমে গ্রাহক নিচের সমস্ত শর্তাবলিতে সম্মতি প্রকাশ করছেন।",
        },
        {
          question: "Eligibility Criteria",
          answer:
            "Customers are eligible based on their total relationship balance with IPDC.<br>• Elite Segment: BDT 50 lac to less than BDT 2 crore<br>• Infinite Segment: BDT 2 crore and above<br>IPDC reserves the right to determine eligibility at its sole discretion.",

          question_bangla: "যোগ্যতার শর্তাবলী",
          answer_bangla:
            "<p>আইপিডিসি&rsquo;র সাথে আপনার মোট ব্যালেন্স বা জমার পরিমাণের ওপর ভিত্তি করেই আপনি এই সুবিধার জন্য যোগ্য বলে বিবেচিত হবেন।</p><ul>	<li>এলিট সেগমেন্ট: ৫০ লাখ টাকা থেকে শুরু করে ২ কোটি টাকার কম ব্যালেন্সের জন্য।</li>	<li>ইনফিনিট সেগমেন্ট: ২ কোটি টাকা বা তার বেশি ব্যালেন্সের জন্য।</li></ul><p>কারা এই সুবিধার আওতায় আসবেন, সেই যোগ্যতার বিষয়টি সম্পূর্ণভাবে আইপিডিসি&rsquo;র নিজস্ব সিদ্ধান্তের ওপর নির্ভর করে।</p>",
        },
        {
          question: "Enrollment & Activation",
          answer:
            "Enrollment into the Privilege Segment is automatic upon meeting eligibility criteria.<br>Customers will be notified through official communication channels.<br>Benefits become active upon successful onboarding and issuance of the Privilege Card.",

          question_bangla: "অন্তর্ভুক্তি ও সক্রিয়করণ",
          answer_bangla:
            "<ul><li>যোগ্যতার শর্ত পূরণ হওয়া মাত্রই আপনি স্বয়ংক্রিয়ভাবে আমাদের এই প্রিভিলেজ সেগমেন্টের অন্তর্ভুক্ত হয়ে যাবেন।</li><li>সফলভাবে যুক্ত হওয়ার পর আইপিডিসি&rsquo;র অফিসিয়াল যোগাযোগ মাধ্যমগুলো&rsquo;র (যেমন- এসএমএস বা ইমেইল) সাহায্যে আপনাকে তা জানিয়ে দেওয়া হবে।</li><li>আপনার অনবোর্ডিং প্রক্রিয়া শেষ হওয়া এবং বিশেষ প্রিভিলেজ কার্ড-টি ইস্যু করার পরপরই আপনার সমস্ত সুযোগ-সুবিধা অ্যাক্টিভ হয়ে যাবে।</li></ul>",
        },
        {
          question: "Validity of Membership",
          answer:
            "Membership remains valid as long as the customer maintains the required balance.<br>IPDC may review customer eligibility periodically.<br>Customers may be upgraded or downgraded based on changes in their relationship balance.",

          question_bangla: "মেম্বারশিপের মেয়াদ",
          answer_bangla:
            "<ul><li>আপনার নির্ধারিত সেগমেন্টের জন্য প্রয়োজনীয় ব্যালেন্স যতদিন বজায় থাকবে, আপনার এই মেম্বারশিপ বা সুবিধাগুলোও ততদিন সচল থাকবে।</li><li>গ্রাহকদের এই যোগ্যতার বিষয়টি আইপিডিসি নির্দিষ্ট সময় পর পর রিভিউ বা যাচাই করে দেখতে পারে।</li><li>আইপিডিসি&rsquo;র সাথে আপনার মোট ব্যালেন্স বা জমার পরিমাণের পরিবর্তনের ওপর ভিত্তি করে আপনার সেগমেন্ট স্ট্যাটাস যে-কোনো সময় আপগ্রেড কিংবা ডাউনগ্রেড হতে পারে।</li></ul>",
        },
        {
          question: "Privilege Benefits",
          answer:
            "Benefits differ between Elite and Infinite segments.<br>All benefits are subject to availability, partner terms and conditions, and usage limits.<br>IPDC reserves the right to modify, replace, or withdraw any benefit without prior notice.",

          question_bangla: "প্রিভিলেজ সুবিধা",
          answer_bangla:
            "<ul><li>এলিট এবং ইনফিনিট&mdash;এই দু&rsquo;টি সেগমেন্টের সুযোগ-সুবিধা ও প্রিভিলেজ সম্পূর্ণ আলাদা।</li><li>সমস্ত সুযোগ-সুবিধাগুলো অ্যাভেলেবল থাকা, সংশ্লিষ্ট পার্টনার ব্র্যান্ডের নিজস্ব শর্তাবলি এবং ব্যবহারের নির্দিষ্ট সীমার ওপর নির্ভর করবে।</li><li>কোনো পূর্ব ঘোষণা ছাড়াই যে-কোনো সুযোগ-সুবিধা পরিবর্তন, প্রতিস্থাপন অথবা পুরোপুরি প্রত্যাহার করার সম্পূর্ণ অধিকার আইপিডিসি সংরক্ষণ করে।</li></ul>",
        },
      ],
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
    formatSerial(index) {
      const serial = index < 9 ? `0${index + 1}` : `${index + 1}`;
      if (this.$i18n.locale !== "bn") return serial;

      const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
      return serial.replace(/\d/g, (digit) => bnDigits[digit]);
    },
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
  background: #f5f2ee;
  padding: 100px 5vw;
  color: #000;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.faq-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle,
    rgba(230, 194, 122, 0.25) 0%,
    transparent 70%
  );
  pointer-events: none;
}

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
