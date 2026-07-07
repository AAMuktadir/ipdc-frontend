<template>
  <div class="container">
    <div class="deposit-offer">
      <div class="deposit-offer-title" v-if="offerHeading">
        <h2 v-if="$i18n.locale == 'en'" class="offer-title">
          {{ offerHeading.title }}
        </h2>
        <h2 v-if="$i18n.locale == 'bn'" class="offer-title">
          {{ offerHeading.title_bangla }}
        </h2>
        <p
          v-if="$i18n.locale == 'en'"
          class="offer-description"
          v-html="offerHeading.sub_title"
        ></p>
        <p
          v-if="$i18n.locale == 'bn'"
          class="offer-description"
          v-html="offerHeading.sub_title_bangla"
        ></p>
      </div>
      <div
        v-if="loanWhatWeOfferCards.length > 0"
        class="deposit-card"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="600"
      >
        <div
          v-for="singleWhatWeOffer in loanWhatWeOfferCards"
          :key="singleWhatWeOffer.id"
          class="interest attractive-interest"
        >
          <img :src="singleWhatWeOffer.image" alt="" />
          <h4 v-if="$i18n.locale == 'en'">{{ singleWhatWeOffer.title }}</h4>
          <h4 v-if="$i18n.locale == 'bn'">
            {{ singleWhatWeOffer.title_bangla }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loanWhatWeOfferCards: {
      type: Array,
      default: [],
    },
    offerHeading: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.deposit-offer {
  padding: 88px 0;
  .deposit-offer-title {
    text-align: center;
    padding-bottom: 90px;
    .offer-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
    .offer-description {
      // text-align: justify;
      text-align: center;
      justify-self: center;
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .deposit-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    .interest {
      display: flex;
      // width: 356px;
      min-height: 132px;
      background: #e6f7f0;
      border-radius: 12px;
      align-items: center;
      justify-content: center;
      padding: 10px 15px;
      // padding: 0 0 0 20px;
      flex-basis: calc(33.333% - 40px / 3);
      img {
        width: 46px;
        height: 47px;
      }
      h4 {
        // font-weight: bold;
        font-size: 22px;
        line-height: 127%;
        color: #343434;
        margin-left: 10px;
        word-break: break-word;
        .font-bn & {
          font-size: 27px;
        }
      }
      &:hover {
        transition: 0.3s;
        transform: scale(0.98);
        img {
          transition: 0.3s;
          transform: scale(1.3);
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .deposit-offer {
    width: 100%;
    padding: 50px 0;
    .deposit-offer-title {
      // .offer-title {
      // }
      .offer-description {
        padding: 0;
      }
    }
    .deposit-card {
      width: 100%;
      flex-direction: column;

      .interest {
        width: 100%;
        padding-left: 30px;
        // img {
        // }
        h4 {
          margin-right: auto;
          margin-left: 30px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .deposit-offer {
    width: 100%;
    padding: 50px 0;
    .deposit-offer-title {
      // .offer-title {
      // }
      .offer-description {
        padding: 0;
      }
    }
    .deposit-card {
      width: 100%;
      flex-direction: column;

      .interest {
        width: 100%;
        padding-left: 30px;
        // img {
        // }
        h4 {
          margin-right: auto;
          margin-left: 30px;
        }
      }
    }
  }
}
</style>
