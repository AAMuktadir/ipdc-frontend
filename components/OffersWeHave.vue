<template>
  <div class="offers-we-have">
    <div class="container">
      <div class="have-offers-detail">
        <h1 class="have-offers-title">Offers We Have</h1>
        <p class="have-offers-description">
          Browse through our ongoing campaigns to find the one that suits you
          the best
        </p>
      </div>
      <div class="offers-card">
        <div class="row">
          <div class="col-md-4">
            <div
              class="offers-rate"
              :style="{
                backgroundImage:
                  `url(` + require(`~/assets/image/16.jpg`) + `)`,
              }"
            >
              <div class="ongoing-offer bmw-series">
                <div class="ongoing-offers-detail">
                  <p class="emi">EMI starts from</p>
                  <h2 class="emi-price">৳ 115,000</h2>
                  <h3 class="model">BMW 7 series</h3>
                  <p class="location">Gulshan, Dhaka</p>
                </div>
                <a href="#"
                  ><img src="~assets/image/rightarrow.png" alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="offers-rate"
              :style="{
                backgroundImage:
                  `url(` + require(`~/assets/image/16.jpg`) + `)`,
              }"
            >
              <div class="ongoing-offer bmw-series">
                <div class="ongoing-offers-detail">
                  <p class="emi">EMI starts from</p>
                  <h2 class="emi-price">৳ 115,000</h2>
                  <h3 class="model">BMW 7 series</h3>
                  <p class="location">Gulshan, Dhaka</p>
                </div>
                <a href="#"
                  ><img src="~assets/image/rightarrow.png" alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="offers-rate"
              :style="{
                backgroundImage:
                  `url(` + require(`~/assets/image/16.jpg`) + `)`,
              }"
            >
              <div class="ongoing-offer bmw-series">
                <div class="ongoing-offers-detail">
                  <p class="emi">EMI starts from</p>
                  <h2 class="emi-price">৳ 115,000</h2>
                  <h3 class="model">BMW 7 series</h3>
                  <p class="location">Gulshan, Dhaka</p>
                </div>
                <a href="#"
                  ><img src="~assets/image/rightarrow.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.offers-we-have {
  position: relative;
  padding: 80px;
  .have-offers-detail {
    text-align: center;
    margin-bottom: 80px;
    .have-offers-title {
      font-weight: bold;
      font-size: 36px;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
    .have-offers-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .offers-card {
    gap: 24px;
    flex-wrap: nowrap;

    .offers-rate {
      position: relative;
      width: 357px;
      height: 438px;
      border-radius: 14px;

      &:hover {
        transition: 0.5s;
        transform: scale(1.071);
      }

      .ongoing-offer {
        position: absolute;
        height: 84px;
        bottom: 5%;
        left: 0;
        right: 0;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;

        .ongoing-offers-detail {
          padding-bottom: 10px;
          .emi {
            font-size: 12px;
            line-height: 100%;
            letter-spacing: 2px;
            text-transform: uppercase;
            .font-bn & {
              font-size: 17px;
            }
          }

          .emi-price {
            font-weight: bold;
            font-size: 30px;
            line-height: 133%;
            margin: 10px 0 10px 0;
            .font-bn & {
              font-size: 35px;
            }
          }

          .model {
            font-weight: bold;
            font-size: 22px;
            line-height: 140.91%;
            margin-bottom: 5px;
            .font-bn & {
              font-size: 27px;
            }
          }

          .location {
            font-size: 14px;
            line-height: 135.7%;
            letter-spacing: 0.02em;
            .font-bn & {
              font-size: 19px;
            }
          }
        }

        a {
          width: 30px;
          height: 30px;
          background: rgba(255, 255, 255, 0.3);
          mix-blend-mode: normal;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            filter: brightness(0) invert(1);
            width: 10px;
            height: 10px;
          }
          &:hover {
            background: rgba(255, 255, 255, 0.5);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .offers-we-have {
    padding: 50px 0;
    .have-offers-detail {
      margin-bottom: 50px;
      //.have-offers-title {
      //}
      .have-offers-description {
        padding: 15px 0;
      }
    }
    .offers-card {
      width: 100%;
      height: unset;
      .offers-rate {
        position: relative;
        width: 100%;
        background-size: cover;
        margin-bottom: 34px;

        .ongoing-offer {
          .ongoing-offers-detail {
            padding: 0 0 35px 15px;
          }
        }
      }
    }
  }
}
</style>
