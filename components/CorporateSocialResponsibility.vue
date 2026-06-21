<template>
  <section class="csr-activities">
    <div class="container">
      <!-- Filter buttons -->
      <div class="filter-buttons">
        <button
          @click="filterCSR('All')"
          :class="{ active: currentFilter === 'All' }"
        >
          {{ $i18n.locale === "en" ? "All" : "সব" }}
        </button>

        <button
          v-for="tag in allTags"
          :key="tag.id"
          @click="filterCSR(tag.tag_code)"
          :class="{ active: currentFilter === tag.tag_code }"
        >
          {{ $i18n.locale === "en" ? tag.tags : tag.tags_bangla }}
        </button>
      </div>

      <!-- CSR activities cards -->
      <b-row v-if="filteredCSR.length > 0" align-h="center">
        <b-col
          v-for="singleCSR in filteredCSR"
          :key="singleCSR.id"
          lg="4"
          md="6"
        >
          <div
            class="csr-activities-card"
            :class="singleCSR.tag_code"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <div class="csr-activities-blogs" @click="openPopUp(singleCSR)">
              <a href="#popup">
                <div class="csr-activities-icons">
                  <img :src="singleCSR.image" :alt="singleCSR.title" />
                </div>
              </a>
              <div class="csr-activities-title">
                <h4 class="csr-activities-heading">
                  {{
                    $i18n.locale === "en" ? singleCSR.title : singleCSR.title_bn
                  }}
                </h4>
              </div>
              <div v-if="$i18n.locale == 'en'" class="box">
                <a class="button" @click="openPopUp(singleCSR)" href="#popup"
                  >Learn More
                  <svg
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.33 12.6925C25.2289 12.4317 25.0772 12.1933 24.8837 11.9912L14.2588 1.36625C14.0606 1.16812 13.8254 1.01095 13.5665 0.903721C13.3077 0.796493 13.0302 0.741302 12.75 0.741302C12.1841 0.741302 11.6414 0.966102 11.2412 1.36625C11.0431 1.56438 10.886 1.7996 10.7787 2.05847C10.6715 2.31734 10.6163 2.5948 10.6163 2.875C10.6163 3.44089 10.8411 3.9836 11.2412 4.38375L18.2538 11.375H2.125C1.56141 11.375 1.02091 11.5989 0.622398 11.9974C0.223884 12.3959 0 12.9364 0 13.5C0 14.0636 0.223884 14.6041 0.622398 15.0026C1.02091 15.4011 1.56141 15.625 2.125 15.625H18.2538L11.2412 22.6162C11.0421 22.8138 10.884 23.0488 10.7761 23.3078C10.6682 23.5667 10.6127 23.8445 10.6127 24.125C10.6127 24.4055 10.6682 24.6833 10.7761 24.9422C10.884 25.2012 11.0421 25.4362 11.2412 25.6337C11.4388 25.8329 11.6738 25.991 11.9328 26.0989C12.1917 26.2068 12.4695 26.2623 12.75 26.2623C13.0305 26.2623 13.3083 26.2068 13.5672 26.0989C13.8262 25.991 14.0612 25.8329 14.2588 25.6337L24.8837 15.0087C25.0772 14.8067 25.2289 14.5683 25.33 14.3075C25.5425 13.7901 25.5425 13.2099 25.33 12.6925Z"
                      fill="#ED017F"
                    />
                  </svg>
                </a>
              </div>
              <div v-if="$i18n.locale == 'bn'" class="box">
                <a class="button" @click="openPopUp(singleCSR)" href="#popup"
                  >আরও জানুন
                  <svg
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.33 12.6925C25.2289 12.4317 25.0772 12.1933 24.8837 11.9912L14.2588 1.36625C14.0606 1.16812 13.8254 1.01095 13.5665 0.903721C13.3077 0.796493 13.0302 0.741302 12.75 0.741302C12.1841 0.741302 11.6414 0.966102 11.2412 1.36625C11.0431 1.56438 10.886 1.7996 10.7787 2.05847C10.6715 2.31734 10.6163 2.5948 10.6163 2.875C10.6163 3.44089 10.8411 3.9836 11.2412 4.38375L18.2538 11.375H2.125C1.56141 11.375 1.02091 11.5989 0.622398 11.9974C0.223884 12.3959 0 12.9364 0 13.5C0 14.0636 0.223884 14.6041 0.622398 15.0026C1.02091 15.4011 1.56141 15.625 2.125 15.625H18.2538L11.2412 22.6162C11.0421 22.8138 10.884 23.0488 10.7761 23.3078C10.6682 23.5667 10.6127 23.8445 10.6127 24.125C10.6127 24.4055 10.6682 24.6833 10.7761 24.9422C10.884 25.2012 11.0421 25.4362 11.2412 25.6337C11.4388 25.8329 11.6738 25.991 11.9328 26.0989C12.1917 26.2068 12.4695 26.2623 12.75 26.2623C13.0305 26.2623 13.3083 26.2068 13.5672 26.0989C13.8262 25.991 14.0612 25.8329 14.2588 25.6337L24.8837 15.0087C25.0772 14.8067 25.2289 14.5683 25.33 14.3075C25.5425 13.7901 25.5425 13.2099 25.33 12.6925Z"
                      fill="#ED017F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>

    <!-- Popup section -->
    <div>
      <div id="popup" class="overlay" v-if="isShow">
        <div class="popup">
          <div class="close-button">
            <h4 class="popup-CSR-heading">
              {{ $i18n.locale === "en" ? popUpCSR.title : popUpCSR.title_bn }}
            </h4>
            <a class="close" @click="closePopUp()">&times;</a>
          </div>
          <div class="CSRs-icon">
            <img :src="popUpCSR.image" :alt="popUpCSR.title" />
          </div>
          <div
            class="content"
            v-if="$i18n.locale == 'en'"
            v-html="popUpCSR.description"
          ></div>
          <div
            class="content"
            v-if="$i18n.locale == 'bn'"
            v-html="popUpCSR.description_bn"
          ></div>
          <div
            v-if="$i18n.locale === 'en'"
            class="close-button footer-button"
            @click="closePopUp()"
          >
            <a class="second-close"> Close </a>
          </div>
          <div
            v-if="$i18n.locale === 'bn'"
            class="close-button footer-button"
            @click="closePopUp()"
          >
            <a class="second-close"> বন্ধ করুন</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    allTags: {
      type: Array,
      default() {
        return [
          {
            id: 2,
            tag_code: "education",
            tags: "EDUCATION",
            tags_bangla: "শিক্ষা",
            deleted_at: null,
            created_at: "2024-07-10 13:38:51",
            updated_at: "2024-07-10 13:38:51",
          },
          {
            id: 3,
            tag_code: "well_being",
            tags: "WELL-BEING",
            tags_bangla: "কল্যাণ",
            deleted_at: null,
            created_at: "2024-07-10 13:38:58",
            updated_at: "2024-07-10 13:38:58",
          },
          {
            id: 4,
            tag_code: "cultural",
            tags: "CULTURAL",
            tags_bangla: "সাংস্কৃতিক",
            deleted_at: null,
            created_at: "2024-07-10 13:39:05",
            updated_at: "2024-07-10 13:39:05",
          },
          {
            id: 5,
            tag_code: "emergencies",
            tags: "EMERGENCIES",
            tags_bangla: "জরুরী",
            deleted_at: null,
            created_at: "2024-07-10 13:39:13",
            updated_at: "2024-07-10 13:39:13",
          },
          {
            id: 6,
            tag_code: "recreation",
            tags: "RECREATION",
            tags_bangla: "বিনোদন",
            deleted_at: null,
            created_at: "2024-07-10 13:39:20",
            updated_at: "2024-07-10 13:39:20",
          },
          {
            id: 7,
            tag_code: "health",
            tags: "HEALTH",
            tags_bangla: "স্বাস্থ্য",
            deleted_at: null,
            created_at: "2024-07-10 13:39:26",
            updated_at: "2024-07-10 13:39:26",
          },
          {
            id: 8,
            tag_code: "sanitation",
            tags: "SANITATION",
            tags_bangla: "স্বাস্থ্যব্যবস্থা",
            deleted_at: null,
            created_at: "2024-07-10 13:39:33",
            updated_at: "2024-07-10 13:39:33",
          },
          {
            id: 9,
            tag_code: "environment",
            tags: "ENVIRONMENT",
            tags_bangla: "পরিবেশ",
            deleted_at: null,
            created_at: "2024-07-10 13:39:39",
            updated_at: "2024-07-10 13:39:39",
          },
        ];
      },
    },
    allCSR: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      filteredCSR: [],
      currentFilter: "All",
      isShow: false,
      popUpCSR: null,
    };
  },

  methods: {
    openPopUp(singleCSR) {
      this.isShow = true;
      this.popUpCSR = singleCSR;
    },

    closePopUp() {
      this.isShow = false;
    },
    filterCSR(category) {
      if (category === "All") {
        this.filteredCSR = this.allCSR; // Show all CSR activities
      } else {
        this.filteredCSR = this.allCSR.filter((singleCSR) =>
          singleCSR.tag_code.includes(category)
        );
      }
      this.currentFilter = category; // Update current filter
    },
  },
  mounted() {
    if (this.allCSR.length > 0) {
      this.filteredCSR = this.allCSR;
    } else {
      // Provide a fallback or log a message if no CSR data is available
      console.log("No CSR activities available");
    }
    // Initially show all CSR activities
    // this.filteredCSR = this.allCSR;
  },
};
</script>

