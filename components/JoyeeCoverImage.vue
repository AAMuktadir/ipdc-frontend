<template>
  <div v-if="coverImage" class="coverimage">
    <picture v-if="$i18n.locale == 'en'">
      <source media="(max-width:650px)" :srcset="coverImage.image_mobile_url" />
      <img :src="coverImage.image_url" alt="Joyee" />
    </picture>
    <picture v-if="$i18n.locale == 'bn'">
      <source media="(max-width:650px)" :srcset="coverImage.image_mobile_url" />
      <img :src="coverImage.image_url" alt="Joyee" />
    </picture>
    <div class="joyeecover-container">
      <div class="joyeecover-content">
        <h1 v-if="$i18n.locale == 'en'" class="joyeecover-title">
          {{ coverImage.title }}
        </h1>
        <h1 v-if="$i18n.locale == 'bn'" class="joyeecover-title font-bn">
          {{ coverImage.title_bangla }}
        </h1>
        <br />
        <p v-if="$i18n.locale == 'en'" class="joyeecover-content-p">
          {{ coverImage.sub_title }}
        </p>
        <p v-if="$i18n.locale == 'bn'" class="joyeecover-content-p font-bn">
          {{ coverImage.sub_title_bangla }}
        </p>

        <br />
        <div class="text-left">
          <nuxt-link
            class="applybtn btn"
            id="13"
            :to="localePath('/customer-signup')"
          >
            {{ $i18n.locale == "en" ? "Apply now" : "আবেদন করুন" }}
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
      default: {},
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
