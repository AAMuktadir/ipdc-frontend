<template>
  <section class="user-journey">
    <div class="container">
      <div v-if="missionVisionOurJourney" class="the-journey">
        <h1 class="the-journey-title">
          {{
            $i18n.locale == "en"
              ? missionVisionOurJourney.title
              : missionVisionOurJourney.title_bangla
          }}
        </h1>
        <p class="the-journey-description">
          {{
            $i18n.locale == "en"
              ? missionVisionOurJourney.description
              : missionVisionOurJourney.description_bangla
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    missionVisionOurJourney: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.user-journey {
  background: rgba(253, 225, 240, 0.2);
  padding: 80px 0 80px 0;
  border-bottom: 1px solid rgb(218, 216, 216);
  .the-journey {
    text-align: center;
    color: #343434;
    &-title {
      font-weight: 600;
      font-size: 54px;
      line-height: 100%;
      padding-bottom: 30px;
      .font-bn & {
        font-size: 60px;
      }
    }
    &-description {
      font-size: 20px;
      line-height: 120%;
      font-weight: normal;
      padding: 0 75px;
      text-align: justify;
      .font-bn & {
        font-size: 26px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .user-journey {
    .the-journey {
      &-title {
        font-size: 40px;
        .font-bn & {
          font-size: 45px;
        }
      }
      &-description {
        padding: 0;
      }
    }
  }
}
</style>
