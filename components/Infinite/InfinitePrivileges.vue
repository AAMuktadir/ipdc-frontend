<template>
  <section class="elite-wrapper" ref="eliteWrapper">
    <!-- HERO - SINGLE IMAGE -->
    <div class="hero">
      <img src="~/assets/image/infinite/elite-hero.avif" class="hero-img" />

      <div class="hero-overlay"></div>

      <div class="hero-content container" ref="heroContent">
        <div class="left">
          <h2>Infinite Privileges</h2>
          <h3>Tailored for Those Who Expect More</h3>

          <p>
            At IPDC Infinite, every privilege is thoughtfully designed to
            enhance your financial journey and lifestyle.
          </p>
        </div>
      </div>
    </div>

    <!-- HERO - TWO IMAGE -->
    <!-- <div class="hero">
      <div class="hero-side left" ref="heroLeft">
        <img src="~/assets/image/infinite/elite-hero1.avif" />
      </div>

      <div class="hero-side right" ref="heroRight">
        <img src="~/assets/image/infinite/elite-hero2.avif" />
      </div>

      <div class="hero-overlay" ref="heroOverlay"></div>

      <div class="hero-content left-content" ref="heroContentLeft">
        <div class="left">
          <h2>Infinite Privileges</h2>
          <h3>Tailored for Those Who Expect More</h3>
          <p>
            At IPDC Infinite, every privilege is thoughtfully designed to
            enhance your financial journey and lifestyle.
          </p>
        </div>
      </div>

      <div class="hero-content right-content" ref="heroContentRight">
        <div class="left">
          <h2>Infinite Privileges</h2>
          <h3>Tailored for Those Who Expect More</h3>
          <p>
            At IPDC Infinite, every privilege is thoughtfully designed to
            enhance your financial journey and lifestyle.
          </p>
        </div>
      </div>
    </div> -->

    <!-- CARDS -->
    <div class="cards container" ref="cards">
      <!-- CARD -->
      <div class="card card-item">
        <div class="card-head">
          <img
            class="icon"
            src="~/assets/image/infinite/icons/1.png"
            alt="Financing Icon"
          />
          <h4>Financial Privileges</h4>
        </div>

        <div class="card-feat">
          <div class="item">
            <img
              src="~/assets/image/infinite/icons/test1.png"
              class="item-icon"
            />

            <div class="item-content">
              <h5>Dedicated Relationship Manager</h5>
              <p>A personal financial expert to guide your needs.</p>
            </div>
          </div>

          <div class="item">
            <img
              src="~/assets/image/infinite/icons/test2.png"
              class="item-icon"
            />

            <div class="item-content">
              <h5>Doorstep Services</h5>
              <p>Convenient collection and delivery of documents.</p>
            </div>
          </div>

          <div class="item">
            <img
              src="~/assets/image/infinite/icons/test3.png"
              class="item-icon"
            />

            <div class="item-content">
              <h5>Preferential Pricing</h5>
              <p>Exclusive rates across selected products.</p>
            </div>
          </div>
        </div>

        <div class="card-img-wrap">
          <img src="~/assets/image/infinite/finance.avif" class="card-img" />
        </div>
      </div>

      <!-- CARD -->
      <div class="card card-item">
        <div class="card-head">
          <img
            class="icon"
            src="~/assets/image/infinite/icons/2.png"
            alt="Financing Icon"
          />
          <h4>Lifestyle Privileges</h4>
        </div>

        <div class="card-feat">
          <div class="item">
            <img
              src="~/assets/image/infinite/icons/test4.png"
              class="item-icon"
            />

            <div class="item-content">
              <h5>Buy 1 Get 1 Dining</h5>
              <p>Enjoy curated premium restaurant experiences.</p>
            </div>
          </div>

          <div class="item">
            <img
              src="~/assets/image/infinite/icons/test5.png"
              class="item-icon"
            />

            <div class="item-content">
              <h5>Exclusive Brand Discounts</h5>
              <p>Special offers at leading lifestyle brands.</p>
            </div>
          </div>
        </div>

        <div class="card-img-wrap">
          <img src="~/assets/image/infinite/dining.avif" class="card-img" />
        </div>
      </div>

      <!-- CARD -->
      <div class="card card-item">
        <div class="card-head">
          <img
            class="icon"
            src="~/assets/image/infinite/icons/3.png"
            alt="Financing Icon"
          />
          <h4>Health & Wellness</h4>
        </div>

        <div class="card-feat">
          <div class="item">
            <img
              src="~/assets/image/infinite/icons/test6.png"
              class="item-icon"
            />

            <div class="item-content">
              <h5>Health Screening</h5>
              <p>Annual check-ups at premium partners.</p>
            </div>
          </div>

          <div class="item">
            <img
              src="~/assets/image/infinite/icons/test7.png"
              class="item-icon"
            />

            <div class="item-content">
              <h5>Gym & Spa Benefits</h5>
              <p>Access to elite wellness facilities.</p>
            </div>
          </div>
        </div>

        <div class="card-img-wrap">
          <img src="~/assets/image/infinite/wellness.avif" class="card-img" />
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
  mounted() {
    this.initObserver();
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

        // HERO - TWO IMAGE
        // tl.fromTo(
        //   this.$refs.heroLeft,
        //   {
        //     x: "50%",
        //     opacity: 0,
        //   },
        //   {
        //     x: "0%",
        //     opacity: 1,
        //     duration: 0.5,
        //   }
        // );

        // tl.fromTo(
        //   this.$refs.heroRight,
        //   {
        //     x: "-50%",
        //     opacity: 0,
        //   },
        //   {
        //     x: "0%",
        //     opacity: 1,
        //     duration: 0.5,
        //   },
        //   "-=0.5"
        // );

        // tl.fromTo(
        //   this.$refs.heroOverlay,
        //   { opacity: 0 },
        //   { opacity: 1, duration: 0.5 },
        //   "-=0.5"
        // );

        // tl.fromTo(
        //   this.$refs.heroContentLeft,
        //   {
        //     opacity: 0,
        //     y: 30,
        //     filter: "blur(6px)",
        //   },
        //   {
        //     opacity: 1,
        //     y: 0,
        //     filter: "blur(0px)",
        //     duration: 0.9,
        //   },
        //   "-=0.6"
        // );

        // tl.fromTo(
        //   this.$refs.heroContentRight,
        //   {
        //     opacity: 0,
        //     y: 30,
        //     filter: "blur(6px)",
        //   },
        //   {
        //     opacity: 1,
        //     y: 0,
        //     filter: "blur(0px)",
        //     duration: 0.9,
        //   },
        //   "-=0.8"
        // );

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

/* HERO - TWO IMAGE */
/* .hero {
  position: relative;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.hero-side {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.hero-side img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(10, 22, 34, 0.4) 20%,
    rgba(26, 23, 24, 0.85) 30%,
    rgb(26, 23, 24) 50%,
    rgba(26, 23, 24, 0.85) 70%,
    rgba(10, 22, 34, 0.4) 80%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 2;
}

.hero-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  color: #fff;
  max-width: 40%;
}

.left-content {
  left: 8%;
}

.right-content {
  right: 8%;
  text-align: right;
} */

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
