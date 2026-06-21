<template>
  <div class="loan-term-amount">
    <div class="container">
      <div class="term-amount">
        <div class="term-amount-title" v-if="termAmountHeading">
          <h1>
            {{
              $i18n.locale == "en"
                ? termAmountHeading.title
                : termAmountHeading.title_bangla
            }}
          </h1>
          <p v-if="$i18n.locale == 'en' && termAmountHeading.sub_title">
            {{ termAmountHeading.sub_title }}
          </p>
          <p v-if="$i18n.locale == 'bn' && termAmountHeading.sub_title_bangla">
            {{ termAmountHeading.sub_title_bangla }}
          </p>
        </div>
        <div v-if="buttonText" class="coverimage">
          <div class="service_button">
            <a :href="buttonText.url" target="_blank">
              <button v-if="$i18n.locale == 'en'" class="buttonText">
                {{ buttonText.btnTxt }}
              </button>
              <button v-if="$i18n.locale == 'bn'" class="buttonText">
                {{ buttonText.btnTxt_bn }}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // loanTermAmount: {
    //   type: Array,
    //   default: () => [],
    // },
    buttonText: {
      type: Object,
      default: {},
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
  .service_button {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    .buttonText {
      min-height: 40px;
      background: #ed017f;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 500;
      padding: 10px 40px;
      white-space: nowrap;
      box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.3);
      .font-bn & {
        font-size: 21px;
      }
      &:hover {
        color: #ffffff;
        background: #ff0088;
        transition: 0.45s all ease-in-out;
        box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
      }
    }
  }
  .term-amount {
    .term-amount-title {
      text-align: center;
      margin-bottom: 35px;
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
        h1 {
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
