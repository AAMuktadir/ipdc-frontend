<template>
  <section class="strongest-balance">
    <div class="container">
      <div class="row">
        <div
          class="strongest-balance-title col-md-5"
          v-if="balanceSheetTitle"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-back"
        >
          <h1 v-if="$i18n.locale == 'en'" class="balance-heading">
            <span class="emphasis">Strongest</span><br />
            Balance Sheet In The Industry
          </h1>
          <h1 v-if="$i18n.locale == 'bn'" class="balance-heading">
            ইন্ডাস্ট্রির সবচেয়ে <br /><span class="emphasis">শক্তিশালী</span
            ><br />
            ব্যালেন্স শিট
          </h1>
          <!-- <h1 class="balance-heading">
            {{
              $i18n.locale == "en"
                ? balanceSheetTitle.title
                : balanceSheetTitle.title_bangla
            }}
          </h1>
          <p class="balance-description">
            {{
              $i18n.locale == "en"
                ? balanceSheetTitle.sub_title
                : balanceSheetTitle.sub_title_bangla
            }}
          </p> -->
        </div>
        <div
          v-if="balanceSheet.length > 0"
          class="strongest-sheet col"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-back"
        >
          <div
            v-for="singleItem in balanceSheet"
            :key="singleItem.id"
            class="strongest portfolio"
          >
            <div class="strongest-title">
              <h4>
                {{
                  $i18n.locale == "en"
                    ? singleItem.value
                    : singleItem.value_bangla
                }}
              </h4>
              <p>
                {{
                  $i18n.locale == "en"
                    ? singleItem.name
                    : singleItem.name_bangla
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="data-basis">
        Data as of
        {{ $i18n.locale == "en" ? asOnDate.date_en : asOnDate.date_bn }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    separatedValue(item) {
      const value = item.value.toString().trim(); // Trim spaces
      const number = value.match(/[\d,.]+/)[0]; // Extract the number
      const suffix = value.replace(number, "").trim(); // Extract the string and trim spaces
      return { number, suffix };
    },
  },
  props: {
    balanceSheet: {
      type: Array,
      default: [],
    },
    asOnDate: {
      type: Object,
      default: null,
    },
    balanceSheetTitle: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.strongest-balance {
  padding: 100px 0;
  .strongest-balance-title {
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: center;
    .balance-heading {
      font-size: 36px;
      line-height: 133.33%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }

      .emphasis {
        color: #ed017f;
        font-weight: bold;
        font-size: 56px;
        // text-shadow: 4px 4px 58px rgb(18 13 13 / 41%);
        .font-bn & {
          font-size: 61px;
        }
      }
    }
    .balance-description {
      font-size: 16px;
      line-height: 137.5%;
      color: #999999;
      padding: 20px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .strongest-sheet {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    // padding-top: 84px;
    align-content: center;
    .strongest {
      height: 200px;
      width: 150px;
      background: #e5f1fe;
      backdrop-filter: blur(11px);
      border-radius: 10px;
      flex-basis: calc(25% - 15px);
      .strongest-title {
        text-align: center;
        // margin-top: 36px;
        position: relative;
        // padding-bottom: 20px;

        h4 {
          font-weight: bold;
          font-size: 30px;
          line-height: 111.11%;
          color: #fafcfe;
          margin-bottom: 8px;
          .font-bn & {
            font-size: 41px;
          }
        }

        p {
          font-weight: 600;
          font-size: 12px;
          line-height: 125%;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #e5efe9;
          .font-bn & {
            font-size: 18px;
          }
        }

        p::before {
          content: "";
          display: block;
          width: 75%; /* Adjust the width of the line */
          height: 1px;
          background-color: #e5efe9;
          margin: 0 auto 10px auto; /* Adjusts spacing between line and text */
        }

        &:hover {
          transition: 0.3s;
          transform: scale(0.94);
        }
      }
    }
    .portfolio {
      display: flex;
      // align-items: center;
      // padding-top: 35px;
      justify-content: center;
      align-items: center;
      box-shadow: 4px 4px 58px rgba(18, 13, 13, 0.253);

      &:nth-child(1) {
        background-color: #165028;
      }

      &:nth-child(2) {
        background-color: #0e70b9;
      }

      &:nth-child(3) {
        background-color: #9a6732;
      }

      &:nth-child(4) {
        background-color: #5b062f;
      }

      &:nth-child(5) {
        background-color: #0d7e3e;
      }

      &:nth-child(6) {
        background-color: #25aee4;
      }

      &:nth-child(7) {
        background-color: #f8981d;
      }

      &:nth-child(8) {
        background-color: #d11a6c;
      }
    }
  }
  .data-basis {
    text-align: end;
    margin-top: 15px;
    margin-right: 10px;
    font-size: 12px;
    .font-bn & {
      font-size: 17px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .strongest-balance {
    .strongest-balance-title {
      .balance-heading {
        font-size: 28px;
        line-height: 128.57%;
        .font-bn & {
          font-size: 33px;
        }
        .emphasis {
          font-size: 40px;
          .font-bn & {
            font-size: 45px;
          }
        }
      }
      .balance-description {
        padding: 20px 0;
      }
    }

    .strongest-sheet {
      display: flex;
      gap: 16px;
      .strongest {
        flex-basis: calc(50% - 15px);
        .strongest-title {
          h4 {
            font-size: 30px;
            .font-bn & {
              font-size: 35px;
            }
          }
          // p {
          // }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .strongest-balance {
    .strongest-balance-title {
      text-align: center;
      padding-bottom: 50px;
      .balance-heading {
        font-size: 24px;
        .font-bn & {
          font-size: 29px;
        }
      }
      .balance-description {
        padding: 20px 0;
      }
    }

    .strongest-sheet {
      display: flex;
      gap: 16px;
      .strongest {
        flex-basis: calc(50% - 30px / 2);
        .strongest-title {
          h4 {
            font-size: 30px;
            .font-bn & {
              font-size: 35px;
            }
          }
          // p {
          // }
        }
      }
    }
  }
}
</style>
