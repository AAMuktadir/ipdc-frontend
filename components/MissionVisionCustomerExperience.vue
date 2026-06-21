<template>
  <section class="mission-vision-experience">
    <div class="container">
      <!--      <div-->
      <!--        class="mission-vision-experience_headline"-->
      <!--        v-if="customerExperienceHeading"-->
      <!--      >-->
      <!--        <h1 class="experience-title">-->
      <!--          {{ customerExperienceHeading.title }}-->
      <!--        </h1>-->
      <!--        <p class="experience-description">-->
      <!--          {{ customerExperienceHeading.sub_title }}-->
      <!--        </p>-->
      <!--      </div>-->

      <div
        class="mission-vision-customer"
        v-if="missionVisionCustomerExperience.length > 0"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div
          class="vision-customer"
          v-for="item in missionVisionCustomerExperience"
          :key="item.id"
        >
          <img :src="item.image" alt="Img" />
          <div class="vision-customer-title">
            <h4>{{ $i18n.locale == "en" ? item.title : item.title_bangla }}</h4>
            <p>
              {{
                $i18n.locale == "en"
                  ? item.description
                  : item.description_bangla
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
    missionVisionCustomerExperience: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.mission-vision-experience {
  padding: 90px 0 70px 0;
  &_headline {
    text-align: center;
    padding-bottom: 80px;
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
      padding: 15px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .mission-vision-customer {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    // align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    flex-basis: 100%;
    .vision-customer {
      position: relative;
      background: #ffffff;
      margin-right: 5px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      flex-basis: 40%;
      padding-top: 20px;
      border: 1.5px solid #e7e7e7;
      img {
        width: 37px;
        height: 37px;
        margin-bottom: 15px;
      }
      .vision-customer-title {
        h4 {
          font-weight: bold;
          font-size: 22px;
          line-height: 140.91%;
          color: #343434;
          .font-bn & {
            font-size: 27px;
          }
        }
        p {
          font-size: 16px;
          line-height: 154.3%;
          color: #858585;
          padding: 10px 24px 24px 24px;
          .font-bn & {
            font-size: 21px;
          }
        }
      }
      &:hover {
        img {
          transition: 0.3s;
          transform: scale(1.5);
        }
      }
    }
    .vision-diversity {
      background: #fff1e9;
      border: 1.5px solid #ffe8db;
    }
    .vision-integrity {
      background: rgba(253, 225, 240, 0.46);
      border: 1.5px solid #fcd9ec;
    }
    .vision-teamwork {
      background: #f3fdf8;
      border: 1.5px solid #d7f8ea;
    }
    .vision-demonstrate {
      background: rgba(130, 55, 255, 0.05);
      border: 1.5px solid #eadce3;
    }
  }
}
@media screen and (max-width: 768px) {
  .mission-vision-experience {
    padding: 90px 0 70px 0;
    &_headline {
      padding-bottom: 60px;
      .experience-title {
        font-size: 25px;
        .font-bn & {
          font-size: 30px;
        }
      }
      .experience-description {
        padding: 35px 0;
      }
    }
    .mission-vision-customer {
      gap: 26px;
      .vision-customer {
        // img {
        // }
        .vision-customer-title {
          h4 {
            font-size: 20px;
            .font-bn & {
              font-size: 25px;
            }
          }
          p {
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
            padding: 0 10px;
            margin: 10px 0;
            .font-bn & {
              font-size: 19px;
            }
          }
        }
      }
      .vision-diversity {
        background: #fff1e9;
        border: 1.5px solid #ffe8db;
      }
      .vision-integrity {
        background: rgba(253, 225, 240, 0.46);
        border: 1.5px solid #fcd9ec;
      }
      .vision-teamwork {
        background: #f3fdf8;
        border: 1.5px solid #d7f8ea;
      }
      .vision-demonstrate {
        background: rgba(130, 55, 255, 0.05);
        border: 1.5px solid #eadce3;
      }
    }
  }
}
</style>
