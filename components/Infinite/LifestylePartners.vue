<template>
  <section ref="section" class="lifestyle-partners">
    <div class="container">
      <div class="deposit-offer">
        <div class="deposit-offer-title" ref="offerTitle">
          <h2 v-if="$i18n.locale == 'en'" class="offer-title">
            {{ pageHeading.title }}
          </h2>
          <h2 v-if="$i18n.locale == 'bn'" class="offer-title">
            {{ pageHeading.title_bangla }}
          </h2>
          <h3
            v-if="$i18n.locale == 'en'"
            class="offer-description"
            v-html="pageHeading.sub_title"
          ></h3>
          <h3
            v-if="$i18n.locale == 'bn'"
            class="offer-description"
            v-html="pageHeading.sub_title_bangla"
          ></h3>
          <p v-if="$i18n.locale == 'en'" v-html="pageHeading.description"></p>
          <p
            v-if="$i18n.locale == 'bn'"
            v-html="pageHeading.description_bangla"
          ></p>
        </div>
        <div
          v-if="partnersList.length > 0"
          class="deposit-card"
          ref="offerCards"
        >
          <div
            v-for="singlePartner in partnersList"
            :key="singlePartner.id"
            class="interest"
          >
            <component
              :is="singlePartner.button_link ? 'a' : 'div'"
              :href="singlePartner.button_link || null"
              :target="singlePartner.button_link ? '_blank' : null"
              :rel="singlePartner.button_link ? 'noopener noreferrer' : null"
              class="attractive-interest"
              :style="singlePartner.button_link ? 'cursor:pointer;' : ''"
            >
              <img :src="singlePartner.image" alt="" />

              <h4 v-if="$i18n.locale == 'en'">
                {{ singlePartner.title }}
              </h4>
              <h4 v-if="$i18n.locale == 'bn'">
                {{ singlePartner.title_bangla }}
              </h4>
            </component>
          </div>
        </div>
        <div v-if="pageHeading.highlight">
          <div class="divider"></div>
          <h3
            v-if="$i18n.locale == 'en'"
            class="offer-highlight"
            v-html="pageHeading.highlight"
          ></h3>
          <h3
            v-if="$i18n.locale == 'bn'"
            class="offer-highlight"
            v-html="pageHeading.highlight_bangla"
          ></h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pageHeading: {
      type: Object,
      default: () => ({}),
    },
    partnersList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      observer: null,
    };
  },

  mounted() {
    this.initObserver();
  },

  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },

  methods: {
    initObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            this.animateSection();

            if (this.observer) {
              this.observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
        }
      );

      if (this.$refs.section) {
        this.observer.observe(this.$refs.section);
      }
    },

    animateSection() {
      this.$nextTick(() => {
        const cards = this.$el.querySelectorAll(".interest");
        const divider = this.$el.querySelector(".divider");
        const highlight = this.$el.querySelector(".offer-highlight");

        const tl = this.$gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        // TITLE BLOCK
        if (this.$refs.offerTitle) {
          tl.fromTo(
            this.$refs.offerTitle,
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
        }

        // CARDS CONTAINER
        if (this.$refs.offerCards) {
          tl.fromTo(
            this.$refs.offerCards,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 0.4,
            },
            "-=0.4"
          );
        }

        // INDIVIDUAL CARDS
        if (cards.length) {
          tl.fromTo(
            cards,
            {
              opacity: 0,
              y: 40,
              scale: 0.98,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.2,
            },
            "-=0.2"
          );
        }

        // DIVIDER
        if (divider) {
          tl.fromTo(
            divider,
            {
              opacity: 0,
              scaleX: 0,
            },
            {
              opacity: 1,
              scaleX: 1,
              transformOrigin: "center",
              duration: 0.7,
            },
            "-=0.7"
          );
        }

        // HIGHLIGHT
        if (highlight) {
          tl.fromTo(
            highlight,
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
            },
            "-=0.3"
          );
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.deposit-offer-title,
.deposit-card,
.interest {
  opacity: 0;
}
.lifestyle-partners {
  padding: 90px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;

  /* soft ambient glow */
  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: radial-gradient(
        circle at top center,
        rgba(230, 194, 122, 0.22) 0%,
        transparent 35%
      ),
      radial-gradient(
        circle at bottom left,
        rgba(0, 180, 120, 0.08) 0%,
        transparent 15%
      );

    pointer-events: none;
    z-index: -1;
  }
}

.deposit-offer {
  position: relative;

  .deposit-offer-title {
    text-align: center;
    padding-bottom: 90px;

    .offer-title {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: -0.02em;

      background: linear-gradient(
        135deg,
        #f8e3b1 0%,
        #e6c27a 35%,
        #c79a42 100%
      );

      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      text-shadow: 0 10px 25px rgba(230, 194, 122, 0.18);

      .font-bn & {
        font-size: 41px;
      }
    }

    .offer-description {
      text-align: center;
      justify-self: center;
      margin: 14px 0;

      font-weight: 400;
      color: #4b4b4b;
      max-width: 760px;
      line-height: 1.8;

      .font-bn & {
        font-size: 21px;
      }
    }

    p {
      color: #8d8d8e;
      margin-top: 15px;
    }
  }

  .deposit-card {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;

    perspective: 1400px;

    .interest {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      flex-basis: calc(33.333% - 48px / 3);
      min-height: 150px;
      padding: 22px 24px;

      border-radius: 28px;
      overflow: hidden;
      isolation: isolate;

      background: linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.96) 0%,
        rgba(240, 251, 246, 0.98) 45%,
        rgba(222, 244, 235, 1) 100%
      );

      border: 1px solid rgba(255, 255, 255, 0.75);

      box-shadow: 0 5px 10px rgba(15, 60, 45, 0.08),
        0 8px 18px rgba(15, 60, 45, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 0.95),
        inset 0 -4px 8px rgba(0, 0, 0, 0.03);

      transform-style: preserve-3d;

      transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 0.45s ease, border-color 0.35s ease;

      /* top glass shine */
      &::before {
        content: "";
        position: absolute;
        inset: 0;

        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.75) 0%,
          rgba(255, 255, 255, 0.08) 38%,
          transparent 100%
        );

        pointer-events: none;
        z-index: 1;
      }

      /* moving premium light */
      &::after {
        content: "";
        position: absolute;
        top: -140%;
        left: -60%;

        width: 50%;
        height: 320%;

        background: linear-gradient(
          to right,
          transparent,
          rgba(255, 255, 255, 0.55),
          transparent
        );

        transform: rotate(24deg);
        transition: 1s ease;
        pointer-events: none;
        z-index: 1;
      }

      .attractive-interest {
        position: relative;
        z-index: 2;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 18px;

        width: 100%;

        text-decoration: none;
        color: inherit;
      }

      img {
        width: 58px;
        height: 58px;
        object-fit: contain;
        flex-shrink: 0;

        filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.12))
          drop-shadow(0 2px 4px rgba(255, 255, 255, 0.5));

        transform: translateZ(40px);

        transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
          filter 0.45s ease;
      }

      h4 {
        position: relative;
        z-index: 2;

        margin: 0;
        word-break: break-word;

        font-size: 22px;
        font-weight: 700;
        line-height: 1.35;

        color: #24352f;

        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);

        transform: translateZ(28px);

        transition: transform 0.45s ease, color 0.35s ease;

        .font-bn & {
          font-size: 27px;
          line-height: 1.45;
        }
      }

      &:hover {
        transform: translateY(-12px) rotateX(5deg) rotateY(-5deg) scale(1.025);

        border-color: rgba(230, 194, 122, 0.45);

        box-shadow: 0 34px 60px rgba(15, 60, 45, 0.16),
          0 14px 24px rgba(15, 60, 45, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 1);

        &::after {
          left: 150%;
        }

        img {
          transform: translateZ(65px) scale(1.14) rotate(-4deg);

          filter: drop-shadow(0 20px 24px rgba(0, 0, 0, 0.18))
            drop-shadow(0 4px 6px rgba(255, 255, 255, 0.4));
        }

        h4 {
          color: #0e5a43;
          transform: translateZ(45px);
        }
      }

      &:active {
        transform: scale(0.985);
      }
    }
  }
}

