<template>
  <section class="ipdc-hiring">
    <div class="container">
      <div class="ipdc-hiring-title" v-if="hiringNowHeading">
        <h1>
          {{
            $i18n.locale == "en"
              ? hiringNowHeading.title
              : hiringNowHeading.title_bangla
          }}
        </h1>
        <p>
          {{
            $i18n.locale == "en"
              ? hiringNowHeading.sub_title
              : hiringNowHeading.sub_title_bangla
          }}
        </p>
      </div>
      <div v-if="jobPosts.length > 0" class="hiring-card">
        <div v-for="singleJob in jobPosts" :key="singleJob.id" class="hiring">
          <h3>
            {{
              $i18n.locale == "en" ? singleJob.title : singleJob.title_bangla
            }}
          </h3>
          <div class="job-experience">
            <div class="experience">
              <p>
                {{
                  $i18n.locale == "en" ? singleJob.type : singleJob.type_bangla
                }}
              </p>
            </div>
            <div
              class="experience"
              v-if="singleJob.year_of_experience != 'N/A'"
            >
              <p v-if="$i18n.locale == 'en'">
                At least {{ singleJob.year_of_experience }}
                Year(s) Experience
              </p>
              <p v-if="$i18n.locale == 'bn'">
                ন্যূনতম {{ singleJob.year_of_experience_bangla }}
                বছরের অভিজ্ঞতা
              </p>
            </div>
            <div class="experience" v-if="singleJob.position != 'N/A'">
              <p>
                {{
                  $i18n.locale == "en"
                    ? singleJob.position
                    : singleJob.position_bangla
                }}
              </p>
            </div>
          </div>
          <p>
            {{
              $i18n.locale == "en"
                ? singleJob.job_context
                : singleJob.job_context_bangla
            }}
          </p>
          <div class="hiring-button">
            <nuxt-link
              :to="{ path: '/job-details/', query: { job: singleJob.slug } }"
            >
              <h5>
                {{ $i18n.locale == "en" ? "READ MORE" : "আরও পড়ুন" }}
              </h5>
              <div class="image-circle">
                <img src="~assets/image/rightarrow.png" alt="Arrow" />
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-else class="ipdc-hiring-title">
        <h3>Sorry No Job Openings Available Right Now!</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    jobPosts: {
      type: Array,
      default: null,
    },

    hiringNowHeading: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.ipdc-hiring {
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
      padding: 15px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .hiring-card {
    display: flex;
    flex-wrap: wrap;
    padding: 85px 0;
    gap: 25px;
    .hiring {
      width: 540px;
      height: 230px;
      background: #ffffff;
      border: 1px solid #e7e7e7;
      box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
      border-radius: 8px;
      padding: 20px 27px;

      h3 {
        font-weight: bold;
        font-size: 20px;
        line-height: 100%;
        color: #343434;
        .font-bn & {
          font-size: 25px;
        }
      }

      .job-experience {
        display: flex;
        gap: 14px;
        padding: 15px 0;
        .experience {
          background: #f3f3f3;
          border-radius: 4px;
          padding: 5px 10px;
          p {
            font-size: 14px;
            line-height: 137.1%;
            letter-spacing: 0.02em;
            color: #343434;
            .font-bn & {
              font-size: 19px;
            }
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 154.3%;
        color: #5d5d5d;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        .font-bn & {
          font-size: 21px;
        }
      }
      .hiring-button {
        padding-top: 17px;
        a {
          display: flex;
          text-decoration: none;
          list-style: none;
          h5 {
            font-weight: 600;
            font-size: 14px;
            line-height: 100%;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #ed017f;
            .font-bn & {
              font-size: 19px;
            }
          }
          .image-circle {
            width: 15px;
            height: 15px;
            background: rgb(237, 1, 127, 0.3);
            mix-blend-mode: normal;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: -2px 0 0 8px;
            text-decoration: none;

            img {
              width: 6px;
              height: 7px;
            }
            &:hover {
              background: rgb(237, 1, 127, 0.5);
              border: none !important;
            }
          }
        }
      }
      &:hover {
        transition: 0.3s;
        transform: scale(1.05);
        border: 1.5px solid #12bff5;
        .hiring-button {
          a {
            .image-circle {
              animation: move 0.4s infinite linear alternate;
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
@media screen and (max-width: 1024px) {
  .ipdc-hiring {
    &-title {
      text-align: center;
      // h1 {
      // }
      p {
        padding: 15px 0;
      }
    }

    .hiring-card {
      .hiring {
        width: 100%;
        height: unset;

        // .job-experience {
        //   .experience {
        //     p {
        //     }
        //   }
        // }

        .hiring-button {
          padding-top: 17px;
          a {
            // h5 {
            // }
            .image-circle {
              // img {
              // }
              &:hover {
                background: rgb(237, 1, 127, 0.5);
                border: none !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
