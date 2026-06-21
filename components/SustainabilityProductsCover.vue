<template>
  <div v-if="coverImage" class="coverimage">
    <picture>
      <source
        class="backdrop"
        media="(max-width:650px)"
        :srcset="coverImage.image"
      />
      <img class="backdrop" :src="coverImage.image" alt="sustainability" />
    </picture>
    <picture v-if="$i18n.locale == 'en'">
      <source media="(max-width:650px)" :srcset="coverImage.image" />
      <img :src="coverImage.image" alt="sustainability" />
    </picture>
    <picture v-if="$i18n.locale == 'bn'">
      <source media="(max-width:650px)" :srcset="coverImage.image" />
      <img :src="coverImage.image" alt="sustainability" />
    </picture>
    <div class="sustainabilitycover-container">
      <div class="sustainabilitycover-content">
        <h1
          v-if="$i18n.locale == 'en'"
          class="sustainabilitycover-title"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {{ coverImage.title }}
        </h1>
        <h1
          v-if="$i18n.locale == 'bn'"
          class="sustainabilitycover-title font-bn"
        >
          {{ coverImage.title_bn }}
        </h1>
        <br />
        <div
          class="sustainabilitycover-content-p"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <span
            v-if="$i18n.locale == 'en'"
            v-html="coverImage.description"
          ></span>
          <span
            v-if="$i18n.locale == 'bn'"
            v-html="coverImage.description_bn"
          ></span>
        </div>
        <br />
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
      default() {
        return {};
      },
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
  .backdrop {
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
    filter: blur(25px);
    -webkit-filter: blur(25px);
  }
  img {
    animation: fadeIn ease 1.5s;
    position: absolute;
    // width: 100%;
    height: 92%;
    bottom: 0;
    right: 0;
    z-index: 2;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: 50%;
    object-position: 50%;
  }
  .sustainabilitycover-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 90em;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 3;
      top: 0;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.9) 20%,
        rgba(0, 0, 0, 0.1) 75%
      );
    }

    .sustainabilitycover-content {
      animation: fadeIn ease 3s;
      position: relative;
      z-index: 4;
      text-align: left;
      max-width: 30em;
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
