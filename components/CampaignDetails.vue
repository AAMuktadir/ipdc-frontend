<template>
  <section class="campaign-details" v-if="singleCampaign">
    <div class="container">
      <div
        class="campaigns-cards"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div class="campaign-list">
          <nuxt-link :to="localePath('/campaign')">
            <img src="~/assets/image/left arrow.svg" alt="" />
          </nuxt-link>
          <nuxt-link :to="localePath('/campaign')">
            {{ $i18n.locale == "en" ? "Campaign" : "প্রচারণা" }}
            <span>/</span></nuxt-link
          >
          <span>
            {{ $i18n.locale == "en" ? "Campaign details" : "প্রচারের বিবরণ" }}
          </span>
        </div>
        <div class="campaigns-cards-heading">
          <h1>
            {{
              $i18n.locale == "en"
                ? singleCampaign.title
                : singleCampaign.title_bangla
            }}
          </h1>
        </div>
        <div class="campaign-duration" v-if="singleCampaign.publish_date">
          <div class="campaign-duration-text">
            <p>
              {{
                $i18n.locale == "en" ? "Campaign Duration" : "প্রচারের সময়কাল"
              }}
            </p>
            <h4>
              {{
                $i18n.locale == "en"
                  ? formatDate(singleCampaign.publish_date)
                  : formatDateBangla(singleCampaign.publish_date)
              }}
            </h4>
          </div>
          <div class="duration-date">
            <!-- <img src="~/assets/image/duration.png" alt=""> -->
          </div>
        </div>
        <div class="campaign-description">
          <div
            v-if="$i18n.locale == 'en'"
            v-html="singleCampaign.short_description"
          ></div>
          <div
            v-if="$i18n.locale == 'bn'"
            v-html="singleCampaign.short_description_bangla"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    singleCampaign: {
      type: Object,
      default: null,
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
.campaign-details {
  .campaigns-cards {
    position: relative;
    padding: 35px 0 0 0;

    .campaign-list {
      text-align: right;
      padding-bottom: 35px;
      cursor: pointer;
      a {
        img {
          &:hover {
            transition: 0.3s;
            transform: scale(1.2);
          }
        }
      }
      a {
        color: #343434;
        text-decoration: none;
        &:hover,
        &:focus {
          color: #ed017f;
        }
      }
      span {
        &:hover {
          color: #ed017f;
        }
      }
    }
    &-heading {
      padding: 35px 0 35px 0;
      h1 {
        font-weight: bold;
        font-size: 30px;
        line-height: 133%;
        color: #343434;
        .font-bn & {
          font-size: 35px;
        }
      }
    }

    .campaign-duration {
      position: relative;
      width: 297px;
      height: 92px;
      padding: 17px;
      background: #f3f3f3;
      border: 1px solid #e7e7e7;
      border-radius: 8px;
      .campaign-duration-text {
        margin-left: 60px;
        p {
          font-size: 14px;
          line-height: 137.1%;
          letter-spacing: 0.02em;
          .font-bn & {
            font-size: 19px;
          }
        }
        h4 {
          font-weight: bold;
          font-size: 21px;
          line-height: 147.62%;
          color: #343434;
          .font-bn & {
            font-size: 26px;
          }
        }
      }
      .duration-date {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 48px;
        height: 48px;
        background: #35db95;
        border-radius: 50%;
        margin-right: 30px;

        &::before {
          content: url("~/assets/image/duration.png");
          position: absolute;
          left: 30%;
          top: 30%;
        }
      }
    }
    // &::before {
    //     content: url("~/assets/image/left arrow.svg");
    //     position: absolute;
    //     left: 0;
    //     top: 10%;
    //     filter: grayscale(100%);
    // }

    .campaign-description {
      padding: 35px 0;
      p {
        font-size: 16px;
        line-height: 154.3%;
        color: #5d5d5d;
        .font-bn & {
          font-size: 21px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .campaign-details {
    .campaigns-cards {
      position: relative;
      padding: 35px 0 0 0;

      .campaign-list {
        display: none;
      }
      &-heading {
        h1 {
          font-size: 25px;
          .font-bn & {
            font-size: 30px;
          }
        }
      }
      &::before {
        display: none;
      }
    }
  }
}
</style>
