<template>
  <section class="corporate-financial-service">
    <div v-if="corporateScheme.length > 0" class="container">
      <div class="corporate-best-fits">
        <div class="corporate-best-fits-heading" v-if="schemeHeading">
          <h2 class="corporate-best-fits-heading-title">
            {{
              $i18n.locale == "en"
                ? schemeHeading.title
                : schemeHeading.title_bangla
            }}
          </h2>
          <p class="corporate-best-fits-heading-description">
            {{
              $i18n.locale == "en"
                ? schemeHeading.sub_title
                : schemeHeading.sub_title_bangla
            }}
          </p>
        </div>
        <div class="financial-lease-service">
          <b-row>
            <b-col md="6">
              <div class="corporate-service-card">
                <ul class="corporate-service">
                  <li
                    @click="changeScheme(item.id)"
                    class="corporate-service-list"
                    :class="item.id == serviceActiveId ? 'service-active' : ''"
                    v-for="item in corporateScheme"
                    :key="item.id"
                  >
                    <img :src="item.image_url" alt="Image" />
                    <span class="text">{{
                      $i18n.locale == "en" ? item.name : item.name_bangla
                    }}</span>
                  </li>
                </ul>
              </div>
            </b-col>

            <b-col md="6">
              <div class="financial-lease" v-if="scheme">
                <div
                  class="financial-lease-heading"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                  v-if="scheme.is_description_active"
                >
                  <h2 class="financial-lease-heading-title">
                    {{
                      $i18n.locale == "en" ? scheme.name : scheme.name_bangla
                    }}
                  </h2>
                  <p class="financial-lease-heading-description">
                    {{
                      $i18n.locale == "en"
                        ? scheme.short_description
                        : scheme.short_description_bangla
                    }}
                  </p>
                </div>
                <div
                  class="financial-eligibility"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                  v-if="scheme.is_potential_client_active"
                >
                  <h3 v-if="$i18n.locale == 'en'">
                    {{
                      scheme.potential_client_title
                        ? scheme.potential_client_title
                        : "Eligibility"
                    }}
                  </h3>
                  <h3 v-if="$i18n.locale == 'bn'">
                    {{
                      scheme.potential_client_title_bangla
                        ? scheme.potential_client_title_bangla
                        : "যোগ্যতা"
                    }}
                  </h3>
                  <div
                    v-if="$i18n.locale == 'en'"
                    class="business-age"
                    v-html="scheme.potential_client"
                  ></div>
                  <div
                    v-if="$i18n.locale == 'bn'"
                    class="business-age"
                    v-html="scheme.potential_client_bangla"
                  ></div>
                </div>
                <div
                  class="financial-feature"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-anchor-placement="center-bottom"
                  v-if="scheme.is_feature_active"
                >
                  <h3
                    v-if="$i18n.locale == 'en'"
                    class="financial-feature-heading"
                  >
                    {{
                      scheme.feature_title ? scheme.feature_title : "Feature"
                    }}
                  </h3>
                  <h3
                    v-if="$i18n.locale == 'bn'"
                    class="financial-feature-heading"
                  >
                    {{
                      scheme.feature_title_bangla
                        ? scheme.feature_title_bangla
                        : "বৈশিষ্ট্য"
                    }}
                  </h3>
                  <ul
                    class="financial-feature-service"
                    v-if="$i18n.locale == 'en'"
                  >
                    <li
                      class="financial-feature-service-list"
                      v-for="feature in schemeFeatures"
                      :key="feature.id"
                    >
                      {{
                        $i18n.locale == "en"
                          ? feature.title
                          : feature.title_bangla
                      }}
                    </li>
                  </ul>

                  <ul
                    class="financial-feature-service"
                    v-if="$i18n.locale == 'bn'"
                  >
                    <li
                      class="financial-feature-service-list"
                      v-for="feature in schemebanglaFeatures"
                      :key="feature.id"
                    >
                      {{
                        $i18n.locale == "en"
                          ? feature.title
                          : feature.title_bangla
                      }}
                    </li>
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
    corporateScheme: {
      required: true,
    },
    defaultScheme: {
      required: true,
    },
    schemeHeading: {
      type: Object,
      default: {},
    },
  },

  data() {
    return {
      scheme: null,
      schemeFeatures: null,
      schemebanglaFeatures: null,
      isFirstLoaded: false,
      serviceActiveId: null,
    };
  },

  updated() {
    //Set Default Value
    if (this.isFirstLoaded === false) {
      this.serviceActiveId = this.defaultScheme;
      this.getCorporateFinancialService(this.defaultScheme);
      this.isFirstLoaded = true;
    }
  },
  methods: {
    changeScheme(schemeId) {
      this.serviceActiveId = schemeId;
      this.getCorporateFinancialService(schemeId);
    },
    async getCorporateFinancialService(schemeId) {
      try {
        const response = await this.$axios.get(
          `/get-corporate-financial-service/${schemeId}`
        );
        this.scheme = response.data.data.corporateScheme[0];
        this.schemeFeatures = response.data.data.corporateScheme[0].features;
        this.schemebanglaFeatures =
          response.data.data.corporateScheme[0].featuresbang;
      } catch (error) {
        console.log("Error fetching getCorporateFinancialService:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.corporate-financial-service {
  background: linear-gradient(
    0deg,
    rgba(253, 225, 240, 0.2),
    rgba(253, 225, 240, 0.2)
  );
  padding: 84px 0;

  .corporate-best-fits {
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

    .financial-lease-service {
      border: 1px solid #e7e7e7;
      border-radius: 8px;
      // background: #FFFFFF;

      .col-md-6 {
        padding: 0;
      }

      .corporate-service-card {
        margin: -1px 0 0 14px;
        border-right: 1px solid #e7e7e7;
        height: 100%;
        background: #ffffff;
        border-radius: 8px 0 0 8px;
        margin-left: 15px;
        .corporate-service {
          list-style: none;
          padding: 0;
          margin-bottom: 0;

          &-list {
            position: relative;
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 22px;
            line-height: 140.91%;
            color: #343434;
            border: 1px solid #e7e7e7;
            border-right: none;
            border-bottom: none;
            box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
            padding: 26px 21px 26px 28px;
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
              z-index: 1;
              transition: all 0.7s;
            }

            img {
              width: 67px;
              height: 67px;
              margin-right: 20px;
              z-index: 2;
            }
            span.text {
              z-index: 2;
            }

            &:first-child {
              border-radius: 8px 0 0 0;
              overflow: hidden;
            }

            &:hover,
            &.service-active {
              color: #ffffff;

              &::before {
                filter: brightness(1) invert(0);
              }
            }
            // &.service-active {
            //   color: #ffffff;
            //   &::before {
            //     filter: brightness(1) invert(0);
            //   }
            // }
          }
        }
      }

      .financial-lease {
        padding: 37px 0 30px 35px;
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

        .financial-eligibility {
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
            .font-bn & {
              font-size: 20px;
            }

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

        .financial-feature {
          height: 330px;
          overflow: auto;

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

          &-heading {
            font-weight: bold;
            font-size: 25px;
            line-height: 133%;
            color: #343434;
            padding: 40px 0 22px 0;
            .font-bn & {
              font-size: 30px;
            }
          }

          &-service {
            list-style: none;
            padding: 0;

            &-list {
              font-size: 16px;
              line-height: 154.3%;
              color: #5d5d5d;
              padding: 13px 0;
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
  .corporate-financial-service {
    padding: 50px 0;

    .corporate-best-fits {
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

      .financial-lease-service {
        border: 1px solid #e7e7e7;
        border-radius: 8px;

        .corporate-service-card {
          width: 100%;
          height: unset;
          margin: 0;
          border-radius: 8px;
          .corporate-service {
            &-list {
              border: none;
              box-shadow: none;
              &::before {
                content: "";
              }

              img {
                width: 67px;
                height: 67px;
                margin-right: 20px;
              }

              &:first-child {
                border-radius: 8px 8px 0 0;
              }

              &:hover {
                color: #ffffff;

                &::before {
                  filter: brightness(1) invert(0);
                }
              }
              &.service-active {
                color: #ffffff;
                &::before {
                  filter: brightness(1) invert(0);
                }
              }
            }
          }
        }

        .financial-lease {
          padding: 37px 0 0 20px;
          height: unset;
          width: unset;
          // &-heading {
          //   &-title {
          //   }

          //   &-description {
          //   }
          // }

          .financial-eligibility {
            width: unset;
            padding-right: 20px;
            h3 {
              font-weight: 700;
            }

            .business-age {
              // &-title {
              // }

              // &-years {
              // }
              ul {
                li {
                  word-break: break-word;
                }
              }
            }
          }

          .financial-feature {
            // &-heading {
            // }

            &-service {
              position: relative;

              &-list {
                margin: 0 0 0 30px;

                &::before {
                  position: absolute;
                  left: 0;
                  margin-top: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
