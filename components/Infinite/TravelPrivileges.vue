<template>
  <section class="travel-section">
    <div class="travel-wrapper" ref="travelWrapper">
      <!-- LEFT IMAGE -->
      <div class="left-panel" ref="leftPanel">
        <img src="~/assets/image/infinite/lounge.avif" alt="Lounge" />
        <div class="img-overlay"></div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="right-panel" ref="rightPanel">
        <img src="~/assets/image/infinite/driver.avif" alt="Driver" />
        <div class="img-overlay"></div>
      </div>

      <!-- CONTENT -->
      <div class="content" ref="travelContent">
        <h2>Airport Lounge, Meet & Greet & Travel Privileges</h2>
        <h3>Travel with Comfort, Priority, and Elegance</h3>

        <p>
          Enjoy a seamless and elevated travel experience with a suite of
          premium privileges designed for frequent travelers.
        </p>

        <!-- CARDS -->
        <div class="cards">
          <!-- CARD 1 -->
          <div class="card travelCard">
            <div class="icon">
              <img src="~/assets/image/infinite/icons/lounge.png" />
            </div>

            <h4>Airport Lounge Access</h4>
            <p class="card-sub">
              Relax and unwind before your journey with access to premium
              airport lounges.
            </p>

            <ul>
              <li>
                Complimentary access to Balaka Lounge at Hazrat Shahjalal
                International Airport
              </li>
              <li>
                IPDC Elite customers are entitled to two complimentary lounge
                visits per year with one companion
              </li>
              <li>
                IPDC Infinite customers are entitled to three complimentary
                lounge visits per year with one companion
              </li>
            </ul>
          </div>

          <!-- CARD 2 -->
          <div class="card travelCard">
            <div class="icon">
              <img src="~/assets/image/infinite/icons/meet.png" />
            </div>

            <h4>Meet & Greet & Pick & Drop Services</h4>
            <p class="card-sub">
              Experience effortless airport journeys with personalized
              assistance.
            </p>

            <ul>
              <li>Dedicated meet and greet service at departure or arrival</li>
              <li>Assistance with airport formalities and navigation</li>
              <li>
                Complimentary pick and drop service for enhanced convenience (as
                per eligibility criteria)
              </li>
              <li>Priority handling for a seamless experience</li>
              <li>
                IPDC Elite customers are entitled to two Complimentary Meet and
                Greet & Pick and Drop Service per year with one companion.
              </li>
              <li>
                IPDC Infinite customers are entitled to three Complimentary Meet
                and Greet & Pick and Drop Service per year with one companion.
              </li>
            </ul>
          </div>

          <!-- CARD 3 -->
          <div class="card travelCard">
            <div class="icon">
              <img src="~/assets/image/infinite/icons/travel.png" />
            </div>

            <h4>Travel & Leisure Enhancements</h4>
            <p class="card-sub">
              Enhance every journey with thoughtfully curated travel benefits.
            </p>

            <ul>
              <li>Complimentary luggage insurance for international travel</li>
              <li>
                Priority hotel booking discounts with selected 4 & 5-star hotels
              </li>
              <li>Access to exclusive travel deals and partner offers</li>
              <li>
                Seamless travel planning support through partner platforms
              </li>
            </ul>
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

            this.animateTravel();
            this.observer.disconnect();
          });
        },
        { threshold: 0.2 }
      );

      if (this.$refs.travelWrapper) {
        this.observer.observe(this.$refs.travelWrapper);
      }
    },

    animateTravel() {
      this.$nextTick(() => {
        const cards = this.$el.querySelectorAll(".travelCard");

        const tl = this.$gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        // LEFT IMAGE
        tl.fromTo(
          this.$refs.travelWrapper,
          { opacity: 0 },
          { opacity: 1, duration: 0.05 }
        );

        // LEFT IMAGE
        tl.fromTo(
          this.$refs.leftPanel,
          { opacity: 0, x: -80 },
          { opacity: 1, x: 0, duration: 1 }
        );

        // RIGHT IMAGE
        tl.fromTo(
          this.$refs.rightPanel,
          { opacity: 0, x: 80 },
          { opacity: 1, x: 0, duration: 1 },
          "-=0.7"
        );

        // CONTENT
        tl.fromTo(
          this.$refs.travelContent,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        );

        // CARDS (proper stagger - THIS is the fix)
        tl.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.25,
          },
          "-=0.3"
        );
      });
    },
  },
};
</script>

<style scoped>
.travel-section {
  background: #f4f1ec;
  padding: 80px 4vw;
}

/* WRAPPER */
.travel-wrapper {
  position: relative;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  padding: 30px 40px 60px;
  opacity: 0;
}

/* LEFT PANEL (angled) */
.left-panel {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 30%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.left-panel img {
  height: 100%;
  width: auto;
  object-fit: cover;
  object-position: left;
}

.left-panel .img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    270deg,
    rgb(255 255 255) 0%,
    rgb(255 255 255 / 95%) 45%,
    rgb(255 255 255 / 10%) 75%,
    transparent 80%
  );
}

/* RIGHT PANEL (fixed proportion) */
.right-panel {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 30%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.right-panel img {
  height: 100%;
  width: auto;
  object-fit: cover;
  object-position: right;
}

.right-panel .img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgb(255 255 255) 0%,
    rgb(255 255 255 / 95%) 45%,
    rgb(255 255 255 / 10%) 75%,
    transparent 80%
  );
}

/* CONTENT */
.content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
}

.content h2 {
  font-size: 3rem;
  color: #e6c27a;
}

.content h3 {
  margin: 10px 0;
  font-weight: 400;
  color: #1a1718;
}

.content p {
  color: #8d8d8e;
  margin-top: 15px;
}

/* BADGE */
/* .badge {
  display: inline-block;
  background: #b08a5b;
  color: #fff;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 20px;
}

TITLE
h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

h1 span {
  color: #b08a5b;
}

.desc {
  color: #666;
  max-width: 650px;
  margin: 0 auto 40px;
} */

/* CARDS */
.cards {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 60px;
}

/* CARD */
.card {
  background: #f9f9f9;
  border-radius: 18px;
  padding: 30px 20px;
  width: 32%;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

/* ICON */
.icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #0c2d48;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -60px auto 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* .icon img {
  width: 32px;
} */

/* TEXT */
.card h4 {
  margin-bottom: 6px;
  font-size: 1.2rem;
  text-align: center;
}

.card-sub {
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 14px;
  text-align: center;
  line-height: 1.4;
}

.card ul {
  padding-left: 18px;
  text-align: left;
}

.card li {
  margin-bottom: 8px;
  color: #555;
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .left-panel {
    width: 38%;
  }

  .right-panel {
    width: 35%;
  }
}

@media (max-width: 1024px) {
  .left-panel,
  .right-panel {
    display: none;
  }

  .travel-wrapper {
    padding: 60px 20px;
  }

  .cards {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .card {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
