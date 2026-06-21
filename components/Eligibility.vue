<template>
  <div class="eligibility">
    <div class="container">
      <div class="eligibility-heading" v-if="eligibleHeading">
        <h1 class="eligibility-title">
          {{
            $i18n.locale == "en"
              ? eligibleHeading.title
              : eligibleHeading.title_bangla
          }}
        </h1>
        <!--        <p class="eligibility-condition">-->
        <!--          You can apply for IPDC Auto Loan if you are:-->
        <!--        </p> -->
        <ul v-if="loanEligibilities.length > 0" class="condition-eligibility">
          <li
            v-for="homeLoanEligibility in loanEligibilities"
            :key="homeLoanEligibility.id"
            class="condition-list"
          >
            {{
              $i18n.locale == "en"
                ? homeLoanEligibility.title
                : homeLoanEligibility.title_bangla
            }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eligibleHeading: {
      type: Object,
      default: null,
    },
    loanEligibilities: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.eligibility {
  background: rgba(243, 251, 249, 0.5);
  padding: 80px 0;
  .eligibility-heading {
    .eligibility-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      margin-bottom: 30px;
      text-align: center;
      .font-bn & {
        font-size: 41px;
      }
    }
    .eligibility-condition {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      margin-bottom: 25px;
      .font-bn & {
        font-size: 21px;
      }
    }
    .condition-eligibility {
      // display: flex;
      list-style: none;
      padding: 0;

      .condition-list {
        font-size: 16px;
        line-height: 154.3%;
        color: #343434;
        margin-top: -3px;
        padding: 8px 0 8px 30px;
        position: relative;
        .font-bn & {
          font-size: 21px;
        }

        &::before {
          content: "\2713";
          position: absolute;
          left: 0;
          top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background: #2bbb7f;
          color: #ffffff;
          border-radius: 100px;
          margin-right: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .eligibility {
    padding: 50px 5px;
    .eligibility-heading {
      // .eligibility-title {
      // }
      // .eligibility-condition {
      // }
      .condition-eligibility {
        .condition-list {
          padding: 8px 0 8px 30px;
          // &::before {
          // }
        }
      }
    }
  }
}
</style>
