<template>
  <section class="recent-updates" v-if="localActiveYears.length > 0">
    <div class="container">
      <div v-if="$i18n.locale == 'en'" class="recent-updates-title">
        <h3>Recent Updates</h3>
      </div>
      <div v-if="$i18n.locale == 'bn'" class="recent-updates-title">
        <h3>সাম্প্রতিক আপডেট</h3>
      </div>
      <div class="media-tab">
        <b-tabs class="tabs" align="center">
          <b-tab
            class="tab-content active"
            :title="$i18n.locale == 'en' ? item : activeYears_bangla[index]"
            v-for="(item, index) in localActiveYears"
            :key="index"
            @click="filterByYear(item)"
          ></b-tab>
        </b-tabs>
        <p v-if="computedAllMedias.length <= 0" class="text-center mt-4">
          {{ $i18n.locale == "en" ? "Data Not Found!" : "তথ্য পাওয়া যায়নি!" }}
        </p>
      </div>
      <div class="recent-update-cards">
        <nuxt-link
          :to="{ path: '/media-details/', query: { media: singleMedia.slug } }"
          v-for="singleMedia in computedAllMedias"
          :key="singleMedia.id"
          class="recent-update-card"
        >
          <div
            class="recent-cards"
            :style="{ backgroundImage: `url(${singleMedia.image_url})` }"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div class="ipdc-recent-cards">
              <div class="recent-cards-title">
                <h3>
                  {{
                    $i18n.locale == "en"
                      ? singleMedia.title
                      : singleMedia.title_bangla
                  }}
                </h3>
                <p>
                  {{
                    $i18n.locale == "en"
                      ? formatDate(singleMedia.publish_date)
                      : formatDateBangla(singleMedia.publish_date)
                  }}
                </p>
              </div>
              <span class="arrow-button">
                <img src="~assets/image/rightarrow.png" alt="" />
              </span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    allMedias: {
      type: Array,
      default: () => [],
    },
    activeYears: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      page: "media",
      targetYear: "All",
      localAllMedias: [],
      localActiveYears:
        this.activeYears.length > 0
          ? this.activeYears
          : [
              "All",
              "2024",
              "2023",
              "2022",
              "2021",
              "2020",
              "2019",
              "2018",
              "2017",
            ],
      activeYears_bangla: [
        "সব",
        "২০২৪",
        "২০২৩",
        "২০২২",
        "২০২১",
        "২০২০",
        "২০১৯",
        "২০১৮",
        "২০১৭",
      ],
    };
  },
  computed: {
    computedAllMedias() {
      // Use client filtered data if available, otherwise fallback to SSR data
      return this.localAllMedias.length > 0
        ? this.localAllMedias
        : this.allMedias;
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    formatDateBangla(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("bn", options);
    },
    async filterByYear(year) {
      this.targetYear = year;
      try {
        const response = await this.$axios.get(
          `/get-media-content/${this.page}`,
          { params: { year: this.targetYear } }
        );
        this.localAllMedias = response.data.data.allData || [];
      } catch (error) {
        console.error("Filter fetch failed:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.recent-updates {
  padding-bottom: 100px;
  &-title {
    text-align: center;
    padding: 50px 0;
    h3 {
      font-weight: bold;
      font-size: 30px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 35px;
      }
    }
  }

  &-filter {
    width: 100px;
    text-align: left;
    padding: 0 0 30px 0;
  }
  .media-tab {
    .text-center {
      color: #343434;
      font-size: 20px;
      .font-bn & {
        font-size: 25px;
      }
    }
  }
  .recent-update-cards {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    .recent-cards {
      position: relative;
      width: 350px;
      height: 357px;
      border-radius: 14px;
      margin: 0 0 20px 0;
      background-size: cover;
      background-position: center;
      .ipdc-recent-cards {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 109px;
        background: rgba(65, 63, 63, 0.4);
        backdrop-filter: blur(11px);
        display: flex;
        justify-content: space-between;
        border-radius: 0 0 14px 14px;
        .recent-cards-title {
          color: #ffffff;
          padding: 15px;
          h3 {
            font-weight: bold;
            font-size: 17px;
            line-height: 129.4%;
            max-width: 280px;
            margin-bottom: 10px;
            .font-bn & {
              font-size: 22px;
            }
          }
          p {
            font-size: 13px;
            line-height: 137.1%;
            letter-spacing: 0.02em;
            .font-bn & {
              font-size: 18px;
            }
          }
        }
        .arrow-button {
          width: 30px;
          height: 30px;
          background: rgba(255, 255, 255, 0.3);
          mix-blend-mode: normal;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 15px 20px 0 0;
          img {
            filter: brightness(0) invert(1);
            width: 8px;
            height: 10px;
          }
        }
      }
      &:hover {
        transition: 0.3s;
        transform: scale(0.97);
        .ipdc-recent-cards {
          .arrow-button {
            animation: move 0.4s infinite linear alternate;
          }
        }
      }
    }
  }
}
@keyframes move {
  0% {
    transform: translate(-4px);
  }
  100% {
    transform: translate(4px);
  }
}

@media screen and (max-width: 1024px) {
  .recent-updates {
    padding-bottom: 100px;
    &-title {
      padding: 25px 0 40px 0;
      h3 {
        font-size: 25px;
        .font-bn & {
          font-size: 30px;
        }
      }
    }
    .recent-update-cards {
      display: flex;
      .recent-update-card {
        flex-basis: calc(50% - 30px / 2);
      }
      .recent-cards {
        width: 100%;
        height: 357px;
        background-size: cover;
        background-position: center;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .recent-updates {
    .recent-update-cards {
      flex-direction: column;
    }
  }
}
</style>
