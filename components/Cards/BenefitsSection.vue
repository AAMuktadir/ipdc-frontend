<template>
  <section id="benefits" class="closer-look">
    <b-modal
      id="benefits-modal"
      centered
      hide-footer
      content-class="benefits-modal"
      overlay-class="benefits-overlay"
    >
      <template #modal-header="{ close }">
        <div
          class="benefits-header w-100 d-flex justify-content-between align-items-center"
        >
          <h4 class="mb-0">
            {{ pick(selectedItem?.partnerName, selectedItem?.partnerName_bangla) }}
          </h4>
          <button class="benefits-close" @click="close()">×</button>
        </div>
      </template>

      <div class="benefits-body text-center">
        <img
          v-if="selectedItem"
          :src="getItemImage(selectedItem, benefits[activeGridIndex].id)"
          :alt="pick(selectedItem.partnerName, selectedItem.partnerName_bangla)"
          class="benefits-img"
          :style="getItemBG(selectedItem, benefits[activeGridIndex].id)"
        />

        <!-- Offer Description -->
        <ul class="benefits-description" v-if="modalOfferLines.length">
          <li v-for="(line, i) in modalOfferLines" :key="i">{{ line }}</li>
        </ul>

        <!-- Address -->
        <p class="benefits-meta" v-if="modalAddressLines.length">
          <strong>{{ $i18n.locale == "en" ? "Address:" : "ঠিকানা:" }}</strong>
          <template v-for="(addr, i) in modalAddressLines">
            <br v-if="i > 0" :key="'addr-br-' + i" />
            <span :key="'addr-' + i">{{ addr }}</span>
          </template>
        </p>

        <!-- Expiry -->
        <p class="benefits-meta" v-if="selectedItem?.expiryDate">
          <strong>{{
            $i18n.locale == "en" ? "Expiry Date:" : "মেয়াদ শেষ:"
          }}</strong>
          {{ selectedItem.expiryDate }}
        </p>
      </div>
    </b-modal>

    <div class="header-wrap" ref="header">
      <h2 class="title-gradient">
        {{ $i18n.locale == "en" ? "Offers" : "অফারসমূহ" }}
      </h2>
    </div>

    <div class="benefits-container">
      <div class="benefits-list" ref="benefitList">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          :id="benefit.id"
          class="benefit-item"
          :class="{ active: currentIndex === index }"
          @click="changeBenefit(index)"
        >
          <div class="benefit-card-content">
            <div class="benefit-header">
              <div class="icon-circle">
                <span class="plus">{{
                  currentIndex === index ? "−" : "+"
                }}</span>
              </div>
              <span class="benefit-label">
                {{
                  $i18n.locale == "en" ? benefit.title : benefit.title_bangla
                }}
              </span>
            </div>
            <div v-show="currentIndex === index" class="benefit-body">
              <ul class="description-list" v-if="$i18n.locale == 'en'">
                <li
                  v-for="(line, i) in benefit.description"
                  :key="i"
                  v-html="line"
                ></li>
              </ul>
              <ul class="description-list" v-else>
                <li
                  v-for="(line, i) in benefit.description_bangla"
                  :key="i"
                  v-html="line"
                ></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="benefit-item all-offers-item" @click="openAllOffers">
          <div class="benefit-card-content">
            <div class="benefit-header">
              <div class="icon-circle">
                <span class="plus">→</span>
              </div>
              <span class="benefit-label">{{
                $i18n.locale == "en" ? "All Offers" : "সকল অফার"
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="display-panel" id="offers-grid">
        <div class="sticky-content">
          <div class="grid-wrapper">
            <transition-group
              tag="div"
              class="grid-container"
              ref="gridContainer"
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave"
            >
              <div
                v-for="(item, i) in visibleItems"
                :key="activeGridIndex + '-' + i"
                class="grid-card"
                @click="openModal(item)"
              >
                <div class="grid-image-wrap">
                  <img
                    :src="getItemImage(item, benefits[activeGridIndex].id)"
                    :alt="item.text"
                    :style="getItemBG(item, benefits[activeGridIndex].id)"
                  />
                </div>
                <p class="grid-text">
                  {{ pick(item.partnerName, item.partnerName_bangla) }}
                </p>
              </div>
            </transition-group>

            <button
              v-if="
                benefits &&
                benefits[activeGridIndex] &&
                benefits[activeGridIndex].items &&
                benefits[activeGridIndex].items.length > 9 &&
                !isExpanded
              "
              class="show-all-btn"
              @click="expandGrid"
            >
              Show More
            </button>
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
      currentIndex: null,
      activeGridIndex: 0,
      isExpanded: false,
      selectedItem: null,
      smoother: null,
      navbarOffset: 87,
      observer: null,
      isInitialLoad: true,
      benefits: [],
      allOffersPDF: "",

      fallbackImages: {
        lifestyle: "https://ipdc.com/api/uploads/card/partners/lifestyle.png",
        dining: "https://ipdc.com/api/uploads/card/partners/dining.png",
        "hotels-resorts":
          "https://ipdc.com/api/uploads/card/partners/hotels.png",
        "health-wellness":
          "https://ipdc.com/api/uploads/card/partners/wellness.png",
        "electronics-home-appliances":
          "https://ipdc.com/api/uploads/card/partners/home_appliances.png",
        education: "https://ipdc.com/api/uploads/card/partners/education.png",
        travel: "https://ipdc.com/api/uploads/card/partners/travel.png",
      },
    };
  },
  async mounted() {
    await this.getBenefits();
    this.handleHash();
    this.initScrollAnimation();
  },
  computed: {
    visibleItems() {
      if (
        !this.benefits ||
        !this.benefits.length ||
        !this.benefits[this.activeGridIndex]
      ) {
        return [];
      }

      const currentItems = this.benefits[this.activeGridIndex]?.items || [];

      return this.isExpanded ? currentItems : currentItems.slice(0, 9);
    },
    modalOfferLines() {
      if (!this.selectedItem) return [];
      return this.pickArr(
        this.selectedItem.offerDescription,
        this.selectedItem.offerDescription_bangla
      ).filter(Boolean);
    },
    modalAddressLines() {
      if (!this.selectedItem) return [];
      return this.pickArr(
        this.selectedItem.address,
        this.selectedItem.address_bangla
      ).filter(Boolean);
    },
  },
  methods: {
    // Locale picker with graceful fallback to the other language.
    pick(en, bn) {
      if (this.$i18n.locale === "en") return en || bn || "";
      return bn || en || "";
    },
    // Same as pick() but for array-shaped fields (offer lines, address lines).
    pickArr(en, bn) {
      const e = Array.isArray(en) ? en : [];
      const b = Array.isArray(bn) ? bn : [];
      if (this.$i18n.locale === "en") return e.length ? e : b;
      return b.length ? b : e;
    },
    async getBenefits() {
      try {
        const response = await this.$axios.get(`/get-card-contents`);
        this.benefits = response.data.benefits;
        this.allOffersPDF = response.data.offerPDF;
      } catch (error) {
        console.log("Error fetching getBenefits:", error);
      }
    },
    getItemImage(item, benefitId) {
      // use actual image if exists
      if (item?.img) {
        return item.img;
      }

      // fallback image by benefit.id
      return this.fallbackImages[benefitId];
    },
    getItemBG(item, benefitId) {
      // use actual image if exists
      if (item?.img) {
        return "background-color: #fff";
      }

      // fallback image by benefit.id
      return "background-color: transparent";
    },
    initScrollAnimation() {
      const options = {
        root: null,
        threshold: 0.2,
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateSection();
            this.observer.disconnect();
          }
        });
      }, options);

      const section = document.getElementById("benefits");
      if (section) this.observer.observe(section);
    },

    animateSection() {
      this.$nextTick(() => {
        const tl = this.$gsap.timeline();

        // Header
        tl.fromTo(
          this.$refs.header,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );

        // Left list (stagger)
        const listItems = this.$refs.benefitList.children;

        tl.fromTo(
          listItems,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.4"
        );

        // Grid cards (initial load only)
        const gridItems =
          this.$refs.gridContainer.$el.querySelectorAll(".grid-card");

        if (gridItems.length > 0) {
          tl.fromTo(
            gridItems,
            { opacity: 0, scale: 0.9, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }
        this.isInitialLoad = false;
      });
    },
    handleHash() {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const index = this.benefits.findIndex((b) => b.id === hash);

      if (index !== -1) {
        this.currentIndex = index;
        this.activeGridIndex = index;
        // this.isExpanded = false;

        this.$nextTick(() => {
          this.scrollSection();
        });
      }
    },
    openAllOffers() {
      window.open(this.allOffersPDF, "_blank");
    },
    changeBenefit(index) {
      if (this.currentIndex === index) {
        this.currentIndex = null;
      } else {
        this.currentIndex = index;
        this.activeGridIndex = index;
        this.isExpanded = false;
        this.$nextTick(() => {
          this.scrollSection();
        });
      }
    },

    expandGrid() {
      this.isExpanded = true;
    },

    openModal(item) {
      this.selectedItem = item;
      this.$bvModal.show("benefits-modal");
    },

    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
    },
    enter(el, done) {
      if (this.isInitialLoad) {
        done();
        return;
      }
      const index = Array.from(el.parentNode.children).indexOf(el);
      const delay = (index % 9) * 0.1;

      this.$gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: delay,
        ease: "power2.out",
        onComplete: done,
      });
    },
    leave(el, done) {
      done();
    },

    scrollSection() {
      const section = document.getElementById("offers-grid");
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

    prepareCards(el) {
      const cards = el.querySelectorAll(".grid-card");

      this.$gsap.set(cards, {
        opacity: 0,
        y: 30,
      });
    },

    animateCards(el, done) {
      const cards = el.querySelectorAll(".grid-card");

      this.$gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        onComplete: done,
      });
    },

    navigateToOffers(id) {
      const route = this.$router.resolve(`/card-offer/id=${id}`);
      window.open(route.href, "_blank");
    },
  },
};
</script>

