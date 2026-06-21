<template>
  <section id="card" class="snap-section card-wrap">
    <div class="header-wrap">
      <h2 class="title-gradient">Our Cards</h2>
    </div>

    <div class="main-div">
      <div
        class="stage"
        @pointerdown="onDragStart"
        @pointermove="onDragMove"
        @pointerup="onDragEnd"
        @pointerleave="onDragEnd"
      >
        <div class="orbit-stage">
          <div class="glow-element"></div>

          <div
            v-for="(card, i) in cards"
            :key="i"
            class="card-item"
            :class="[getCardClass(i), { 'portrait-card': card.isPortrait }]"
            @click="handleClick(i)"
          >
            <!-- TILT wrapper -->
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
        <slot name="title"><h2>Key Features</h2></slot>

        <div class="description-area">
          <slot name="description">
            <ul class="feature-list">
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
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["features"],
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
      ],
      activeIndex: 0,
      timer: null,
      dragStartX: 0,
      isRotating: false,
      isDragging: false,
      hasMoved: false,
      navbarOffset: 87,
      visibleFeatures: [],
      observer: null,
    };
  },

  mounted() {
    this.startAutoRotate();
    this.initFeatureObserver();
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    initFeatureObserver() {
      const options = {
        root: null,
        threshold: 0.2,
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.revealFeatures();
            this.observer.disconnect(); // run once
          }
        });
      }, options);

      if (this.$refs.content) {
        this.observer.observe(this.$refs.content);
      }
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
    /* --------------------------------
       CARD POSITION LOGIC
    -------------------------------- */
    getCardClass(i) {
      const total = this.cards.length;
      const diff = (i - this.activeIndex + total) % total;

      if (diff === 0) return "active";
      if (diff === 1) return "next";
      if (diff === 2) return "bottom";
      return "prev";
    },

    /* --------------------------------
       AUTO ROTATE (ANTI CLOCKWISE)
    -------------------------------- */
    startAutoRotate() {
      this.timer = setInterval(() => {
        this.moveNext();
      }, 3500);
    },

    resetTimer() {
      clearInterval(this.timer);
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
       CLICK BEHAVIOR
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
       DRAG LEFT / RIGHT
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
      if (index !== this.activeIndex || this.isDragging) return;

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

    handleReset(e, index) {
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
  },
};
</script>

<style scoped>
.main-div {
  min-height: 1000px;
  display: flex;
  width: 100%;
  gap: 20px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  align-items: stretch; /* important */
}

/* STAGE (animation container) */
.main-div .stage {
  flex: 1;
  min-width: 0;
  position: relative;
  /*overflow: hidden; /* prevents animation overflow breaking layout */
}

/* CONTENT */
.main-div .content {
  flex: 1;
  min-width: 0;
}

.card-wrap {
  height: 100vh;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 2000px;
  overflow: hidden;
  gap: 5vh;
  padding-top: 10vh;
}

.header-wrap {
  text-align: center;
  margin-bottom: 120px;
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

.glow-element {
  position: absolute;
  top: -50%;
  left: -30%;
  width: 150%;
  height: 170%;
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

.stage {
  position: relative;
  width: 30vw;
  height: 400px;
  cursor: default;
  top: 20%;
}

.orbit-stage {
  position: relative;
  width: 100%;
  height: 100%;
}

.card-item {
  position: absolute;
  left: 50%;
  transition: filter 0.5s ease, top 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  transform-style: preserve-3d;
}

.tilt-container {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.visual-container {
  width: 20vw;
  aspect-ratio: 500 / 315;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
}

.visual-container.portrait-card {
  width: unset;
  aspect-ratio: 315 / 500;
  height: 20vw;
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

.content {
  width: 50%;
  padding: 2rem;
  color: white;
  z-index: 10;
  text-align: left;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
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
  background: #0084ff; /* Matches your gradient start */
  border-radius: 50%;
  box-shadow: 0 0 10px #0084ff;
}

/* ORBIT POSITIONS */
.active {
  top: 10%;
  transform: translateX(-20%) scale(1.5);
  z-index: 5;
  filter: none;

  -webkit-box-reflect: below 10px
    linear-gradient(transparent, transparent 70%, rgba(255, 255, 255, 0.1));
}
.active.portrait-card {
  top: -15%;
  transform: translateX(0%) translateY(15%) scale(1.5);
}

.next {
  top: 70%;
  transform: translateX(-125%) scale(0.4);
  filter: blur(4px) brightness(0.6);
  z-index: 2;
}
.next.portrait-card {
  top: 45%;
  transform: translateX(-170%) scale(0.4);
}

.bottom {
  top: 10%;
  transform: translateX(-125%) scale(0.4);
  filter: blur(6px) brightness(0.4);
  z-index: 1;
}
.bottom.portrait-card {
  top: -12.5%;
  transform: translateX(-170%) scale(0.4);
}

.prev {
  top: -45%;
  transform: translateX(-125%) scale(0.4);
  filter: blur(4px) brightness(0.6);
  z-index: 2;
}
.prev.portrait-card {
  top: -70%;
  transform: translateX(-170%) scale(0.4);
}

/* --- MOBILE FIX --- */
@media (max-width: 768px) {
  .card-wrap {
    perspective: 300px;
  }
  .main-div {
    flex-direction: column;
    gap: 16px;
  }

  .main-div .stage {
    width: 100%;
    height: auto;
    min-height: 250px; /* ensures GSAP has space to animate */
    top: 0;
  }

  .main-div .content {
    width: 100%;
  }

  .visual-container {
    border-radius: 0px;
  }
  .glow-element {
    border-radius: 0px;
  }
  .shine {
    border-radius: 0px;
  }

  .orbit-stage {
    height: 60%;
  }

  .active {
    transform: translateX(-20%) scale(2.5);
  }
  .active.portrait-card {
    transform: translateX(0%) translateY(15%) scale(2.5);
  }

  .next {
    transform: translateX(-175%) scale(1);
  }
  .next.portrait-card {
    top: 60%;
    transform: translateX(-250%) scale(1);
  }

  .bottom {
    transform: translateX(-175%) scale(1);
  }
  .bottom.portrait-card {
    transform: translateX(-250%) scale(1);
  }

  .prev {
    top: -70%;
    transform: translateX(-175%) scale(1);
  }
  .prev.portrait-card {
    top: -60%;
    transform: translateX(-250%) scale(1);
  }
}
</style>
