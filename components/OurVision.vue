<template>
  <section v-if="ourVision" class="our-vision">
    <div
      class="our-vision-image"
      :style="{ backgroundImage: `url(${ourVision.image})` }"
    />
    <div class="container">
      <b-row align-h="end">
        <b-col md="6">
          <div class="our-vision-details">
            <h1 class="our-vision-title">
              {{
                $i18n.locale == "en" ? ourVision.title : ourVision.title_bangla
              }}
            </h1>
            <p class="our-vision-description">
              {{
                $i18n.locale == "en"
                  ? ourVision.description
                  : ourVision.description_bangla
              }}
            </p>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    ourVision: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.our-vision {
  position: relative;
  background: rgba(253, 225, 240, 0.2);

  .our-vision-image {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 650px;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;
    border-radius: 0 20px 20px 0;
  }
  .our-vision-details {
    padding: 145px 0 145px 110px;
    .our-vision-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
    .our-vision-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 10px 0 0 0;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .our-vision {
    margin-bottom: 30px;
    .our-vision-image {
      width: 50%;
    }
  }
}

@media screen and (max-width: 768px) {
  .our-vision {
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    .our-vision-image {
      order: 2;
      position: relative;
      left: unset;
      top: unset;
      bottom: unset;
      width: 95%;
      height: 272px;
      margin-left: 10px;
      border-radius: 16px;
    }
    .our-vision-details {
      padding: 0 0 50px 0;
      .our-vision-title {
        font-size: 30px;
        .font-bn & {
          font-size: 35px;
        }
      }
      // .our-vision-description {
      // }
    }
  }
}
</style>
