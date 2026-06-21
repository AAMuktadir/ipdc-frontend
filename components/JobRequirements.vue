<template>
  <section class="job-requirement">
    <div class="container">
      <div class="experience-require" v-if="singleJob.year_of_experience">
        <h3 v-if="$i18n.locale == 'en'">Experience Requirements</h3>
        <h3 v-if="$i18n.locale == 'bn'">অভিজ্ঞতার আবশ্যকতা</h3>
        <div class="experience">
          <p v-if="$i18n.locale == 'en'">
            At least {{ singleJob.year_of_experience }} Years Experience.
          </p>
          <p v-if="$i18n.locale == 'bn'">
            ন্যূনতম {{ singleJob.year_of_experience_bangla }} বছরের অভিজ্ঞতা
          </p>
        </div>
      </div>
      <div class="experience-require" v-if="experienceRequirementsList.length">
        <h3 v-if="$i18n.locale == 'en'">Other Requirements</h3>
        <h3 v-if="$i18n.locale == 'bn'">অন্যান্য আবশ্যকতা</h3>
        <div
          class="experience"
          v-for="(item, index) in experienceRequirementsList"
          :key="index"
        >
          <p>{{ item }}</p>
        </div>
      </div>
      <div class="job-opportunity" v-if="whatWeOfferList.length">
        <h3 v-if="$i18n.locale == 'en'">What we offer at IPDC</h3>
        <h3 v-if="$i18n.locale == 'bn'">আইপিডিসিতে আমরা যা অফার করি</h3>

        <div
          class="opportunity"
          v-for="(item, index) in whatWeOfferList"
          :key="index"
        >
          <div class="opportunity-list">
            <a href="#"><img src="~assets/image/rightarrow.png" alt="" /></a>
          </div>
          <p>
            {{ item }}
          </p>
        </div>
        <!-- <div class="opportunity">
          <div class="opportunity-list">
            <a href="#"><img src="~assets/image/rightarrow.png" alt=""></a>
          </div>
          <p>Chance to work with the most vibrant team in the industry</p>
        </div>
        <div class="opportunity">
          <div class="opportunity-list">
            <a href="#"><img src="~assets/image/rightarrow.png" alt=""></a>
          </div>
          <p>Great exposure to the corporate world</p>
        </div>
        <div class="opportunity">
          <div class="opportunity-list">
            <a href="#"><img src="~assets/image/rightarrow.png" alt=""></a>
          </div>
          <p>Competitive remuneration and stellar reward programs</p>
        </div> -->
      </div>
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
    experienceRequirementsList() {
      // Determine which field to use based on locale
      const rawData =
        this.$i18n.locale === "en"
          ? this.singleJob.experience_requirements
          : this.singleJob.experience_requirements_bangla;

      // Check if data exists; split by \r\n and filter out empty strings
      if (rawData) {
        return rawData.split(/\r?\n/).filter((item) => item.trim() !== "");
      }

      return [];
    },
    whatWeOfferList() {
      // Determine which field to use based on locale
      const rawData =
        this.$i18n.locale === "en"
          ? this.singleJob.what_we_offer_at_ipdc
          : this.singleJob.what_we_offer_at_ipdc_bangla;

      // Check if data exists; split by \r\n and filter out empty strings
      if (rawData) {
        return rawData.split(/\r?\n/).filter((item) => item.trim() !== "");
      }

      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
.job-requirement {
  .experience-require {
    padding-bottom: 55px;
    h3 {
      font-weight: bold;
      font-size: 22px;
      line-height: 140.91%;
      color: #343434;
      padding-bottom: 18px;
      .font-bn & {
        font-size: 27px;
      }
    }

    .experience {
      position: relative;
      padding: 6px;
      p {
        font-size: 16px;
        line-height: 150%;
        color: #111111;
        text-align: justify;
        padding-left: 20px;
        .font-bn & {
          font-size: 21px;
        }
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        background-image: url("~assets/image/educational.png");
        width: 18px;
        height: 18px;
        margin-top: 2px;
      }
    }
  }
  .job-opportunity {
    padding-bottom: 55px;
    h3 {
      font-weight: bold;
      font-size: 22px;
      line-height: 140.91%;
      color: #343434;
      padding-bottom: 18px;
      .font-bn & {
        font-size: 27px;
      }
    }
    .opportunity {
      display: flex;
      gap: 10px;
      padding-bottom: 12px;
      // padding: 13px 0;
      // padding-bottom: 55px;

      a {
        width: 17px;
        height: 17px;
        background: rgba(18, 191, 245, 0.2);
        mix-blend-mode: normal;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3px;
        img {
          width: 6px;
          height: 7px;
          filter: brightness(1) invert(0.678);
        }
      }
      p {
        font-size: 16px;
        line-height: 150%;
        text-align: justify;
        color: #111111;
        .font-bn & {
          font-size: 21px;
        }
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

@keyframes move {
  0% {
    transform: translate(-4px);
  }
  100% {
    transform: translate(4px);
  }
}

@media screen and (max-width: 768px) {
  .job-requirement {
    .experience-require {
      padding-bottom: 40px;

      .experience {
        &::before {
          margin-top: 5px;
        }
      }
    }
    .job-opportunity {
      .opportunity {
        a {
          margin-top: 5px;
        }
      }
    }
    .apply-button {
      margin: 25px 0 45px 0;
    }
  }
}
</style>
