<template>
  <section id="card" class="snap-section card-wrap">
    <div class="header-wrap">
      <h2 class="title-gradient">
        {{ $i18n.locale == "en" ? "Our Cards" : "আমাদের কার্ডসমূহ" }}
      </h2>
    </div>

    <div class="main-div">
      <div
        class="stage"
        @pointerdown="onDragStart"
        @pointermove="onDragMove"
        @pointerup="onDragEnd"
        @pointerleave="onDragEnd"
        @mouseenter="pauseAutoRotate"
        @mouseleave="resumeAutoRotate"
      >
        <div class="orbit-stage">
          <div class="glow-element"></div>

          <div
            v-for="(card, i) in cards"
            :key="i"
            class="card-item"
            :class="{ 'is-active': activeIndex === i, 'portrait-card': card.isPortrait }"
            :style="cardStyle(i)"
            @click="handleClick(i)"
          >
            <div
              class="tilt-container"
              @mousemove="handleTilt($event, i)"
              @mouseleave="handleReset($event, i)"
            >
              <div
                class="visual-container"
                :class="{ 'portrait-card': card.isPortrait }"
              >
                <img :src="card.img" :alt="card.section" draggable="false" />
              </div>
              <div class="shine"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="content" ref="content">
        <slot name="title"
          ><h2>
            {{ $i18n.locale == "en" ? "Key Features" : "মূল সুবিধাগুলো" }}
          </h2></slot
        >

        <div class="description-area">
          <slot name="description">
            <ul class="feature-list" v-if="$i18n.locale == 'en'">
              <li
                v-for="(feature, index) in features"
                :key="index"
                class="feature-item"
                :class="{ 'is-visible': visibleFeatures.includes(index) }"
                ref="featureItems"
              >
                <span class="bullet"></span>
                {{ feature }}
              </li>
            </ul>
            <ul class="feature-list" v-else>
              <li
                v-for="(feature, index) in features_bangla"
                :key="index"
                class="feature-item"
                :class="{ 'is-visible': visibleFeatures.includes(index) }"
                ref="featureItems"
              >
                <span class="bullet"></span>
                {{ feature }}
              </li>
            </ul>
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["features", "features_bangla"],
  data() {
    return {
      cards: [
        {
          img: require("~/assets/image/card/jagoo_card_front.avif"),
          section: "jagoo-card",
          isPortrait: false,
        },
        {
          img: require("~/assets/image/card/joyee_card_front.avif"),
          section: "joyee-card",
          isPortrait: true,
        },
        {
          img: require("~/assets/image/card/elite_card_front.avif"),
          section: "elite-card",
          isPortrait: false,
        },
        {
          img: require("~/assets/image/card/infinite_card_front.avif"),
          section: "infinite-card",
          isPortrait: true,
        },
        {
          img: require("~/assets/image/card/progga_card_front.avif"),
          section: "progga-card",
          isPortrait: false,
        },
        {
          img: require("~/assets/image/card/protisruti_card_front.avif"),
          section: "protisruti-card",
          isPortrait: false,
        },
      ],
      activeIndex: 0,
      timer: null,
      dragStartY: 0,
      isDragging: false,
      isRotating: false,
      hasMoved: false,
      navbarOffset: 87,
      visibleFeatures: [],
      observer: null,
      isMobile: false,
      prefersReducedMotion: false,
    };
  },

  mounted() {
    this.prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    this.updateViewport();
    window.addEventListener("resize", this.updateViewport);
    this.startAutoRotate();
    this.initFeatureObserver();
  },

  beforeDestroy() {
    clearInterval(this.timer);
    window.removeEventListener("resize", this.updateViewport);
  },

  methods: {
    updateViewport() {
      this.isMobile = window.innerWidth <= 768;
    },

    /* --------------------------------
       CARD POSITION (data-driven coverflow)
       Tunables grouped per branch so you can nudge the look.
    -------------------------------- */
    cardStyle(i) {
      const total = this.cards.length;
      const fwd = (i - this.activeIndex + total) % total; // 0 = focused

      /* ---------- MOBILE: centred focus + blurred deck behind ---------- */
      if (this.isMobile) {
        if (fwd === 0) {
          return {
            left: "50%",
            top: "60%",
            transform: "translate(-50%, -50%) translateZ(0) scale(1)",
            filter: "none",
            opacity: 1,
            zIndex: 60,
          };
        }
        const sideCount = total - 1;
        const t = sideCount > 1 ? (fwd - 1) / (sideCount - 1) : 0;
        const top = 60 - (10 + 16 * t);
        const scale = 0.82 - 0.16 * t;
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

      /* ---------- DESKTOP: focus right-of-centre + blurred left column ---------- */
      if (fwd === 0) {
        return {
          left: "54%",
          top: "50%",
          transform: "translate(-50%, -50%) translateZ(70px) scale(1.25)",
          filter: "none",
          opacity: 1,
          zIndex: 60,
        };
      }
      const sideCount = total - 1;
      const t = sideCount > 1 ? (fwd - 1) / (sideCount - 1) : 0;
      const top = 14 + (86 - 14) * t;
      const scale = 0.5 - 0.07 * t;
      const blur = 3 + 4 * t;
      const brightness = 0.72 - 0.24 * t;
      return {
        left: "18%",
        top: `${top}%`,
        transform: `translate(-50%, -50%) translateZ(${-140 - 90 * t}px) scale(${scale})`,
        filter: `blur(${blur}px) brightness(${brightness})`,
        opacity: 1,
        zIndex: 40 - fwd,
      };
    },

    /* --------------------------------
       AUTO ROTATE
    -------------------------------- */
    startAutoRotate() {
      if (this.prefersReducedMotion) return;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.moveNext();
      }, 3500);
    },
    pauseAutoRotate() {
      clearInterval(this.timer);
      this.timer = null;
    },
    resumeAutoRotate() {
      this.startAutoRotate();
    },
    resetTimer() {
      this.startAutoRotate();
    },
    moveNext() {
      this.activeIndex = (this.activeIndex + 1) % this.cards.length;
    },
    movePrev() {
      this.activeIndex =
        (this.activeIndex - 1 + this.cards.length) % this.cards.length;
    },

    /* --------------------------------
       CLICK
    -------------------------------- */
    handleClick(index) {
      if (this.hasMoved) return;

      if (index === this.activeIndex) {
        const section = document.getElementById(this.cards[index].section);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - this.navbarOffset,
            behavior: "smooth",
          });
        }
        return;
      }
      this.rotateTo(index);
    },

    rotateTo(targetIndex) {
      this.resetTimer();
      this.isRotating = true;
      const step = () => {
        if (this.activeIndex === targetIndex) {
          this.isRotating = false;
          return;
        }
        this.moveNext();
        setTimeout(step, 500);
      };
      step();
    },

    /* --------------------------------
       DRAG (vertical)
    -------------------------------- */
    onDragStart(e) {
      this.isDragging = true;
      this.hasMoved = false;
      this.dragStartY = e.clientY;
    },
    onDragMove(e) {
      if (!this.isDragging) return;
      const delta = e.clientY - this.dragStartY;
      if (Math.abs(delta) > 10) this.hasMoved = true;
    },
    onDragEnd(e) {
      if (!this.isDragging) return;
      const delta = e.clientY - this.dragStartY;
      if (Math.abs(delta) > 50) {
        this.resetTimer();
        if (delta < 0) this.moveNext();
        else this.movePrev();
      }
      this.isDragging = false;
    },

    /* --------------------------------
       TILT + SHINE
    -------------------------------- */
    handleTilt(e, index) {
      if (index !== this.activeIndex || this.isDragging || this.isMobile) return;

      const tilt = e.currentTarget;
      const shine = tilt.querySelector(".shine");
      const rect = tilt.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      this.$gsap.to(tilt, {
        rotationY: (x - 0.5) * 30,
        rotationX: (y - 0.5) * -30,
        z: 60,
        transformPerspective: 1000,
        duration: 0.8,
        ease: "power1.out",
      });

      if (shine) {
        this.$gsap.to(shine, {
          opacity: 1,
          background: `radial-gradient(circle at ${x * 100}% ${
            y * 100
          }%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`,
          duration: 0.4,
        });
      }
    },
    handleReset(e) {
      const tilt = e.currentTarget;
      const shine = tilt.querySelector(".shine");
      this.$gsap.to(tilt, {
        rotationX: 0,
        rotationY: 0,
        z: 0,
        duration: 1.6,
        ease: "elastic.out(1, 0.75)",
      });
      if (shine) this.$gsap.to(shine, { opacity: 0, duration: 0.5 });
    },

    /* --------------------------------
       FEATURE REVEAL
    -------------------------------- */
    initFeatureObserver() {
      const options = { root: null, threshold: 0.2 };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.revealFeatures();
            this.observer.disconnect();
          }
        });
      }, options);
      if (this.$refs.content) this.observer.observe(this.$refs.content);
    },
    revealFeatures() {
      this.$nextTick(() => {
        this.$gsap.fromTo(
          this.$refs.featureItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      });
    },
  },
};
</script>