<style scoped>
.closer-look {
  height: 100vh;
  min-height: fit-content;
  background: #000;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 5vw 10vw;
  flex-direction: column;
}

.header-wrap {
  text-align: center;
  margin-bottom: 60px;
}

.header-wrap,
.benefit-item,
.grid-card {
  opacity: 0;
}

.title-gradient {
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  background: linear-gradient(180deg, #ed017f 30%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.benefits-container {
  display: flex;
  width: 100%;
  gap: 4vw;
  align-items: flex-start;
  justify-content: center;
}

.benefits-list {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: max-content;
  justify-content: start;
}

.benefit-item {
  width: 100%;
  cursor: pointer;
}

.benefit-card-content {
  width: 100%;
  max-width: fit-content;
  min-width: fit-content;
  max-height: 55px; /* Fixed starting height */
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  padding: 6px 20px;
  /* Animate max-properties instead of width/height directly */
  transition: max-width 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease,
    border-radius 0.4s ease, padding 0.4s ease;
  overflow: hidden;
}

.benefit-item.active .benefit-card-content {
  max-width: 100%;
  max-height: fit-content;
  background: #1a1a1c;
  border-color: rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 24px;
}

/* ... existing icon and header styles ... */
.benefit-header {
  display: flex;
  align-items: center;
  gap: 15px;
  height: 36px;
  white-space: nowrap;
}
.icon-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
}
.plus {
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 1;
}
.benefit-label {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.5s ease;
}
.benefit-item.active .icon-circle {
  background: #fff;
}
.benefit-item.active .plus {
  color: #000;
  font-weight: 700;
}
.benefit-item.active .benefit-label {
  color: #fff;
  font-weight: 600;
}
.benefit-body {
  margin-top: 20px;
  animation: fadeIn 1.8s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.description {
  color: #a1a1a6;
  line-height: 1.6;
  font-size: 1rem;
}

.display-panel {
  width: 60%;
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* NEW GRID STYLES (Requirement 1 & 2) */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
}

.grid-card {
  width: 160px; /* Fixed Size */
  height: 160px; /* Fixed Size */
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 30px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center; /* Center aligned text */
  cursor: pointer;
  transition: transform 0.3s ease;
}

.grid-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.07);
}

