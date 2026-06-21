<template>
  <section class="customer-experience">
    <div class="container" v-if="home_customer_experience_heading">
      <div class="customer-experience_headline">
        <h1 v-if="$i18n.locale == 'en'" class="experience-title">
          {{ home_customer_experience_heading.title }}
        </h1>
        <h1 v-if="$i18n.locale == 'bn'" class="experience-title">
          {{ home_customer_experience_heading.title_bangla }}
        </h1>
        <p v-if="$i18n.locale == 'en'" class="experience-description">
          {{ home_customer_experience_heading.sub_title }}
        </p>
        <p v-if="$i18n.locale == 'bn'" class="experience-description">
          {{ home_customer_experience_heading.sub_title_bangla }}
        </p>
      </div>
      <div class="create-experience" v-if="homeCustomerExperience.length > 0">
        <div
          class="creating-customer diversity"
          v-for="item in homeCustomerExperience"
          :key="item.id"
        >
          <img :src="item.image" alt="Img" />
          <div v-if="$i18n.locale == 'en'" class="creating-customer-title">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
          <div v-if="$i18n.locale == 'bn'" class="creating-customer-title">
            <h4>{{ item.title_bangla }}</h4>
            <p>{{ item.description_bangla }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Customer-experience",
  props: {
    homeCustomerExperience: {
      type: Array,
      required: true,
      default: [],
    },
    home_customer_experience_heading: {
      type: Object,
      required: true,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.customer-experience {
  padding: 100px 0;
  border: 1px solid #d7f8ea;
  .customer-experience_headline {
    text-align: center;
    padding-bottom: 80px;
    .experience-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      .font-bn & {
        font-size: 45px;
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
  .create-experience {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    // align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    flex-basis: 100%;
    .creating-customer {
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
      .creating-customer-title {
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
          transition: 0.5s all ease-in-out;
          transform: scale(1.5);
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .customer-experience {
    width: 100%;
    .customer-experience_headline {
      .experience-title {
        font-size: 30px;
        .font-bn & {
          font-size: 40px;
        }
      }
      .experience-description {
        padding: 20px 5px;
      }
    }
    .create-experience {
      display: flex;
      gap: 25px;
      // flex-direction: column;

      .creating-customer {
        width: unset;
        display: flex;
        margin: 0;
        justify-content: center;
        padding: 15px;
        flex-basis: calc(50% - 25px / 2);
        align-items: center;
        img {
          margin-right: 10px;
        }
        .creating-customer-title {
          h4 {
            font-size: 18px;
            .font-bn & {
              font-size: 25px;
            }
          }
          p {
            padding: 0;
            min-height: 75px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .customer-experience {
    width: 100%;
    .customer-experience_headline {
      .experience-title {
        font-size: 30px;
        .font-bn & {
          font-size: 40px;
        }
      }
      .experience-description {
        padding: 20px 5px;
      }
    }
    .create-experience {
      display: flex;
      gap: 25px;
      // flex-direction: column;

      .creating-customer {
        width: unset;
        display: flex;
        margin: 0;
        justify-content: center;
        padding: 15px;
        flex-basis: calc(49% - 25px / 2);
        align-items: center;
        img {
          margin-right: 10px;
        }
        .creating-customer-title {
          h4 {
            font-size: 18px;
            .font-bn & {
              font-size: 25px;
            }
          }
          p {
            padding: 0;
            min-height: 75px;
          }
        }
      }
    }
  }
}
</style>
