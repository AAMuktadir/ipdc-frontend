<template>
  <div class="conditions" v-if="conditionsHeading && loanConditions.length > 0">
    <div class="container">
      <div class="conditions-heading">
        <h2 class="conditions-title">
          {{
            $i18n.locale == "en"
              ? conditionsHeading.title
              : conditionsHeading.title_bangla
          }}
        </h2>
        <ul v-if="loanConditions.length > 0" class="condition-conditions">
          <li
            v-for="item in loanConditions"
            :key="item.id"
            class="condition-list"
          >
            {{ $i18n.locale == "en" ? item.title : item.title_bangla }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    conditionsHeading: {
      type: Object,
      default: {},
    },
    loanConditions: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      testData: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.conditions {
  background: rgba(243, 251, 249, 0.5);
  padding: 80px 0;
  // margin: 40px 0;
  .conditions-heading {
    .conditions-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      margin-bottom: 15px;
      .font-bn & {
        font-size: 41px;
      }
    }
    .conditions-condition {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      margin-bottom: 25px;
      .font-bn & {
        font-size: 21px;
      }
    }
    .condition-conditions {
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
  .conditions {
    padding: 50px 5px;
    .conditions-heading {
      // .conditions-title {
      // }
      // .conditions-condition {
      // }
      .condition-conditions {
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
