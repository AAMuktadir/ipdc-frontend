<template>
  <div v-if="images.length > 0" class="inside-slider">
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
        :nav="false"
        :autoplay="false"
        :responsive="{
          0: { items: 1, nav: false },
          600: { items: 1, nav: false },
        }"
      >
        <div v-for="image in images" :key="image.id" class="cover-slide">
          <div class="slide-image">
            <a
              :href="
                $i18n.locale === 'en' ? image.link_url : image.link_url_bangla
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture v-if="$i18n.locale == 'en'">
                <source
                  media="(min-width:650px)"
                  :srcset="getLogoUrl(image.image_url)"
                />
                <img :src="getLogoUrl(image.image_url)" alt="Flowers" />
              </picture>
              <picture v-if="$i18n.locale == 'bn'">
                <source
                  media="(min-width:650px)"
                  :srcset="getLogoUrl(image.image_url_bangla)"
                />
                <img :src="getLogoUrl(image.image_url_bangla)" alt="Flowers" />
              </picture>
            </a>
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
      default: {},
    },
    images: {
      type: Array,
      // required: true,
      required: false,
      // default: [],
      default() {
        return [
          {
            id: 1,
            image_url: "financial_literacy/Financial-Literacy-Booklet-1.jpg",
            image_url_bangla:
              "financial_literacy/Financial-Literacy-Booklet-1.jpg",
            link_url:
              "https://ipdc.com/api/uploads/fin_lit/pdf/Financial-Literacy-Booklet.pdf",
            link_url_bangla:
              "https://ipdc.com/api/uploads/fin_lit/pdf/Financial-Literacy-Booklet.pdf",
          },
        ];
      },
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
.inside-slider {
  padding-bottom: 50px;
  width: 60%;
  position: relative;
  left: 20%;
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
    img {
      position: relative;
      left: 25%;
      width: 50%;
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
