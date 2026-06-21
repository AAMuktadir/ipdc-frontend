<template>
  <div v-if="sliders.length > 0" class="header-slider">
    <client-only>
      <carousel
        :nav="true"
        :autoplay="true"
        :responsive="{
          0: { items: 1, nav: false },
          600: { items: 1, nav: false },
        }"
      >
        <div
          v-for="slideItem in sliders"
          :key="slideItem.id"
          class="cover-slide"
        >
          <div class="slide-text">
            <h1 v-if="$i18n.locale == 'en'">
              {{ slideItem.title }}
            </h1>
            <h1 v-if="$i18n.locale == 'bn'">
              {{ slideItem.title_bangla }}
            </h1>
            <p v-if="$i18n.locale == 'en'">
              {{ slideItem.sub_title }}
            </p>
            <p v-if="$i18n.locale == 'bn'">
              {{ slideItem.sub_title_bangla }}
            </p>
          </div>
          <div class="slide-image">
            <picture v-if="$i18n.locale == 'en'">
              <source media="(min-width:650px)" :srcset="slideItem.image_url" />
              <img :src="slideItem.mobile_image_url" alt="Flowers" />
            </picture>
            <picture v-if="$i18n.locale == 'bn'">
              <source
                media="(min-width:650px)"
                :srcset="slideItem.image_url_bangla"
              />
              <img :src="slideItem.mobile_image_url_bangla" alt="Flowers" />
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
    page: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      sliders: [],
    };
  },
  created() {
    this.getSlider();
  },
  methods: {
    async getSlider() {
      const response = await this.$axios.get(`/get-slider/${this.page}`);
      this.sliders = response.data.data;
    },
  },
};
</script>

<style lang="scss" scoped>
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
      font-weight: 900;
      font-size: 35px;
      line-height: 117.14%;
      color: #ffffff;
      text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.07);
      .font-bn & {
        font-size: 45px;
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
      width: 100%;
      height: 100%;
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
        font-size: 25px;
        line-height: 133%;
        text-align: left;
        .font-bn & {
          font-size: 35px;
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
