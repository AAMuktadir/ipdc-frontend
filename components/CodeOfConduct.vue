<template>
  <section class="code-of-conduct">
    <div class="container">
      <div
        v-if="$i18n.locale == 'en'"
        class="code-of-conduct-title"
        ref="tab-head"
      >
        <h1 class="conduct-heading">
          Code of Conduct for Chairman, Board Members & Cheif Executive Officer
        </h1>
        <p class="conduct-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </p>
      </div>
      <div v-if="$i18n.locale == 'bn'" class="code-of-conduct-title">
        <h1 class="conduct-heading">
          চেয়ারম্যান, বোর্ড সদস্য এবং প্রধান নির্বাহী কর্মকর্তার আচরণবিধি
        </h1>
        <p class="conduct-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </p>
      </div>
      <div>
        <b-card v-if="codeOfConduct.length > 0" no-body>
          <b-tabs
            v-model="currentTab"
            pills
            card
            vertical
            nav-wrapper-class="col-6"
          >
            <b-tab
              v-for="(singleItem, index) in codeOfConduct"
              :key="singleItem.id"
              :title="
                $i18n.locale == 'en'
                  ? singleItem.tab_name
                  : singleItem.tab_name_bangla
              "
              :class="currentTab === index ? 'active' : ''"
              @click="scrollToContent()"
            >
              <b-card-text>
                <div class="right-share-information">
                  <a
                    :href="childItem.file_url"
                    target="_blank"
                    v-for="childItem in codeOfConduct[index].conduct"
                    :key="childItem.id"
                    class="right-share-documents"
                  >
                    <h5>
                      {{
                        $i18n.locale == "en"
                          ? childItem.title
                          : childItem.title_bangla
                      }}
                    </h5>
                    <a :href="childItem.file_url" target="_blank">
                      <img src="~/assets/image/rightarrow.png" alt="Arrow" />
                    </a>
                  </a>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      schemeId: null,
      codeOfConduct: [],
      conduct: [],
      currentTab: 0,
    };
  },
  async mounted() {
    await this.getCodeOfConduct();
    this.setTabFromURL();
  },
  methods: {
    scrollToContent() {
      this.$nextTick(() => {
        const contentElement = this.$refs["tab-head"];
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
    async getCodeOfConduct() {
      try {
        const response = await this.$axios.get("get-code-of-conduct");
        this.codeOfConduct = response.data.data.codeOfConduct;
      } catch (error) {
        console.log("Error fetching getCodeOfConduct:", error);
      }
    },
    setTabFromURL() {
      // Check for the "tab" query parameter and set the correct tab if it matches
      const urlParams = new URLSearchParams(window.location.search);
      const tabName = urlParams.get("tab");

      if (tabName) {
        const targetIndex = this.codeOfConduct.findIndex(
          (item) =>
            item.tab_name.toLowerCase().replace(/\s+/g, "") ===
            tabName.toLowerCase().replace(/\s+/g, "")
        );
        if (targetIndex !== -1) {
          this.currentTab = targetIndex;
          this.scrollToContent();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.code-of-conduct {
  padding: 80px 0 50px 0;
  &-title {
    text-align: center;
    padding-bottom: 55px;
    .conduct-heading {
      font-weight: bold;
      font-size: 36px;
      line-height: 119.44%;
      color: #343434;
      .font-bn & {
        font-size: 40px;
      }
    }
    .conduct-description {
      font-size: 16px;
      line-height: 137.5%;
      color: #999999;
      padding: 18px 220px;
      display: none;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .right-share-information {
    // padding: 20px 0 0 10px;
    height: 800px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 15px;
    }

    &::-webkit-scrollbar-track {
      background: -webkit-gradient(
        linear,
        left top,
        right bottom,
        from(#e6a5c7),
        to(#d132a177)
      );
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 30px;
      background: -webkit-gradient(
        linear,
        left top,
        right bottom,
        from(#ed017f),
        to(#d132d175)
      );
    }
    .right-share-documents {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0 15px 60px;
      border: 1px solid #e7e7e7;
      background: #ffffff;
      text-decoration: none;

      h5 {
        font-size: 15px;
        line-height: 149.3%;
        color: #343434;
        .font-bn & {
          font-size: 20px;
        }
      }

      a {
        width: 20px;
        height: 20px;
        background: rgb(173, 205, 241);
        mix-blend-mode: normal;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -5px 20px 0 0;
        // animation: move 0.4s infinite linear alternate;
        img {
          filter: sepia(100%) hue-rotate(190deg) saturate(500%);
          width: 6px;
          height: 8px;
        }
        &:hover {
          background: rgb(151, 188, 229);
          transition: 0.3s;
          transform: scale(1.2);
        }
      }

      &::before {
        content: "";
        position: absolute;
        left: 30px;
        background-image: url("~assets/image/icon/bankingreport.png");
        background-repeat: no-repeat;
        width: 23px;
        height: 29px;
      }

      &:first-child {
        border-radius: 10px 10px 0 0;
      }
      &:last-child {
        border-radius: 0 0 10px 10px;
      }
      &:hover {
        h5 {
          transition: 0.3s;
          transform: scale(1.01);
        }
        a {
          animation: move 0.4s infinite linear alternate;
        }
        &::before {
          transition: 0.2s;
          transform: scale(1.1);
        }
      }
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
  .code-of-conduct {
    padding: 80px 0 50px 0;
    &-title {
      padding-bottom: 35px;
      .conduct-heading {
        font-size: 25px;
        line-height: 133%;
        .font-bn & {
          font-size: 30px;
        }
      }
      .conduct-description {
        padding: 15px 0;
      }
    }

    .right-share-information {
      padding: 20px 0 0 0;
      .right-share-documents {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 0 24px 63px;
        border: 1px solid #e7e7e7;
        background: #ffffff;

        h5 {
          font-size: 15px;
          line-height: 149.3%;
          color: #343434;
          .font-bn & {
            font-size: 20px;
          }
        }

        a {
          width: 20px;
          height: 20px;
          background: rgb(173, 205, 241);
          mix-blend-mode: normal;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: -5px 20px 0 0;
          img {
            filter: sepia(100%) hue-rotate(190deg) saturate(500%);
            width: 6px;
            height: 8px;
          }
        }

        &::before {
          content: "";
          position: absolute;
          left: 30px;
          background-image: url("~assets/image/icon/bankingreport.png");
          background-repeat: no-repeat;
          width: 23px;
          height: 29px;
        }

        &:first-child {
          border-radius: 10px 10px 0 0;
        }
        &:last-child {
          border-radius: 0 0 10px 10px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .code-of-conduct {
    padding: 80px 0 50px 0;
    &-title {
      padding-bottom: 35px;
      .conduct-heading {
        font-size: 25px;
        line-height: 133%;
        .font-bn & {
          font-size: 30px;
        }
      }
      .conduct-description {
        padding: 15px 0;
      }
    }

    .right-share-information {
      padding: 20px 0 0 0;
      .right-share-documents {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 0 24px 63px;
        border: 1px solid #e7e7e7;
        background: #ffffff;

        h5 {
          font-size: 15px;
          line-height: 149.3%;
          color: #343434;
          max-width: 220px;
          .font-bn & {
            font-size: 20px;
          }
        }

        a {
          width: 20px;
          height: 20px;
          background: rgb(173, 205, 241);
          mix-blend-mode: normal;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: -5px 20px 0 0;
          img {
            filter: sepia(100%) hue-rotate(190deg) saturate(500%);
            width: 6px;
            height: 8px;
          }
        }

        &::before {
          content: "";
          position: absolute;
          left: 30px;
          background-image: url("~assets/image/icon/bankingreport.png");
          background-repeat: no-repeat;
          width: 23px;
          height: 29px;
        }

        &:first-child {
          border-radius: 10px 10px 0 0;
        }
        &:last-child {
          border-radius: 0 0 10px 10px;
        }
      }
    }
  }
}
</style>
