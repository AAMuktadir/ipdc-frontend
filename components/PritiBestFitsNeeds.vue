<template>
  <section>
    <div class="priti" v-if="bestFitsHeading && bestFitsData.length > 0">
      <div class="container">
        <div class="priti-schemes">
          <div class="priti-details">
            <h1 class="priti-details-title">
              {{
                $i18n.locale == "en"
                  ? bestFitsHeading.title
                  : bestFitsHeading.title_bangla
              }}
            </h1>
            <p class="priti-details-description">
              {{
                $i18n.locale == "en"
                  ? bestFitsHeading.sub_title
                  : bestFitsHeading.sub_title_bangla
              }}
            </p>
          </div>
          <div class="priti-blogs">
            <b-row>
              <b-col md="6" v-for="item in bestFitsData" :key="item.id">
                <div
                  class="priti-fits deposit-schemes"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <img src="~assets/image/icon/Deposits.png" alt="img" />
                  <h4>
                    {{ $i18n.locale == "en" ? item.title : item.title_bangla }}
                  </h4>
                  <p>
                    {{
                      $i18n.locale == "en"
                        ? item.sub_title
                        : item.sub_title_bangla
                    }}
                  </p>
                  <div
                    v-if="$i18n.locale == 'en'"
                    class="listStyle"
                    v-html="item.description"
                  ></div>
                  <div
                    v-if="$i18n.locale == 'bn'"
                    class="listStyle"
                    v-html="item.description_bangla"
                  ></div>

                  <a :href="item.button_link" v-if="item.button_link !== '#'"
                    ><span v-if="$i18n.locale == 'en'">Learn more</span>
                    <span v-if="$i18n.locale == 'bn'">আরও জানুন</span>
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
                  </a>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bestFitsHeading: {
      type: Object,
      default: {},
    },
    bestFitsData: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.priti {
  background: rgba(243, 251, 249, 0.5);
  .priti-schemes {
    padding: 100px 0;
    .priti-details {
      text-align: center;
      &-title {
        font-weight: 700;
        font-size: 36px;
        line-height: 133%;
        color: #343434;
        .font-bn & {
          font-size: 41px;
        }
      }
      &-description {
        font-weight: 500px;
        font-size: 16px;
        line-height: 137.5%;
        color: #999999;
        padding: 15px 220px 74px 220px;
        .font-bn & {
          font-size: 21px;
        }
      }
    }
    .priti-blogs {
      .priti-fits {
        position: relative;
        height: 100%;
        background: #ffffff;
        box-shadow: 2.98772px 2.98772px 43.3219px rgba(0, 0, 0, 0.07);
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;
        text-align: center;
        padding: 35px 45px;
        // backdrop-filter: brightness(0);
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          background-image: linear-gradient(
            152.61deg,
            #e01280 -2.16%,
            #e60f81 37.81%,
            #e77575 87.08%
          );
          box-shadow: 2.98772px 25.99px 43.3219px rgba(255, 123, 144, 0.52);
          filter: brightness(0) invert(1);
          z-index: -1;
          transition: all 0.7s;
        }
        img {
          width: 68.15px;
          height: 68.15px;
          margin-bottom: 36px;
        }
        h4 {
          font-weight: bold;
          font-size: 20px;
          line-height: 100%;
          color: #343434;
          margin-bottom: 20px;
          .font-bn & {
            font-size: 25px;
          }
        }
        p {
          font-size: 16px;
          line-height: 154.3%;
          color: #858585;
          margin-bottom: 15px;
          .font-bn & {
            font-size: 21px;
          }
        }

        a {
          font-weight: 400;
          font-size: 14px;
          line-height: 100%;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ed017f;
          text-decoration: none;
          cursor: pointer;
          .font-bn & {
            font-size: 19px;
          }
          svg {
            width: 20px;
            height: 14px;
            margin: -5px 0 0 0;
          }
        }
        &:hover {
          transition: 0.5s;
          transform: scale(0.9888);
          &::before {
            filter: brightness(1) invert(0);
          }
          // box-shadow: 2.98772px 25.99px 43.3219px rgba(255, 123, 144, 0.52);
          img {
            filter: brightness(0) invert(1);
          }
          h4 {
            color: #ffffff;
          }
          p {
            color: #ffffff;
          }
          ul {
            .priti-list {
              color: #ffffff;
            }
          }
          a {
            font-size: 15px;
            color: #ffffff;
            .font-bn & {
              font-size: 20px;
            }
            svg {
              animation: move 0.4s infinite linear alternate;
              path {
                fill: #ffffff;
              }
            }
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

@media screen and (max-width: 768px) {
  .priti {
    .priti-schemes {
      padding: 100px 0 0 0;
      .priti-details {
        text-align: center;
        &-title {
          font-size: 30px;
          .font-bn & {
            font-size: 35px;
          }
        }
        &-description {
          padding: 15px 0 50px 0;
        }
      }
      .priti-blogs {
        .priti-fits {
          margin-bottom: 30px;

          // img {
          // }
          // h4 {
          // }
          // p {
          // }
          // ul {
          //   .priti-list {
          //   }
          // }
          // a {
          //   svg {
          //   }
          // }
        }
      }
    }
  }
}
</style>