.grid-image-wrap {
  width: auto;
  height: 60px;
  margin-bottom: 12px;
}

.grid-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.grid-text {
  color: #fff;
  font-size: 0.85rem;
  margin: 0;
}

/* Grid Transitions */
.fade-grid-enter-active,
.fade-grid-leave-active {
  transition: opacity 0.4s ease;
}

.fade-grid-enter {
  opacity: 0;
}

.fade-grid-leave-to {
  opacity: 0;
}

.grid-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.show-all-btn {
  margin-top: 30px;
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px 25px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.show-all-btn:hover {
  background: #ed017f;
  border-color: #ed017f;
}

/* Modal container */
:deep(.modal-content.benefits-modal) {
  background: #1a1a1c;
  padding: 10px;
  border-radius: 24px;
  max-width: 450px;
  width: 90%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: scaleIn 0.25s ease;
  right: unset;
  margin: 0 auto;
}

@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Header */
.benefits-header {
  border-bottom: none;
  padding-bottom: 10px;
}

.benefits-header h4 {
  color: #fff;
  font-size: 1.5rem;
}

/* Close button */
.benefits-close {
  background: none;
  border: none;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: #888;
  transition: 0.2s;
}

.benefits-close:hover {
  color: #000;
  transform: scale(1.1);
}

/* Body */
.benefits-body {
  padding: 20px 10px;
}

.benefits-body p {
  color: #a1a1a6;
  line-height: 1.6;
}

/* Image */
.benefits-img {
  background-color: #fff;
  height: 60px;
  margin: 0 auto 20px;
  transition: transform 0.3s ease;
}

.benefits-img:hover {
  transform: scale(1.05);
}

/* Description */
.benefits-description {
  font-size: 15px;
  color: #555;
  line-height: 1.6;
}

.description-list,
.benefits-description {
  color: #a1a1a6;
  line-height: 1.2;
  font-size: 0.95rem;
  padding-left: 18px;
  text-align: left;
}

.description-list li,
.benefits-description li {
  margin-bottom: 6px;
  list-style-type: disc;
}

.benefits-meta {
  color: #ccc;
  font-size: 0.9rem;
  margin-top: 10px;
}

@media (max-width: 992px) {
  .benefits-container {
    flex-direction: column-reverse;
    gap: 5vh;
  }
  .benefits-list,
  .display-panel {
    width: 100%;
    height: unset;
  }
  .display-panel {
    order: -1;
    position: static;
    margin-bottom: 40px;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-card {
    width: 40vw;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  .grid-card {
    width: 70vw;
  }
}
</style>
