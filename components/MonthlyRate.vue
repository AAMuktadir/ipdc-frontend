<template>
  <section class="monthly-rate">
    <div class="container" v-if="monthlyBaseRateHeading">
      <div
        class="monthly-base-rate"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="monthly-base-title">
          <h1>
            {{
              $i18n.locale == "en"
                ? monthlyBaseRateHeading.title
                : monthlyBaseRateHeading.title_bangla
            }}
          </h1>
          <p>
            {{
              $i18n.locale == "en"
                ? monthlyBaseRateHeading.sub_title
                : monthlyBaseRateHeading.sub_title_bangla
            }}
          </p>
        </div>

        <div
          class="view-details-button"
          v-if="monthlyBaseRateHeading.button_link"
        >
          <a
            target="_blank"
            :href="monthlyBaseRateHeading.button_link"
            v-if="$i18n.locale == 'en'"
            class="view-details"
            >View Details</a
          >
          <a
            target="_blank"
            :href="monthlyBaseRateHeading.button_link"
            v-if="$i18n.locale == 'bn'"
            class="view-details"
            >বিস্তারিত দেখুন</a
          >
        </div>
        <div class="view-details-button" v-else>
          <a href="#" v-if="$i18n.locale == 'en'" class="view-details"
            >View Details</a
          >
          <a href="#" v-if="$i18n.locale == 'bn'" class="view-details"
            >বিস্তারিত দেখুন</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    monthlyBaseRateHeading: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.monthly-rate {
  background: rgba(234, 241, 249, 0.3);
  margin: 0 0 100px 0;
  .monthly-base-rate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 147px 0;
    .monthly-base-title {
      max-width: 800px;
      h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        color: #343434;
      }
      p {
        font-size: 16px;
        line-height: 137.5%;
        color: #858585;
        padding: 10px 0 0 0;
      }
    }
    .view-details-button {
      .view-details {
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        color: #ffffff;
        text-decoration: none;
        letter-spacing: 2px;
        text-transform: uppercase;
        background: #ed017f;
        border-radius: 4px;
        padding: 18px 51px 18px 22px;
        position: relative;
        &::after {
          content: "";
          height: 12px;
          width: 12px;
          position: absolute;
          top: 46%;
          right: 25px;
          transform: translateY(-50%);
          background: url("~/assets/image/whiteright.svg");
          background-repeat: no-repeat;
          filter: brightness(0) invert(1);
        }

        &:hover {
          border: 3px solid #ed017f;
          transition: 0.2s;
          transform: scale(1.05);
          background: #ffffff;
          overflow: hidden;
          color: #ed017f;
          &::after {
            filter: brightness(1) invert(0);
            animation: move 0.4s infinite linear alternate;
            margin: -5px 0 0 0;
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
  .monthly-rate {
    background: rgba(234, 241, 249, 0.3);
    margin: 0 0 100px 0;
    .monthly-base-rate {
      display: flex;
      flex-direction: column;
      padding: 47px 0;
      gap: 30px;
      .monthly-base-title {
        margin-bottom: 37px;
        h1 {
          font-size: 25px;
        }
        // p {
        // }
      }
      .view-details-button {
        margin-left: -100px;
        // .view-details {
        // }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .monthly-rate {
    background: rgba(234, 241, 249, 0.3);
    margin: 0 0 100px 0;
    .monthly-base-rate {
      display: flex;
      flex-direction: column;
      padding: 47px 0;
      gap: 30px;
      .monthly-base-title {
        margin-bottom: 37px;
        h1 {
          font-size: 25px;
        }
        // p {
        // }
      }
      .view-details-button {
        margin-left: -135px;
        // .view-details {
        // }
      }
    }
  }
}
</style>
