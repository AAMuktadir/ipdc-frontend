<template>
  <section
    class="campaign-gallery"
    data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
  >
    <b-container v-if="imageGallery.length > 0">
      <div class="campaign-image">
        <div class="row">
          <div class="column">
            <div class="large-image">
              <img :src="viewedImage" alt="Car" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          v-for="(image, index) in imageGallery"
          :key="index"
          class="image_button"
          @click="imageChangeHandler(image.image_url)"
        >
          <img :src="image.image_url" alt="Image" />
        </button>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    imageGallery: {
      type: Array,
      default: () => [],
    },
    imageGalleryBangla: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      viewedImage: null,
      firstLoad: false,
    };
  },

  updated() {
    if (!this.firstLoad) {
      this.viewedImage = this.imageGallery[0].image_url;
      this.firstLoad = true;
    }
  },

  methods: {
    imageChangeHandler(url) {
      this.viewedImage = url;
    },
  },
};
</script>

<style lang="scss" scoped>
.campaign-gallery {
  .campaign-image {
    .large-image {
      img {
        place-self: center;
        // width: 96%;
        height: 100%;
        margin-left: 10px;
        border-radius: 10px;
      }
    }
  }

  .image_button {
    position: relative;
    border: none;
    outline: none;
    min-height: 100%;
    width: 150px;
    margin: 41px 35px 0 0;
    border-radius: 10px;
    background-size: 100% 100%;
    background-position: center;
    padding-bottom: 25vh;

    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 150px;
      // height: 98px;
      border-radius: 10px;
    }

    &:hover,
    &:focus {
      transition: 0.3s;
      transform: scale(1.12);
      img {
        border: 2px solid #ed017f;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .campaign-gallery {
    display: flex;
    align-items: center;
    .campaign-image {
      .large-image {
        img {
          width: 96%;
        }
      }
    }

    .image_button {
      // height: 102px;
      // width: 96px;
      margin: 30px 25px 0 0;
    }
  }
}
</style>
