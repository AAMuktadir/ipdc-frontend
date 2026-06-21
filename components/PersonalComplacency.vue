<template>
  <section class="personal-complacency-coverimage">
    <b-container>
      <b-row align-h="between">
        <b-col md="5">
          <div class="personal-complacency">
            <div class="personal-complacency-title">
              <h1>Drive towards your dream</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
                dapibus mattis vel feugiat erat tortor eleifend.
              </p>
            </div>
            <div class="personal-complacency-contact">
              <p>To find your interest rate now</p>
              <h3>Call @ 16519</h3>
            </div>
          </div>
        </b-col>
        <b-col md="5">
          <div class="how-help">
            <h3 class="how-help_title">TRY OUR LOAN CALCULATOR</h3>
            <form class="for-vechicle">
              <div class="pb-2 price-vehicle">
                <h5 class="tell-amount">Enter Your Desired Amount</h5>
                <div class="mt-2 mb-2">Price of Vehicle</div>
                <b-form-group>
                  <b-form-input v-model="text" placeholder="50000" />
                </b-form-group>
              </div>

              <div class="time-duration">
                <b-row>
                  <b-col sm="4">
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
                        50000
                      </b-form-radio>
                    </b-form-group>
                  </b-col>
                  <b-col sm="4">
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
                        100000
                      </b-form-radio>
                    </b-form-group>
                  </b-col>
                  <b-col sm="4">
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
                        5000000
                      </b-form-radio>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
              <b-row>
                <b-col sm="6">
                  <div class="pb-2 price-vehicle">
                    <b-form-group>
                      <b-form-input v-model="text" placeholder="100000" />
                    </b-form-group>
                  </div>
                </b-col>
                <b-col sm="6">
                  <div class="pb-2 price-vehicle">
                    <b-form-group>
                      <b-form-input v-model="text" placeholder="10000000" />
                    </b-form-group>
                  </div>
                </b-col>
              </b-row>
            </form>
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
.personal-complacency-coverimage {
  display: none;
  position: relative;
  width: 100%;
  background-image: url("~assets/image/2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .personal-complacency {
    width: 100%;
    .personal-complacency-title {
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
        justify-content: flex-end;
        .font-bn & {
          font-size: 21px;
        }
      }
    }
    .personal-complacency-contact {
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
    margin-top: 72px;
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
    }
  }
}
@media screen and (max-width: 768px) {
  .personal-complacency-coverimage {
    width: 100%;
    height: unset;
    .personal-complacency {
      width: 100%;
      padding: 0 0 0 20px;
      .personal-complacency-title {
        padding: 20px 20px 0 0;
        color: #ffffff;
      }
      .personal-complacency-contact {
        top: 300px;
      }
    }
    .how-help {
      width: 100%;
      height: unset;
      margin-top: 200px;
      margin-bottom: -20px;
      // .how-help_title {
      // }
      // .for-vechicle {
      //   .time-duration {
      //   }
      // }
    }
    .col-md-5 {
      padding: 0;
    }
  }
}
</style>
