<template>
  <section class="report">
    <div class="container">
      <div v-if="$i18n.locale == 'en'" class="report-heading">
        <h1 class="report-heading-title">IPDC GREEN BANKING REPORT</h1>
        <!-- <p class="report-heading-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.
        </p> -->
      </div>
      <div v-if="$i18n.locale == 'bn'" class="report-heading">
        <h1 class="report-heading-title">আইপিডিসি গ্রিন ব্যাংকিং রিপোর্ট</h1>
        <!-- <p class="report-heading-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.
        </p> -->
      </div>
      <div v-if="downloadAbleFile.length > 0" class="yearly-report">
        <a
          v-for="singleItem in downloadAbleFile"
          :key="singleItem.id"
          :href="singleItem.file_url"
          target="_blank"
          class="yearly-report-details"
        >
          <div class="banking-report-icon">
            <img src="~assets/image/icon/bankingreport.svg" alt="" />
            <p class="quarter">
              {{
                $i18n.locale == "en"
                  ? singleItem.title
                  : singleItem.title_bangla
              }}
            </p>
          </div>
          <img
            src="~/assets/image/icon/report.png"
            class="quarter-img"
            alt="Report"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    downloadAbleFile: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.report {
  background: rgba(253, 225, 240, 0.2);
  padding: 100px 0 150px 0;

  &-heading {
    text-align: center;
    &-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 119.44%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }

    &-description {
      font-size: 16px;
      line-height: 137.5%;
      color: #858585;
      padding: 25px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .yearly-report {
    padding: 79px 0 0 0;

    &-details {
      position: relative;
      display: flex;
      justify-content: space-between;
      border: 1px solid #e7e7e7;
      box-shadow: 4px 5px 58px rgba(0, 0, 0, 0.05);
      padding: 24px 24px 24px 33px;
      text-decoration: none;

      .quarter-img {
        &:hover {
          transition: 0.3s;
          transform: scale(1.2);
        }
      }

      .banking-report-icon {
        display: flex;
        align-items: center;
        gap: 20px;

        img {
          width: 14px;
          height: 18px;
        }
        .quarter {
          font-size: 15px;
          line-height: 149.3%;
          color: #343434;
          .font-bn & {
            font-size: 20px;
          }
        }
      }

      &:hover {
        // transition: 0.3s;
        // transform: scale(1.2);

        .banking-report-icon {
          img {
            transition: 0.3s;
            transform: scale(1.27);
          }
          .quarter {
            transition: 0.3s;
            transform: scale(1.025);
          }
        }
      }

      &:first-child {
        border-radius: 13px 13px 0 0;
      }
      &:last-child {
        border-radius: 0 0 13px 13px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .report {
    background: rgba(253, 225, 240, 0.2);
    padding: 100px 0 50px 0;

    &-heading {
      text-align: left;
      padding: 0 0 58px 0;
      &-title {
        font-size: 30px;
        .font-bn & {
          font-size: 35px;
        }
      }

      &-description {
        padding: 26px 0;
      }
    }

    .yearly-report {
      padding: 0 0 0 0;

      &-details {
        .quarter {
          padding: 0 40px 0 10px;
        }
        .quarter-img {
          width: 19px;
          height: 19px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
