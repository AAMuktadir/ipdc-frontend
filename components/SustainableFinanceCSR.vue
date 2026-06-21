<template>
  <div v-if="coverImage" class="coverimage">
    <picture v-if="$i18n.locale == 'en'">
      <source media="(max-width:650px)" :srcset="coverImage.image_mobile_url" />
      <img :src="coverImage.image_url" alt="sustainability" />
    </picture>
    <picture v-if="$i18n.locale == 'bn'">
      <source media="(max-width:650px)" :srcset="coverImage.image_mobile_url" />
      <img :src="coverImage.image_url" alt="sustainability" />
    </picture>
    <div class="sustainabilitycover-container">
      <div class="sustainabilitycover-content">
        <h1
          v-if="$i18n.locale == 'en'"
          class="sustainabilitycover-title"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {{ coverImage.title }}
        </h1>
        <h1
          v-if="$i18n.locale == 'bn'"
          class="sustainabilitycover-title font-bn"
        >
          {{ coverImage.title_bangla }}
        </h1>
        <br />
        <p
          v-if="$i18n.locale == 'en'"
          class="sustainabilitycover-content-p"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {{ coverImage.sub_title }}
        </p>
        <p
          v-if="$i18n.locale == 'bn'"
          class="sustainabilitycover-content-p font-bn"
        >
          {{ coverImage.sub_title_bangla }}
        </p>

        <br />
        <div
          class="text-left"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <nuxt-link class="applybtn btn" id="13" :to="localePath('/csr')">
            {{ $i18n.locale == "en" ? "Know More" : "আরও জানুন" }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: "",
    },
    coverImage: {
      type: Object,
      default() {
        return {
          id: 1,
          image_url:
            "https://wallpapers.com/images/high/green-finance-1600-x-900-wallpaper-43mcdftiu0itip17.webp",
          image_mobile_url:
            "https://wallpapers.com/images/high/green-finance-1600-x-900-wallpaper-43mcdftiu0itip17.webp",
          title: "Sustainable Finance Products",
          title_bangla: "জয়ী হবার লক্ষ্যে",
          sub_title:
            "IPDC strives to integrate sustainable practices into everything it does, not just eco-friendly activities. We're all about keeping our unbounded passion alive!",
          sub_title_bangla:
            "নারী উদ্যোক্তাদের জন্য আইপিডিসি ফাইন্যান্স পিএলসি. নিয়ে এসেছে স্বল্প ও দীর্ঘ মেয়াদী ঋণের সুবিধা।",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.coverimage {
  position: relative;
  width: 100%;
  height: 768px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  img {
    animation: fadeIn ease 1.5s;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 50%;
    object-position: 50%;
  }
  .sustainabilitycover-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 78em;
    padding: 0 4.5rem;
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
      top: 0;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.9) 1.75%,
        rgba(0, 0, 0, 0.1) 71.55%
      );
    }

    .sustainabilitycover-content {
      animation: fadeIn ease 3s;
      position: relative;
      z-index: 2;
      text-align: left;
      max-width: 30em;
      padding-bottom: 0rem;
      color: #fff;

      h1 {
        font-size: 2.5rem;
        line-height: 130%;
        font-weight: 700;
        letter-spacing: -0.025em;
      }

      .sustainabilitycover-content-p {
        font-size: 18px;
        line-height: 150%;
        font-weight: 400;
        letter-spacing: 0;
        color: #fff;
      }

      .applybtn {
        border: 0;
        font-size: 18px;
        cursor: pointer;
        font-weight: 500;
        padding: 8px 30px;
        white-space: nowrap;
        background: #ed017f;
        color: #fff;
        border-radius: 0px;
        transition: 0.45s all ease-in-out;
        // transform: translateY(100px);
        -webkit-box-shadow: -26px 1px 27px rgba(0, 0, 0, 0.3);
        box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.3);
        &:hover {
          color: #fff;
          border-radius: 0px;
          transition: 0.45s all ease-in-out;
          box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 1024px) {
  .coverimage {
    position: relative;
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .coverimage {
    position: relative;
    width: 100%;
  }
}
</style>
