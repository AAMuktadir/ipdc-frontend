<template>
  <div class="container">
    <div class="personal-offer">
      <div class="personal-offer-title" v-if="offerHeading">
        <h1 class="offer-title">
          {{ offerHeading.title }}
        </h1>
        <p class="offer-description">
          {{ offerHeading.sub_title }}
        </p>
      </div>
      <div
        v-if="personalLoanWhatWeOfferCard.length > 0"
        class="personal-card"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        <div class="interest attractive-interest">
          <img :src="personalLoanWhatWeOfferCard[0].image" alt="" />
          <h4>{{ personalLoanWhatWeOfferCard[0].title }}</h4>
        </div>
        <div class="interest fastest-processing">
          <img :src="personalLoanWhatWeOfferCard[1].image" alt="" />
          <h4>{{ personalLoanWhatWeOfferCard[1].title }}</h4>
        </div>
        <div class="interest new-financing">
          <img :src="personalLoanWhatWeOfferCard[2].image" alt="" />
          <h4>{{ personalLoanWhatWeOfferCard[2].title }}</h4>
        </div>
        <div class="interest freedom-choice">
          <img :src="personalLoanWhatWeOfferCard[3].image" alt="" />
          <h4>{{ personalLoanWhatWeOfferCard[3].title }}</h4>
        </div>
        <div class="interest hidden-charge">
          <img :src="personalLoanWhatWeOfferCard[4].image" alt="" />
          <h4>{{ personalLoanWhatWeOfferCard[4].title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    personalLoanWhatWeOfferCard: {
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
.personal-offer {
  padding: 88px 0;
  &-title {
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
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .personal-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    flex-basis: 100%;
    .interest {
      display: flex;
      background: #e6f7f0;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      padding: 40px;
      flex-basis: calc(33.33333% - 40px / 3);
      cursor: pointer;
      img {
        width: 46px;
        height: 47px;
      }
      h4 {
        font-weight: bold;
        font-size: 22px;
        line-height: 127.27%;
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
    .freedom-choice {
      flex-basis: calc(50% - 10px);
    }
    .hidden-charge {
      flex-basis: calc(50% - 10px);
    }
  }
}

@media screen and (max-width: 768px) {
  .personal-offer {
    padding: 50px 0;
    &-title {
      text-align: center;
      padding-bottom: 50px;
      .offer-title {
        font-size: 25px;
        margin-bottom: 15px;
        .font-bn & {
          font-size: 30px;
        }
      }
      //.offer-description {
      //}
    }
    .personal-card {
      flex-basis: 100%;
      .interest {
        flex-basis: 100%;
        img {
          margin-right: 20px;
        }
      }
      .freedom-choice {
        flex-basis: 100%;
      }
      .hidden-charge {
        flex-basis: 100%;
      }
    }
  }
}
</style>