.divider {
  width: 50%;
  height: 2px;
  margin: 60px auto 22px;

  background: linear-gradient(
    90deg,
    rgba(230, 194, 122, 0),
    #e6c27a,
    rgba(230, 194, 122, 0)
  );
}

.offer-highlight {
  text-align: center;
  justify-self: center;
  margin: 10px 0;

  font-weight: 400;
  color: #1a1718;

  .font-bn & {
    font-size: 21px;
  }
}

/* =========================
   LARGE TABLET
========================= */

@media screen and (max-width: 1024px) {
  .deposit-offer {
    padding: 50px 0;

    .deposit-offer-title {
      padding-bottom: 60px;

      .offer-title {
        font-size: 2.5rem;
      }

      .offer-description {
        padding: 0 10px;
      }
    }

    .deposit-card {
      gap: 20px;

      .interest {
        flex-basis: calc(50% - 10px);
        min-height: 140px;

        &:hover {
          transform: translateY(-8px) scale(1.015);
        }

        img {
          width: 52px;
          height: 52px;
        }

        h4 {
          font-size: 20px;

          .font-bn & {
            font-size: 24px;
          }
        }
      }
    }
  }
}

/* =========================
   MOBILE
========================= */

@media screen and (max-width: 768px) {
  .lifestyle-partners {
    padding: 60px 0;
  }

  .deposit-offer {
    width: 100%;
    padding: 40px 0;

    .deposit-offer-title {
      padding-bottom: 40px;

      .offer-title {
        font-size: 2rem;

        .font-bn & {
          font-size: 34px;
        }
      }

      .offer-description {
        padding: 0 10px;
        line-height: 1.7;
      }
    }

    .deposit-card {
      width: 100%;
      flex-direction: column;
      gap: 18px;

      .interest {
        width: 100%;
        min-height: 120px;
        padding: 18px 20px;
        border-radius: 22px;

        transform: none !important;

        .attractive-interest {
          justify-content: flex-start;
          gap: 16px;
        }

        img {
          width: 48px;
          height: 48px;
          transform: none !important;
        }

        h4 {
          margin: 0;
          font-size: 19px;

          transform: none !important;

          .font-bn & {
            font-size: 22px;
          }
        }

        &:hover {
          transform: translateY(-4px) !important;
        }
      }
    }
  }

  .divider {
    width: 75%;
    margin: 45px auto 20px;
  }
}

/* =========================
   SMALL MOBILE
========================= */

@media screen and (max-width: 480px) {
  .deposit-offer {
    .deposit-card {
      .interest {
        min-height: 110px;
        padding: 16px;

        img {
          width: 42px;
          height: 42px;
        }

        h4 {
          font-size: 17px;
          line-height: 1.4;

          .font-bn & {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
