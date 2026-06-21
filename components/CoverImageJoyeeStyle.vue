<template>
  <div v-if="localCoverImage" class="coverimage">
    <picture>
      <source media="(max-width: 650px)" :srcset="mobileImageUrl" />
      <img :src="imageUrl" alt="Joyee" />
    </picture>

    <div class="joyeecover-container">
      <div class="joyeecover-content">
        <h1 :class="['joyeecover-title', { 'font-bn': isBangla }]">
          {{ isBangla ? localCoverImage.title_bangla : localCoverImage.title }}
        </h1>

        <br />

        <p :class="['joyeecover-content-p', { 'font-bn': isBangla }]">
          {{
            isBangla
              ? localCoverImage.sub_title_bangla
              : localCoverImage.sub_title
          }}
        </p>

        <br />

        <div class="text-left">
          <nuxt-link
            class="applybtn btn"
            id="13"
            :to="localePath('/customer-signup')"
          >
            {{ isBangla ? "আবেদন করুন" : "Apply now" }}
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
      default: () => ({}),
    },
  },
  data() {
    return {
      localCoverImage: this.coverImage || null,
    };
  },
  computed: {
    isBangla() {
      return this.$i18n.locale === "bn";
    },
    imageUrl() {
      return this.isBangla && this.localCoverImage.image_url_bangla
        ? this.localCoverImage.image_url_bangla
        : this.localCoverImage.image_url;
    },
    mobileImageUrl() {
      return this.isBangla && this.localCoverImage.mobile_image_url_bangla
        ? this.localCoverImage.mobile_image_url_bangla
        : this.localCoverImage.image_mobile_url;
    },
  },
  async created() {
    await this.getCoverImage();
  },
  methods: {
    async getCoverImage() {
      try {
        const response = await this.$axios.get(`/get-cover-image/${this.page}`);
        if (response?.data?.data) {
          this.localCoverImage = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching getCoverImage:", error);
      }
    },
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
  .joyeecover-container {
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

    .joyeecover-content {
      animation: fadeIn ease 3s;
      position: relative;
      z-index: 2;
      text-align: left;
      max-width: 20em;
      padding-bottom: 0rem;
      color: #fff;

      h1 {
        font-size: 2.5rem;
        line-height: 1.3;
        font-weight: 700;
        letter-spacing: -0.025em;
        .font-bn & {
          font-size: 2.9rem;
        }
      }

      .joyeecover-content-p {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 400;
        letter-spacing: 0;
        color: #fff;
        .font-bn & {
          font-size: 23px;
        }
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
        .font-bn & {
          font-size: 23px;
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
