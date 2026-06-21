<template>
  <section class="strongest-balance">
    <div class="container">
      <div class="row">
        <div
          class="strongest-balance-title col"
          v-if="balanceSheetTitle"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-back"
        >
          <h1 v-if="$i18n.locale == 'en'" class="balance-heading">
            IPDC going an
            <span class="emphasis">extra mile</span>
            for their stakeholders
          </h1>
          <h1 v-if="$i18n.locale == 'bn'" class="balance-heading">
            আইপিডিসি’র কাছে <span class="emphasis">অংশীদারগণের গুরুত্ব</span>
            সবসময়ই বেশি
          </h1>
        </div>
      </div>
      <div class="row">
        <div
          v-if="balanceSheet.length > 0"
          class="strongest-sheet col"
          data-aos="fade-left"
          data-aos-delay="100"
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
        {{
          $i18n.locale == "en"
            ? "*As of " + asOnDate.date_en
            : "*" + asOnDate.date_bn + " ভিত্তিক"
        }}
      </p>
      <br /><br /><br /><br />
      <div class="row">
        <div
          class="strongest-balance-title col"
          v-if="balanceSheetTitle"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-back"
        >
          <h1 v-if="$i18n.locale == 'en'" class="balance-heading">
            MILESTONE INVESTMENTS
          </h1>
          <h1 v-if="$i18n.locale == 'bn'" class="balance-heading">
            অর্থায়নের মাইলফলক
          </h1>
        </div>
      </div>
      <div class="row">
        <div
          class="strongest-balance-title col"
          v-if="balanceSheetTitle"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-back"
        >
          <p v-if="$i18n.locale == 'en'" class="balance-description">
            Since its inception IPDC has played a pivotal role in developing
            country’s industrial landscape. We had been partner to many of the
            very renowned corporate houses in Bangladesh in their incubation
            stage. No other financial institution of the country has played such
            a significant role in private sector development of the country.
            IPDC has been a partner in a number of milestone projects that were
            the first of its kind in Bangladesh. There are many in this list but
            we mention here only the few from different sectors to give an
            understanding to the reader.
          </p>
          <p v-if="$i18n.locale == 'bn'" class="balance-description">
            সূচনালগ্ন থেকেই আইপিডিসি ফাইন্যান্স দেশের শিল্পখাত গঠন ও উন্নয়নে
            গুরুত্বপূর্ণ ভূমিকা রেখেছে। আইপিডিসি বিভিন্ন প্রতিষ্ঠানের
            তাৎপর্যপূর্ণ প্রজেক্টে তাদের প্রতিষ্ঠালগ্ন থেকেই আর্থিক সহযোগী
            হিসেবে জড়িত ছিল, যার মধ্যে উল্লেখযোগ্য অনেক প্রজেক্টই বাংলাদেশের
            প্রথম। সবার জ্ঞাতার্থে, কিছু প্রজেক্টের নাম এখানে উল্লেখ করা হলো:
          </p>
        </div>
      </div>
      <div class="row">
        <div
          v-if="firstCustomers"
          class="first-customers col"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-back"
        >
          <div
            v-for="singleItem in firstCustomers"
            :key="singleItem.id"
            class="strongest portfolio"
          >
            <div
              class="strongest-title"
              @click="goToLink(singleItem.url)"
              role="link"
              tabindex="0"
              style="cursor: pointer"
            >
              <picture>
                <source media="(min-width:650px)" :setsrc="singleItem.logo" />
                <img :src="singleItem.logo" alt="Logo" />
              </picture>
              <p>
                {{
                  $i18n.locale == "en"
                    ? singleItem.description
                    : singleItem.description_bangla
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
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
    goToLink(url) {
      window.open(url, "_blank");
    },
  },
  props: {
    balanceSheet: {
      type: Array,
      default: [],
    },
    balanceSheetTitle: {
      type: Object,
      default: null,
    },
    firstCustomers: {
      type: Array,
      default: null,
    },
    asOnDate: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.strongest-balance {
  background-color: #f3f3f3;
  padding: 40px 0;
  .strongest-balance-title {
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: center;
    .balance-heading {
      text-transform: uppercase;
      font-size: clamp(18px, 4vw, 36px);
      line-height: 133.33%;
      color: #343434;
      overflow: hidden;
      margin-bottom: 40px;
      text-align: center;

      .font-bn & {
        font-size: clamp(23px, 4vw, 41px);
      }

      .emphasis {
        color: #ed017f;
        font-weight: bold;
        font-size: 48px;
        text-shadow: 4px 4px 10px rgb(18 13 13 / 41%);
        .font-bn & {
          font-size: 53px;
        }
      }
    }
    .balance-description {
      text-align: justify;
      font-size: 16px;
      line-height: 137.5%;
      color: #999999;
      padding-bottom: 40px;
      // padding: 20px 220px;
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
      background-color: #fafafa;
      height: 150px;
      width: 150px;
      // background: #e5f1fe;
      backdrop-filter: blur(11px);
      border-radius: 10px;
      flex-basis: calc(16.7% - 15px);
      transform: scale(0.95);

      &:hover {
        transition: 0.3s;
        transform: scale(1.125);
      }
      .strongest-title {
        text-align: center;
        // margin-top: 36px;
        position: relative;
        // padding-bottom: 20px;

        h4 {
          font-weight: bold;
          font-size: 36px;
          line-height: 111.11%;
          // color: #fafcfe;
          margin-bottom: 8px;
          .font-bn & {
            font-size: 41px;
          }
        }

        p {
          font-weight: 600;
          font-size: 13px;
          line-height: 125%;
          letter-spacing: 1px;
          text-transform: uppercase;
          // color: #e5efe9;
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
      }
    }
    .portfolio {
      display: flex;
      align-items: center;
      justify-content: center;

      box-shadow: 4px 4px 58px rgba(18, 13, 13, 0.253);
      &:nth-child(1) {
        color: #f2922c;
      }

      &:nth-child(2) {
        color: #ca2f64;
      }

      &:nth-child(3) {
        color: #4165a1;
      }

      &:nth-child(4) {
        color: #007b3a;
      }

      &:nth-child(5) {
        color: #bc3a2f;
      }

      &:nth-child(6) {
        color: #7a2a79;
      }

      &:nth-child(7) {
        color: #f8981d;
      }

      &:nth-child(8) {
        color: #d11a6c;
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

  .first-customers {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    // padding-top: 84px;
    align-content: center;
    .strongest {
      background-color: white;
      height: 220px;
      width: 150px;
      // background: #e5f1fe;
      backdrop-filter: blur(11px);
      border-radius: 10px;
      flex-basis: calc(20% - 15px);
      transform: scale(0.95);

      &:hover {
        transition: 0.3s;
        transform: scale(1.125);
      }
      .strongest-title {
        text-align: center;
        // margin-top: 36px;
        position: relative;
        // padding-bottom: 20px;

        picture {
          height: 120px;
          img {
            text-align: -webkit-center;
            max-height: 90%;
          }
        }

        h4 {
          font-weight: bold;
          font-size: 36px;
          line-height: 111.11%;
          // color: #fafcfe;
          margin-bottom: 8px;
          .font-bn & {
            font-size: 41px;
          }
        }

        p {
          font-weight: 600;
          font-size: 13px;
          line-height: 125%;
          letter-spacing: 1px;
          text-transform: uppercase;
          // color: #e5efe9;
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
      }
    }
    .portfolio {
      display: flex;
      align-items: center;
      justify-content: center;

      box-shadow: 4px 4px 58px rgba(18, 13, 13, 0.253);
      &:nth-child(1) {
        color: #f2922c;
      }

      &:nth-child(2) {
        color: #ca2f64;
      }

      &:nth-child(3) {
        color: #4165a1;
      }

      &:nth-child(4) {
        color: #007b3a;
      }

      &:nth-child(5) {
        color: #bc3a2f;
      }

      &:nth-child(6) {
        color: #7a2a79;
      }

      &:nth-child(7) {
        color: #f8981d;
      }

      &:nth-child(8) {
        color: #d11a6c;
      }
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

    .strongest-sheet,
    .first-customers {
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
