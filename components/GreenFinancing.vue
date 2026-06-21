<template>
  <section v-if="greenFinancing" class="green-financing">
    <div
      class="green-financing-image"
      :style="{ backgroundImage: `url(${greenFinancing.image})` }"
    />
    <div class="container">
      <b-row align-h="end">
        <b-col lg="6">
          <div class="green-financing-details">
            <h1 class="financing-title">
              {{
                $i18n.locale == "en"
                  ? greenFinancing.title
                  : greenFinancing.title_bangla
              }}
            </h1>
            <p class="financing-description">
              {{
                $i18n.locale == "en"
                  ? greenFinancing.description
                  : greenFinancing.description_bangla
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
    greenFinancing: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.green-financing {
  position: relative;

  .green-financing-image {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 650px;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;
    border-radius: 0 30px 30px 0;
  }

  &-details {
    padding: 60px 0;
    .financing-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }

    .financing-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 10px 110px 0 0;
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
  .green-financing {
    position: relative;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    .green-financing-image {
      order: 2;
      position: relative;
      left: 6%;
      right: unset;
      width: 85%;
      height: 410px;
      background-position: center;
      border-radius: 15px;
      margin-left: 10px;
    }

    &-details {
      padding: 0 0 60px 0;
      .financing-title {
        font-size: 30px;
        .font-bn & {
          font-size: 35px;
        }
      }

      .financing-description {
        padding: 10px 0 0 0;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .green-financing {
    position: relative;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    .green-financing-image {
      order: 2;
      position: relative;
      left: unset;
      right: unset;
      width: 95%;
      height: 410px;
      background-position: center;
      border-radius: 15px;
      margin-left: 10px;
    }

    &-details {
      padding: 0 0 60px 0;
      .financing-title {
        font-size: 30px;
        .font-bn & {
          font-size: 35px;
        }
      }

      .financing-description {
        padding: 10px 0 0 0;
      }
    }
  }
}
</style>
