<template>
  <div
    v-if="images.length > 0"
    v-bind:class="{ 'inside-slider': true, 'full-width': fullwidth }"
  >
    <client-only>
      <div v-if="heading">
        <h1 v-if="$i18n.locale == 'en'">
          {{ heading.heading_en }}
        </h1>
        <h1 v-if="$i18n.locale == 'bn'">
          {{ heading.heading_bn }}
        </h1>
      </div>
      <carousel
        :nav="true"
        :autoplay="true"
        :dots="true"
        :loop="true"
        :center="true"
        :responsive="{
          0: { items: carouselsize, nav: true },
          600: { items: carouselsize, nav: true },
        }"
      >
        <div v-for="image in images" :key="image.id" class="cover-slide">
          <div class="slide-image">
            <picture v-if="$i18n.locale == 'en'">
              <source media="(min-width:650px)" :setsrc="image" />
              <img :src="image" alt="Flowers" />
            </picture>
            <picture v-if="$i18n.locale == 'bn'">
              <source media="(min-width:650px)" :setsrc="image" />
              <img :src="image" alt="Flowers" />
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
      required: false,
      default: null,
    },
    carouselsize: {
      type: Number,
      required: false,
      default: 1,
    },
    fullwidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.inside-slider.full-width {
  width: 90%;
  position: relative;
  left: 5%;
}
.inside-slider {
  padding-bottom: 50px;
  width: 70%;
  position: relative;
  left: 15%;
  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 133%;
    color: #ed017f;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
    .font-bn & {
      font-size: 41px;
    }
  }
}
.cover-slide {
  position: relative;
  overflow: hidden;

  .slide-text {
    position: absolute;
    width: 909px;
    height: 300px;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(11px);
    left: 50%;
    bottom: -55px;
    transform: translateX(-50%);
    padding: 30px 50px;
    border-radius: 52px;

    h1 {
      text-align: center;
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #ffffff;
      text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.07);
      .font-bn & {
        font-size: 41px;
      }
    }

    p {
      padding: 10px 50px;
      font-weight: normal;
      font-size: 16px;
      line-height: 154.3%;
      color: #ffffff;
      text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.07);
      text-align: center;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .slide-image {
    justify-items: center;
    img {
      width: auto;
      height: 80vh;
    }
  }
}

@media screen and (max-width: 768px) {
  .cover-slide {
    position: relative;
    overflow: hidden;
    width: 100%;

    .slide-text {
      padding: 60px 20px 20px 20px;
      width: 100%;

      h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        text-align: left;
        .font-bn & {
          font-size: 41px;
        }
      }

      p {
        text-align: left;
        padding: 13px 10px 10px 0;
        font-weight: 400px;
        font-size: 16px;
        .font-bn & {
          font-size: 21px;
        }
      }
    }

    .slide-image {
      img {
        width: 100%;
        height: unset;
      }
    }
  }
}
</style>
