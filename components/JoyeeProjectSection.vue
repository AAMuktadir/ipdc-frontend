<template>
  <div class="section-container">
    <div class="media-card">
      <div
        class="media-image col-md-7"
        data-aos="fade-up"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="center-bottom"
      >
        <picture>
          <source
            media="(min-width:650px)"
            :srcset="images.accessInformation"
          />
          <img :src="images.accessInformation" alt="Access to Information" />
        </picture>
        <div class="overlay">
          <h3 class="text">
            {{
              $i18n.locale == "en"
                ? texts.accessToBusinessSupport
                : texts.accessToBusinessSupport_bn
            }}
          </h3>
          <a href="#alapon" v-scroll>
            <div class="discover-more-button">
              <button v-if="$i18n.locale == 'en'" class="discover-more">
                Discover More
              </button>
              <button v-if="$i18n.locale == 'bn'" class="discover-more">
                আরও জানুন
              </button>
            </div>
          </a>
          <p class="description">
            {{
              $i18n.locale == "en"
                ? texts.businessSupportDescription
                : texts.businessSupportDescription_bn
            }}
          </p>
        </div>
      </div>
      <div
        class="media-image col-md-5"
        data-aos="fade-up"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="center-bottom"
      >
        <picture>
          <source media="(min-width:650px)" :srcset="images.accessToMarket" />
          <img :src="images.accessToMarket" alt="Access to Market" />
        </picture>
        <div class="overlay">
          <h3 class="text">
            {{
              $i18n.locale == "en"
                ? texts.accessToMarket
                : texts.accessToMarket_bn
            }}
          </h3>
          <p class="description">
            {{
              $i18n.locale == "en"
                ? texts.marketAccessDescription
                : texts.marketAccessDescription_bn
            }}
          </p>
        </div>
      </div>
    </div>
    <div class="media-card">
      <div
        class="media-image col-md-5"
        data-aos="fade-up"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="center-bottom"
      >
        <picture>
          <source media="(min-width:650px)" :srcset="images.accessToFinance" />
          <img :src="images.accessToFinance" alt="Access to Finance" />
        </picture>
        <div class="overlay">
          <h3 class="text">
            {{
              $i18n.locale == "en"
                ? texts.accessToFinance
                : texts.accessToFinance_bn
            }}
          </h3>
          <p class="description">
            {{
              $i18n.locale == "en"
                ? texts.financeAccessDescription
                : texts.financeAccessDescription_bn
            }}
          </p>
        </div>
      </div>
      <div
        class="media-image col-md-7"
        data-aos="fade-up"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="center-bottom"
      >
        <picture>
          <source
            media="(min-width:650px)"
            :srcset="images.accessToBusinessDevelopment"
          />
          <img
            :src="images.accessToBusinessDevelopment"
            alt="Access to Business Development"
          />
        </picture>
        <div class="overlay">
          <h3 class="text">
            {{
              $i18n.locale == "en"
                ? texts.accessToCapacityDevelopment
                : texts.accessToCapacityDevelopment_bn
            }}
          </h3>
          <a href="#pathsala" v-scroll>
            <div class="discover-more-button">
              <button v-if="$i18n.locale == 'en'" class="discover-more">
                Discover More
              </button>
              <button v-if="$i18n.locale == 'bn'" class="discover-more">
                আরও জানুন
              </button>
            </div>
          </a>
          <p class="description">
            {{
              $i18n.locale == "en"
                ? texts.capacityDevelopmentDescription
                : texts.capacityDevelopmentDescription_bn
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NIS",
  props: {
    images: {
      type: Object,
      default: () => ({}),
    },
    texts: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
html {
  scroll-behavior: smooth; /* Optional for additional smooth scrolling */
}
.section-container {
  padding-top: 20px;
  padding-bottom: 20px;
}
.media-card {
  max-width: 100%;
  display: flex;
  gap: 10px;
  padding: 0px 10px 10px 0px;

  .col-md-7,
  .col-md-5 {
    padding: 0px 0px 0px 0px;
  }

  .media-image {
    position: relative;
    max-height: 420px;
    height: 420px;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;

    picture,
    img {
      display: block;
      width: 100%;
      // height: 100%;
      object-fit: cover;
      scale: 1.01;
      transition: transform 1s ease-out;
    }

    &:hover img {
      transform: scale(1.08);
    }

    .service_button {
      .iservice {
        width: 113px;
        height: 38px;
        background: #ed017f;
        color: #ffffff;
        border: none;
        border-radius: 4px;
      }
    }

    .discover-more-button {
      position: absolute;
      bottom: 40px;
      left: 50px;
      z-index: 2; /* Ensure button is above overlay */
    }

    .discover-more {
      color: #ffffff;
      background: #ed017f;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease, color 0.3s ease;
      .font-bn & {
        font-size: 23px;
      }

      &:hover {
        color: #ffffff;
        background: #ff0088;
        transition: 0.45s all ease-in-out;
        box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
      }
    }

    .overlay {
      content: "";
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0) 46%,
        rgba(0, 0, 0, 0.6) 100%
      );
      display: flex;
      flex-direction: column-reverse;
      // justify-content: flex-end;
      padding: 50px;
      color: white;
      transition: background-color 0.3s ease-in-out;

      .text {
        font-weight: bold;
        margin-bottom: 60px;
      }

      .description {
        font-size: 1.1em;
        opacity: 0;
        padding-right: 5em;
        .font-bn & {
          font-size: 1.3em;
        }
      }
    }

    &:hover .overlay {
      background-color: rgba(255, 255, 255, 0.85);
      flex-direction: column;
      color: black;

      .text {
        margin-bottom: 10px;
        position: relative;
        color: #000;
        bottom: 2rem;
        -webkit-transform: translateY(2rem);
        -ms-transform: translateY(2rem);
        -o-transform: translateY(2rem);
        transform: translateY(2rem);
        -webkit-transition: transform 0.5s ease-in-out;
        -o-transition: transform 0.5s ease-in-out;
        transition: transform 0.5s ease-in-out;
      }

      .description {
        opacity: 1;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateY(0);
        -webkit-transition: all 0.6s 0.4s ease-in-out;
        -o-transition: all 0.6s 0.4s ease-in-out;
        transition: all 0.6s 0.4s ease-in-out;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .media-card {
    display: flex;
    flex-direction: column;
    padding: 0 0 10px 0;

    .media-image {
      width: unset;
      height: 357px;
      border-radius: 14px 14px 0 0;
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .col-md-7,
  .col-md-5 {
    flex: auto;
    max-width: 100%;
  }
}
</style>
