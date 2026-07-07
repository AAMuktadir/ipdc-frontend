<template>
  <section class="elite-wrapper" ref="eliteWrapper">
    <!-- HERO - SINGLE IMAGE -->
    <div class="hero">
      <img src="~/assets/image/infinite/elite-hero.avif" class="hero-img" />

      <div class="hero-overlay"></div>

      <div class="hero-content container" ref="heroContent">
        <div class="left">
          <h2>
            {{ isEn ? data.title : data.title_bangla }}
          </h2>
          <h3>
            {{ isEn ? data.sub_title : data.sub_title_bangla }}
          </h3>

          <p>
            {{ isEn ? data.description : data.description_bangla }}
          </p>
        </div>
      </div>
    </div>

    <!-- CARDS -->
    <div class="cards container" ref="cards">
      <!-- CARD -->
      <div class="card card-item" v-for="privilege in data.privileges">
        <div class="card-head">
          <img class="icon" :src="privilege.icon" alt="Icon" />
          <h4>
            {{ isEn ? privilege.title : privilege.title_bangla }}
          </h4>
        </div>

        <div class="card-feat">
          <div class="item" v-for="listItem in privilege.list">
            <img :src="listItem.icon" class="item-icon" />

            <div class="item-content">
              <h5>
                {{ isEn ? listItem.title : listItem.title_bangla }}
              </h5>
              <p>
                {{ isEn ? listItem.description : listItem.description_bangla }}
              </p>
            </div>
          </div>
        </div>

        <div class="card-img-wrap">
          <img :src="privilege.image" class="card-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
    };
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.initObserver();
  },
  computed: {
    isEn() {
      return this.$i18n.locale === "en";
    },
  },
  methods: {
    initObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            this.animatePage();
            this.observer.disconnect();
          });
        },
        { threshold: 0.15 }
      );

      if (this.$refs.heroContent) {
        this.observer.observe(this.$refs.heroContent);
      }

      if (this.$refs.cards) {
        this.observer.observe(this.$refs.cards);
      }
    },

    animatePage() {
      this.$nextTick(() => {
        const cards = this.$el.querySelectorAll(".card-item");

        const tl = this.$gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          this.$refs.eliteWrapper,
          { opacity: 0 },
          { opacity: 1, duration: 0.75 }
        );

        // HERO - SINGLE IMAGE
        tl.fromTo(
          this.$refs.heroContent,
          {
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
          }
        );

        // CARDS (real stagger)
        tl.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.25,
          },
          "-=0.4"
        );
      });
    },
  },
};
</script>

<style scoped>
.card {
  transform: translateY(50px);
}

.elite-wrapper {
  background: #f5f2ee;
  opacity: 0;
}

/* HERO - SINGLE IMAGE */
.hero {
  position: relative;
  min-height: 100%;
  max-height: 100vh;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgb(26 23 24) 0%,
    rgba(26, 23, 24, 0.85) 20%,
    rgba(10, 22, 34, 0.4) 35%,
    transparent 80%
  );
}

.hero-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  padding-left: 10vw;
}

.hero-content .left {
  max-width: 520px;
}

.hero h2 {
  font-size: 3rem;
  color: #e6c27a;
}

.hero h3 {
  margin: 10px 0;
  font-weight: 400;
}

.hero p {
  color: #ddd;
  margin-top: 15px;
}

/* .brand img {
  margin-top: 25px;
  width: 140px;
} */

/* CARDS */
.container {
  max-width: 85%;
}

.cards {
  margin-top: -80px;
  display: flex;
  flex-wrap: wrap;
  gap: 3vw;
  z-index: 3;
  padding-bottom: 80px;
}

.cards .card {
  z-index: 4;
  flex: 0 0 calc((100% - 6vw) / 3);
  flex-direction: column;
  justify-content: space-between;
}

