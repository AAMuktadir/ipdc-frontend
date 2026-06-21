<template>
  <div v-if="coverImage" class="coverimage">
    <picture v-if="$i18n.locale == 'en'">
      <source media="(max-width:650px)" :srcset="coverImage.image_mobile_url" />
      <img :src="coverImage.image_url" alt="sustainability" />
    </picture>
    <picture v-if="$i18n.locale == 'bn'">
      <source media="(max-width:650px)" :srcset="coverImage.image_mobile_url" />
      <img :src="coverImage.image_url" alt="sustainability" />
    </picture>
    <div class="sustainabilitycover-container">
      <div class="sustainabilitycover-content">
        <h1 v-if="$i18n.locale == 'en'" class="sustainabilitycover-title">
          <!-- {{ coverImage.title }} -->
        </h1>
        <h1
          v-if="$i18n.locale == 'bn'"
          class="sustainabilitycover-title font-bn"
        >
          <!-- {{ coverImage.title_bangla }} -->
        </h1>
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
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.coverimage {
  position: relative;
  width: 100%;
  height: 86px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: -56px;
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
  .sustainabilitycover-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 78em;
    padding: 0 4.5rem;
    display: flex;
    align-items: center;
    justify-content: right;
    height: 100%;

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
      top: 0;
      left: 0;
      background-image: linear-gradient(
        68.6deg,
        rgb(110 122 51 / 65%) 15%,
        rgb(229 190 20 / 50%) 50%,
        rgb(10 175 92 / 75%) 85%
      );
      backdrop-filter: blur(11px);
    }

    .sustainabilitycover-content {
      animation: fadeIn ease 3s;
      position: relative;
      z-index: 2;
      text-align: left;
      max-width: 20em;
      padding-bottom: 0rem;
      color: #fff;

      h1 {
        font-size: 2.5rem;
        line-height: 133%;
        font-weight: 700;
        letter-spacing: -0.025em;
      }

      .sustainabilitycover-content-p {
        font-size: 18px;
        line-height: 150%;
        font-weight: 400;
        letter-spacing: 0;
        color: #fff;
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
