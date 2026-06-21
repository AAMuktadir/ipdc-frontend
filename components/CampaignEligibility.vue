<template>
  <section class="container" v-if="eligibility.length > 0">
    <div class="campaign-eligibility">
      <div class="campaign-eligibility-heading">
        <h3>
          {{ $i18n.locale == "en" ? "Eligibility" : "যোগ্যতা" }}
        </h3>
        <div v-if="eligibility.length > 0" class="campaign-condition">
          <div
            v-for="singleEligibility in eligibility"
            :key="singleEligibility.id"
            class="campaign-list"
          >
            <p>
              {{
                $i18n.locale == "en"
                  ? singleEligibility.title
                  : singleEligibility.title_bangla
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    eligibility: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.campaign-eligibility {
  padding: 50px 0 0 0;
  &-heading {
    h3 {
      font-weight: bold;
      font-size: 22px;
      line-height: 140.91%;
      color: #343434;
      margin-bottom: 18px;
      .font-bn & {
        font-size: 27px;
      }
    }

    .campaign-condition {
      .campaign-list {
        position: relative;
        padding: 13px;
        p {
          font-size: 16px;
          line-height: 154.3%;
          color: #5d5d5d;
          margin: -3px 0 0 13px;
          .font-bn & {
            font-size: 21px;
          }
        }

        &::before {
          content: "";
          position: absolute;
          left: 0;
          background-image: url("~assets/image/eligibility.svg");
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>
