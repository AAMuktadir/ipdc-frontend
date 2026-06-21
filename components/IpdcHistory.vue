<template>
  <section v-if="ourJourney.length > 0" class="ipdc-history">
    <div class="ipdc-journey">
      <div class="ipdc-born">
        <div class="circle" />
        <div class="middle-line" />
      </div>
    </div>
    <div
      class="ipdc-journey"
      v-for="(journey, index) in ourJourney"
      :key="index"
    >
      <div class="ipdc-born">
        <div class="ipdc-was-born born">
          <div class="ipdc-born-details">
            <h1>
              {{ $i18n.locale == "en" ? journey.title : journey.title_bangla }}
            </h1>
            <p>
              {{
                $i18n.locale == "en"
                  ? journey.description
                  : journey.description_bangla
              }}
            </p>
          </div>
          <div class="ipdc-born-date">
            <h5>
              {{ $i18n.locale == "en" ? journey.month : journey.month_bangla }}
            </h5>
            <h3>
              {{ $i18n.locale == "en" ? journey.day : journey.day_bangla }}
            </h3>
            <p>
              {{ $i18n.locale == "en" ? journey.year : journey.year_bangla }}
            </p>
          </div>
        </div>
        <div class="circle" />
        <div class="middle-line" />
      </div>
    </div>
    <div class="ipdc-journey">
      <div class="ipdc-born">
        <div class="circle" />
        <div class="middle-line" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    ourJourney: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.ipdc-history {
  display: flex;
  align-items: center;
  padding: 250px 0;
  // gap: 400px;
  overflow: scroll auto;
  // margin-bottom: 30px;
  background: linear-gradient(
    90deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 10.42%,
    rgba(255, 255, 255, 0) 89.36%,
    #ffffff 100%
  );
  position: relative;
  scrollbar-color: #d11074 #fe00b28a;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(#e6a5c7),
      to(#d132a177)
    );
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(#ed017f),
      to(#d132d175)
    );
  }

  .ipdc-journey {
    z-index: -1;
    margin: 0 200px;
    .ipdc-born {
      position: relative;
      .ipdc-was-born {
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: -22px;
        top: -190px;
        display: flex;
        width: 538px;
        height: 164px;
        background: #ffffff;
        box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
        border-radius: 10px;
        padding: 20px;
        .ipdc-born-details {
          z-index: 1;
          h1 {
            font-weight: bold;
            font-size: 22px;
            line-height: 140.91%;
            color: #343434;
            .font-bn & {
              font-size: 27px;
            }
          }
          p {
            font-size: 16px;
            line-height: 154.3%;
            color: #858585;
            padding: 5px 30px 0 0;
            .font-bn & {
              font-size: 21px;
            }
          }
        }
        .ipdc-born-date {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 9px 18px;
          width: 83px;
          height: 108px;
          background: #f3f3f3;
          border-radius: 6px;
          h5 {
            font-weight: 600;
            font-size: 16px;
            line-height: 100%;
            color: #5d5d5d;
            .font-bn & {
              font-size: 21px;
            }
          }
          h3 {
            font-weight: bold;
            font-size: 30px;
            line-height: 133%;
            color: #ed017f;
            .font-bn & {
              font-size: 35px;
            }
          }
          p {
            font-weight: 600;
            font-size: 18px;
            line-height: 122.22%;
            border-top: 1px solid #d6d6d6;
            .font-bn & {
              font-size: 23px;
            }
          }
        }

        &::before {
          content: "";
          width: 0px;
          height: 0px;
          position: absolute;
          border-left: 24px solid #fff;
          border-right: 24px solid transparent;
          border-top: 24px solid #fff;
          border-bottom: 24px solid transparent;
          transform: rotate(225deg);
          left: 22px;
          bottom: -5px;
        }
      }
      .circle {
        width: 30px;
        height: 30px;
        padding: 10px;
        border-radius: 100px;
        border: 12px solid #fcd9ec;
        margin-right: 15px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 22px;
          height: 22px;
          background: #ed017f;
          border: 3px solid #ffffff;
          border-radius: 100px;
        }
      }
    }
    .middle-line {
      height: 2px;
      background: #e7e7e7;
      margin: -22px -400px 0 44px;
    }

    &:nth-child(odd) {
      .ipdc-born {
        .ipdc-was-born {
          position: absolute;
          left: -22px;
          top: 70px;

          &::before {
            content: "";
            transform: rotate(45deg);
            left: 22px;
            top: -5px;
          }
        }
      }
    }
    &:first-child {
      margin: 0 0 0 -100px;

      .circle {
        visibility: hidden;
      }
      .middle-line {
        margin: -22px -200px 0 0px;
      }
    }
    &:last-child {
      margin: 0 150px;
      .middle-line {
        margin: -22px -200px 0 44px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .ipdc-history {
    display: flex;
    align-items: center;
    padding: 250px 0;
    // gap: 400px;
    overflow: scroll auto;
    // margin-bottom: 30px;
    // transform: rotate(90deg);
    background: linear-gradient(
      90deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 10.42%,
      rgba(255, 255, 255, 0) 89.36%,
      #ffffff 100%
    );
    position: relative;
    scrollbar-color: #d11074 #fe00b28a;
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: -webkit-gradient(
        linear,
        left top,
        right bottom,
        from(#e6a5c7),
        to(#d132a177)
      );
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 30px;
      background: -webkit-gradient(
        linear,
        left top,
        right bottom,
        from(#ed017f),
        to(#d132d175)
      );
    }

    .ipdc-journey {
      z-index: -1;
      margin: 0 200px;
      .ipdc-born {
        position: relative;
        .ipdc-was-born {
          display: flex;
          justify-content: space-between;
          position: absolute;
          left: -22px;
          top: -190px;
          display: flex;
          width: 450px;
          height: 164px;
          background: #ffffff;
          box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
          border-radius: 10px;
          padding: 20px;
          .ipdc-born-details {
            z-index: 1;
            // h1 {
            // }
            // p {
            // }
          }
          // .ipdc-born-date {
          //   h5 {
          //   }
          //   h3 {
          //   }
          //   p {
          //   }
          // }

          // &::before {
          // }
        }
        // .circle {
        //   &::before {
        //   }
        // }
      }
      // .middle-line {
      // }
    }
  }
}
</style>
