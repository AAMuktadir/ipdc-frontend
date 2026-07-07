<template>
  <section id="terms-section" class="terms-section">
    <div class="container">
      <div class="header-wrap" ref="header">
        <h2 class="title-gradient">
          {{ $i18n.locale == "en" ? "Terms & Conditions" : "শর্তাবলি" }}
        </h2>
      </div>

      <div class="documents-details terms-grid">
        <div
          v-for="(item, index) in terms"
          :key="index"
          class="documents term-card"
          ref="termCards"
        >
          <!-- <div class="documents-icon">
            <component :is="item.icon" class="term-icon" />
          </div> -->
          <p class="term-desc">
            <span class="bullet"></span
            >{{ $i18n.locale == "en" ? item.desc : item.desc_bangla }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      terms: [
        {
          desc: "The IPDC Ucchash Card is issued exclusively to IPDC Finance PLC customers based on the institution’s internal eligibility and segmentation criteria.",
          desc_bangla:
            "আইপিডিসি উচ্ছ্বাস কার্ডটি সম্পূর্ণ এক্সক্লুসিভভাবে শুধু আইপিডিসি ফাইন্যান্স পিএলসি’র গ্রাহকদের জন্যই ইস্যু করা হয়, যা প্রতিষ্ঠানের নিজস্ব যোগ্যতা ও সেগমেন্টের নিয়মের ওপর ভিত্তি করে নির্ধারিত হয়।",
          icon: "IconCircle",
        },
        {
          desc: "Customers must maintain an active relationship with IPDC, including deposit or financing products, to be eligible for the card.",
          desc_bangla:
            "এই কার্ডের জন্য যোগ্য হতে হলে কাস্টমারকে অবশ্যই আইপিডিসি’র সাথে একটি অ্যাকটিভ সম্পর্ক বজায় রাখতে হবে, যার মধ্যে ডিপোজিট বা ফাইন্যান্সিং প্রডাক্ট অন্তর্ভুক্ত।",
          icon: "IconSlash",
        },
        {
          desc: "The card will be issued according to the customer segment or portfolio classification determined by IPDC.",
          desc_bangla:
            "আইপিডিসি’র নির্ধারিত কাস্টমার সেগমেন্ট বা পোর্টফোলিও ক্লাসিফিকেশন অনুযায়ী গ্রাহকদের এই কার্ডটি দেওয়া হবে।",
          icon: "IconPlus",
        },
        {
          desc: "The card does not function as a debit, credit, prepaid, or payment card and cannot be used for financial transactions.",
          desc_bangla:
            "এই কার্ডটি কোনো ডেবিট, ক্রেডিট, প্রিপেইড বা পেমেন্ট কার্ড হিসেবে কাজ করে না; তাই এটি দিয়ে কোনো ধরনের আর্থিক লেনদেন করা যাবে না।",
          icon: "IconWallet",
        },
        {
          desc: "Cardholders can avail partner discounts and value-added services subject to the terms and conditions of the respective partner establishments.",
          desc_bangla:
            "কার্ডহোল্ডাররা আমাদের পার্টনারদের কাছ থেকে ডিসকাউন্ট এবং অন্যান্য বাড়তি সুবিধা পাবেন, যা সংশ্লিষ্ট পার্টনার ব্র্যান্ডের নিজস্ব শর্তাবলির ওপর নির্ভর করবে।",
          icon: "IconCross",
        },
        {
          desc: "IPDC reserves the right to approve, decline, upgrade, downgrade, or withdraw the card at its discretion.",
          desc_bangla:
            "কার্ডটি অনুমোদন, বাতিল, আপগ্রেড, ডাউনগ্রেড বা প্রত্যাহার করার সম্পূর্ণ অধিকার আইপিডিসি তার নিজস্ব সিদ্ধান্ত অনুযায়ী সংরক্ষণ করে।",
          icon: "IconMinus",
        },
        {
          desc: "The benefits, partner offers, and privileges associated with the card may change or be withdrawn without prior notice.",
          desc_bangla:
            "এই কার্ডের সাথে যুক্ত সকল সুযোগ-সুবিধা, পার্টনার অফার এবং প্রিভিলেজ যে-কোনো সময় কোনো পূর্ব ঘোষণা ছাড়াই পরিবর্তন বা প্রত্যাহার করা হতে পারে।",
          icon: "IconDots",
        },
        {
          desc: "In case of misuse or closure of the customer relationship with IPDC, the card may be deactivated.",
          desc_bangla:
            "কার্ডের কোনো ধরনের অপব্যবহার হলে কিংবা আইপিডিসি’র সাথে কাস্টমার রিলেশনশিপ বন্ধ হয়ে গেলে, কার্ডটি নিষ্ক্রিয় বা ডিঅ্যাক্টিভেট করে দেওয়া হতে পারে।",
          icon: "IconDoc",
        },
      ],
    };
  },
  async mounted() {
    await this.getCardTerms();
    // Run animations after the (possibly API-driven) list is in the DOM so the
    // stagger targets the real term cards.
    this.$nextTick(() => {
      this.initAnimations();
    });
  },
  methods: {
    async getCardTerms() {
      try {
        const response = await this.$axios.get(`/get-card-terms`);
        const data = response && response.data ? response.data.terms : null;
        // Only replace the in-component defaults when the API returns usable data,
        // so the page still renders if the request fails or returns nothing.
        if (Array.isArray(data) && data.length) {
          this.terms = data;
        }
      } catch (error) {
        console.log("Error fetching getCardTerms:", error);
        // keep fallback defaults
      }
    },
    initAnimations() {
      const gsap = this.$gsap;
      const { termCards, header } = this.$refs;

      // Animate Header
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate Grid Items with Stagger
      gsap.from(termCards, {
        scrollTrigger: {
          trigger: ".terms-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
  },
};
</script>

<style scoped>
.terms-section {
  background-color: #000;
  color: #fff;
  padding: 100px 0; /* Updated to match RequiredDocuments vertical padding */
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5vw;
}

/* Header Styles */
.header-wrap {
  text-align: center;
  margin-bottom: 60px;
}

.title-gradient {
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  background: linear-gradient(180deg, #ed017f 30%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

/* RequiredDocuments Style List -> Adapted for Dark Theme */
.terms-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.term-card {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 84px; /* Using min-height instead of fixed height for long descriptions */
  padding: 20px 20px 20px 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #0a0a0a; /* Deep black/gray */
  gap: 26px;
  flex-basis: 50%;
  flex-grow: 1;
  transition: background 0.3s ease;
  cursor: default;
}

/* Matching the top border-radius logic from RequiredDocuments */
.term-card:first-child {
  border-radius: 10px 0 0 0;
}
.term-card:nth-child(2) {
  border-radius: 0 10px 0 0;
}

/* Description Text */
.term-desc {
  font-size: 16px;
  line-height: 1.4;
  color: #a1a1a6; /* Softer text color suitable for dark themes */
  margin: 0;
  transform-origin: left center; /* Prevents text from shifting out of the box when scaling */
  transition: 0.3s transform ease;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: center;
}

.bullet {
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  background: #0084ff; /* Matches your gradient start */
  border-radius: 50%;
  box-shadow: 0 0 10px #0084ff;
}

/* Icon Container & Sizing */
.documents-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.term-icon {
  width: 24px;
  height: 24px;
  stroke: #fff; /* Modify if your components use 'fill' instead */
  transition: 0.5s transform ease;
}

/* Hover Effects matching RequiredDocuments */
.term-card:hover {
  background: rgba(255, 255, 255, 0.05); /* Lighter dark hover state */
}

.term-card:hover .term-desc {
  transform: scale(1.02);
}

.term-card:hover .term-icon {
  transform: scale(1.4);
}

/* Responsive Styles */
@media screen and (max-width: 1024px) {
  .term-card {
    flex-basis: 100%;
    padding: 20px;
  }

  .term-desc {
    padding: 0 20px 0 0;
  }

  /* Adjust border radii for mobile stacking */
  .term-card:first-child {
    border-radius: 10px 10px 0 0;
  }
  .term-card:nth-child(2) {
    border-radius: 0;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .terms-section {
    padding: 50px 0;
  }

  .title-gradient {
    font-size: 25px;
  }
}
</style>
