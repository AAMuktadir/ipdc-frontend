<template>
  <section
    class="self-employed"
    :style="{
      backgroundImage: `url(${backgroundImage.image_url})`,
    }"
  >
    <b-container>
      <b-row align-h="end">
        <b-col md="6">
          <div class="self-employee-heading">
            <h1 v-if="title" class="self-employee-heading-title">
              {{ $i18n.locale == "en" ? title.title : title.title_bangla }}
            </h1>
            <div v-if="selfEmployed.length > 0" class="self-employee-documents">
              <div
                v-for="singleSelfEmployee in selfEmployed"
                :key="singleSelfEmployee.id"
                class="self-employee-documents-detail"
              >
                <div class="self-employee-document-icon">
                  <img
                    :src="singleSelfEmployee.icon"
                    alt="icon"
                    v-if="singleSelfEmployee.icon"
                  />
                  <img
                    src="~assets/image/icon/Documents.svg"
                    alt="icon"
                    v-else
                  />
                </div>
                <p>
                  {{
                    $i18n.locale == "en"
                      ? singleSelfEmployee.title
                      : singleSelfEmployee.title_bangla
                  }}
                </p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    selfEmployed: {
      type: Array,
      default: null,
    },
    title: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      page: 8,
      section: "Bottom",
      backgroundImage: {},
    };
  },
  created() {
    this.getBackgroundImage();
  },
  methods: {
    async getBackgroundImage() {
      const response = await this.$axios.get(
        `/get-background-image/${this.page}/${this.section}`
      );
      this.backgroundImage = response.data.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.self-employed {
  position: relative;
  padding: 80px 0 150px 0;
  background-repeat: no-repeat;
  background-position: left center;
  // background-size: 35% 100%;
  // margin-bottom: 100px;

  .self-employee-heading {
    &-title {
      font-weight: bold;
      font-size: 30px;
      line-height: 133%;
      color: #343434;
      margin-bottom: 34px;
    }
    .self-employee-documents {
      &-detail {
        display: flex;
        align-items: center;
        gap: 20px;
        position: relative;
        padding: 27px 30px 27px 40px;
        border: 1px solid #e7e7e7;
        background: #ffffff;

        .self-employee-document-icon {
          img {
            max-width: 24px;
            height: 30px;
          }
        }
        p {
          font-weight: normal;
          font-size: 18px;
          line-height: 122.22%;
          color: #343434;
        }

        &:first-child {
          border-radius: 8px 8px 0 0;
        }
        &:last-child {
          border-radius: 0 0 8px 8px;
        }

        &:hover {
          background: #f7f5f5;

          .self-employee-document-icon {
            img {
              transition: 0.5s;
              transform: scale(1.4);
            }
          }
          p {
            transition: 0.5s;
            transform: scale(1.033);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .self-employed {
    position: relative;
    background: rgba(243, 251, 249, 0.5);
    background-repeat: no-repeat;
    background-position: left top;
    width: 100%;
    padding: 800px 0 70px 0;

    // .self-employee-heading {
    // }
  }
}
</style>
