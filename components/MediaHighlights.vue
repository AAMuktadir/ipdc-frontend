<template>
  <section class="media">
    <div class="container">
      <div class="media-title">
        <h1 class="media-title-heading"></h1>
        <p class="media-title-description">
          Your confidence is our credibility...
        </p>
      </div>
      <div class="highlight">
        <div v-if="$i18n.locale == 'en'" class="highlight-title">
          <h2 class="highlight-title-heading">Highlights</h2>
        </div>
        <div v-if="$i18n.locale == 'bn'" class="highlight-title">
          <h2 class="highlight-title-heading">হাইলাইট</h2>
        </div>

        <div v-if="highlights.length > 0" class="media-card">
          <nuxt-link
            :to="{
              path: '/media-details/',
              query: { media: singleHighlight.slug },
            }"
            v-for="singleHighlight in highlights"
            :key="singleHighlight.id"
            class="media-image"
          >
            <div
              class="media-image"
              :style="{ backgroundImage: `url(${singleHighlight.image_url})` }"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div class="ipdc-enters">
                <div class="ipdc-enters-title">
                  <h3>
                    {{
                      $i18n.locale == "en"
                        ? singleHighlight.title
                        : singleHighlight.title_bangla
                    }}
                  </h3>
                  <p>
                    {{
                      $i18n.locale == "en"
                        ? formatDate(singleHighlight.publish_date)
                        : formatDateBangla(singleHighlight.publish_date)
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
        <div v-else class="text-center">
          {{ $i18n.locale == "en" ? "Data Not Found!" : "তথ্য পাওয়া যায়নি!" }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    highlights: {
      type: Array,
      default: () => [],
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
  },
};
</script>

<style lang="scss" scoped>
.media {
  &-title {
    display: none;
    text-align: center;
    padding: 100px 0;
    &-heading {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
    &-description {
      font-size: 16px;
      line-height: 137.5%;
      color: #999999;
      padding: 15px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .highlight {
    padding: 60px 0 0 0;
    &-title {
      text-align: center;
      &-heading {
        font-weight: bold;
        font-size: 30px;
        line-height: 133%;
        color: #343434;
        padding-bottom: 20px;
        .font-bn & {
          font-size: 35px;
        }
      }
    }
    .media-card {
      display: flex;
      gap: 30px;
      padding: 0 0 100px 0;
      justify-content: center;
      .media-image {
        position: relative;
        width: 555px;
        height: 357px;
        border-radius: 14px 14px 0 0;
        cursor: pointer;
        background-size: cover;
        background-position: top;

        .ipdc-enters {
          position: absolute;
          height: 109px;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(65, 63, 63, 0.4);
          backdrop-filter: blur(11px);
          display: flex;
          justify-content: space-between;
          &-title {
            padding: 15px;
            h3 {
              font-weight: bold;
              font-size: 20px;
              line-height: 130%;
              color: #ffffff;
              padding-bottom: 10px;
              .font-bn & {
                font-size: 25px;
              }
            }
            p {
              font-size: 14px;
              line-height: 137.1%;
              letter-spacing: 0.02em;
              color: #ffffff;
              .font-bn & {
                font-size: 19px;
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
              width: 10px;
              height: 10px;
            }
          }
        }
        &:hover {
          transition: 0.3s;
          transform: scale(0.98);
          .ipdc-enters {
            .arrow-button {
              animation: move 0.4s infinite linear alternate;
            }
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
  .media {
    &-title {
      padding: 100px 0 50px 0;
      &-heading {
        font-size: 30px;
        .font-bn & {
          font-size: 35px;
        }
      }
      &-description {
        padding: 15px 0;
      }
    }

    .highlight {
      &-title {
        &-heading {
          font-size: 25px;
          padding-bottom: 30px;
          .font-bn & {
            font-size: 30px;
          }
        }
      }
      .media-card {
        display: flex;
        flex-direction: column;
        padding: 0 0 50px 0;
        .media-image {
          width: unset;
          height: 357px;
          border-radius: 14px 14px 0 0;

          .ipdc-enters {
            position: absolute;
            height: 139px;
            &-title {
              padding: 15px;
              // h3 {
              // }
              // p {
              // }
            }
            .arrow-button {
              width: 40px;
              height: 30px;
              margin: 15px 20px 0 0;
              // img {
              // }
            }
          }
        }
      }
    }
  }
}
</style>
