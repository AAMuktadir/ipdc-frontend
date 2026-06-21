<template>
  <section
    :style="{
      backgroundImage: `url(${depositSchemeFooterApplicationForm.image})`,
    }"
    class="deposit-schemes-coverimage"
  >
    <div class="container">
      <div
        v-if="depositSchemeFooterApplicationForm && downloadableFile"
        class="deposit-schemes-form"
      >
        <div class="deposit-schemes-form-heading">
          <h1 class="deposit-schemes-form-heading-title">
            {{
              $i18n.locale == "en"
                ? depositSchemeFooterApplicationForm.title
                : depositSchemeFooterApplicationForm.title_bangla
            }}
          </h1>
          <p class="deposit-schemes-form-heading-description">
            {{
              $i18n.locale == "en"
                ? depositSchemeFooterApplicationForm.description
                : depositSchemeFooterApplicationForm.description_bangla
            }}
          </p>
        </div>
        <div v-if="$i18n.locale == 'en'" class="deposit-application-form">
          <a
            v-if="downloadableFile.length > 0"
            :href="downloadableFile[0].file_url"
            class="deposit-form-button individual"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Download for individual
          </a>
          <a
            v-if="downloadableFile.length > 1"
            :href="downloadableFile[1].file_url"
            class="deposit-form-button institutional"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Download for Institutional
          </a>
        </div>
        <div v-if="$i18n.locale == 'bn'" class="deposit-application-form">
          <a
            v-if="downloadableFile.length > 0"
            :href="downloadableFile[0].file_url"
            class="deposit-form-button individual"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            ব্যক্তিগত ডিপোজিটের জন্য ডাউনলোড করুন
          </a>
          <a
            v-if="downloadableFile.length > 1"
            :href="downloadableFile[1].file_url"
            class="deposit-form-button institutional"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            প্রাতিষ্ঠানিক ডিপোজিটের জন্য ডাউনলোড করুন
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    depositSchemeFooterApplicationForm: {
      type: Object,
      default: null,
    },
    downloadableFile: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.deposit-schemes-coverimage {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;

  .deposit-schemes-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 350px;

    &-heading {
      color: #ffffff;
      max-width: 500px;
      &-title {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        padding-bottom: 15px;
        .font-bn & {
          font-size: 41px;
        }
      }
      &-description {
        display: none;
        font-size: 16px;
        line-height: 137.5%;
        .font-bn & {
          font-size: 21px;
        }
      }
    }

    .deposit-application-form {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 28px;

      .deposit-form-button {
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        color: #ffffff;
        text-decoration: none;
        letter-spacing: 2px;
        text-transform: uppercase;
        background: #ed017f;
        border-radius: 4px;
        padding: 18px 56px 18px 22px;
        position: relative;
        .font-bn & {
          font-size: 19px;
        }

        &::after {
          content: "";
          height: 20px;
          width: 20px;
          position: absolute;
          top: 50%;
          right: 15px;
          transform: translateY(-50%);
          background: url("~/assets/image/download.svg");
          filter: brightness(0) invert(1);
        }
        &:hover {
          // border-color:  #ffffff;
          border: 1px solid #ed017f;
          transition: 0.2s;
          transform: scale(1);
          background: #ffffff;
          overflow: hidden;
          color: #ed017f;
          &::after {
            filter: brightness(1) invert(0);
          }
        }
      }
      // .individual {
      // }

      // .institutional {
      // }
    }
  }
}

@media screen and (max-width: 1024px) {
  .deposit-schemes-coverimage {
    .deposit-schemes-form {
      padding: 50px 0;
      &-heading {
        color: #ffffff;
        &-title {
          font-size: 25px;
          .font-bn & {
            font-size: 30px;
          }
        }
      }

      // .deposit-application-form {
      //   .deposit-form-button {
      //   }
      //   .individual {
      //   }

      //   .institutional {
      //   }
      // }
    }
  }
}
@media screen and (max-width: 768px) {
  .deposit-schemes-coverimage {
    .deposit-schemes-form {
      display: flex;
      flex-direction: column;
      padding: 50px 0;
      &-heading {
        color: #ffffff;
        &-title {
          font-size: 25px;
          .font-bn & {
            font-size: 30px;
          }
        }
      }

      .deposit-application-form {
        display: flex;
        padding-top: 40px;
        // .deposit-form-button {
        // }
        .individual {
          margin-right: 45px;
        }

        .institutional {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
