<template>
  <section class="sme-financial-service">
    <div class="container">
      <div class="sme-best-fits">
        <div class="sme-best-fits-heading">
          <h1 class="sme-best-fits-heading-title">
            Choose a Scheme Which Best Fits Your Needs
          </h1>
          <p class="sme-best-fits-heading-description">
            We understand that business opportunities don’t come overnight, it
            is created. At IPDC, we offer easy and affordable financing for the
            SMEs like yours to exploit the business potential to the fullest
          </p>
        </div>
        <div class="sme-lease-service" v-if="smeScheme.length > 0">
          <b-row>
            <b-col md="6">
              <div class="sme-service-card">
                <ul class="sme-service">
                  <li
                    @click="changeScheme(item.id)"
                    v-for="item in smeScheme"
                    :key="item.id"
                    :class="item.id == serviceActiveId ? 'sme-active' : ''"
                    class="sme-service-list"
                  >
                    <img src="~/assets/image/icon/Lease Financing.png" alt="" />
                    {{ item.name }}
                  </li>
                  <!--                                    <li class="sme-service-list sme-active">-->
                  <!--                                        <img src="~/assets/image/icon/Page-1.png" alt="">-->
                  <!--                                        Long Term Finance-->
                  <!--                                    </li>-->
                  <!--                                    <li class="sme-service-list sme-active">-->
                  <!--                                        <img src="~/assets/image/icon/Joyee.png" alt="">-->
                  <!--                                        Joyee For Women Entrepreneur-->
                  <!--                                    </li>-->
                  <!--                                    <li class="sme-service-list sme-active">-->
                  <!--                                        <img src="~/assets/image/icon/Short Term Financing.png" alt="">-->
                  <!--                                        Short Term Financing-->
                  <!--                                    </li>-->
                </ul>
              </div>
            </b-col>
            <b-col md="6">
              <div class="sme-lease" v-if="scheme">
                <div
                  class="sme-lease-heading"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <h1 class="sme-lease-heading-title">{{ scheme.name }}</h1>
                  <p class="sme-lease-heading-description">
                    {{ scheme.short_description }}
                  </p>
                </div>
                <div
                  class="sme-potential"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <h3>Potential Client</h3>
                  <div class="business-age">
                    <p class="business-age-title">Business Type</p>
                    <h4 class="business-age-years">
                      {{ scheme.business_type }}
                    </h4>
                  </div>
                  <div class="business-age">
                    <p class="business-age-title">Age of Business</p>
                    <h4 class="business-age-years">
                      {{ scheme.age_of_business }}
                    </h4>
                  </div>
                  <div class="business-age">
                    <p class="business-age-title">Company Type</p>
                    <h4 class="business-age-years">
                      {{ scheme.company_type }}
                    </h4>
                  </div>
                </div>

                <div
                  class="purpose"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-anchor-placement="center-bottom"
                >
                  <h1>Purpose</h1>
                  <ul class="financial-feature-service">
                    <li
                      class="financial-feature-service-list"
                      v-for="purposes in schemePurposes"
                      :key="purposes.id"
                    >
                      {{ purposes.title }}
                    </li>
                    <!--                    <li class="financial-feature-service-list">-->
                    <!--                      Financing is offered usually for a term of 1 to 5 years.-->
                    <!--                    </li>-->
                    <!--                    <li class="financial-feature-service-list">-->
                    <!--                      Very competitive interest rate.-->
                    <!--                    </li>-->
                    <!--                    <li class="financial-feature-service-list">-->
                    <!--                      Repayment of lease rentals can be structured as monthly, quarterly, semi-annually or annually to-->
                    <!--                      match with cash flow of the company.-->
                    <!--                    </li>-->
                    <!--                    <li class="financial-feature-service-list">-->
                    <!--                      Financing may be extended up to 100% of the cost.-->
                    <!--                    </li>-->
                  </ul>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-types
    smeScheme: {
      type: Array,
      default: [],
    },
    defaultScheme: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      scheme: null,
      schemePurposes: null,
      isFirstLoaded: false,
      serviceActiveId: null,
    };
  },

  updated() {
    //Set Default Value
    if (this.isFirstLoaded === false) {
      this.serviceActiveId = this.defaultScheme;
      this.getIpdcSmeFinancing(this.defaultScheme);
      this.isFirstLoaded = true;
    }
  },
  methods: {
    changeScheme(schemeId) {
      this.serviceActiveId = schemeId;
      this.getIpdcSmeFinancing(schemeId);
    },

    async getIpdcSmeFinancing(schemeId) {
      const response = await this.$axios.get(
        `get-ipdc-sme-financing/${schemeId}`
      );
      this.scheme = response.data.data.smeScheme;
      this.schemePurposes = response.data.data.smeScheme.purposes;
    },
  },
};
</script>

