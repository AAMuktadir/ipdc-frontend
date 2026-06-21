<template>
  <section
    class="employed"
    :style="{
      backgroundImage: `url(${backgroundImage.image_url})`,
    }"
  >
    <b-container>
      <b-row>
        <b-col md="6">
          <div class="employee-heading">
            <h1 v-if="title" class="employee-heading-title">
              {{ $i18n.locale == "en" ? title.title : title.title_bangla }}
            </h1>
            <div v-if="employed.length > 0" class="employee-documents">
              <div
                v-for="singleForEmployed in employed"
                :key="singleForEmployed.id"
                class="employee-documents-detail"
              >
                <div class="employee-documents">
                  <img
                    v-if="singleForEmployed.icon"
                    :src="singleForEmployed.icon"
                    alt="icon"
                  />
                  <img
                    v-else
                    src="~assets/image/icon/Documents.svg"
                    alt="icon"
                  />
                </div>
                <p>
                  {{
                    $i18n.locale == "en"
                      ? singleForEmployed.title
                      : singleForEmployed.title_bangla
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
    employed: {
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
      section: "Middle",
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
.employed {
  position: relative;
  background: rgba(243, 251, 249, 0.5);
  padding: 80px 0 150px 0;
  background-repeat: no-repeat;
  background-position: right center;
  // background-size: 40% 100%;
  .employee-heading {
    .employee-heading-title {
      font-weight: bold;
      font-size: 30px;
      line-height: 133%;
      color: #343434;
      margin-bottom: 34px;
      .font-bn & {
        font-size: 35px;
      }
    }
    .employee-documents {
      &-detail {
        display: flex;
        align-items: center;
        gap: 20px;
        position: relative;
        padding: 27px 30px 27px 40px;
        border: 1px solid #e7e7e7;
        background: #ffffff;
        p {
          font-weight: normal;
          font-size: 18px;
          line-height: 122.22%;
          color: #343434;
          .font-bn & {
            font-size: 23px;
          }
        }

        .employee-documents {
          img {
            max-width: 24px;
            height: 30px;
          }
        }

        &:first-child {
          border-radius: 8px 8px 0 0;
        }
        &:last-child {
          border-radius: 0 0 8px 8px;
        }

        &:hover {
          background: #f7f5f5;

          .employee-documents {
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
  .employed {
    position: relative;
    background: rgba(243, 251, 249, 0.5);
    background-repeat: no-repeat;
    background-position: left top;
    width: 100%;
    padding: 700px 0 70px 0;

    // .employee-heading {
    // }
  }
}
</style>