.card {
  background: #fff;
  border-radius: 18px;
  padding: 30px 0 0;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.card .card-head {
  display: flex;
  padding: 0 10px 20px;
  gap: 5%;
  justify-content: center;
}

.card h4 {
  font-size: 1.4rem;
  margin: 0;
  width: fit-content;
  align-content: center;
  position: relative;
  display: inline-block;
}

/* gold line */
.card h4::after {
  content: "";
  display: block;
  width: 100px;
  height: 2px;
  background: #e0c48c;
  margin-top: 8px;
  position: relative;
}

/* dot (attached to line end) */
.card h4::before {
  content: "";
  position: absolute;
  left: 110px;
  bottom: 20px;
  width: 6px;
  height: 6px;
  background: #e0c48c;
  border-radius: 6px; /* this creates the "pill" look */
}

.card .card-feat {
  padding: 10px 20px 0;
}

.item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
  position: relative;
}

/* icon */
.item-icon {
  width: 36px;
  height: 36px;
  object-fit: contain;
  flex-shrink: 0;
  place-self: center;
}

/* content */
.item-content {
  padding-left: 15px;
  position: relative;
}

/* vertical line */
.item-content::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: #e0c48c; /* gold tone */
  opacity: 0.8;
}

.item h5 {
  margin: 0;
  font-size: 1rem;
}

.item p {
  margin: 5px 0 0;
  font-size: 0.85rem;
  color: #666;
}

/* ICON BADGE */
.icon {
  max-width: 80px;
  max-height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* subtle premium look */
  box-shadow: 5px 5px 20px 1px rgba(0, 0, 0, 0.25);
}

/* .icon img {
  /* width: 28px; */
/* height: 28px; */
/* object-fit: fill; */

/* makes white/light icons pop */
/* filter: brightness(0) invert(1); */

/* smooth rendering */
/* image-rendering: -webkit-optimize-contrast; */
/* } */

.card-img-wrap {
  position: relative;
  /* margin-top: 20px; */
  border-radius: 12px;
  overflow: hidden;
}

/* IMAGE */
.card-img {
  width: 100%;
  border-radius: 12px;
  margin-top: 20px;
}

/* top overlay */
.card-img-wrap::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(
    180deg,
    rgb(255 255 255) 5%,
    rgb(255 255 255 / 100%) 50%,
    rgba(10, 22, 34, 0.05) 90%,
    transparent 70%
  );
  z-index: 2;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .cards .card {
    flex: 0 0 100%;
  }
  /* .hero {
    height: 460px;
  }
  .hero-img {
    object-position: right;
  } */
}

@media (max-width: 1277px) {
  .card h4 {
    font-size: 1rem;
  }
}
@media (max-width: 1024px) {
  .card h4 {
    font-size: 1.6rem;
  }
  .card h4::before {
    bottom: 18px;
  }
}
@media (max-width: 457px) {
  .card h4 {
    font-size: 1.2rem;
  }
}
@media (max-width: 381px) {
  .card h4 {
    font-size: 1.1rem;
  }
  .card h4::before {
    bottom: 10px;
  }
}
@media (max-width: 320px) {
  .card h4 {
    font-size: 1.1rem;
  }
  .card h4::before {
    bottom: 12px;
  }
}

/* =========================
   MOBILE HERO - TWO IMAGE FIX
========================= */
@media (max-width: 768px) {
  .hero {
    height: auto;
    flex-direction: column;
  }

  /* stack images */
  .hero-side {
    width: 100%;
    height: auto;
  }

  .hero-side img {
    height: 100%;
    object-position: center;
  }

  /* overlay becomes vertical-friendly */
  .hero-overlay {
    display: none;
  }

  /* content reset */
  .hero-content {
    position: relative;
    top: auto;
    transform: none;
    max-width: 100%;
    min-width: 100%;
    padding: 30px 20px;
    text-align: center;
  }

  /* left + right content behave same */
  .left-content,
  .right-content {
    left: auto;
    right: auto;
    text-align: center;
  }

  /* spacing between two content blocks */
  .left-content {
    position: absolute;
    background: rgba(26, 23, 24, 0.75);
    order: 1;
  }

  .hero-side.left {
    order: 2;
  }

  /* RIGHT BLOCK ORDER */
  .right-content {
    order: 3;
    position: absolute;
    background: rgba(26, 23, 24, 0.75);
    top: 50%;
  }

  .hero-side.right {
    order: 4;
  }

  /* typography tuning */
  .hero h2 {
    font-size: 1.8rem;
  }

  .hero h3 {
    font-size: 1.1rem;
  }

  .hero p {
    font-size: 0.9rem;
  }
}
</style>
