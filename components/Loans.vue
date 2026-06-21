<template>
  <section class="loan">
    <div class="loans" v-if="sliderCards.length > 0">
      <a
        @click="changeStep(item)"
        class="loan individual-loans"
        v-for="item in sliderCards"
        :key="item.id"
      >
        <div class="loans-image">
          <img :src="item.icon" alt="img" />
        </div>
        <div class="loans-title">
          <h5 v-if="$i18n.locale == 'en'">{{ item.name }}</h5>
          <h5 v-if="$i18n.locale == 'bn'">
            {{ item.name_bangla }}
          </h5>
        </div>
      </a>
    </div>
    <div class="back_button" v-if="showBackButton">
      <button class="service" @click="backToHome()">
        <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.1247 11.375H7.99591L15.0084 4.38375C15.4086 3.9836 15.6334 3.44089 15.6334 2.875C15.6334 2.30911 15.4086 1.76639 15.0084 1.36625C14.6083 0.966102 14.0655 0.741302 13.4997 0.741302C12.9338 0.741302 12.3911 0.966102 11.9909 1.36625L1.36591 11.9912C1.17245 12.1933 1.0208 12.4317 0.919658 12.6925C0.707119 13.2099 0.707119 13.7901 0.919658 14.3075C1.0208 14.5683 1.17245 14.8067 1.36591 15.0087L11.9909 25.6337C12.1885 25.8329 12.4235 25.991 12.6824 26.0989C12.9414 26.2068 13.2191 26.2623 13.4997 26.2623C13.7802 26.2623 14.0579 26.2068 14.3169 26.0989C14.5758 25.991 14.8109 25.8329 15.0084 25.6337C15.2076 25.4362 15.3657 25.2012 15.4736 24.9422C15.5814 24.6833 15.637 24.4055 15.637 24.125C15.637 23.8445 15.5814 23.5667 15.4736 23.3078C15.3657 23.0488 15.2076 22.8138 15.0084 22.6162L7.99591 15.625H24.1247C24.6882 15.625 25.2287 15.4011 25.6273 15.0026C26.0258 14.6041 26.2497 14.0636 26.2497 13.5C26.2497 12.9364 26.0258 12.3959 25.6273 11.9974C25.2287 11.5989 24.6882 11.375 24.1247 11.375Z"
            fill="white"
          />
        </svg>
      </button>
    </div>

    <div>
      <div v-if="isPrimaryPopUpShow" id="popup" class="loan-popup">
        <div class="popup">
          <div class="close-button">
            <a class="close" @click="isPrimaryPopUpShow = !isPrimaryPopUpShow"
              >&times;</a
            >
          </div>
          <div class="content">
            <p>{{ testData }}</p>
            <ol>
              <li><a href="#">Home Loan</a></li>
              <li><a href="#">Auto Loan</a></li>
              <li><a href="#">Bhalo Basha Loan</a></li>
              <li><a href="#">Personal Loan</a></li>
            </ol>
          </div>
          <div
            class="close-button footer-button"
            @click="isPrimaryPopUpShow = !isPrimaryPopUpShow"
          >
            <a class="second-close">Close</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPrimaryPopUpShow: false,
      testData: "",
      cardId: "",
      sliderCards: [],
      showBackButton: false,
    };
  },

  created() {
    this.getSliderCards();
  },
  methods: {
    popupHandler(text) {
      this.isPrimaryPopUpShow = true;
      this.testData = text;
    },
    async getSliderCards() {
      const response = await this.$axios.get(`/get-slider-cards`);
      this.sliderCards = response.data.data.cards;
    },

    async getSliderCardsById() {
      const response = await this.$axios.get(
        `/get-slider-cards/${this.cardId}`
      );
      this.sliderCards = response.data.data.cards;
    },
    changeStep(card) {
      if (card.step === 1) {
        this.showBackButton = true;
        this.cardId = card.id;
        if (card.redirect_link) {
          this.$router.push(card.redirect_link);
        } else {
          this.getSliderCardsById();
        }
      } else if (card.step === 2) {
        this.cardId = "";
        this.$router.push(card.redirect_link);
      } else {
        this.backToHome();
      }
    },

    backToHome() {
      this.cardId = "";
      this.getSliderCards();
      this.showBackButton = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.loan {
  padding-bottom: 5px;
  .loans {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 31.8293px 25px 20px 25px;

    .loan {
      position: relative;
      width: 142px;
      height: 175px;
      border-radius: 7.46929px;
      margin: 8px;
      margin-top: -120px;
      z-index: 1;
      background: #ffffff;
      box-shadow: 2.98772px 2.98772px 43.3219px rgba(0, 0, 0, 0.07);
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-top: 40px;
      cursor: pointer;
      // backdrop-filter: brightness(0);
      transition: background-image, 0.7s;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        border-radius: 7.46929px;
        background-image: linear-gradient(
          152.61deg,
          #e01280 -2.16%,
          #e60f81 37.81%,
          #e77575 87.08%
        );
        filter: brightness(0) invert(1);
        z-index: -1;
        // transition: all 0.7s;
      }

      .loans-title {
        font-weight: 600;
        font-size: 16px;
        line-height: 131.25%;
        color: #343434;
        h5 {
          .font-bn & {
            font-size: 1.5rem;
          }
        }
      }

      .loans-image {
        width: 45px;
        height: 45px;
        margin-bottom: 10px;
      }

      &:hover {
        transition: 0.6s;
        transform: scale(1.1);
        &::before {
          filter: brightness(1) invert(0);
        }

        .loans-title {
          color: #ffffff;
        }

        .loans-image {
          filter: brightness(0) invert(1);
        }
      }
    }
  }
  .back_button {
    text-align: center;
    .service {
      background: #ed017f;
      color: #ffffff;
      border: none;
      padding: 2px 8px 4px 8px;
      border-radius: 4px;
      svg {
        width: 20px;
        height: 20px;
      }
      &:hover {
        transition: 1s;
        transform: scale(1.2);
        background: #f52c97;
      }
    }
  }
  .loan-popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    // visibility: hidden;
    // opacity: 0;
    z-index: 1;

    &:target {
      visibility: visible;
      opacity: 1;
    }

    .popup {
      margin: 70px auto;
      // padding: 20px;
      background: #fff;
      border-radius: 10px;
      width: 55%;
      position: relative;
      transition: all 5s ease-in-out;

      .close-button {
        width: 100%;
        height: 40px;
        background: rgb(204, 199, 199);
        border-radius: 10px 10px 0 0;
        cursor: pointer;

        .close {
          position: absolute;
          top: 10px;
          right: 30px;
          transition: all 200ms;
          font-size: 30px;
          font-weight: bold;
          text-decoration: none;
          color: #333;

          &:hover {
            color: #d80681;
          }
        }
      }

      .footer-button {
        position: relative;
        background: #df4ba1;
        border-radius: 0 0 10px 10px;

        &:hover {
          background: #c03084;
        }

        .second-close {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%);
          text-decoration: none;
          color: #ffffff;
          font-size: 14px;
          transition: all 200ms;
        }
      }

      .content {
        max-height: 30%;
        overflow: auto;
        display: flex;
        justify-content: center;
        padding: 40px 0;

        ol {
          li {
            a {
              text-decoration: none;
              color: #333;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .loan-popup {
    // &:target {
    // }

    .popup {
      width: 90%;
      height: 50%;

      // .close-button {
      //   .close {
      //     &:hover {
      //     }
      //   }
      // }

      .footer-button {
        position: absolute;
        bottom: 0;
        background: #df4ba1;
        border-radius: 0 0 10px 10px;
      }

      .content {
        max-height: unset;
        padding: 80px 0 0 0;

        ol {
          li {
            a {
              text-decoration: none;
              color: #333;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .loan {
    display: none;
    .loans {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: -80px;

      .loan {
        display: flex;
        flex-direction: row;
        width: 335px;
        height: 77px;
        border-radius: 7.46929px;
        margin: 8px;
        background: #ffffff;
        box-shadow: 2.98772px 2.98772px 43.3219px rgba(0, 0, 0, 0.07);
        text-decoration: none;
        padding: 15px 0 5px 40px;
        gap: 22px;

        // .loans-title {
        // }

        // .loans-image {
        // }

        &:hover {
          background: linear-gradient(
            152.61deg,
            #fa0085 -2.16%,
            #fa0085 37.81%,
            #ff9292 87.08%
          );

          .loans-title {
            color: #ffffff;
          }

          .loans-image {
            filter: brightness(0) invert(1);
          }
        }

        &:first-child {
          background: linear-gradient(
            152.61deg,
            #fa0085 -2.16%,
            #fa0085 37.81%,
            #ff9292 87.08%
          );

          .loans-title {
            color: #ffffff;
          }

          .loans-image {
            filter: brightness(0) invert(1);
          }
        }
      }
    }
  }
}
</style>
