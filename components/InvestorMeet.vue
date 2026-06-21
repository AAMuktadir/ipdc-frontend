<template>
  <section class="investor-meet">
    <div class="container">
      <div class="investor-title" v-if="investorMeetsHeading">
        <h1 class="investor-title-heading">
          {{
            $i18n.locale == "en"
              ? investorMeetsHeading.title
              : investorMeetsHeading.title_bangla
          }}
        </h1>
        <p class="investor-title-description">
          {{
            $i18n.locale == "en"
              ? investorMeetsHeading.sub_title
              : investorMeetsHeading.sub_title_bangla
          }}
        </p>
      </div>
      <div v-if="investorMeet.length > 0">
        <client-only>
          <carousel
            :nav="true"
            :autoplay="false"
            :responsive="{
              0: { items: 1, nav: false },
              600: { items: 1, nav: false },
            }"
          >
            <div
              class="investor-meet-video"
              v-for="item in investorMeet"
              :key="item.id"
            >
              <iframe class="meet-video" :src="item.file_url" />
            </div>
          </carousel>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    investorMeet: {
      type: null,
      default: null,
    },

    investorMeetsHeading: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.investor-meet {
  padding: 0 0 84px 0;

  .investor-title {
    text-align: center;
    padding: 0 0 83px 0;

    &-heading {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }

    &-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 225px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .investor-meet-video {
    .meet-video {
      width: 100%;
      height: 488px;
      border-radius: 15px;
      border: none;
    }
  }
}

@media screen and (max-width: 1024px) {
  .investor-meet {
    padding: 0 0 84px 0;

    .investor-title {
      text-align: center;
      padding: 0 0 70px 0;

      // &-heading {
      // }

      &-description {
        padding: 15px 0;
      }
    }

    // .investor-meet-video {
    //   .meet-video {
    //   }
    // }
  }
}
@media screen and (max-width: 768px) {
  .investor-meet {
    padding: 0 0 84px 0;

    .investor-title {
      text-align: center;
      padding: 0 0 70px 0;

      // &-heading {
      // }

      &-description {
        padding: 15px 0;
      }
    }

    // .investor-meet-video {
    //   .meet-video {
    //   }
    // }
  }
}
</style>