<style lang="scss" scoped>
.csr-activities {
  padding: 94px 0;

  .filter-buttons {
    text-align: center;
    margin-bottom: 20px;
  }

  .filter-buttons button {
    margin-right: 10px;
    padding: 5px 5px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px 0;
    cursor: pointer;
    &:hover {
      background-color: #ed017faa;
      color: white;
      border-color: #ed017f;
    }
  }

  .filter-buttons button.active {
    background-color: #ed017f;
    color: white;
    border-color: #ed017f;
  }

  .csr-activities-card {
    padding: 0 0 60px 0;
    // height: 100%;

    .csr-activities-blogs {
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: center;
      text-align: center;
      padding-bottom: 32px;
      height: 100%;
      background: #ffffff;
      box-shadow: 2.98772px 2.98772px 43.3219px rgba(0, 0, 0, 0.07);
      border-radius: 8px;
      position: relative;
      .csr-activities-icons {
        // height: 140px;
        margin-bottom: 20px;
        img {
          width: auto;
          height: 280px;
          object-fit: cover;
        }
      }
      .csr-activities-title {
        .csr-activities-heading {
          font-weight: bold;
          font-size: 20px;
          line-height: 127.27%;
          color: #343434;
          min-height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .font-bn & {
            font-size: 25px;
          }
        }

        .csr-activities-description {
          font-size: 16px;
          line-height: 154.3%;
          color: #858585;
          padding-top: 14px;
          padding-bottom: 39px;
          max-height: 145px;
          display: none;
          .font-bn & {
            font-size: 21px;
          }
        }
      }
      .box {
        padding: 10px 0;
        .button {
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          line-height: 100%;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ed017f;
          cursor: pointer;
          transition: all 0.3s ease-out;
          position: absolute;
          bottom: 15px;
          transform: translate(-50%);
          .font-bn & {
            font-size: 19px;
          }
          svg {
            width: 16px;
            height: 14px;
            margin: -6px 0 0 5px;
          }
          &:hover {
            color: #f70385d8;
            font-size: 15px;
            .font-bn & {
              font-size: 20px;
            }
          }
        }
      }
      &:hover {
        .csr-activities-icons {
          transition: 0.3s;
          transform: scale(1.05);
        }
        .box {
          .button {
            svg {
              animation: move 0.4s infinite linear alternate;
            }
          }
        }
      }
    }
  }
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  z-index: 1000;

  &:target {
    visibility: visible;
    opacity: 1;
  }

  .popup {
    margin: 5vh auto;
    // padding: 20px;
    background: #fff;
    border-radius: 10px 10px 0 0;
    width: 60vw;
    max-height: 80vh;
    position: relative;
    transition: all 5s ease-in-out;

    h2 {
      margin-top: 0;
      color: #333;
    }

    .close-button {
      width: 100%;
      height: 40px;
      background: rgb(204, 199, 199);
      border-radius: 10px 10px 0 0;
      .close {
        position: absolute;
        top: 10px;
        right: 30px;
        transition: all 200ms;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #333;
        cursor: pointer;
        .font-bn & {
          font-size: 35px;
        }
        &:hover {
          color: #d80681;
        }
      }
    }

    .footer-button {
      position: relative;
      background: #df4ba1;
      border-radius: 0 0 10px 10px;
      cursor: pointer;
      &:hover {
        background: #c03084;
      }
      .second-close {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%);
        text-decoration: none;
        color: #ffffff;
        font-size: 14px;
        .font-bn & {
          font-size: 19px;
        }
      }
    }
    .CSRs-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgb(182, 179, 179);
      margin: 30px 30px 0 30px;
      img {
        // width: 150px;
        height: 300px;
      }
    }

    .content {
      overflow-y: scroll;
      max-height: 19vh;
      padding: 20px 30px;
    }
  }
}
@keyframes move {
  0% {
    transform: translate(-4px);
  }
  100% {
    transform: translate(4px);
  }
}

@media screen and (max-width: 1024px) {
  .csr-activities {
    .csr-activities-card {
      .csr-activities-blogs {
        height: unset;
        .csr-activities-icons {
          img {
            width: 290px;
            height: 158px;
          }
        }
        .csr-activities-title {
          .csr-activities-heading {
            min-height: 150px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .overlay {
    &:target {
      visibility: visible;
      opacity: 1;
      height: 100vh;
      overflow: auto;
    }

    .popup {
      width: 96%;
      // height: 80%;
      overflow: auto;

      h2 {
        margin-top: 0;
        color: #333;
      }

      .content {
        padding: 20px 20px;
        min-height: 70%;
      }
    }
  }
}
</style>
