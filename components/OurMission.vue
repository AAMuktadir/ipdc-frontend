<template>
  <section v-if="ourMission" class="our-mission">
    <div
      class="our-mission-image"
      :style="{ backgroundImage: `url(${ourMission.image})` }"
    />
    <div class="container">
      <b-row>
        <b-col md="6">
          <div class="our-mission-details">
            <h1 class="our-mission-title">
              {{
                $i18n.locale == "en"
                  ? ourMission.title
                  : ourMission.title_bangla
              }}
            </h1>
            <p class="our-mission-description">
              {{
                $i18n.locale == "en"
                  ? ourMission.description
                  : ourMission.description_bangla
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
    ourMission: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.our-mission {
  position: relative;
  .our-mission-image {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 650px;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;
    border-radius: 20px 0 0 20px;
  }
  .our-mission-details {
    padding: 169px 110px 169px 0;
    .our-mission-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }

    .our-mission-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .our-mission {
    margin-bottom: 30px;
    .our-mission-image {
      width: 50%;
    }
  }
}

@media screen and (max-width: 768px) {
  .our-mission {
    position: relative;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    .our-mission-image {
      order: 2;
      position: relative;
      right: unset;
      top: unset;
      bottom: unset;
      width: 95%;
      height: 272px;
      margin-left: 10px;
      background-position: center;
      border-radius: 16px;
    }
    .our-mission-details {
      padding: 0 0 50px 0;
      .our-mission-title {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        color: #343434;
        .font-bn & {
          font-size: 41px;
        }
      }

      .our-mission-description {
        font-size: 16px;
        line-height: 154.3%;
        color: #858585;
        .font-bn & {
          font-size: 21px;
        }
      }
    }
  }
}
</style>
