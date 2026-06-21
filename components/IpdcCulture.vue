<template>
  <section class="ipdc-culture" v-if="careerCultureAtIpdc.length > 0">
    <client-only>
      <carousel
        :nav="false"
        :autoplay="true"
        :responsive="{
          0: { items: 1, nav: false },
          600: { items: 1, nav: false },
        }"
      >
        <div
          v-for="slideItem in careerCultureAtIpdc"
          :key="slideItem.id"
          class="culture-slide"
          :style="{
            backgroundImage: `url(${
              $i18n.locale == 'en' ? slideItem.image : slideItem.image_bangla
            })`,
          }"
        >
          <div class="culture-text">
            <h1>
              {{
                $i18n.locale == "en" ? slideItem.title : slideItem.title_bangla
              }}
            </h1>
            <p>
              {{
                $i18n.locale == "en"
                  ? slideItem.description
                  : slideItem.description_bangla
              }}
            </p>
          </div>
        </div>
      </carousel>
    </client-only>
  </section>
</template>

<script>
export default {
  props: {
    careerCultureAtIpdc: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.ipdc-culture {
  padding: 60px 0 80px 0;
  .culture-slide {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    position: relative;
    .culture-text {
      position: absolute;
      width: 457px;
      height: 494px;
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(11px);
      left: 23%;
      bottom: -10px;
      transform: translateX(-50%);
      padding: 30px 60px 30px 40px;
      border-radius: 18px 18px 0 0 !important;
      color: #ffffff;
      h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        margin-bottom: 22px;
        .font-bn & {
          font-size: 41px;
        }
      }
      p {
        font-size: 16px;
        line-height: 154.3%;
        .font-bn & {
          font-size: 21px;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .ipdc-culture {
    padding: 60px 0 80px 0;
    .culture-slide {
      position: relative;
      width: unset;
      height: 930px;
      background-size: cover;
      background-position: center;

      .culture-text {
        position: absolute;
        width: 100%;
        height: 500px;
        left: 50%;
        bottom: 0;
        padding: 30px 40px 30px 20px;
        h1 {
          font-size: 25px;
          .font-bn & {
            font-size: 30px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .ipdc-culture {
    padding: 60px 0 80px 0;
    .culture-slide {
      position: relative;
      width: unset;
      height: 930px;
      background-size: cover;
      background-position: center;

      .culture-text {
        position: absolute;
        width: 100%;
        height: 500px;
        left: 50%;
        bottom: 0;
        padding: 30px 40px 30px 20px;
        h1 {
          font-size: 25px;
          .font-bn & {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
