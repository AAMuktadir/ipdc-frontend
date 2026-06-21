<template>
  <div v-if="ongoingCampaigns.length > 0">
    <div v-if="depositSchemeLearnMoreHeading" class="deposit-details container">
      <h1 class="deposit-title">
        {{
          $i18n.locale == "en"
            ? depositSchemeLearnMoreHeading.title
            : depositSchemeLearnMoreHeading.title_bangla
        }}
      </h1>
      <p class="deposit-description">
        {{
          $i18n.locale == "en"
            ? depositSchemeLearnMoreHeading.sub_title
            : depositSchemeLearnMoreHeading.sub_title_bangla
        }}
      </p>
    </div>
    <div
      v-if="ongoingCampaigns.length > 0 && campaignHeading"
      class="ongoing-campaigns"
    >
      <div class="campaigns-card">
        <a
          v-for="singleItem in ongoingCampaigns"
          v-if="singleItem.images.length > 0"
          :key="singleItem.id"
          :href="`/campaign-details/?campaign=${singleItem.slug}`"
          class="ongoing"
          :style="{
            backgroundImage: `url(${singleItem.images[0].image_url})`,
          }"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          <div class="need interest-image">
            <img src="~assets/image/logo/footerLogo.png" alt="" />
          </div>
          <div class="rate interest-text">
            <nuxt-link
              :to="{
                path: '/campaign-details/',
                query: { campaign: singleItem.slug },
              }"
            >
              <h3>
                {{
                  $i18n.locale == "en"
                    ? singleItem.title
                    : singleItem.title_bangla
                }}
              </h3>
              <div class="ongoing-campaign-circle">
                <img src="~assets/image/rightarrow.png" alt="" />
              </div>
            </nuxt-link>
          </div>
        </a>
      </div>
      <div v-if="$i18n.locale == 'en'" class="campaigns-button">
        <nuxt-link to="/campaign">
          <button class="more-campaigns">
            more campaigns
            <svg
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.33 12.6925C25.2289 12.4317 25.0772 12.1933 24.8837 11.9912L14.2588 1.36625C14.0606 1.16812 13.8254 1.01095 13.5665 0.903721C13.3077 0.796493 13.0302 0.741302 12.75 0.741302C12.1841 0.741302 11.6414 0.966102 11.2412 1.36625C11.0431 1.56438 10.886 1.7996 10.7787 2.05847C10.6715 2.31734 10.6163 2.5948 10.6163 2.875C10.6163 3.44089 10.8411 3.9836 11.2412 4.38375L18.2538 11.375H2.125C1.56141 11.375 1.02091 11.5989 0.622398 11.9974C0.223884 12.3959 0 12.9364 0 13.5C0 14.0636 0.223884 14.6041 0.622398 15.0026C1.02091 15.4011 1.56141 15.625 2.125 15.625H18.2538L11.2412 22.6162C11.0421 22.8138 10.884 23.0488 10.7761 23.3078C10.6682 23.5667 10.6127 23.8445 10.6127 24.125C10.6127 24.4055 10.6682 24.6833 10.7761 24.9422C10.884 25.2012 11.0421 25.4362 11.2412 25.6337C11.4388 25.8329 11.6738 25.991 11.9328 26.0989C12.1917 26.2068 12.4695 26.2623 12.75 26.2623C13.0305 26.2623 13.3083 26.2068 13.5672 26.0989C13.8262 25.991 14.0612 25.8329 14.2588 25.6337L24.8837 15.0087C25.0772 14.8067 25.2289 14.5683 25.33 14.3075C25.5425 13.7901 25.5425 13.2099 25.33 12.6925Z"
                fill="#ED017F"
              />
            </svg>
          </button>
        </nuxt-link>
      </div>
      <div v-if="$i18n.locale == 'bn'" class="campaigns-button">
        <nuxt-link to="/campaign">
          <button class="more-campaigns">
            আরো প্রচারণা
            <svg
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.33 12.6925C25.2289 12.4317 25.0772 12.1933 24.8837 11.9912L14.2588 1.36625C14.0606 1.16812 13.8254 1.01095 13.5665 0.903721C13.3077 0.796493 13.0302 0.741302 12.75 0.741302C12.1841 0.741302 11.6414 0.966102 11.2412 1.36625C11.0431 1.56438 10.886 1.7996 10.7787 2.05847C10.6715 2.31734 10.6163 2.5948 10.6163 2.875C10.6163 3.44089 10.8411 3.9836 11.2412 4.38375L18.2538 11.375H2.125C1.56141 11.375 1.02091 11.5989 0.622398 11.9974C0.223884 12.3959 0 12.9364 0 13.5C0 14.0636 0.223884 14.6041 0.622398 15.0026C1.02091 15.4011 1.56141 15.625 2.125 15.625H18.2538L11.2412 22.6162C11.0421 22.8138 10.884 23.0488 10.7761 23.3078C10.6682 23.5667 10.6127 23.8445 10.6127 24.125C10.6127 24.4055 10.6682 24.6833 10.7761 24.9422C10.884 25.2012 11.0421 25.4362 11.2412 25.6337C11.4388 25.8329 11.6738 25.991 11.9328 26.0989C12.1917 26.2068 12.4695 26.2623 12.75 26.2623C13.0305 26.2623 13.3083 26.2068 13.5672 26.0989C13.8262 25.991 14.0612 25.8329 14.2588 25.6337L24.8837 15.0087C25.0772 14.8067 25.2289 14.5683 25.33 14.3075C25.5425 13.7901 25.5425 13.2099 25.33 12.6925Z"
                fill="#ED017F"
              />
            </svg>
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: "",
    },
    depositSchemeLearnMoreHeading: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      ongoingCampaigns: [],
      campaignHeading: {},
    };
  },

  created() {
    this.getOngoingCampaigns();
  },

  methods: {
    async getOngoingCampaigns() {
      const response = await this.$axios.get(
        `/get-ongoing-campaign/${this.page}`
      );
      this.ongoingCampaigns = response.data.data;
      this.campaignHeading = response.data.campaignHeading[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.deposit-details {
  text-align: center;
  // margin-top: 100px;
  margin-bottom: 40px;
  .deposit-title {
    font-weight: bold;
    font-size: 36px;
    text-transform: uppercase;
    color: #343434;
    margin-bottom: 15px;
    .font-bn & {
      font-size: 41px;
    }
  }
  .deposit-description {
    font-size: 16px;
    line-height: 154.3%;
    color: #858585;
    .font-bn & {
      font-size: 21px;
    }
  }
}
.ongoing-campaigns {
  position: relative;
  background: #ffffff;
  padding: 40px 0 0 0;
  .campaigns-details {
    text-align: center;
    // margin-top: 100px;
    margin-bottom: 80px;
    .campaigns-title {
      font-weight: bold;
      font-size: 36px;
      text-transform: uppercase;
      color: #343434;
      margin-bottom: 15px;
      .font-bn & {
        font-size: 41px;
      }
    }
    .campaigns-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .campaigns-card {
    display: flex;
    align-items: center;
    justify-content: center;

    .ongoing {
      position: relative;
      width: 357px;
      height: 357px;
      border-radius: 14px 14px 0px 0px;
      margin: 18px;
      cursor: pointer;

      .need {
        width: 70px;
        height: 40px;
        margin: 20px;
        display: none;
      }
      .rate {
        position: absolute;
        height: 84px;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(58, 57, 57, 0.2);
        backdrop-filter: blur(11px);
        padding: 10px;

        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          cursor: pointer;
          h3 {
            font-weight: bold;
            font-size: 20px;
            color: #ffffff;
            align-items: flex-end;
            text-decoration: none;
            max-width: 250px;
            .font-bn & {
              font-size: 25px;
            }
          }
          .ongoing-campaign-circle {
            width: 30px;
            height: 30px;
            background: rgba(255, 255, 255, 0.3);
            mix-blend-mode: normal;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              filter: brightness(0) invert(1);
              width: 10px;
              height: 10px;
            }
            &:hover {
              background: rgb(155, 146, 146);
            }
          }
        }
      }
      &:hover {
        transition: 0.4s;
        transform: scale(1.071);
        .ongoing-campaign-circle {
          animation: move 0.4s infinite linear alternate;
        }
      }
    }
  }
  .campaigns-button {
    padding: 80px 0 111px 0;
    .more-campaigns {
      // width: 236px;
      // height: 50px;
      border: none;
      background: #ed017f;
      border-radius: 4px;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #ffffff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      padding: 20px 20px 16px 20px;
      .font-bn & {
        font-size: 19px;
      }
      svg {
        width: 26px;
        height: 14px;
        margin: -5px 0 0 5px;

        path {
          fill: #ffffff;
        }
      }

      &:hover {
        background: #f42593;
        svg {
          animation: move 0.4s infinite linear alternate;
        }
      }
    }
    &:hover {
      transition: 0.3s;
      transform: scale(0.95);
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
  .ongoing-campaigns {
    position: relative;
    background: #fde1f033;

    .campaigns-details {
      text-align: center;
      margin-bottom: 80px;
      .campaigns-title {
        font-size: 30px;
        .font-bn & {
          font-size: 35px;
        }
      }
      .campaigns-description {
        padding: 0;
      }
    }
    .campaigns-card {
      display: flex;
      flex-direction: column;

      // .ongoing {
      //   .need {
      //   }
      //   .rate {
      //     h3 {
      //     }
      //   }
      // }
    }
    .campaigns-button {
      padding: 80px 0 111px 0;
      .more-campaigns {
        font-size: 12px;
        padding: 20px 10px;
        .font-bn & {
          font-size: 17px;
        }
        svg {
          width: 26px;
          height: 14px;
          margin: -5px 0 0 5px;

          path {
            fill: #ffffff;
          }
        }

        // &:hover {
        //   svg {
        //   }
        // }
      }
      // &:hover {
      // }
    }
  }
}
@media screen and (max-width: 758px) {
  .ongoing-campaigns {
    position: relative;
    background: #fde1f033;

    .campaigns-details {
      text-align: center;
      margin-bottom: 80px;
      .campaigns-title {
        font-size: 30px;
        .font-bn & {
          font-size: 35px;
        }
      }
      .campaigns-description {
        padding: 0;
      }
    }
    .campaigns-card {
      display: flex;
      flex-direction: column;

      // .ongoing {
      //   .need {
      //   }
      //   .rate {
      //     h3 {
      //     }
      //   }
      // }
    }
    .campaigns-button {
      padding: 80px 0 111px 0;
      .more-campaigns {
        font-size: 12px;
        padding: 20px 0 20px 5px;
        .font-bn & {
          font-size: 17px;
        }
        svg {
          width: 26px;
          height: 14px;
          margin: -5px 0 0 -5px;

          path {
            fill: #ffffff;
          }
        }

        // &:hover {
        //   svg {
        //   }
        // }
      }
      // &:hover {
      // }
    }
  }
}
</style>