<style scoped>
.card-wrap {
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 2000px;
  overflow: hidden;
  gap: 3vh;
  padding: 12vh 5vw 8vh;
}

.header-wrap {
  text-align: center;
  margin-bottom: 24px;
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

.main-div {
  display: flex;
  width: 100%;
  max-width: 1400px;
  gap: 20px;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: center;
}

.main-div .stage {
  flex: 1;
  min-width: 0;
}

.main-div .content {
  flex: 1;
  min-width: 0;
}

.stage {
  position: relative;
  width: 30vw;
  height: 440px;
  cursor: default;
}

.orbit-stage {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1600px;
  transform-style: preserve-3d;
}

.glow-element {
  position: absolute;
  top: -30%;
  left: -20%;
  width: 140%;
  height: 160%;
  background: radial-gradient(
    circle,
    rgba(237, 1, 127, 0.3) 0%,
    rgba(255, 77, 184, 0) 70%
  );
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
  z-index: 1;
}

.card-item {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform, filter;
  /* Springy overshoot = gentle "gravity" settle as a card lands in focus */
  transition: top 0.85s cubic-bezier(0.34, 1.5, 0.55, 1),
    left 0.85s cubic-bezier(0.34, 1.5, 0.55, 1),
    transform 0.85s cubic-bezier(0.34, 1.5, 0.55, 1), filter 0.6s ease,
    opacity 0.5s ease;
}

.tilt-container {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.visual-container {
  width: clamp(150px, 18vw, 260px);
  aspect-ratio: 500 / 315;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
}

.visual-container.portrait-card {
  width: unset;
  aspect-ratio: 315 / 500;
  height: clamp(190px, 24vw, 300px);
}

.visual-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shine {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  z-index: 2;
  border-radius: 1.2rem;
}

.card-item.is-active .visual-container {
  box-shadow: 0 36px 90px rgba(0, 0, 0, 0.7), 0 0 70px rgba(237, 1, 127, 0.28);
  -webkit-box-reflect: below 14px
    linear-gradient(transparent, transparent 60%, rgba(255, 255, 255, 0.14));
}

.content {
  padding-top: 50px !important;
  width: 50%;
  padding: 1rem 2rem;
  color: white;
  z-index: 10;
  text-align: left;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  gap: 12px;
  flex-direction: row;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s ease;
}

.feature-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.bullet {
  width: 6px;
  height: 6px;
  min-width: 6px;
  background: #0084ff;
  border-radius: 50%;
  box-shadow: 0 0 10px #0084ff;
}

@media (prefers-reduced-motion: reduce) {
  .card-item {
    transition-duration: 0.001ms !important;
  }
}

/* ---------- TABLET ---------- */
@media (max-width: 991px) {
  .stage {
    width: 100%;
  }
}

/* ---------- MOBILE ---------- */
@media (max-width: 768px) {
  .card-wrap {
    perspective: 1200px;
    padding: 10vh 5vw 6vh;
    gap: 2vh;
  }
  .main-div {
    flex-direction: column;
    gap: 24px;
    align-items: stretch;
  }
  .main-div .stage {
    width: 100%;
    height: 360px;
  }
  .main-div .content {
    width: 100%;
    padding: 0 0.5rem;
    text-align: center;
  }
  .feature-list {
    gap: 0.85rem;
    margin: 1rem 0;
  }
  .feature-item {
    font-size: 1rem;
    text-align: left;
  }
  .visual-container {
    width: clamp(170px, 60vw, 280px);
    border-radius: 14px;
  }
  .visual-container.portrait-card {
    height: clamp(220px, 62vw, 300px);
  }
  .shine {
    border-radius: 14px;
  }
}

@media (max-width: 420px) {
  .main-div .stage {
    height: 320px;
  }
  .visual-container {
    width: clamp(160px, 66vw, 240px);
  }
  .visual-container.portrait-card {
    height: clamp(200px, 66vw, 270px);
  }
}
</style>