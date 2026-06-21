<template>
  <section v-if="towardsGreenBanking" class="green-banking">
    <div
      class="green-banking-image"
      :style="{ backgroundImage: `url(${towardsGreenBanking.image})` }"
    />
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="green-banking-details">
            <h1 class="banking-title">
              {{
                $i18n.locale == "en"
                  ? towardsGreenBanking.title
                  : towardsGreenBanking.title_bangla
              }}
            </h1>
            <div
              class="green-banking-image_mobile"
              :style="{ backgroundImage: `url(${towardsGreenBanking.image})` }"
            />
            <p class="banking-description">
              {{
                $i18n.locale == "en"
                  ? towardsGreenBanking.description
                  : towardsGreenBanking.description_bangla
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    towardsGreenBanking: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.green-banking {
  position: relative;
  margin: 80px 0 100px 0;

  &-image {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 650px;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;
    border-radius: 30px 0 0 30px;

    &_mobile {
      display: none;
    }
  }

  .green-banking-details {
    .banking-title {
      font-weight: bold;
      font-size: 30px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 35px;
      }
    }

    .banking-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 15px 15px 0;
      height: 310px;
      overflow: auto;
      .font-bn & {
        font-size: 21px;
      }
      &::-webkit-scrollbar {
        width: 15px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 30px;
        background: -webkit-gradient(
          linear,
          left top,
          right bottom,
          from(#ed017f),
          to(#d132d175)
        );
      }
      &::-webkit-scrollbar-track {
        background: -webkit-gradient(
          linear,
          left top,
          right bottom,
          from(#e6a5c7),
          to(#d132a177)
        );
        border-radius: 10px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .green-banking {
    position: relative;
    margin: 30px 0 66px 0;
    height: unset;

    &-image {
      display: none;

      &_mobile {
        display: block;
        // height: 300px;
        aspect-ratio: 16/9;
        background-size: cover;
        border-radius: 20px;
      }
    }

    .green-banking-details {
      .banking-title {
        font-size: 30px;
        position: relative;
        top: unset;
        margin-bottom: 20px;
        .font-bn & {
          font-size: 35px;
        }
      }

      .banking-description {
        margin-top: 20px;
        padding: 0;
      }
    }
  }
}
</style>
