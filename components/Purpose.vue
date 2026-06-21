<template>
  <section class="purpose">
    <div class="container">
      <div class="purpose-heading">
        <h1 class="purpose-title" v-if="purposeHeading">
          {{
            $i18n.locale == "en"
              ? purposeHeading.title
              : purposeHeading.title_bangla
          }}
        </h1>
        <!-- <p class="purpose-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum augue arcu, porttitor<br> id sollicitudin suscipit.
        </p> -->
      </div>
      <ul
        v-if="purpose.length > 0"
        class="purpose-items"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
      >
        <li
          class="purpose-list"
          v-for="singlePurpose in purpose"
          c
          :key="singlePurpose.id"
        >
          {{
            $i18n.locale == "en"
              ? singlePurpose.title
              : singlePurpose.title_bangla
          }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    purpose: {
      type: Array,
      default: () => [],
    },
    purposeHeading: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.purpose {
  background: rgba(243, 251, 249, 0.5);
  padding: 84px;
  .purpose-heading {
    text-align: center;
    padding: 0 0 51px 0;
    .purpose-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343433;
      .font-bn & {
        font-size: 41px;
      }
    }
    .purpose-description {
      font-size: 16px;
      line-height: 156.25%;
      color: #858585;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .purpose-items {
    list-style: none;
    display: flex;
    gap: 35px;
    padding: 0;
    .purpose-list {
      position: relative;
      width: 357px;
      height: 84px;
      border: 1px solid #80d6b2;
      border-radius: 12px;
      font-weight: 600;
      font-size: 18px;
      line-height: 166.67%;
      color: #343433;
      padding: 25px 25px 28px 88px;
      background: #ffffff;
      .font-bn & {
        font-size: 23px;
      }

      &::before {
        content: "\2713";
        position: absolute;
        left: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 29px;
        height: 29px;
        background: #2bbb7f;
        color: #ffffff;
        border-radius: 100px;
      }
      &:hover {
        background: #f8f5f5;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .purpose {
    background: rgba(243, 251, 249, 0.5);
    padding: 50px 0;
    .purpose-heading {
      text-align: center;
      padding: 0 0 33px 0;
      .purpose-title {
        font-size: 25px;
        margin-bottom: 19px;
        .font-bn & {
          font-size: 30px;
        }
      }
      // .purpose-description {
      // }
    }

    .purpose-items {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .purpose-list {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .purpose {
    background: rgba(243, 251, 249, 0.5);
    padding: 50px 0;
    .purpose-heading {
      text-align: center;
      padding: 0 0 33px 0;
      .purpose-title {
        font-size: 25px;
        margin-bottom: 19px;
        .font-bn & {
          font-size: 30px;
        }
      }
      // .purpose-description {
      // }
    }

    .purpose-items {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .purpose-list {
        width: 100%;
      }
    }
  }
}
</style>
