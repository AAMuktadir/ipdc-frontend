<template>
  <div v-if="displayData" class="deposit-coverimage">
    <picture>
      <source
        class="backdrop"
        media="(max-width:650px)"
        :srcset="displayData.backdropMobileUrl"
      />
      <img class="backdrop" :src="displayData.backdropUrl" alt="background" />
    </picture>
    <div class="blur"></div>

    <picture>
      <source
        media="(min-width:650px)"
        :srcset="
          $i18n.locale === 'bn'
            ? displayData.imageUrlBangla
            : displayData.imageUrl
        "
      />
      <img
        :src="
          $i18n.locale === 'bn'
            ? displayData.mobileImageUrlBangla
            : displayData.mobileImageUrl
        "
        :alt="$i18n.locale === 'bn' ? 'কভার ইমেজ' : 'Cover Image'"
      />
    </picture>

    <div class="deposit-title">
      <h1 class="deposit-heading">
        {{
          $i18n.locale === "bn" ? displayData.titleBangla : displayData.title
        }}
      </h1>
      <p class="deposit-description">
        {{
          $i18n.locale === "bn"
            ? displayData.descriptionBangla
            : displayData.description
        }}
      </p>
      <div>
        <nuxt-link class="applybtn btn" :to="localePath('/customer-signup')">
          {{ $i18n.locale === "en" ? "Apply now" : "আবেদন করুন" }}
        </nuxt-link>
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
    cover: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      coverImage: null,
    };
  },
  computed: {
    /**
     * Consolidates `coverImage` (from API) and `cover` (from prop)
     * into a single, consistent object for the template.
     */
    displayData() {
      // Prioritize the API-fetched coverImage
      if (this.coverImage) {
        return {
          backdropUrl: this.coverImage.image_url,
          backdropMobileUrl: this.coverImage.image_mobile_url,
          imageUrl: this.coverImage.image_url,
          mobileImageUrl: this.coverImage.mobile_image_url,
          title: this.coverImage.title,
          description: this.coverImage.sub_title,
          imageUrlBangla:
            this.coverImage.image_url_bangla || this.coverImage.image_url,
          mobileImageUrlBangla:
            this.coverImage.mobile_image_url_bangla ||
            this.coverImage.mobile_image_url,
          titleBangla: this.coverImage.title_bangla,
          descriptionBangla: this.coverImage.sub_title_bangla,
        };
      }
      // Fallback to the 'cover' prop
      if (this.cover) {
        return {
          backdropUrl: this.cover.image_url,
          backdropMobileUrl: this.cover.image_url, // Fallback
          imageUrl: this.cover.image_url,
          mobileImageUrl: this.cover.image_url, // Fallback
          title: this.cover.title,
          description: this.cover.description,
          imageUrlBangla: this.cover.image_url, // Fallback
          mobileImageUrlBangla: this.cover.image_url, // Fallback
          titleBangla: this.cover.title_bangla,
          descriptionBangla: this.cover.description_bangla,
        };
      }
      // Return null if no data is available
      return null;
    },
  },
  created() {
    this.getCoverImage();
  },
  methods: {
    async getCoverImage() {
      try {
        const response = await this.$axios.get(`/get-cover-image/${this.page}`);
        this.coverImage = response.data.data;
      } catch (error) {
        console.log("Error fetching getCoverImage:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.deposit-coverimage {
  position: relative;
  width: 100%;
  height: 660px;
  overflow: hidden; // Recommended to contain all elements

  .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;
    animation: fadeIn ease 1.5s;
  }

  .blur {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    z-index: 2;
  }

  // Targets the foreground image specifically
  img:not(.backdrop) {
    animation: fadeIn ease 1.5s;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 4;
    object-fit: contain; // Keeps aspect ratio without cropping
    object-position: center;
  }

  .deposit-title {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 60vw;
    height: auto;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(7px);
    border-radius: 52px 52px 0px 0px;
    text-align: center;
    padding: 30px;
    z-index: 5;

    .deposit-heading {
      font-weight: 900;
      font-size: 45px;
      line-height: 1.3;
      color: #ffffff;
      text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.7);
      .font-bn & {
        font-size: 50px;
      }
    }
    .deposit-description {
      font-size: 16px;
      line-height: 1.5;
      color: #ffffff;
      text-shadow: 3px 3px 25px rgba(0, 0, 0, 0.9);
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
    margin-top: 10px; // Added some space
    display: inline-block; // Good practice for links as buttons
    white-space: nowrap;
    background: #ed017f;
    color: #fff;
    border-radius: 5px;
    transition: 0.45s all ease-in-out;
    box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.3);
    &:hover {
      color: #fff;
      background: #ff0088;
      transition: 0.45s all ease-in-out;
      box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
    }
    .font-bn & {
      font-size: 23px;
    }
  }
}

// Media Queries remain the same, but will now work on the cleaner template
@media screen and (max-width: 1024px) {
  .deposit-coverimage {
    .deposit-title {
      width: 100%;
      height: unset;
      padding: 20px 20px 60px 20px;
      .deposit-heading {
        font-weight: bold;
        font-size: 30px;
        line-height: 1.33;
        .font-bn & {
          font-size: 35px;
        }
      }
      .deposit-description {
        padding: 15px 20px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .deposit-coverimage {
    .deposit-title {
      width: 100%;
      height: unset;
      padding: 20px 20px 60px 20px;
      .deposit-heading {
        font-weight: bold;
        font-size: 25px;
        line-height: 1.33;
        .font-bn & {
          font-size: 30px;
        }
      }
      .deposit-description {
        padding: 15px 20px;
      }
    }
  }
}
</style>
