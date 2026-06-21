<template>
  <div v-if="coverImage" class="coverimage">
    <picture v-if="$i18n.locale == 'en'">
      <source media="(max-width:650px)" :srcset="coverImage.image_mobile_url" />
      <img :src="coverImage.image_url" alt="" />
    </picture>
    <picture v-if="$i18n.locale == 'bn'">
      <source media="(max-width:650px)" :srcset="coverImage.image_mobile_url" />
      <img :src="coverImage.image_url" alt="" />
    </picture>
    <div class="cover-container">
      <div class="cover-content">
        <h1 v-if="$i18n.locale == 'en'" class="cover-title">
          {{ coverImage.title }}
        </h1>
        <h1 v-if="$i18n.locale == 'bn'" class="cover-title">
          {{ coverImage.title_bangla }}
        </h1>
        <br />
        <p v-if="$i18n.locale == 'en'" class="cover-content-p">
          {{ coverImage.description }}
        </p>
        <p v-if="$i18n.locale == 'bn'" class="cover-content-p">
          {{ coverImage.description_bangla }}
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
    coverImage: {
      type: Object,
      default: {},
    },
  },
  created() {
    // this.getCoverImage();
  },
  methods: {
    // async getCoverImage() {
    //   const response = await this.$axios.get(`/get-cover-image/${this.page}`);
    //   this.coverImage = response.data.data;
    // },
  },
};
</script>

<style lang="scss" scoped>
.coverimage {
  position: relative;
  width: 100%;
  height: 666px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  img {
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
  .cover-container {
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

    .cover-content {
      animation: fadeIn ease 5s;
      position: relative;
      z-index: 2;
      text-align: left;
      max-width: 35.5625em;
      padding-bottom: 0rem;
      color: #fff;

      .cover-content-p {
        font-size: 22px;
        line-height: 1.5;
        font-weight: 300;
        letter-spacing: 0;
        color: #fff;
        .font-bn & {
          font-size: 27px;
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
