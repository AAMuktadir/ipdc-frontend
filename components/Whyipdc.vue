<template>
  <div class="why-ipdc">
    <b-container>
      <div class="why-ipdc-title">
        <h2>
          {{
            $i18n.locale == "en"
              ? home_why_choose_heading.title
              : home_why_choose_heading.title_bangla
          }}
        </h2>
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
        <div class="choose-heading">
          <h3 class="choose-title">
            {{ $i18n.locale == "en" ? item.title : item.title_bangla }}
          </h3>
          <div
            class="choose-description"
            v-html="
              $i18n.locale == 'en' ? item.description : item.description_bangla
            "
          ></div>
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
      default: () => [],
    },
    home_why_choose_heading: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>
<style lang="scss" scoped>
.why-ipdc {
  .why-ipdc-title {
    text-align: center;
    margin-bottom: 75px;

    h2 {
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
    align-items: stretch;
    justify-content: center;
    gap: 16px;
    margin-bottom: 80px;
    flex-wrap: wrap;

    .choose {
      width: 240px;
      background: #ffffff;
      border: 1px solid #e7e7e7;
      box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
      border-radius: 12px;

      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 30px 16px;
      height: auto;

      .choose-image {
        width: 62px;
        height: 62px;
        margin-bottom: 16px;
        flex-shrink: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .choose-heading {
        text-align: center;
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;

        .choose-title {
          font-weight: bold;
          font-size: 22px;
          line-height: 141%;
          color: #343434;
          margin-bottom: 10px;

          min-height: 100px;

          display: flex;
          align-items: center;
          justify-content: center;

          .font-bn & {
            font-size: 27px;
            min-height: 76px;
          }
        }

        .choose-description {
          font-size: 16px;
          line-height: 154.3%;
          color: #858585;
          flex: 1;

          .font-bn & {
            font-size: 21px;
          }
        }
      }

      &:hover {
        .choose-image {
          transition: 0.5s all ease-in-out;
          transform: scale(1.15);
        }

        .choose-description {
          color: #343434;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .why-ipdc {
    padding-top: 54px;
    .why-ipdc-title {
      h2 {
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
        padding: 30px 20px;
        .choose-image {
          margin-top: 20px;
        }
        .choose-heading {
          text-align: left;
          padding: 0 20px;
        }
      }
    }
  }
}
</style>
