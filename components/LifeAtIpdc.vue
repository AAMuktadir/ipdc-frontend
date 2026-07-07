<template>
  <section class="ipdc-life">
    <div class="container">
      <div class="ipdc-life-title" v-if="lifeAtIpdcHeaing">
        <h1>
          {{
            $i18n.locale == "en"
              ? lifeAtIpdcHeaing.title
              : lifeAtIpdcHeaing.title_bangla
          }}
        </h1>
        <p>
          {{
            $i18n.locale == "en"
              ? lifeAtIpdcHeaing.sub_title
              : lifeAtIpdcHeaing.sub_title_bangla
          }}
        </p>
      </div>
      <div
        class="ipdc-life-card"
        v-if="careerLifeAtIpdc.length > 0"
        data-aos="zoom-out-down"
        data-aos-delay="300"
        data-aos-duration="600"
      >
        <div
          v-for="singleCareerLife in careerLifeAtIpdc"
          :key="singleCareerLife.id"
          class="ipdc-rules determination"
        >
          <img :src="singleCareerLife.image" alt="hands" />
          <h3>
            {{
              $i18n.locale == "en"
                ? singleCareerLife.title
                : singleCareerLife.title_bangla
            }}
          </h3>
          <p>
            {{
              $i18n.locale == "en"
                ? singleCareerLife.description
                : singleCareerLife.description_bangla
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    careerLifeAtIpdc: {
      type: Array,
      default: () => [],
    },
    lifeAtIpdcHeaing: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.ipdc-life {
  &-title {
    text-align: center;
    padding: 60px 0 100px 0;
    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
    p {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  &-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 130px;
    .ipdc-rules {
      width: 259px;
      height: 272px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 30px 0 30px 0;
      img {
        width: 62px;
        height: 62px;
        margin-bottom: 35px;
      }

      h3 {
        font-weight: bold;
        font-size: 22px;
        line-height: 140.91%;
        margin-bottom: 10px;
        .font-bn & {
          font-size: 27px;
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
      &:hover {
        img {
          transition: 0.2s;
          transform: scale(1.2);
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .ipdc-life {
    &-title {
      padding: 60px 0;
      h1 {
        font-size: 25px;
        .font-bn & {
          font-size: 30px;
        }
      }
      p {
        padding: 15px 0;
      }
    }

    &-card {
      display: flex;
      flex-direction: row;
      gap: 40px;
      flex-wrap: wrap;
      flex-basis: 100%;
      .ipdc-rules {
        width: unset;
        height: unset;
        display: flex;
        flex-basis: calc(25% - 80px / 2);
      }
      .determination {
        order: 3;
      }
      .dedication {
        order: 4;
      }
      .discipline {
        order: 2;
      }
      .teamwork {
        order: 1;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .ipdc-life {
    &-title {
      padding: 60px 0;
      h1 {
        font-size: 25px;
        .font-bn & {
          font-size: 30px;
        }
      }
      p {
        padding: 15px 0;
      }
    }

    &-card {
      display: flex;
      flex-direction: row;
      gap: 40px;
      flex-wrap: wrap;
      flex-basis: 100%;
      .ipdc-rules {
        width: unset;
        height: unset;
        display: flex;
        flex-basis: calc(50% - 80px / 2);
      }
      .determination {
        order: 3;
      }
      .dedication {
        order: 4;
      }
      .discipline {
        order: 2;
      }
      .teamwork {
        order: 1;
      }
    }
  }
}
</style>
