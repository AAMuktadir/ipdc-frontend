<template>
  <div class="loan-term-amount" v-if="loanTermAmount.length > 0">
    <div class="container">
      <div class="term-amount">
        <div class="term-amount-title" v-if="termAmountHeading">
          <h2>
            {{
              $i18n.locale == "en"
                ? termAmountHeading.title
                : termAmountHeading.title_bangla
            }}
          </h2>
          <p v-if="$i18n.locale == 'en' && termAmountHeading.sub_title">
            {{ termAmountHeading.sub_title }}
          </p>
          <p v-if="$i18n.locale == 'bn' && termAmountHeading.sub_title_bangla">
            {{ termAmountHeading.sub_title_bangla }}
          </p>
        </div>
        <div class="terms-card" v-if="loanTermAmount">
          <div
            class="terms amount"
            v-for="singleTermAmount in loanTermAmount"
            :key="singleTermAmount.id"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <img :src="singleTermAmount.image" alt="icon" />
            <h3 class="terms-title">
              {{
                $i18n.locale == "en"
                  ? singleTermAmount.title
                  : singleTermAmount.title_bangla
              }}
            </h3>
            <p class="terms-description">
              {{
                $i18n.locale == "en"
                  ? singleTermAmount.description
                  : singleTermAmount.description_bangla
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loanTermAmount: {
      type: Array,
      default: () => [],
    },
    termAmountHeading: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.loan-term-amount {
  background: rgba(243, 251, 249, 0.5);
  padding: 84px 0;
  .term-amount {
    .term-amount-title {
      text-align: center;
      margin-bottom: 75px;
      h2 {
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
    .terms-card {
      display: flex;
      flex-wrap: wrap;
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
          // width: 62px;
          height: 65px;
          margin-bottom: 18px;
        }
        .terms-title {
          text-align: center;
          font-weight: bold;
          font-size: 22px;
          line-height: 141%;
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
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .loan-term-amount {
    background: rgba(243, 251, 249, 0.5);
    padding: 50px 0;
    .term-amount {
      .term-amount-title {
        text-align: center;
        margin-bottom: 50px;
        h2 {
          font-size: 25px;
        }
        p {
          padding: 15px 0;
        }
      }
      .terms-card {
        display: flex;
        flex-direction: column;
        .terms {
          width: unset;
          img {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>
