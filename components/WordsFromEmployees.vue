<template>
  <section
    v-if="careerWordsFromOurEmployees.length > 0"
    class="words-employees"
  >
    <!-- <div class="container"> -->
    <div class="words-employees-title" v-if="wordsFromOurEmployeesHeading">
      <h1>
        {{
          $i18n.locale == "en"
            ? wordsFromOurEmployeesHeading.title
            : wordsFromOurEmployeesHeading.title_bangla
        }}
      </h1>
      <p>
        {{
          $i18n.locale == "en"
            ? wordsFromOurEmployeesHeading.sub_title
            : wordsFromOurEmployeesHeading.sub_title_bangla
        }}
      </p>
    </div>
    <client-only>
      <carousel
        :nav="false"
        :autoplay="true"
        :responsive="{
          0: { items: 1, nav: false },
          600: { items: 1, nav: false },
        }"
      >
        <div class="employees-slide">
          <div
            v-for="singleWorldForum in careerWordsFromOurEmployees"
            :key="singleWorldForum.id"
            class="employees-words"
          >
            <img
              class="cotation"
              src="~/assets/image/cotation.png"
              alt="quation"
            />
            <div class="employees-position">
              <img
                class="victor-image"
                :src="singleWorldForum.image"
                alt="Victor"
              />
              <div class="employee-title">
                <h6>
                  {{
                    $i18n.locale == "en"
                      ? singleWorldForum.title
                      : singleWorldForum.title_bangla
                  }}
                </h6>
                <p>
                  {{
                    $i18n.locale == "en"
                      ? singleWorldForum.sub_title
                      : singleWorldForum.sub_title_bangla
                  }}
                </p>
              </div>
            </div>
            <p class="employees-description">
              {{
                $i18n.locale == "en"
                  ? singleWorldForum.description
                  : singleWorldForum.description_bangla
              }}
            </p>
          </div>
          <!-- <div class="employees-words">
            <img class="cotation" src="~/assets/image/cotation.png" alt="quation">
            <div class="employees-position">
              <img class="victor-image" src="~/assets/image/Victor.jpg" alt="Victor">
              <div class="employee-title">
                <h6>Andrea Carter</h6>
                <p>Brand Manager</p>
              </div>
            </div>
            <p class="employees-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor
            </p>
          </div>
          <div class="employees-words">
            <img class="cotation" src="~/assets/image/cotation.png" alt="quation">
            <div class="employees-position">
              <img class="victor-image" src="~/assets/image/Victor.jpg" alt="Victor">
              <div class="employee-title">
                <h6>Howard Walker</h6>
                <p>UX Designer      </p>
              </div>
            </div>
            <p class="employees-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque amet habitant integer pretium hendrerit enim. Lobortis sed phasellus auctor
            </p>
          </div> -->
        </div>
      </carousel>
    </client-only>
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  props: {
    careerWordsFromOurEmployees: {
      type: Array,
      default: () => [],
    },

    wordsFromOurEmployeesHeading: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.words-employees {
  background: rgba(227, 247, 254, 0.3);
  padding: 100px 0;
  &-title {
    text-align: center;
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
      padding: 15px 370px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .employees-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 37px;
    padding: 86px 0;
    .employees-words {
      width: 356px;
      min-height: 360px;
      background: #ffffff;
      box-shadow: 4px 11px 58px rgba(0, 0, 0, 0.07);
      border-radius: 7px;
      position: relative;

      .cotation {
        width: 84px;
        height: 61px;
        position: absolute;
        top: 0;
        left: 46px;
        padding-bottom: 18px;
      }
      .employees-position {
        display: flex;
        padding: 55px 0 20px 40px;
        .victor-image {
          width: 43px;
          height: 43px;
          margin-right: 12px;
        }
        .employee-title {
          h6 {
            font-weight: 600;
            font-size: 16px;
            line-height: 100%;
            color: #343434;
            .font-bn & {
              font-size: 21px;
            }
          }
          p {
            font-size: 14px;
            line-height: 137.1%;
            letter-spacing: 0.02em;
            color: #858585;
            .font-bn & {
              font-size: 19px;
            }
          }
        }
      }
      .employees-description {
        font-size: 16px;
        line-height: 154.3%;
        color: #5d5d5d;
        padding: 0 32px;
        .font-bn & {
          font-size: 21px;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .words-employees {
    padding: 48px 0 100px 0;
    &-title {
      // h1 {
      // }
      p {
        padding: 15px 20px 20px 20px;
      }
    }
    .employees-slide {
      display: flex;
      flex-direction: column;
      padding: 0;
      .employees-words {
        width: unset;
        // height: unset;
        // .cotation {
        // }
        // .employees-position {
        //   .victor-image {
        //   }
        //   .employee-title {
        //     h6 {
        //     }
        //     p {
        //     }
        //   }
        // }
        // .employees-description {
        // }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .words-employees {
    padding: 48px 0 100px 0;
    &-title {
      // h1 {
      // }
      p {
        padding: 15px 20px 20px 20px;
      }
    }
    .employees-slide {
      display: flex;
      flex-direction: column;
      padding: 0;
      // .employees-words {
      //   .cotation {
      //   }
      //   .employees-position {
      //     .victor-image {
      //     }
      //     .employee-title {
      //       h6 {
      //       }
      //       p {
      //       }
      //     }
      //   }
      //   .employees-description {
      //   }
      // }
    }
  }
}
</style>
