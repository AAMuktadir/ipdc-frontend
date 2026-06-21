<template>
  <section class="mission-cards">
    <div
      class="mission-vision-experience_headline container"
      v-if="customerExperienceHeading"
    >
      <h1 class="experience-title">
        {{
          $i18n.locale == "en"
            ? customerExperienceHeading.title
            : customerExperienceHeading.title_bangla
        }}
      </h1>
      <p class="experience-description">
        {{
          $i18n.locale == "en"
            ? customerExperienceHeading.sub_title
            : customerExperienceHeading.sub_title_bangla
        }}
      </p>
    </div>

    <div v-if="missionVisionFooterCard.length > 0" class="container">
      <div class="mission-vision-cards">
        <div class="customer-card embracing">
          <img :src="missionVisionFooterCard[0].image" alt="profile" />
          <h3 class="customer-card-title">
            {{
              $i18n.locale == "en"
                ? missionVisionFooterCard[0].title
                : missionVisionFooterCard[0].title_bangla
            }}
          </h3>
        </div>
      </div>
      <div class="mission-vision-cards">
        <div class="customer-card accepting">
          <img :src="missionVisionFooterCard[1].image" alt="profile" />
          <h3 class="customer-card-title">
            {{
              $i18n.locale == "en"
                ? missionVisionFooterCard[1].title
                : missionVisionFooterCard[1].title_bangla
            }}
          </h3>
        </div>
        <div class="customer-card relentless">
          <img :src="missionVisionFooterCard[2].image" alt="profile" />
          <h3 class="customer-card-title">
            {{
              $i18n.locale == "en"
                ? missionVisionFooterCard[2].title
                : missionVisionFooterCard[2].title_bangla
            }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    missionVisionFooterCard: {
      type: Array,
      default: () => [],
    },
    customerExperienceHeading: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.mission-cards {
  background: rgba(253, 225, 240, 0.2);
  padding: 100px 0 80px 0;

  .mission-vision-experience_headline {
    text-align: center;
    .experience-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      .font-bn & {
        font-size: 41px;
      }
    }
    .experience-description {
      font-size: 16px;
      line-height: 137.5%;
      color: #999999;
      padding: 15px 220px 40px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
    .our-journey-description {
      font-size: 16px;
      line-height: 137.5%;
      color: #000000;
      padding: 15px 220px 40px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .mission-vision-cards {
    display: flex;
    justify-content: center;
    gap: 30px;

    .customer-card {
      width: 390px;
      height: 343px;
      background: #ffffff;
      clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 76%, 0 25%);
      display: flex;
      flex-direction: column;
      padding: 100px 0 0 0;
      align-items: center;
      text-align: center;

      img {
        width: 52px;
        height: 52px;
      }

      &-title {
        font-weight: bold;
        font-size: 22px;
        line-height: 140.91%;
        color: #343434;
        padding: 22px 0;
        .font-bn & {
          font-size: 27px;
        }
      }

      &:hover {
        img {
          transition: 0.3s;
          transform: scale(1.3);
        }
      }
    }
    &:nth-child(2) {
      margin-top: -60px;
    }
  }
}

@media screen and (max-width: 768px) {
  .mission-cards {
    background: rgba(253, 225, 240, 0.2);
    padding: 70px 0;
    .mission-vision-experience_headline {
      text-align: center;
      .experience-title {
        font-size: 30px;
        .font-bn & {
          font-size: 35px;
        }
      }
      .experience-description {
        padding: 15px 0;
      }
    }

    .mission-vision-cards {
      gap: 20px;

      .customer-card {
        width: 200px;
        height: 180px;
        padding: 40px 0;
        border-radius: 9.12879px;

        img {
          width: 35px;
          height: 35px;
          margin: 0 0 20px 0;
        }

        &-title {
          font-size: 16px;
          line-height: 125%;
          padding: 0;
          .font-bn & {
            font-size: 21px;
          }
        }
      }
      &:nth-child(2) {
        margin-top: -25px;
      }
    }
  }
}
</style>
