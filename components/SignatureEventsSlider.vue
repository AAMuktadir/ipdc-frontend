<template>
  <section v-if="allSignatureEvents.length > 0" class="signature-events">
    <div class="container">
      <client-only>
        <div v-if="$i18n.locale == 'en'" class="signature-events-title">
          <h3>Signature Events</h3>
        </div>
        <div v-if="$i18n.locale == 'bn'" class="signature-events-title">
          <h3>সাম্প্রতিক আপডেট</h3>
        </div>

        <div class="signature-events-cards">
          <a
            :href="singleEvent.link"
            v-for="singleEvent in allSignatureEvents"
            :key="singleEvent.id"
            target="_blank"
            class="signature-event-card"
          >
            <div
              class="signature-event-cards"
              :style="{ backgroundImage: `url('${singleEvent.thumbnail}')` }"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div class="ipdc-signature-cards">
                <div class="signature-cards-title">
                  <h3>
                    {{
                      $i18n.locale == "en"
                        ? singleEvent.title
                        : singleEvent.title_bn
                    }}
                  </h3>
                </div>
                <!-- <nuxt-link
                  :to="{
                    path: '/event-details/',
                    query: { event: singleEvent.id },
                  }"
                  ><img src="~assets/image/rightarrow.png" alt=""
                /></nuxt-link> -->
              </div>
            </div>
          </a>
        </div>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    allSignatureEvents: {
      type: null,
      default: null,
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style lang="scss" scoped>
.signature-events {
  padding-bottom: 100px;
  &-title {
    text-align: center;
    padding: 50px 0;
    h3 {
      font-weight: bold;
      font-size: 30px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 35px;
      }
    }
  }

  &-filter {
    width: 100px;
    text-align: left;
    padding: 0 0 30px 0;
    // &-box {
    // }
  }
  .signature-events-cards {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    .signature-event-cards {
      position: relative;
      width: 350px;
      height: 277px;
      border-radius: 5px;
      margin: 0 0 20px 0;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: top;
      .ipdc-signature-cards {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 81px;
        background: rgba(65, 63, 63, 0.4);
        backdrop-filter: blur(11px);
        display: flex;
        // justify-content: space-between;
        justify-content: center;
        border-radius: 0 0 5px 5px;
        .signature-cards-title {
          color: #ffffff;
          padding: 15px;
          text-align: center;
          h3 {
            font-weight: bold;
            font-size: 17px;
            line-height: 129.4%;
            max-width: 280px;
            margin-bottom: 10px;
            .font-bn & {
              font-size: 22px;
            }
          }
          p {
            font-size: 13px;
            line-height: 137.1%;
            letter-spacing: 0.02em;
            .font-bn & {
              font-size: 18px;
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
          margin: 15px 20px 0 0;

          img {
            filter: brightness(0) invert(1);
            width: 8px;
            height: 10px;
          }
        }
      }
      &:hover {
        transition: 0.3s;
        transform: scale(0.97);
        .ipdc-signature-cards {
          a {
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

@media screen and (max-width: 1024px) {
  .signature-events {
    padding-bottom: 100px;
    &-title {
      padding: 25px 0 40px 0;
      h3 {
        font-size: 25px;
        .font-bn & {
          font-size: 30px;
        }
      }
    }

    .signature-events-cards {
      display: flex;

      .signature-event-card {
        flex-basis: calc(50% - 30px / 2);
      }
      .signature-event-cards {
        width: 100%;
        height: 357px;
        background-size: cover;
        background-position: center;
        // .ipdc-signature-cards {
        //   // .signature-cards-title {
        //   //   h3 {
        //   //   }
        //   //   p {
        //   //   }
        //   // }
        // }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .signature-events {
    .signature-event-cards {
      flex-direction: column;
    }
  }
}
</style>