<style lang="scss" scoped>
.sme-financial-service {
  background: linear-gradient(
    0deg,
    rgba(253, 225, 240, 0.2),
    rgba(253, 225, 240, 0.2)
  );
  padding: 84px 0;
  .sme-best-fits {
    &-heading {
      text-align: center;
      padding-bottom: 75px;

      &-title {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        color: #343434;
        .font-bn & {
          font-size: 41px;
        }
      }
      &-description {
        font-size: 16px;
        line-height: 154.3%;
        color: #858585;
        padding: 15px 220px;
        .font-bn & {
          font-size: 21px;
        }
      }
    }

    .sme-lease-service {
      border: 1px solid #e7e7e7;
      border-radius: 8px;
      background: #ffffff;
      .col-md-6 {
        padding: 0;
      }
      .sme-service-card {
        margin: -1px 0 0 14px;
        border: 1px solid #e7e7e7;
        border-bottom: none;
        height: 100%;
        border-radius: 8px 0 0 8px;
        background: #ffffff;
        box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
        cursor: pointer;
        .sme-service {
          list-style: none;
          padding: 0;
          margin-bottom: 0;
          &-list {
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 22px;
            line-height: 140.91%;
            color: #343434;
            border-bottom: 1px solid #e7e7e7;
            padding: 26px 21px 26px 28px;
            backdrop-filter: brightness(0);
            cursor: pointer;
            .font-bn & {
              font-size: 27px;
            }
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
              filter: brightness(0) invert(1);
              z-index: -1;
              transition: all 0.7s;
            }

            img {
              width: 67px;
              height: 67px;
              margin-right: 20px;
            }
            &:hover {
              color: #ffffff;

              &::before {
                filter: brightness(1) invert(0);
              }
            }
          }
          &:first-child {
            border-radius: 8px 0 0 0;
            overflow: hidden;
          }
          .sme-active {
            color: #ffffff;
            &::before {
              filter: brightness(1) invert(0);
            }
            &:first-child {
              border-radius: 8px 0 0 0;
            }
          }
        }
      }

      .sme-lease {
        padding: 37px 0 0 35px;
        background: #ffffff;
        width: 97.2%;
        border-radius: 0 8px 0 0;
        // height: 845px;

        &-heading {
          padding-right: 40px;
          &-title {
            font-weight: bold;
            font-size: 25px;
            line-height: 133%;
            color: #343434;
            margin-bottom: 10px;
            .font-bn & {
              font-size: 30px;
            }
          }
          &-description {
            font-size: 16px;
            line-height: 154.3%;
            color: #858585;
            .font-bn & {
              font-size: 21px;
            }
          }
        }

        .sme-potential {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-right: 40px;
          h3 {
            font-weight: bold;
            font-size: 25px;
            line-height: 133%;
            color: #343434;
            padding: 26px 0 6px 0;
            .font-bn & {
              font-size: 30px;
            }
          }
          .business-age {
            border: 1px solid #f899cc;
            padding: 26px 0 26px 26px;
            box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
            border-radius: 10px;
            &-title {
              font-weight: 600;
              font-size: 16px;
              line-height: 100%;
              color: #5d5d5d;
              margin-bottom: 9px;
              .font-bn & {
                font-size: 21px;
              }
            }
            &-years {
              font-weight: bold;
              font-size: 25px;
              line-height: 133%;
              color: #343434;
              word-break: break-word;
              .font-bn & {
                font-size: 30px;
              }
            }
          }
        }
        .purpose {
          height: 210px;
          overflow: auto scroll;
          &::-webkit-scrollbar {
            width: 15px;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 30px;
            background: -webkit-gradient(
              linear,
              left top,
              right bottom,
              from(#ed017f),
              to(#d132d175)
            );
          }
          &::-webkit-scrollbar-track {
            background: -webkit-gradient(
              linear,
              left top,
              right bottom,
              from(#e6a5c7),
              to(#d132a177)
            );
            border-radius: 10px;
          }
          h1 {
            font-weight: bold;
            font-size: 25px;
            line-height: 133%;
            color: #343434;
            margin-top: 45px;
            .font-bn & {
              font-size: 30px;
            }
          }

          .financial-feature-service {
            list-style: none;
            padding: 0;
            &-list {
              font-size: 16px;
              line-height: 154.3%;
              color: #5d5d5d;
              padding: 10px 0;
              .font-bn & {
                font-size: 21px;
              }

              &::before {
                content: "\2713";
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 16px;
                height: 16px;
                background: #ed017f;
                color: #ffffff;
                border-radius: 100px;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .sme-financial-service {
    padding: 50px 0;
    .sme-best-fits {
      &-heading {
        text-align: center;
        padding-bottom: 50px;

        &-title {
          font-size: 25px;
          .font-bn & {
            font-size: 30px;
          }
        }
        &-description {
          padding: 15px 0;
        }
      }

      .sme-lease-service {
        border: 1px solid #e7e7e7;
        border-radius: 8px;
        .sme-service-card {
          width: 100%;
          height: unset;
          margin: 0;
          border-radius: 8px;
          .sme-service {
            height: unset;
            &-list {
              // img {
              // }
              &:first-child {
                border-radius: 8px 8px 0 0;
              }
              &:last-child {
                border-radius: 0 0 8px 8px;
              }
            }
            .sme-active {
              color: #ffffff;
              &:first-child {
                border-radius: 8px 8px 0 0;
              }
            }
          }
        }

        .sme-lease {
          padding: 37px 0 0 20px;
          height: unset;
          width: unset;
          // &-heading {
          //   &-title {
          //   }
          //   &-description {
          //   }
          // }

          .sme-potential {
            width: unset;
            padding-right: 20px;
            h3 {
              font-weight: 700;
            }
            // .business-age {
            //   &-title {
            //   }
            //   &-years {
            //   }
            // }
          }

          .purpose {
            height: 200px;
            // &::-webkit-scrollbar {
            // }
            // &::-webkit-scrollbar-thumb {
            // }
            // &::-webkit-scrollbar-track {
            // }
            // h1 {
            // }

            // .financial-feature-service {
            //   &-list {
            //     &::before {
            //     }
            //   }
            // }
          }
        }
      }
    }
  }
}
</style>
