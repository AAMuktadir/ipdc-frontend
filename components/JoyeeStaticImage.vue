<template>
  <div
    data-aos="fade-up"
    data-aos-easing="ease-in-out-sine"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="center-bottom"
  >
    <div v-if="staticImage" class="deposit-coverimage">
      <picture v-if="$i18n.locale == 'en'">
        <source media="(min-width:650px)" :srcset="staticImage.static_image" />
        <img :src="staticImage.static_mobile_image" alt="Flowers" />
      </picture>
      <picture v-if="$i18n.locale == 'bn'">
        <source media="(min-width:650px)" :srcset="staticImage.static_image" />
        <img :src="staticImage.static_mobile_image" alt="Flowers" />
      </picture>

      <div v-if="$i18n.locale == 'en'" class="deposit-title">
        <h1 class="deposit-heading">
          {{ coverImage.title }}
        </h1>
        <p class="deposit-description">
          {{ coverImage.sub_title }}
        </p>
      </div>
      <div v-if="$i18n.locale == 'bn'" class="deposit-title">
        <h1 class="deposit-heading">
          {{ coverImage.title_bangla }}
        </h1>
        <p class="deposit-description">
          {{ coverImage.sub_title_bangla }}
        </p>
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
    staticImage: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      coverImage: {},
    };
  },
  created() {
    this.getCoverImage();
  },
  methods: {
    async getCoverImage() {
      const response = await this.$axios.get(`/get-cover-image/${this.page}`);
      this.coverImage = response.data.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.deposit-coverimage {
  position: relative;
  width: 100%;
  height: 666px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  img {
    width: 100%;
    height: 666px;
  }
  .deposit-title {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 909px;
    height: 232px;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(11px);
    border-radius: 52px 52px 0px 0px;
    text-align: center;
    padding: 30px;
    .deposit-heading {
      font-weight: 900;
      font-size: 50px;
      line-height: 59px;
      color: #ffffff;
      text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.07);
    }
    .deposit-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #ffffff;
      text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.07);
      padding: 15px 100px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .deposit-coverimage {
    position: relative;
    width: 100%;
    .deposit-title {
      bottom: 0;
      width: 100%;
      height: unset;
      text-align: center;
      padding: 20px 20px 60px 20px;
      .deposit-heading {
        font-weight: bold;
        font-size: 30px;
        line-height: 133%;
      }
      .deposit-description {
        padding: 15px 20px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .deposit-coverimage {
    position: relative;
    width: 100%;
    .deposit-title {
      width: 100%;
      height: unset;
      text-align: center;
      padding: 20px 20px 60px 20px;
      .deposit-heading {
        font-weight: bold;
        font-size: 25px;
        line-height: 133%;
      }
      .deposit-description {
        padding: 15px 20px;
      }
    }
  }
}
</style>
