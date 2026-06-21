<template>
  <section class="job-details">
    <div class="container">
      <div class="job-details-card">
        <div class="card-left-arrow">
          <a href="#" @click="goToPrev()">
            <img src="~/assets/image/left arrow.svg" alt="" />
          </a>
        </div>
        <section class="job-details">
          <div class="container">
            <div class="job-details-card">
              <div v-if="$i18n.locale == 'en'" class="career-list">
                <nuxt-link to="/career">Career <span>/</span></nuxt-link>
                <nuxt-link to="/job-details">job-Details</nuxt-link>
              </div>
              <div v-if="$i18n.locale == 'bn'" class="career-list">
                <nuxt-link to="/career">কর্মজীবন <span>/</span></nuxt-link>
                <nuxt-link to="/job-details">চাকরির বিস্তারিত</nuxt-link>
              </div>
              <div class="job-cards-heading">
                <h1 v-if="$i18n.locale == 'en'">
                  Join our vibrant IPDC team as a {{ singleJob.title }}!
                </h1>
                <h1 v-if="$i18n.locale == 'bn'">
                  আমাদের প্রাণবন্ত আইপিডিসিতে টিমে যোগ দিন
                  {{ singleJob.title_bangla }}!
                </h1>
              </div>
              <div class="job-status">
                <div class="status employment" v-if="singleJob.type">
                  <div class="status-text">
                    <p v-if="$i18n.locale == 'en'">Employment Status</p>
                    <p v-if="$i18n.locale == 'bn'">কর্মসংস্থানের অবস্থা</p>
                    <h4>
                      {{
                        $i18n.locale == "en"
                          ? singleJob.type
                          : singleJob.type_bangla
                      }}
                    </h4>
                  </div>
                  <div class="status-date" />
                </div>
                <div class="status location" v-if="singleJob.location">
                  <div class="status-text">
                    <p v-if="$i18n.locale == 'en'">Job Location</p>
                    <p v-if="$i18n.locale == 'bn'">চাকুরি স্থান</p>
                    <h4>
                      {{
                        $i18n.locale == "en"
                          ? singleJob.location
                          : singleJob.location_bangla
                      }}
                    </h4>
                  </div>
                  <div class="status-date" />
                </div>
                <div class="status deadline" v-if="singleJob.dateline">
                  <div class="status-text">
                    <p v-if="$i18n.locale == 'en'">Application Deadline</p>
                    <p v-if="$i18n.locale == 'bn'">আবেদন পাঠাবার শেষ তারিখ</p>
                    <h4>
                      {{
                        $i18n.locale == "en"
                          ? formatDate(singleJob.dateline)
                          : formatDateBangla(singleJob.dateline)
                      }}
                    </h4>
                  </div>
                  <div class="status-date" />
                </div>
              </div>
              <img
                v-if="singleJob.slug == 'management-trainee'"
                src="~/assets/image/IPDCMT_post final.jpg"
                alt=""
                class="job-img"
              />
              <div
                class="description-text"
                v-for="(item, index) in shortDescriptionLines"
                :key="index"
              >
                <p>{{ item }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <div class="apply-button">
        <a :href="singleJob.apply_link" target="_blank">
          {{
            $i18n.locale == "en"
              ? "Apply for this position"
              : "এই পদের জন্য আবেদন করুন"
          }}
          <img src="~assets/image/right arrow.svg" alt="" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    singleJob: {
      type: Object,
      default: null,
    },
  },
  computed: {
    shortDescriptionLines() {
      // Determine which field to use based on locale
      const rawData =
        this.$i18n.locale === "en"
          ? this.singleJob.short_description
          : this.singleJob.short_description_bangla;

      // Check if data exists; split by \r\n and filter out empty strings
      if (rawData) {
        return rawData.split(/\r?\n/).filter((item) => item.trim() !== "");
      }

      return [];
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    formatDateBangla(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("bn", options);
    },
    goToPrev() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.job-details {
  &-card {
    position: relative;
    padding: 35px 0 0 0;
    .career-list {
      text-align: right;
      padding-bottom: 35px;
      a {
        color: #343434;
        text-decoration: none;
        &:hover,
        &:focus {
          color: #32c5f1;
        }
      }
    }
    .job-cards-heading {
      padding: 15px 0 35px 0;
      h1 {
        font-weight: bold;
        font-size: 30px;
        line-height: 133%;
        color: #343434;
        .font-bn & {
          font-size: 35px;
        }
      }
    }
    .card-left-arrow {
      position: absolute;
      top: 50px;
      a {
        img {
          width: 19px;
          height: 19px;
          filter: grayscale(100%);
        }
      }
    }
    // &::before {
    //     content: url("~/assets/image/left arrow.svg");
    //     position: absolute;
    //     left: 0;
    //     top: 10%;
    //     filter: grayscale(100%);
    // }

    .job-status {
      display: flex;
      gap: 35px;
      padding: 0 0 55px 0;
      .status {
        position: relative;
        padding: 17px;
        background: #f3f3f3;
        border: 1px solid #e7e7e7;
        border-radius: 8px;
        .status-text {
          margin-left: 60px;
          p {
            font-size: 14px;
            line-height: 137.1%;
            letter-spacing: 0.02em;
            .font-bn & {
              font-size: 19px;
            }
          }
          h4 {
            font-weight: bold;
            font-size: 22px;
            line-height: 140.91%;
            color: #343434;
            .font-bn & {
              font-size: 27px;
            }
          }
        }
        .status-date {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: #12bff5;
          border-radius: 50%;
          margin-right: 30px;

          &::before {
            content: url("~/assets/image/icon/employement.png");
            position: absolute;
            left: 30%;
            top: 30%;
          }
        }
        &:hover {
          transition: 0.3s;
          transform: scale(1.12);
        }
      }
      .location {
        .status-date {
          background: #ff8c4b;
          &::before {
            content: url("~/assets/image/icon/location.png");
            position: absolute;
            left: 30%;
            top: 30%;
          }
        }
      }

      .deadline {
        .status-date {
          background: #35db95;
          &::before {
            content: url("~/assets/image/icon/date.png");
            position: absolute;
            left: 30%;
            top: 30%;
          }
        }
      }
    }
    .job-img {
      width: 30vw;
      padding-bottom: 30px;
    }
    .description-text {
      ::v-deep h3 {
        font-weight: bold;
        font-size: 22px;
        line-height: 140.91%;
        color: #343434;
        .font-bn & {
          font-size: 27px;
        }
      }
      ::v-deep p {
        font-size: 16px;
        line-height: 154.3%;
        color: #111111;
        text-align: justify;
        padding-left: 20px;
        .font-bn & {
          font-size: 21px;
        }
      }
      ::v-deep ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 20px;
      }

      ::v-deep ul li {
        position: relative;
        padding-left: 28px;
        margin-bottom: 12px;
      }

      ::v-deep ul li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 3px;
        background-image: url("~assets/image/educational.png");
        background-size: contain;
        background-repeat: no-repeat;
        width: 18px;
        height: 18px;
      }
    }
  }
  .apply-button {
    width: 337px;
    height: 50px;
    background: #ed017f;
    border-radius: 4px;
    padding: 13px 22px;
    margin-bottom: 55px;
    cursor: pointer;
    a {
      display: flex;
      justify-content: space-between;
      text-decoration: none;
      color: #ffffff;
      text-transform: uppercase;
      img {
        width: 12px;
        height: 12px;
        filter: brightness(0) invert(1);
        margin-top: 5px;
      }
    }
    &:hover {
      border: 3px solid #ed017f;
      background: #ffffff;
      transition: 0.3s;
      transform: scale(1.05);
      a {
        color: #ed017f;
        img {
          filter: brightness(1) invert(0);
          animation: move 0.4s infinite linear alternate;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .job-details {
    &-card {
      padding: 35px 0 0 0;
      .career-list {
        display: none;
      }
      .job-cards-heading {
        padding: 15px 0 20px 0;
        h1 {
          font-size: 28px;
          .font-bn & {
            font-size: 33px;
          }
        }
      }
      &::before {
        display: none;
      }

      .job-status {
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding: 15px 0 35px 0;
        .status {
          .status-text {
            margin-left: 60px;
            p {
              margin-bottom: 8px;
            }
            // h4 {
            // }
          }
        }
      }
    }
    .apply-button {
      margin: 25px 0 45px 0;
    }
  }
}
</style>
