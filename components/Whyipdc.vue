<template>
  <div class="why-ipdc">
    <b-container>
      <div class="why-ipdc-title">
        <h1 v-if="$i18n.locale == 'en'">{{ home_why_choose_heading.title }}</h1>
        <h1 v-if="$i18n.locale == 'bn'">
          {{ home_why_choose_heading.title_bangla }}
        </h1>
        <div
          v-html="
            $i18n.locale == 'en'
              ? home_why_choose_heading.sub_title
              : home_why_choose_heading.sub_title_bangla
          "
        ></div>
      </div>
    </b-container>

    <div class="why-choose" v-if="whyChooseCards.length > 0">
      <div
        class="choose flexible-finance"
        v-for="item in whyChooseCards"
        :key="item.id"
      >
        <div class="choose-image">
          <img :src="item.image" alt="icon" />
        </div>
        <div v-if="$i18n.locale == 'en'" class="choose-heading">
          <h5 class="choose-title">{{ item.title }}</h5>
          <p class="choose-description">{{ item.description }}</p>
        </div>
        <div v-if="$i18n.locale == 'bn'" class="choose-heading">
          <h5 class="choose-title">{{ item.title_bangla }}</h5>
          <p class="choose-description">{{ item.description_bangla }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Whyipdc",
  props: {
    whyChooseCards: {
      type: Array,
      required: true,
      default: [],
    },
    home_why_choose_heading: {
      type: Object,
      required: true,
      default: {},
    },
  },
};
</script>
<style lang="scss" scoped>
.why-ipdc {
  .why-ipdc-title {
    text-align: center;
    margin-bottom: 75px;

    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      margin-bottom: 10px;
      .font-bn & {
        font-size: 45px;
      }
    }
    p {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .why-choose {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    gap: 16px;
    .choose {
      width: 259px;
      height: 272px;
      background: #ffffff;
      border: 1px solid #e7e7e7;
      box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 30px;
      .choose-image {
        width: 62px;
        height: 62px;
        margin-bottom: 10px;
      }
      .choose-heading {
        text-align: center;
        .choose-title {
          font-weight: bold;
          font-size: 22px;
          line-height: 141%;
          color: #343434;
          .font-bn & {
            font-size: 27px;
          }
        }
        .choose-description {
          font-size: 16px;
          line-height: 154.3%;
          padding: 0 13px;
          color: #858585;
          .font-bn & {
            font-size: 21px;
          }
        }
      }

      &:hover {
        .choose-image {
          transition: 0.5s all ease-in-out;
          transform: scale(1.5);
        }
        .choose-heading {
          .choose-description {
            color: #343434;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .why-ipdc {
    padding-top: 54px;
    .why-ipdc-title {
      h1 {
        font-size: 25px;
        .font-bn & {
          font-size: 35px;
        }
      }
      p {
        padding: 0 20px;
      }
    }
    .why-choose {
      display: flex;
      flex-direction: column;
      .choose {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 95%;
        height: unset;
        padding: 20px 0 20px 20px;
        .choose-image {
          margin-top: 20px;
        }
        .choose-heading {
          text-align: left;
          padding: 0 20px;
          // .choose-title {
          // }
          // .choose-description {
          // }
        }
      }
    }
  }
}
</style>
