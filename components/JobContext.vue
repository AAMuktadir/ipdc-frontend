<template>
  <section class="job-context">
    <div class="container" v-if="jobContextList.length">
      <div class="job-context-title">
        <h2 v-if="$i18n.locale == 'en'">Job Context</h2>
        <h2 v-if="$i18n.locale == 'bn'">কাজের প্রসঙ্গ</h2>
        <div
          class="education"
          v-for="(item, index) in jobContextList"
          :key="index"
        >
          <p>{{ item }}</p>
        </div>
      </div>
      <div
        class="educational-require"
        v-if="educationalRequirementsList.length"
      >
        <h3 v-if="$i18n.locale == 'en'">Educational Requirements</h3>
        <h3 v-if="$i18n.locale == 'bn'">শিক্ষাগত আবশ্যকতা</h3>

        <div
          class="education"
          v-for="(item, index) in educationalRequirementsList"
          :key="index"
        >
          <p>{{ item }}</p>
        </div>
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
    jobContextList() {
      // Determine which field to use based on locale
      const rawData =
        this.$i18n.locale === "en"
          ? this.singleJob.job_context
          : this.singleJob.job_context_bangla;

      // Check if data exists; split by \r\n and filter out empty strings
      if (rawData) {
        return rawData.split(/\r?\n/).filter((item) => item.trim() !== "");
      }

      return [];
    },
    educationalRequirementsList() {
      // Determine which field to use based on locale
      const rawData =
        this.$i18n.locale === "en"
          ? this.singleJob.educational_requirements
          : this.singleJob.educational_requirements_bangla;

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
.job-context {
  &-title {
    padding-bottom: 55px;
    h2 {
      font-weight: bold;
      font-size: 22px;
      line-height: 140.91%;
      color: #343434;
      padding-bottom: 18px;
      .font-bn & {
        font-size: 27px;
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

  .educational-require {
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
    .education {
      position: relative;
      padding: 10px;

      p {
        font-size: 16px;
        line-height: 1;
        text-align: justify;
        color: #111111;
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
        margin-top: -1px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .job-context {
    &-title {
      padding-bottom: 40px;
      // h2 {
      // }
      p {
        padding-right: 20px;
      }
    }

    .educational-require {
      padding-bottom: 40px;

      .education {
        &::before {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
