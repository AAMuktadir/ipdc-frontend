<template>
  <section v-if="allAwards.length" class="ipdc-awards">
    <!-- SELECTED AWARD DETAILS -->
    <div v-if="selectedAward" ref="awardDetailSection" class="award-section">
      <div class="award-details">
        <h1>
          {{
            $i18n.locale === "en"
              ? selectedAward.title
              : selectedAward.title_bangla
          }}
        </h1>
        <p>
          {{
            $i18n.locale === "en"
              ? selectedAward.description
              : selectedAward.description_bangla
          }}
        </p>
      </div>

      <div class="award-image">
        <transition name="fade" mode="out-in">
          <img
            :key="selectedAward.id"
            :src="selectedAward.image"
            :alt="selectedAward.title"
          />
        </transition>
      </div>
    </div>

    <!-- CAROUSEL -->
    <div class="awards-carousel">
      <client-only>
        <carousel
          :nav="false"
          :dots="true"
          :autoplay="true"
          :loop="true"
          :responsive="{
            0: { items: 1, nav: false },
            768: { items: 2, nav: false },
            1024: { items: 3, nav: true },
            1280: { items: 4, nav: true },
          }"
        >
          <a
            v-for="award in allAwards"
            :key="award.id"
            @click.prevent="selectAward(award)"
            class="award-slide-link"
          >
            <div
              class="award-card-inner"
              :class="{ 'is-selected': selectedAward?.id === award.id }"
            >
              <div class="image-wrapper">
                <img :src="award.image" :alt="award.title" />
              </div>
              <div class="award-card-content">
                <h5>
                  {{ $i18n.locale === "en" ? award.title : award.title_bangla }}
                </h5>
              </div>
            </div>
          </a>
        </carousel>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    allAwards: {
      type: Array,
      default: () => [],
    },
    defaultOpenAward: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      selectedAward: null,
      firstLoad: false,
    };
  },

  watch: {
    // Watch allAwards to set the first award by default
    allAwards: {
      immediate: true,
      handler(val) {
        if (val.length && !this.selectedAward) {
          this.selectedAward = val[0];
          this.scrollToAwardDetail();
        }
      },
    },
  },

  mounted() {
    // In case defaultOpenAward prop is provided
    if (this.defaultOpenAward) {
      this.selectedAward = this.defaultOpenAward;
      this.scrollToAwardDetail();
    }
  },

  methods: {
    selectAward(award) {
      this.selectedAward = award;
      this.scrollToAwardDetail();
    },

    scrollToAwardDetail() {
      this.$nextTick(() => {
        const el = this.$refs.awardDetailSection;
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.ipdc-awards {
  padding: 80px 0;
  max-width: 75vw;
  justify-self: center;

  /* DETAILS */
  .award-section {
    display: flex;
    gap: 40px;
    padding-bottom: 60px;
    align-items: center;

    .award-details {
      flex: 1;

      h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        color: #343434;
        margin-bottom: 19px;

        .font-bn & {
          font-size: 41px;
        }
      }

      p {
        font-size: 16px;
        line-height: 154.3%;
        color: #858585;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 14;
        -webkit-line-clamp: 14;
        -webkit-box-orient: vertical;
        margin-bottom: 19px;
        padding-right: 80px;

        .font-bn & {
          font-size: 21px;
        }
      }
    }

    .award-image {
      flex-basis: 45%;
      position: relative;
      z-index: 1;
      background: #fde1f0;
      height: 70vh;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      box-shadow: -6px 6px 25px 1px #ed017f4d;
      overflow: visible;

      &::before {
        content: "";
        position: absolute;
        top: -15px;
        right: -15px;
        width: calc(100% - 15px);
        height: calc(100% - 15px);
        background: radial-gradient(
          circle,
          #fefefe 0%,
          #ffffff 13%,
          #d1d2d4 100%
        );
        border-radius: 15px;
        z-index: 0;
      }

      img {
        position: relative;
        z-index: 1;
        width: 100%;
        height: auto;
        max-height: 100%;
        object-fit: contain;
        display: block;
        padding: 15px;
        top: -15px;
        right: -15px;
      }
    }
  }

  /* CAROUSEL */
  .awards-carousel {
    padding: 60px 0;

    .award-slide-link {
      display: block;
      padding: 10px;
      text-decoration: none !important;

      .award-card-inner {
        display: flex;
        flex-direction: column;
        height: 60vh;
        width: 100%;
        background: radial-gradient(
          circle,
          #fefefe59 0%,
          #ffffff 13%,
          #d1d2d44d 100%
        );
        border-radius: 20px;
        overflow: hidden;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.35s ease;
        opacity: 0.85;
        transform: scale(0.96);
        box-shadow: 7px 7px 15px 2px #ed017f4d;

        &.is-selected {
          opacity: 1;
          transform: scale(1);
          border-color: #ed017f;
          box-shadow: 0 15px 35px rgba(237, 1, 127, 0.3);
        }

        .image-wrapper {
          height: 70%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: auto;
            max-height: 100%;
            object-fit: contain;
            display: block;
            padding: 0 10px;
          }
        }

        .award-card-content {
          padding: 10px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          h5 {
            font-size: 15px;
            font-weight: 700;
            color: #333;
            margin: 0;

            /* multi-line clamp */
            display: -webkit-box;
            line-clamp: 4;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .ipdc-awards {
    max-width: 100%;

    .award-section {
      flex-direction: column-reverse;
      text-align: center;

      .award-details p {
        padding-right: 0;
      }
    }

    .awards-carousel {
      padding: 40px 0;

      .award-slide-link {
        padding: 5px;

        .award-card-inner {
          height: 60vh;

          // .image-wrapper {
          // height: 45vh;
          // }
        }
      }
    }
  }
}
</style>
