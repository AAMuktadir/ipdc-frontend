<template>
  <div v-if="displayData">
    <div class="deposit-coverimage">
      <!-- <picture>
        <source
          media="(max-width:650px)"
          :srcset="displayData.backdropMobileUrl"
        />
        <img class="backdrop" :src="displayData.backdropUrl" alt="Background" />
      </picture>
      <div class="blur"></div> -->

      <picture>
        <source
          media="(min-width:650px)"
          :srcset="isBangla ? displayData.imageUrlBangla : displayData.imageUrl"
        />
        <img
          :src="
            isBangla
              ? displayData.mobileImageUrlBangla
              : displayData.mobileImageUrl
          "
          :alt="isBangla ? 'কভার ইমেজ' : 'Cover Image'"
        />
      </picture>
    </div>

    <div class="header-div" v-if="cover">
      <div class="deposit-title">
        <h1 class="deposit-heading">
          {{ isBangla ? displayData.titleBangla : displayData.title }}
        </h1>
        <div
          class="deposit-description"
          v-if="!isBangla"
          v-html="cover.sub_title"
        />
        <div
          class="deposit-description"
          v-if="isBangla"
          v-html="cover.sub_title_bangla"
        />
        <!-- {{
            isBangla ? displayData.descriptionBangla : displayData.description
          }}
        </div> -->
        <!-- <div>
          <nuxt-link class="applybtn btn" :to="localePath('/customer-signup')">
            {{ isBangla ? "আবেদন করুন" : "Apply now" }}
          </nuxt-link>
        </div> -->
      </div>
    </div>
    <div class="header-div" v-else>
      <div class="deposit-title">
        <h1 class="deposit-heading">
          {{ isBangla ? displayData.titleBangla : displayData.title }}
        </h1>
        <p class="deposit-description">
          {{
            isBangla ? displayData.descriptionBangla : displayData.description
          }}
        </p>
        <!-- <div>
          <nuxt-link class="applybtn btn" :to="localePath('/customer-signup')">
            {{ isBangla ? "আবেদন করুন" : "Apply now" }}
          </nuxt-link>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cover: {
      type: Object,
      default: null,
    },
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    isBangla() {
      return this.locale === "bn";
    },
    displayData() {
      const source = this.cover;
      if (!source) return null;

      return {
        backdropUrl: source.image_url,
        backdropMobileUrl: source.image_mobile_url || source.image_url,
        imageUrl: source.image_url,
        mobileImageUrl:
          source.mobile_image_url ||
          source.image_mobile_url ||
          source.image_url,
        title: source.title,
        description: source.sub_title || source.description,
        imageUrlBangla: source.image_url_bangla || source.image_url,
        mobileImageUrlBangla:
          source.mobile_image_url_bangla ||
          source.image_mobile_url ||
          source.image_url,
        titleBangla: source.title_bangla,
        descriptionBangla: source.sub_title_bangla || source.description_bangla,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.deposit-coverimage {
  img {
    width: 100%;
    height: 100%;
  }
  // position: relative;
  // width: 100%;
  // height: 660px;
  // overflow: hidden;

  // .backdrop {
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   object-fit: cover;
  //   z-index: 1;
  //   animation: fadeIn ease 1.5s;
  // }

  // .blur {
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   backdrop-filter: blur(10px);
  //   z-index: 2;
  // }

  // picture {
  //   display: block;
  //   line-height: 0;
  // }

  // img:not(.backdrop) {
  //   animation: fadeIn ease 1.5s;
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   z-index: 4;
  //   object-fit: contain;
  //   object-position: center;
  // }
}

.header-div {
  .deposit-title {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 60vw;
    background: #ed017f1a;
    backdrop-filter: blur(7px);
    border-radius: 0px 0px 25px 25px;
    text-align: center;
    padding: 30px;
    z-index: 1;
    min-height: 250px;

    .deposit-heading {
      text-align: center;
      font-weight: 900;
      font-size: 35px;
      line-height: 117.14%;
      color: #000000;
      // text-shadow: 1px 1px 50px rgba(0, 0, 0, 0.65);
      .font-bn & {
        font-size: 45px;
      }
    }

    .deposit-description {
      font-weight: normal;
      font-size: 16px;
      line-height: 154.3%;
      color: #000000;
      // text-shadow: 2px 2px 25px rgba(0, 0, 0, 0.75);
      padding: 15px 100px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .applybtn {
    border: 0;
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
    padding: 8px 30px;
    margin-top: 10px;
    display: inline-block;
    white-space: nowrap;
    background: #ed017f;
    color: #fff;
    border-radius: 5px;
    transition: 0.45s all ease-in-out;
    box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.3);

    &:hover {
      background: #ff0088;
      box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
    }

    .font-bn & {
      font-size: 23px;
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
  // .deposit-coverimage {
  //   height: 500px;
  // }

  .header-div .deposit-title {
    width: 100%;
    padding: 20px 20px 60px;

    .deposit-heading {
      font-weight: bold;
      font-size: 30px;
      .font-bn & {
        font-size: 35px;
      }
    }

    .deposit-description {
      padding: 15px 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  // .deposit-coverimage {
  //   height: 500px;
  // }

  .header-div .deposit-title {
    width: 100%;
    padding: 20px 20px 60px;

    .deposit-heading {
      font-weight: bold;
      font-size: 25px;
      .font-bn & {
        font-size: 30px;
      }
    }

    .deposit-description {
      padding: 15px 20px;
    }
  }
}
</style>
