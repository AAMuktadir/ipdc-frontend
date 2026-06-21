<template>
  <div v-if="footerApplicationForm">
    <section
      class="application-coverimage"
      :style="{ backgroundImage: `url(${footerApplicationForm.image})` }"
    >
      <div class="container">
        <div class="download-form">
          <div class="download-form-heading">
            <h1 class="download-form-title">
              {{
                $i18n.locale == "en"
                  ? footerApplicationForm.title
                  : footerApplicationForm.title_bangla
              }}
            </h1>
            <!-- <p class="download-form-description">
              {{ footerApplicationForm.description }}
            </p> -->
          </div>

          <div
            v-if="downloadableFiles.length > 0"
            class="download-form-button"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <a
              v-if="$i18n.locale == 'en'"
              :href="downloadableFiles[0].file_url"
              target="_blank"
              class="application-download"
              >download now</a
            >
            <a
              v-if="$i18n.locale == 'bn'"
              :href="downloadableFiles[0].file_url"
              target="_blank"
              class="application-download"
              >ডাউনলোড করুন
            </a>
          </div>
          <div
            v-if="downloadableFiles.length <= 0"
            class="download-form-button"
          >
            <a v-if="$i18n.locale == 'en'" class="application-download"
              >download now</a
            >
            <a v-if="$i18n.locale == 'bn'" class="application-download"
              >ডাউনলোড করুন</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    footerApplicationForm: {
      type: null,
      default: null,
    },
    page: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      section: "footer-form",
      downloadableFiles: [],
    };
  },
  created() {
    this.getDownloadableFiles();
  },
  methods: {
    async getDownloadableFiles() {
      const response = await this.$axios.get(
        `/get-downloadable-file/${this.page}/${this.section}`
      );
      this.downloadableFiles = response.data.data;
      // console.log('downloadableFiles http://178.128.220.76/autoloan/ =>', this.downloadableFiles)
    },
  },
};
</script>

<style lang="scss" scoped>
.application-coverimage {
  background-image: url("~assets/image/15.jpg");
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;

  .download-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 350px;

    .download-form-heading {
      color: #ffffff;
      max-width: 500px;

      .download-form-title {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        padding-bottom: 15px;
        .font-bn & {
          font-size: 41px;
        }
      }

      .download-form-description {
        font-size: 16px;
        line-height: 137.5%;
        .font-bn & {
          font-size: 21px;
        }
      }
    }

    .download-form-button {
      opacity: 1;
      .application-download {
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
        cursor: pointer;
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
    }
  }
}

@media screen and (max-width: 1024px) {
  .application-coverimage {
    .download-form {
      display: flex;
      flex-direction: column;
      padding: 41px 0 40px 0;

      .download-form-heading {
        .download-form-title {
          font-size: 25px;
          padding-bottom: 42px;
          .font-bn & {
            font-size: 30px;
          }
        }

        .download-form-description {
          padding: 0 0 24px 0;
        }
      }

      .download-form-button {
        padding: 24px 0 60px 0;

        .application-download {
          position: relative;
          // margin-left: -110px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .application-coverimage {
    .download-form {
      display: flex;
      flex-direction: column;
      padding: 41px 20px 40px 10px;

      .download-form-heading {
        .download-form-title {
          font-size: 25px;
          padding-bottom: 42px;
          .font-bn & {
            font-size: 30px;
          }
        }

        .download-form-description {
          padding: 0 0 24px 0;
        }
      }

      .download-form-button {
        padding: 24px 0 60px 0;

        .application-download {
          position: relative;
          margin-left: -110px;
        }
      }
    }
  }
}
</style>
