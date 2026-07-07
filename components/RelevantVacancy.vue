<template>
  <section
    class="relevant-vacancy"
    :style="{
      backgroundImage: `url(${
        $i18n.locale == 'en'
          ? backgroundImage.image_url
          : backgroundImage.image_url_bangla
      })`,
    }"
  >
    <div class="container">
      <b-row>
        <b-col md="5">
          <div class="relevant-vacancy-title">
            <h1>
              {{
                $i18n.locale == "en"
                  ? "No relevant vacancy?"
                  : "কোন প্রাসঙ্গিক শূন্যপদ? "
              }}
              <br />
              {{
                $i18n.locale == "en"
                  ? "We are still waiting for you"
                  : "আমরা এখনও আপনার জন্য অপেক্ষা করছি"
              }}
            </h1>
            <p>
              {{ $i18n.locale == "en" ? "" : "" }}
            </p>
          </div>
        </b-col>
        <b-col md="5">
          <div class="drop-resume">
            <h4>
              {{
                $i18n.locale == "en"
                  ? "Drop Your Resume"
                  : "আপনার জীবনবৃত্তান্ত জমা দিন"
              }}
            </h4>
            <form ref="resetForm" class="for-resume" @submit.prevent="onSubmit">
              <b-form-group>
                <b-form-input
                  v-model="formData.name"
                  :placeholder="
                    $i18n.locale == 'en' ? 'Your Name' : 'আপনার নাম'
                  "
                  required
                />
              </b-form-group>
              <b-form-group>
                <b-form-input
                  v-model="formData.phoneNumber"
                  :placeholder="
                    $i18n.locale == 'en' ? 'Phone Number' : 'ফোন নম্বর'
                  "
                  required
                />
              </b-form-group>
              <b-form-group>
                <b-form-file
                  :state="Boolean(formData.uploadFile)"
                  :placeholder="
                    $i18n.locale == 'en'
                      ? 'Choose a file...'
                      : 'একটি ফাইল নির্বাচন করুন...'
                  "
                  drop-placeholder="Drop file here..."
                  accept=".pdf,.doc"
                  @change="onSelectResumeFile($event)"
                />
              </b-form-group>

              <b-form-group>
                <b-form-input
                  v-model="formData.linkdinUrl"
                  :placeholder="
                    $i18n.locale == 'en'
                      ? 'Share Your LinkedIn Url'
                      : 'আপনার LinkedIn Url শেয়ার করুন'
                  "
                />
              </b-form-group>
              <b-button
                v-if="$i18n.locale == 'en'"
                block
                type="submit"
                style="background: #ed017f"
              >
                Submit
              </b-button>
              <b-button
                v-if="$i18n.locale == 'bn'"
                block
                type="submit"
                style="background: #ed017f"
              >
                জমা দিন
              </b-button>
            </form>
            <!-- <div class="Submit-button" >
              <a href="#">Submit</a>
              <img src="~assets/image/right arrow.svg" alt="">
            </div> -->
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        phoneNumber: "",
        uploadFile: null,
        linkdinUrl: "",
        type: "general",
      },
      page: 25,
      section: "Bottom",
      backgroundImage: {},
    };
  },
  created() {
    this.getBackgroundImage();
  },
  methods: {
    async onSubmit() {
      const data = new FormData();
      data.append("name", this.formData.name);
      data.append("phoneNumber", this.formData.phoneNumber);
      data.append("uploadFile", this.formData.uploadFile);
      data.append("linkdinUrl", this.formData.linkdinUrl);
      data.append("type", this.formData.type);
      const response = await this.$axios.post("/post-contact", data);
      if (response) {
        this.$refs.resetForm.reset();
        this.$toast.success("Your Resquest has been submitted!");
      } else {
        this.$toast.error("There is some problem!");
      }
    },
    async getBackgroundImage() {
      const response = await this.$axios.get(
        `/get-background-image/${this.page}/${this.section}`
      );
      this.backgroundImage = response.data.data;
    },
    onSelectResumeFile(event) {
      this.formData.uploadFile = event.target.files[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.relevant-vacancy {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  padding: 86px 0 0 0;
  &-title {
    padding: 0 0 200px 0;
    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #ffffff;
      .font-bn & {
        font-size: 41px;
      }
    }
    p {
      display: none;
      font-size: 16px;
      line-height: 137.5%;
      color: #ffffff;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .drop-resume {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(11px);
    border-radius: 18px 18px 0px 0px;
    padding: 31px 44px;
    position: absolute;
    bottom: 0;
    // right: -20%;
    h4 {
      font-weight: bold;
      font-size: 30px;
      line-height: 133%;
      color: #ffffff;
      padding-bottom: 32px;
      .font-bn & {
        font-size: 35px;
      }
    }

    .form-group {
      padding-bottom: 7px;
    }

    .btn {
      border: 3px solid #ed017f;
    }

    // .for-resume {
    //   .text-field {
    //     .text3 {
    //       img {
    //       }
    //     }
    //   }
    // }
    //  .Submit-button {
    //     display: flex;
    //     justify-content: space-between;
    //     width: 100%;
    //     height: 50px;
    //     background:  #ED017F;
    //     border-radius: 4px;
    //     padding: 13px 22px;
    //     a {
    //         text-decoration: none;
    //         color: #FFFFFF;
    //         text-transform: uppercase;
    //     }
    //     img {
    //         width: 12px;
    //         height: 12px;
    //         filter: brightness(0) invert(1);
    //         margin-top: 5px;
    //     }
    // }
  }
}

@media screen and (max-width: 768px) {
  .relevant-vacancy {
    background-position: left center;
    width: 100%;
    height: 100%;
    padding: 26px 0 0 0;
    &-title {
      padding: 0 0 550px 0;
      h1 {
        font-size: 25px;
        padding-bottom: 20px;
        .font-bn & {
          font-size: 30px;
        }
      }
      // p {
      // }
    }
    .drop-resume {
      padding: 31px 20px;
      width: unset;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      // h4 {
      // }

      // .for-resume {
      //   .text-field {
      //     .text3 {
      //     }
      //     img {
      //     }
      //   }
      // }
      // .Submit-button {
      //   a {
      //   }
      //   img {
      //   }
      // }
    }
  }
}
</style>
