<template>
  <section class="container">
    <div class="required-documents">
      <div class="required-heading" v-if="documentsRequiredHeading">
        <h1 class="required-title">
          {{
            $i18n.locale == "en"
              ? documentsRequiredHeading.title
              : documentsRequiredHeading.title_bangla
          }}
        </h1>
        <p class="required-description">
          <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Dictum augue arcu, porttitor id sollicitudin suscipit. -->
        </p>
      </div>
      <div v-if="loanRequiredDocuments.length > 0" class="documents-details">

        <div
          v-for="homeLoanSingleRequiredDocument in loanRequiredDocuments"
          :key="homeLoanSingleRequiredDocument.id"
          class="documents application"
        >
          <div class="documents-icon">
            <img
              :src="homeLoanSingleRequiredDocument.icon"
              alt="Documents"
              v-if="homeLoanSingleRequiredDocument.icon"
            />
            <img
              src="~assets/image/icon/Documents.svg"
              alt="Documents"
              v-else
            />
          </div>
          <p>
            {{
              $i18n.locale == "en"
                ? homeLoanSingleRequiredDocument.title
                : homeLoanSingleRequiredDocument.title_bangla
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    loanRequiredDocuments: {
      type: Array,
      default: () => [],
    },
    documentsRequiredHeading: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.required-documents {
  padding: 80px 0;
  .required-heading {
    text-align: center;
    margin-bottom: 30px;
    .required-title {
      font-weight: bold;
      font-size: 36px;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
    .required-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858588;
      padding: 15px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .documents-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .documents {
      position: relative;
      display: flex;
      align-items: center;
      width: 570px;
      height: 84px;
      padding: 20px 20px 20px 40px;
      border: 1px solid #e7e7e7;
      background: #ffffff;
      gap: 26px;
      flex-basis: 50%;
      flex-grow: 1;

      &:first-child {
        border-radius: 10px 0 0 0;
      }
      &:nth-child(2) {
        border-radius: 0 10px 0 0;
      }

      p {
        font-size: 18px;
        line-height: 122.22%;
        .font-bn & {
          font-size: 23px;
        }
      }

      .documents-icon {
        img {
          max-width: 24px;
          height: 29px;
        }
      }

      &:hover {
        background: #f7f5f5;
        p {
          transition: 0.3s;
          transform: scale(1.02);
        }

        .documents-icon {
          img {
            transition: 0.5s;
            transform: scale(1.4);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .required-documents {
    padding: 50px 0;
    .required-heading {
      .required-title {
        font-weight: bold;
        font-size: 25px;
        line-height: 133%;
        .font-bn & {
          font-size: 30px;
        }
      }
      .required-description {
        padding: 20px;
      }
    }
    .documents-details {
      .documents {
        height: unset;
        flex-basis: 100%;
        p {
          padding: 0 20px 0 0;
        }
        &:first-child {
          border-radius: 10px 10px 0 0;
        }
        &:nth-child(2) {
          border-radius: 0;
        }
        // &:last-child {
        //   margin-right: unset;
        //   margin-left: unset;
        //   &::before {
        //     left: 30px;
        //   }
        // }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .required-documents {
    padding: 50px 0;
    .required-heading {
      .required-title {
        font-weight: bold;
        font-size: 25px;
        line-height: 133%;
        .font-bn & {
          font-size: 30px;
        }
      }
      .required-description {
        padding: 20px;
      }
    }
    .documents-details {
      .documents {
        height: unset;
        flex-basis: 100%;
        p {
          padding: 0 20px 0 0;
        }
        &:first-child {
          border-radius: 10px 10px 0 0;
        }
        &:nth-child(2) {
          border-radius: 0;
        }
        // &:last-child {
        //   margin-right: unset;
        //   margin-left: unset;
        //   &::before {
        //     left: 30px;
        //   }
        // }
      }
    }
  }
}
</style>
