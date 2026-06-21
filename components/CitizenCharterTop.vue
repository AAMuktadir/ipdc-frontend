<template>
  <section class="report">
    <div class="container">
      <!-- <div v-if="$i18n.locale == 'en'" class="report-heading"> -->
      <!-- <h1 class="report-heading-title">IPDC CITIZEN'S CHARTER</h1> -->
      <!-- <p class="report-heading-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.
        </p> -->
      <!-- </div> -->
      <!-- <div v-if="$i18n.locale == 'bn'" class="report-heading"> -->
      <!-- <h1 class="report-heading-title">আইপিডিসি সিটিজেন'স চার্টার</h1> -->
      <!-- <p class="report-heading-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.
        </p> -->
      <!-- </div> -->
      <div class="contact-information-card">
        <b-row v-if="downloadAbleFile.length > 0">
          <b-col md="6">
            <div class="contact-card">
              <a
                :href="downloadAbleFile[0].file_url"
                target="_blank"
                class="contact-button"
              >
                <h5>
                  {{
                    $i18n.locale == "en"
                      ? "Citizen’s Charter Official List"
                      : "সিটিজেন'স চার্টার অফিসিয়াল তালিকা"
                  }}
                </h5>
                <svg
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.33 12.6925C25.2289 12.4317 25.0772 12.1933 24.8837 11.9912L14.2588 1.36625C14.0606 1.16812 13.8254 1.01095 13.5665 0.903721C13.3077 0.796493 13.0302 0.741302 12.75 0.741302C12.1841 0.741302 11.6414 0.966102 11.2412 1.36625C11.0431 1.56438 10.886 1.7996 10.7787 2.05847C10.6715 2.31734 10.6163 2.5948 10.6163 2.875C10.6163 3.44089 10.8411 3.9836 11.2412 4.38375L18.2538 11.375H2.125C1.56141 11.375 1.02091 11.5989 0.622398 11.9974C0.223884 12.3959 0 12.9364 0 13.5C0 14.0636 0.223884 14.6041 0.622398 15.0026C1.02091 15.4011 1.56141 15.625 2.125 15.625H18.2538L11.2412 22.6162C11.0421 22.8138 10.884 23.0488 10.7761 23.3078C10.6682 23.5667 10.6127 23.8445 10.6127 24.125C10.6127 24.4055 10.6682 24.6833 10.7761 24.9422C10.884 25.2012 11.0421 25.4362 11.2412 25.6337C11.4388 25.8329 11.6738 25.991 11.9328 26.0989C12.1917 26.2068 12.4695 26.2623 12.75 26.2623C13.0305 26.2623 13.3083 26.2068 13.5672 26.0989C13.8262 25.991 14.0612 25.8329 14.2588 25.6337L24.8837 15.0087C25.0772 14.8067 25.2289 14.5683 25.33 14.3075C25.5425 13.7901 25.5425 13.2099 25.33 12.6925Z"
                    fill="#ED017F"
                  />
                </svg>
              </a>
            </div>
          </b-col>

          <b-col md="6">
            <div class="contact-card">
              <a
                :href="downloadAbleFile[1].file_url"
                target="_blank"
                class="contact-button"
              >
                <h5>
                  {{
                    $i18n.locale == "en"
                      ? "Citizen's Charter-IPDC Finance"
                      : "সিটিজেন'স চার্টার-আইপিডিসি ফাইন্যান্স"
                  }}
                </h5>
                <svg
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.33 12.6925C25.2289 12.4317 25.0772 12.1933 24.8837 11.9912L14.2588 1.36625C14.0606 1.16812 13.8254 1.01095 13.5665 0.903721C13.3077 0.796493 13.0302 0.741302 12.75 0.741302C12.1841 0.741302 11.6414 0.966102 11.2412 1.36625C11.0431 1.56438 10.886 1.7996 10.7787 2.05847C10.6715 2.31734 10.6163 2.5948 10.6163 2.875C10.6163 3.44089 10.8411 3.9836 11.2412 4.38375L18.2538 11.375H2.125C1.56141 11.375 1.02091 11.5989 0.622398 11.9974C0.223884 12.3959 0 12.9364 0 13.5C0 14.0636 0.223884 14.6041 0.622398 15.0026C1.02091 15.4011 1.56141 15.625 2.125 15.625H18.2538L11.2412 22.6162C11.0421 22.8138 10.884 23.0488 10.7761 23.3078C10.6682 23.5667 10.6127 23.8445 10.6127 24.125C10.6127 24.4055 10.6682 24.6833 10.7761 24.9422C10.884 25.2012 11.0421 25.4362 11.2412 25.6337C11.4388 25.8329 11.6738 25.991 11.9328 26.0989C12.1917 26.2068 12.4695 26.2623 12.75 26.2623C13.0305 26.2623 13.3083 26.2068 13.5672 26.0989C13.8262 25.991 14.0612 25.8329 14.2588 25.6337L24.8837 15.0087C25.0772 14.8067 25.2289 14.5683 25.33 14.3075C25.5425 13.7901 25.5425 13.2099 25.33 12.6925Z"
                    fill="#ED017F"
                  />
                </svg>
              </a>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    downloadAbleFile: {
      type: Array,
      default: [],
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
        font-size: 40px;
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
<style lang="scss" scoped>
.contact-information {
  &-card {
    padding: 80px 0;
    .contact-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 31.8293px 45.47px;
      background: #ffffff;
      box-shadow: 2.98772px 2.98772px 43.3219px rgba(0, 0, 0, 0.07);
      border-radius: 7.46929px;
      text-align: center;
      min-height: 80px;
      img {
        width: 95px;
        height: 95px;
      }
      h4 {
        font-weight: bold;
        font-size: 22px;
        line-height: 140.91%;
        color: #343434;
        margin: 20px 0 14px 0;
        min-height: 65px;
        .font-bn & {
          font-size: 27px;
        }
      }
      p {
        font-size: 16px;
        line-height: 154.3%;
        color: #858585;
        margin-bottom: 26px;
        min-height: 100px;
        .font-bn & {
          font-size: 21px;
        }
      }

      .contact-button {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        background: #fde1f0;
        border-radius: 4px;
        padding: 13px 22px;
        text-decoration: none;

        h5 {
          font-weight: 600;
          font-size: 14px;
          line-height: 100%;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ed017f;
          margin-top: 7px;
          .font-bn & {
            font-size: 19px;
          }
        }
        svg {
          width: 18px;
          height: 12px;
          margin-top: 5px;
        }
        &:hover {
          background: #ed017f;
          transition: 0.2s;
          transform: scale(1.02);
          h5 {
            color: #ffffff;
          }
          svg {
            path {
              fill: #ffffff;
            }
            animation: move 0.4s infinite linear alternate;
          }
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
  .contact-information {
    &-card {
      padding: 80px 0 0 0;
      .contact-card {
        margin: 36px 0px;
        img {
          width: 95px;
          height: 95px;
        }
        // h4 {
        // }
        // p {
        // }

        .contact-button {
          width: 60%;
          padding: 13px;
          // h5 {
          // }
          // img {
          // }
        }
      }
    }
  }
}
</style>
