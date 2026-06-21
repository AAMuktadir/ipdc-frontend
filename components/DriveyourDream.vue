<template>
  <section class="drive-dream-coverimage">
    <b-container>
      <b-row align-h="between">
        <b-col md="5">
          <div class="towards-dream">
            <div class="drive-dream-title">
              <h1>Drive towards your dream</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
                dapibus mattis vel feugiat erat tortor eleifend.
              </p>
            </div>
            <div class="drive-dream-contact">
              <p>To find your interest rate now</p>
              <h3>Call @ 16519</h3>
            </div>
          </div>
        </b-col>
        <b-col md="5">
          <div class="how-help">
            <h3 class="how-help_title">How can we help you?</h3>
            <form class="for-vechicle">
              <b-form-group
                v-slot="{ ariaDescribedby }"
                label="I want a vehicle for"
                class="vechicle vechicle-purchase"
              >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="vechicle-Refinance"
                  value="A"
                >
                  Refinance
                </b-form-radio>
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="vechicle-purchase"
                  value="B"
                >
                  Purchase
                </b-form-radio>
              </b-form-group>

              <b-form-group
                v-slot="{ ariaDescribedby }"
                label="Condition"
                class="vechicle vechicle-condition"
              >
                <b-form-radio
                  v-model="vechicle"
                  :aria-describedby="ariaDescribedby"
                  name="vechicle-condition"
                  value="C"
                >
                  New
                </b-form-radio>
                <b-form-radio
                  v-model="vechicle"
                  :aria-describedby="ariaDescribedby"
                  name="vechicle-condition"
                  value="D"
                >
                  Recondition
                </b-form-radio>
              </b-form-group>

              <div class="pb-2 price-vehicle">
                <div class="mt-2 mb-2">Price of Vehicle</div>
                <b-form-group>
                  <b-form-input v-model="text" placeholder="50000" />
                </b-form-group>
              </div>
              <div class="pb-2 price-vehicle">
                <div class="mt-2 mb-2">New</div>
                <b-form-group>
                  <b-form-input v-model="text" placeholder="500000" />
                </b-form-group>
              </div>

              <div class="time-duration">
                <div><label for="">Duration</label></div>
                <b-row>
                  <b-col sm="3">
                    <b-form-group>
                      <b-form-input v-model="text" placeholder="30000" />
                    </b-form-group>
                  </b-col>
                  <b-col sm="9">
                    <b-form-group
                      v-slot="{ ariaDescribedby }"
                      class="vechicle vechicle-purchase"
                    >
                      <b-form-radio
                        v-model="month"
                        :aria-describedby="ariaDescribedby"
                        name="month"
                        value="C"
                      >
                        Month
                      </b-form-radio>
                      <b-form-radio
                        v-model="month"
                        :aria-describedby="ariaDescribedby"
                        name="month"
                        value="D"
                      >
                        Year
                      </b-form-radio>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
            </form>
            <div class="monthly-payment">
              <p class="payment-heading">
                Your monthly payment To IPDC Finance is
              </p>
              <h1 class="payment-amount">90000/<span>month</span></h1>
            </div>
            <div class="more-details">
              <a href="#">+ Show more details</a>
            </div>
            <div class="next-button">
              <a href="#">Next</a>
              <img src="~assets/image/right arrow.svg" alt="" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      selected: "A",
      month: "C",
      vechicle: "C",
    };
  },
};
</script>

<style lang="scss" scoped>
.drive-dream-coverimage {
  position: relative;
  width: 100%;
  height: 976px;
  background-image: url("~assets/image/2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .towards-dream {
    width: 100%;
    height: 966px;
    .drive-dream-title {
      padding: 50px 120px 0 0;
      color: #ffffff;
      h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        margin-bottom: 20px;
        .font-bn & {
          font-size: 41px;
        }
      }
      p {
        font-size: 16px;
        line-height: 137.5%;
        .font-bn & {
          font-size: 21px;
        }
      }
    }
    .drive-dream-contact {
      position: absolute;
      bottom: 80px;
      color: #ffffff;
      p {
        font-weight: 600;
        font-size: 18px;
        line-height: 122.22%;
        .font-bn & {
          font-size: 23px;
        }
      }
      h3 {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        .font-bn & {
          font-size: 41px;
        }
      }
    }
  }
  .how-help {
    width: 427px;
    height: 90%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(11px);
    border-radius: 18px 18px 0px 0px;
    padding: 20px;
    margin-top: 103.5px;
    // position: absolute;
    // bottom: -10px;
    color: #ffffff;
    .how-help_title {
      font-weight: bold;
      font-size: 30px;
      line-height: 133%;
      margin-bottom: 22px;
      .font-bn & {
        font-size: 35px;
      }
    }
    // .for-vechicle {
    //   // .time-duration {
    //   // }
    // }
    .monthly-payment {
      margin-top: 30px;
      .payment-heading {
        font-size: 16px;
        line-height: 154.3%;
        margin-bottom: 7px;
        .font-bn & {
          font-size: 21px;
        }
      }
      .payment-amount {
        font-weight: bold;
        font-size: 36px;
        .font-bn & {
          font-size: 41px;
        }
        span {
          font-size: 14px;
          font-weight: normal;
          .font-bn & {
            font-size: 19px;
          }
        }
      }
    }
    .more-details {
      margin: 40px 0 45px 0;
      a {
        text-decoration: none;
        font-weight: 600;
        font-size: 12px;
        line-height: 100%;
        letter-spacing: 1.66px;
        text-transform: uppercase;
        color: #fcd9ec;
        .font-bn & {
          font-size: 17px;
        }
      }
    }
    .next-button {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 50px;
      background: #ed017f;
      border-radius: 4px;
      padding: 13px 22px;
      a {
        text-decoration: none;
        color: #ffffff;
        text-transform: uppercase;
      }
      img {
        width: 12px;
        height: 12px;
        filter: brightness(0) invert(1);
        margin-top: 5px;
      }
      &:hover {
        transition: 0.3s;
        transform: scale(1.005);
        img {
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
  .drive-dream-coverimage {
    width: 100%;
    height: 100%;
    .towards-dream {
      width: 100%;
      height: 100%;
      padding: 0 0 150px 15px;
      .drive-dream-title {
        padding: 40px 0 0 0;

        h1 {
          font-weight: bold;
          font-size: 25px;
          line-height: 133%;
          margin: 0;
          .font-bn & {
            font-size: 30px;
          }
        }
        p {
          padding: 0 20px 0 0;
        }
      }
      .drive-dream-contact {
        top: 200px;
      }
    }
    .col-md-5 {
      padding: 0;
    }
    .how-help {
      width: 100%;
      height: unset;
      margin-top: 200px;
    }
  }
}
</style>
