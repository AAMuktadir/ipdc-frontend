<template>
  <section
    class="balance-sheet"
    :style="{
      backgroundImage: `url(${
        $i18n.locale == 'en'
          ? backgroundImage.image_url
          : backgroundImage.image_url_bangla
      })`,
    }"
  >
    <div class="container">
      <div
        v-if="home_strongest_balance_sheet_heading"
        class="balance-sheet-title"
      >
        <h2 v-if="$i18n.locale == 'en'" class="balance-title">
          {{ home_strongest_balance_sheet_heading.title }}
        </h2>
        <h2 v-if="$i18n.locale == 'bn'" class="balance-title">
          {{ home_strongest_balance_sheet_heading.title_bangla }}
        </h2>
        <p v-if="$i18n.locale == 'en'" class="balance-description">
          {{ home_strongest_balance_sheet_heading.sub_title }}
        </p>
        <p v-if="$i18n.locale == 'bn'" class="balance-description">
          {{ home_strongest_balance_sheet_heading.sub_title_bangla }}
        </p>
      </div>
      <div v-if="balanceSheet.length > 0" class="loan-sheet">
        <div
          v-for="singleItem in balanceSheet"
          :key="singleItem.id"
          class="sheet loan-protfolio"
        >
          <div v-if="$i18n.locale == 'en'" class="sheet-title">
            <h4>{{ singleItem.value }}</h4>
            <p>{{ singleItem.name }}</p>
          </div>
          <div v-if="$i18n.locale == 'bn'" class="sheet-title">
            <h4>{{ singleItem.value_bangla }}</h4>
            <p>{{ singleItem.name_bangla }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    balanceSheet: {
      type: Array,
      default: [],
    },
    home_strongest_balance_sheet_heading: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      page: 3,
      section: "Bottom",
      backgroundImage: {},
    };
  },
  created() {
    this.getBackgroundImage();
  },
  methods: {
    async getBackgroundImage() {
      try {
        const response = await this.$axios.get(
          `/get-background-image/${this.page}/${this.section}`
        );
        this.backgroundImage = response.data.data;
      } catch (error) {
        console.log("Error fetching getBackgroundImage:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.balance-sheet {
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 100px 0;
  .balance-sheet-title {
    margin-bottom: 80px;
    .balance-title {
      font-weight: bold;
      font-size: 36px;
      line-height: 119.44%;
      color: #ffffff;
      margin-bottom: 10px;
      .font-bn & {
        font-size: 45px;
      }
    }
    .balance-description {
      font-size: 16px;
      line-height: 137.5%;
      color: #ffffff;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
  .loan-sheet {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .sheet {
      height: 143px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(11px);
      border-radius: 10px;
      flex-basis: calc(33% - 40px / 2);
      padding: 0px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      .sheet-title {
        text-align: center;
        // margin-top: 36px;
        h4 {
          font-weight: bold;
          font-size: 40px;
          line-height: 107.5%;
          color: #ffffff;
          margin-bottom: 8px;
        }

        p {
          font-weight: 600;
          font-size: 13px;
          line-height: 154.3%;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #ffffff;
          .font-bn & {
            font-size: 18px;
          }
        }
      }
      &:hover {
        .sheet-title {
          transition: all 0.8s;
          transform: scale(0.9);
          // h4 {
          // }

          // p {
          // }
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .balance-sheet {
    .balance-sheet-title {
      .balance-title {
        font-size: 25px;
        .font-bn & {
          font-size: 35px;
        }
      }
      .balance-description {
        line-height: 154.3%;
      }
    }
    .loan-sheet {
      display: flex;
      gap: 16px;
      .sheet {
        flex-basis: calc(33% - 32px / 2);
        .sheet-title {
          h4 {
            font-size: 30px;
          }
          // p {
          // }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .balance-sheet {
    .balance-sheet-title {
      .balance-title {
        font-size: 25px;
        line-height: 133%;
        .font-bn & {
          font-size: 35px;
        }
      }
      .balance-description {
        line-height: 154.3%;
      }
    }
    .loan-sheet {
      display: flex;
      gap: 16px;
      .sheet {
        flex-basis: calc(50% - 16px / 2);
        .sheet-title {
          h4 {
            font-size: 30px;
          }
          // p {
          // }
        }
      }
    }
  }
}
</style>
