<template>
  <div v-if="staticImage" class="cover-container">
    <!-- <div class="deposit-coverimage">
      <picture>
        <source
          media="(max-width:650px)"
          :srcset="staticImage.static_mobile_image || staticImage.static_image"
        />
        <img
          class="backdrop"
          :src="staticImage.static_image"
          :alt="isBangla ? 'কভার ইমেজ' : 'Cover Image'"
        />
      </picture>
      <div class="blur"></div>
    </div> -->

    <div class="deposit-coverimage">
      <picture>
        <source
          media="(max-width:650px)"
          :srcset="staticImage.static_mobile_image || staticImage.static_image"
        />
        <img
          class="backdrop"
          :src="staticImage.static_mobile_image || staticImage.static_image"
          alt="Background"
        />
      </picture>
      <div class="blur"></div>

      <picture>
        <source
          media="(min-width:650px)"
          :srcset="staticImage.static_mobile_image || staticImage.static_image"
        />
        <img
          :src="staticImage.static_mobile_image || staticImage.static_image"
          :alt="isBangla ? 'কভার ইমেজ' : 'Cover Image'"
        />
      </picture>
    </div>

    <div class="header-div">
      <div class="deposit-title">
        <h1 class="deposit-heading">
          {{ isBangla ? "ক্যাম্পেইনের বিস্তারিত" : "Campaign Details" }}
        </h1>
        <!-- <div
          class="deposit-description"
          v-html="
            isBangla
              ? staticImage.short_description_bangla
              : staticImage.short_description
          "
        /> -->
        <div>
          <nuxt-link class="applybtn btn" :to="localePath('/customer-signup')">
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
    staticImage: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isBangla() {
      return this.$i18n.locale === "bn";
    },
  },
};
</script>

<style lang="scss" scoped>
.cover-container {
  position: relative;
}

.deposit-coverimage {
  position: relative;
  width: 100%;
  height: 660px;
  overflow: hidden;

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

  picture {
    display: block;
    line-height: 0;
  }

  img:not(.backdrop) {
    animation: fadeIn ease 1.5s;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 4;
    object-fit: contain;
    object-position: center;
  }
}

.header-div {
  .deposit-title {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 60vw;
    background: rgba(255, 225, 225, 0.25);
    backdrop-filter: blur(7px);
    border-radius: 0px 0px 25px 25px;
    text-align: center;
    padding: 30px;
    z-index: 5;

    .deposit-heading {
      font-weight: 900;
      font-size: 45px;
      line-height: 1.3;
      color: #fb007c;
      text-shadow: 1px 1px 50px rgba(0, 0, 0, 0.65);
      .font-bn & {
        font-size: 50px;
      }
    }

    .deposit-description {
      font-size: 18px;
      line-height: 1.5;
      color: #000000;
      text-shadow: 2px 2px 25px rgba(0, 0, 0, 0.75);
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
  .deposit-coverimage {
    height: 500px;
  }

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
  .deposit-coverimage {
    height: 500px;
  }

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
