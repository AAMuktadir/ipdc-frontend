<template>
  <section class="container" v-if="termsCondition">
    <div class="campaign-terms">
      <div class="campaign-terms-heading">
        <h3>
          {{ $i18n.locale == "en" ? "Terms & Conditions:" : "শর্তাবলী:" }}
        </h3>
        <div class="campaign-terms-condition">
          <!-- <p v-if="$i18n.locale == 'en'" v-html="termsCondition"></p>
          <p
            v-if="$i18n.locale == 'bn' && termsConditionBangla"
            v-html="termsConditionBangla"
          ></p> -->
        </div>
        <div class="apply-for-campaign">
          <div class="apply-button">
            <a href="/customer-signup" target="_blank">{{
              $i18n.locale == "en"
                ? "Apply for the campaign"
                : "ক্যাম্পেইনের জন্য আবেদন করুন:"
            }}</a>
            <img src="~/assets/image/right arrow.png" alt="right arrow" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    termsCondition: {
      type: Object,
      default: () => {},
    },
    termsConditionBangla: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.campaign-terms {
  padding: 50px 0 0 0;
  &-heading {
    h3 {
      font-weight: bold;
      font-size: 22px;
      line-height: 140.91%;
      color: #343434;
      margin-bottom: 18px;
      .font-bn & {
        font-size: 27px;
      }
    }

    .campaign-terms-condition {
      p {
        font-size: 16px;
        line-height: 154.3%;
        color: #5d5d5d;
        .font-bn & {
          font-size: 21px;
        }
      }
    }

    .apply-for-campaign {
      padding: 90px 0 84px 0;
      .apply-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 337px;
        height: 50px;
        background: #ed017f;
        border-radius: 4px;
        padding: 13px 22px;
        cursor: pointer;
        transition: transform 0.3s ease;

        a {
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ffffff;
          .font-bn & {
            font-size: 19px;
          }
        }
        img {
          height: 12px;
          width: 12px;
          filter: brightness(0) invert(1);
          transition: transform 0.4s ease;
        }

        &:hover {
          transform: scale(0.99);
          img {
            animation: move 0.4s infinite linear alternate;
          }
        }
      }
    }
  }
}

@keyframes move {
  0% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(4px);
  }
}
</style>
