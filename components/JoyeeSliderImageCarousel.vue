<template>
  <div
    v-if="images.length > 0"
    class="page-container"
    data-aos="fade-up"
    data-aos-easing="ease-in-out-sine"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="center-bottom"
  >
    <client-only>
      <div v-if="heading" class="sec-heading">
        <h1 v-if="$i18n.locale == 'en'">
          <strong v-html="heading.heading"></strong>
        </h1>
        <h1 v-if="$i18n.locale == 'bn'">
          <strong v-html="heading.heading_bn"></strong>
        </h1>
        <div class="separator"></div>
        <p v-if="$i18n.locale == 'en'" v-html="heading.description"></p>
        <p v-if="$i18n.locale == 'bn'" v-html="heading.description_bn"></p>
      </div>
      <carousel
        :nav="true"
        :autoplay="true"
        :dots="true"
        :loop="true"
        :center="true"
        :stagePadding="40"
        :responsive="{
          0: { items: 1, nav: false },
          650: { items: 2, nav: true },
        }"
      >
        <div v-for="image in images" :key="image.id" class="carousel-item">
          <div>
            <picture v-if="$i18n.locale == 'en'">
              <source media="(min-width:650px)" :setsrc="getLogoUrl(image)" />
              <img
                :src="getLogoUrl(image)"
                alt="Flowers"
                class="carousel-image"
              />
            </picture>
            <picture v-if="$i18n.locale == 'bn'">
              <source media="(min-width:650px)" :setsrc="getLogoUrl(image)" />
              <img
                :src="getLogoUrl(image)"
                alt="Flowers"
                class="carousel-image"
              />
            </picture>
          </div>
        </div>
      </carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: Object,
      default: {},
    },
    images: {
      type: Array,
      default: [],
    },
  },
  methods: {
    getLogoUrl(item) {
      const defaultPath = require("@/assets/image/shareholders/1.png");
      return item ? require(`@/assets/image/${item}`) : defaultPath;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-item {
  margin: 10px;
  display: block;
  width: auto;
}
.carousel-image {
  border-radius: 15px;
  opacity: 0.4;
}
.center {
  .carousel-item {
    .carousel-image {
      opacity: 1;
    }
  }
}
.sec-heading {
  text-align: center;
  padding-bottom: 20px;
  padding-top: 30px;
  position: relative;
  h1 {
    font-size: 35px !important;
    padding-bottom: 20px;
    .font-bn & {
      font-size: 40px !important;
    }
    strong {
      background-image: linear-gradient(
        -225deg,
        #b91d5d 0%,
        #ed017f 29%,
        #000 67%,
        #ff279b 100%
      );
      background-size: auto auto;
      background-clip: border-box;
      background-size: 200% auto;
      color: #fff;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textclip 2s linear infinite;
      font-weight: bold;
    }
  }
  p {
    padding: 40px;
    font-weight: 400;
    font-size: 18px;
    .font-bn & {
      font-size: 23px;
    }
  }
}
.sec-heading .separator::after {
  content: "";
  width: 20%;
  height: 4px;
  background-color: #000;
  position: absolute;
  left: 40%;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(254, 226, 164, 0)),
    color-stop(53%, #dca273),
    to(rgba(254, 226, 164, 0))
  );
  background: linear-gradient(
    to right,
    rgba(254, 226, 164, 0) 0%,
    #020202 53%,
    rgba(254, 226, 164, 0) 100%
  );
}
</style>
