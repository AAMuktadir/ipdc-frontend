<template>
  <section class="media-details">
    <div
      class="container"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div class="media-left-arrow">
        <a href="#" @click="goToPrev()">
          <svg
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.1247 11.375H7.99591L15.0084 4.38375C15.4086 3.9836 15.6334 3.44089 15.6334 2.875C15.6334 2.30911 15.4086 1.76639 15.0084 1.36625C14.6083 0.966102 14.0655 0.741302 13.4997 0.741302C12.9338 0.741302 12.3911 0.966102 11.9909 1.36625L1.36591 11.9912C1.17245 12.1933 1.0208 12.4317 0.919658 12.6925C0.707119 13.2099 0.707119 13.7901 0.919658 14.3075C1.0208 14.5683 1.17245 14.8067 1.36591 15.0087L11.9909 25.6337C12.1885 25.8329 12.4235 25.991 12.6824 26.0989C12.9414 26.2068 13.2191 26.2623 13.4997 26.2623C13.7802 26.2623 14.0579 26.2068 14.3169 26.0989C14.5758 25.991 14.8109 25.8329 15.0084 25.6337C15.2076 25.4362 15.3657 25.2012 15.4736 24.9422C15.5814 24.6833 15.637 24.4055 15.637 24.125C15.637 23.8445 15.5814 23.5667 15.4736 23.3078C15.3657 23.0488 15.2076 22.8138 15.0084 22.6162L7.99591 15.625H24.1247C24.6882 15.625 25.2287 15.4011 25.6273 15.0026C26.0258 14.6041 26.2497 14.0636 26.2497 13.5C26.2497 12.9364 26.0258 12.3959 25.6273 11.9974C25.2287 11.5989 24.6882 11.375 24.1247 11.375Z"
              fill="red"
            />
          </svg>
        </a>
      </div>
      <div class="media-experience">
        <div v-if="$i18n.locale == 'en'" class="media-list">
          <nuxt-link to="/news">Media<span>/</span></nuxt-link>
          <nuxt-link to="/media-details">Media Details</nuxt-link>
        </div>
        <div v-if="$i18n.locale == 'bn'" class="media-list">
          <nuxt-link to="/bn/news">মিডিয়া<span>/</span></nuxt-link>
          <nuxt-link to="/media-details">মিডিয়া বিবরণ</nuxt-link>
        </div>
        <div class="media-experience-heading">
          <h1>
            {{
              $i18n.locale == "en"
                ? singleMedia.title
                : singleMedia.title_bangla
            }}
          </h1>
        </div>
        <div
          class="media-experience-image"
          :style="{ backgroundImage: `url(${singleMedia.image_url})` }"
        />
        <div
          class="media-experience-description"
          v-if="$i18n.locale == 'en'"
          v-html="singleMedia.description"
        ></div>
        <div
          class="media-experience-description"
          v-if="$i18n.locale == 'bn'"
          v-html="singleMedia.description_bangla"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    singleMedia: {
      type: Object,
      default: null,
    },
  },
  methods: {
    goToPrev() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.media-details {
  padding-top: 40px;
  .media-left-arrow {
    a {
      cursor: pointer;
      svg {
        width: 20px;
        height: 20px;
        margin-top: 30px;
        path {
          fill: #343434;
        }
      }
      &:hover {
        svg {
          path {
            fill: #a4d034;
          }
        }
      }
    }
  }
  .media-experience {
    position: relative;
    .media-list {
      text-align: right;
      padding-bottom: 35px;

      a {
        text-decoration: none;
        color: #5d5d5d;
        font-size: 16px;
        line-height: 154.3%;
        .font-bn & {
          font-size: 21px;
        }

        &:hover,
        &:focus {
          color: #a4d034;
        }
        span {
          &:hover,
          &:focus {
            color: #a4d034;
          }
        }
      }
    }

    &-heading {
      h1 {
        font-weight: bold;
        font-size: 30px;
        line-height: 133%;
        color: #343434;
        margin-bottom: 30px;
        .font-bn & {
          font-size: 35px;
        }
      }
    }

    &-image {
      width: 100%;
      height: 436px;
      border-radius: 8px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    &-description {
      padding: 50px 0;
      p {
        font-size: 16px;
        line-height: 154.3%;
        color: #343434;
        margin-bottom: 20px;
        .font-bn & {
          font-size: 21px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .media-details {
    .media-experience {
      position: relative;
      .media-list {
        display: none;
      }

      &-heading {
        margin-top: 50px;
        h1 {
          font-size: 25px;
          .font-bn & {
            font-size: 30px;
          }
        }
      }

      &-image {
        width: unset;
        height: 436px;
        background-size: cover;
        background-position: center;
      }

      &::before {
        display: none;
      }

      &-description {
        padding: 50px 0;
        // p {
        // }
      }
    }
  }
}
</style>
