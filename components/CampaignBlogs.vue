<template>
  <div class="campaign">
    <div class="container">
      <div class="campaign-blogs">
        <nuxt-link
          :to="{
            path: `${localePath('/campaign-details/')}`,
            query: { campaign: campaign.slug },
          }"
          v-for="campaign in allCampaigns"
          id="pagination-content"
          :key="campaign.id"
          class="campaign-blog"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          <div
            class="campaign-ongoing"
            :style="{
              backgroundImage: `url('${
                $i18n.locale == 'en'
                  ? campaign.feature_image
                  : campaign.feature_image_bangla
              }')`,
            }"
          >
            <div class="campaign-need interest-image">
              <img src="~assets/image/logo/footerLogo.png" alt="" />
            </div>
            <div class="campaign-rate interest-text">
              <nuxt-link
                :to="{
                  path: `${localePath('/campaign-details/')}`,
                  query: { campaign: campaign.slug },
                }"
              >
                <h3>
                  {{
                    $i18n.locale == "en"
                      ? campaign.title
                      : campaign.title_bangla
                  }}
                </h3>
                <div class="campaign-circle">
                  <img src="~assets/image/rightarrow.png" alt="" />
                </div>
              </nuxt-link>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="loadMore" v-if="showLoadMoreButton">
        <button @click="loadMore()">
          {{ $i18n.locale == "en" ? "Load More" : "আরো দেখুন" }}

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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      limit: 6,
      allCampaigns: [],
      showLoadMoreButton: true,
      totalRow: 0,
    };
  },
  created() {
    this.getAllCampaign();
  },
  methods: {
    async getAllCampaign() {
      try {
        const response = await this.$axios.get("/get-all-campaign", {
          params: { limit: this.limit },
        });
        this.allCampaigns = response.data.data;
        this.totalRow = response.data.totalRow;
        if (this.totalRow <= 6) {
          this.showLoadMoreButton = false;
        }
      } catch (error) {
        console.log("Error fetching getAllCampaign:", error);
      }
    },

    loadMore() {
      this.limit = this.limit + 6;
      this.getAllCampaign();

      if (this.totalRow > this.limit) {
        this.showLoadMoreButton = true;
      } else {
        this.showLoadMoreButton = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.campaign {
  padding: 80px 0;

  .campaign-blogs {
    display: flex;
    flex-wrap: wrap;
    gap: 19px;

    .campaign-blog {
      .campaign-ongoing {
        position: relative;
        width: 357px;
        height: 357px;
        border-radius: 14px;
        background-size: 357px 357px;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;

        .campaign-need {
          width: 70px;
          height: 40px;
          padding: 20px 0 0 20px;

          img {
            display: none;
          }
        }

        .campaign-rate {
          position: absolute;
          height: 84px;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(28, 27, 27, 0.2);
          backdrop-filter: blur(11px);
          padding: 10px;
          border-radius: 10px;
          cursor: pointer;

          a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-decoration: none;

            h3 {
              font-weight: bold;
              font-size: 20px;
              line-height: 130%;
              color: #ffffff;
              text-decoration: none;
              .font-bn & {
                font-size: 25px;
              }
            }
            .campaign-circle {
              display: flex;
              width: 30px;
              height: 30px;
              background: rgba(255, 255, 255, 0.3);
              mix-blend-mode: normal;
              border-radius: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0 10px;

              img {
                filter: brightness(0) invert(1);
                width: 10px;
                height: 10px;
              }
              &:hover {
                background: rgba(156, 152, 152, 0.671);
              }
            }
          }
        }

        &:hover {
          transition: 0.3s;
          transform: scale(0.95);
          .campaign-rate {
            background: rgba(156, 152, 152, 0.671);
            .campaign-circle {
              animation: move 0.4s infinite linear alternate;
            }
          }
        }
      }
    }
  }

  .pagination {
    align-items: center;
    justify-content: center;
  }

  .loadMore {
    text-align: center;
    padding: 40px 0 0 0;

    button {
      text-decoration: none;
      font-weight: 600;
      font-size: 12px;
      line-height: 116.67%;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #ffffff;
      background: #ed017f;
      border: none;
      outline: none;
      padding: 15px 30px;
      border-radius: 8px;
      cursor: pointer;
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
    }
    &:hover {
      a {
        border: 3.5px solid #ed017f;
        background: #ffffff;
        color: #ed017f;
      }
      transition: 0.3s;
      transform: scale(0.92);
      svg {
        path {
          fill: #ffffff;
        }
        animation: move 0.4s infinite linear alternate;
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
  .campaign {
    padding: 40px 0 80px 0;

    .campaign-blogs {
      display: flex;
      flex-direction: column;
      gap: 21px;

      .campaign-blog {
        .campaign-ongoing {
          width: 100%;
          height: 357px;
          background-repeat: no-repeat;
          background-size: cover;

          // .campaign-need {
          //   img {
          //   }
          // }

          // .campaign-rate {
          //   h3 {
          //   }

          //   a {
          //     img {
          //     }
          //   }
          // }
        }
      }
    }
  }
}
</style>
