<template>
  <section class="personal-term-amount">
    <div class="container">
      <div class="terms-amount">
        <div class="terms-amount-title" v-if="termAmountHeading">
          <h1>{{ termAmountHeading.title }}</h1>
          <!-- <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Dictum augue arcu, porttitor id sollicitudin suscipit.
          </p> -->
        </div>
        <div
          v-if="personalLoanTermAmount.length > 0"
          class="term-card"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div class="terms amount">
            <img :src="personalLoanTermAmount[0].image" alt="icon" />
            <h5 class="terms-title">
              {{ personalLoanTermAmount[0].title }}
            </h5>
            <p class="terms-description">
              {{ personalLoanTermAmount[0].description }}
            </p>
          </div>
          <div class="terms term">
            <img :src="personalLoanTermAmount[1].image" alt="icon" />
            <h5 class="terms-title">
              {{ personalLoanTermAmount[1].title }}
            </h5>
            <p class="terms-description">
              {{ personalLoanTermAmount[1].description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    personalLoanTermAmount: {
      type: Array,
      default: [],
    },
    termAmountHeading: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.personal-term-amount {
  background: rgba(243, 251, 249, 0.5);
  padding: 84px 0;
  .terms-amount {
    &-title {
      text-align: center;
      margin-bottom: 75px;
      h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        color: #343434;
        .font-bn & {
          font-size: 41px;
        }
      }
      p {
        font-size: 16px;
        line-height: 154.3%;
        color: #858585;
        padding: 15px 220px;
        .font-bn & {
          font-size: 21px;
        }
      }
    }
    .term-card {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      .terms {
        display: flex;
        flex-direction: column;
        align-items: center;
        // flex: 1;
        // min-width: calc(50% - 20px/2);
        width: 259px;
        min-height: 272px;
        background: #ffffff;
        border: 1px solid #e7e7e7;
        box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
        border-radius: 12px;
        padding: 30px 5px 0 5px;

        img {
          width: 62px;
          height: 62px;
          margin-bottom: 10px;
        }
        .terms-title {
          text-align: center;
          font-weight: bold;
          font-size: 22px;
          line-height: 140.91%;
          color: #343434;
          .font-bn & {
            font-size: 27px;
          }
        }
        .terms-description {
          text-decoration: none;
          text-align: center;
          font-size: 16px;
          line-height: 154.3%;
          color: #858585;
          .font-bn & {
            font-size: 21px;
          }
        }
        &:hover {
          transition: 0.2s;
          transform: scale(0.97);
          img {
            transition: 0.2s;
            transform: scale(1.3);
          }
          .terms-description {
            color: #343434;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .personal-term-amount {
    background: rgba(243, 251, 249, 0.5);
    padding: 50px 0;
    .terms-amount {
      &-title {
        text-align: center;
        margin-bottom: 50px;
        h1 {
          font-size: 25px;
          .font-bn & {
            font-size: 30px;
          }
        }
        p {
          padding: 15px 0;
        }
      }
      .term-card {
        display: flex;
        flex-direction: column;
        .terms {
          width: 100%;
          padding-bottom: 30px;
          img {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
