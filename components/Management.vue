<template>
  <section
    v-if="allDirectors.length > 0 && allManagements.length > 0"
    class="directors-management"
  >
    <b-tabs>
      <b-tab active @click="handleTab('directors')">
        <template #title>
          {{ $i18n.locale == "en" ? "Board Of Directors" : "পরিচালনা পরিষদ" }}
        </template>
        <div
          v-if="singleDirector"
          class="directors-section"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div class="director-details">
            <h1>
              {{
                $i18n.locale == "en"
                  ? singleDirector.name
                  : singleDirector.name_bangla
              }}
            </h1>
            <div
              v-if="$i18n.locale == 'en'"
              v-html="singleDirector.description"
            />
            <div
              v-if="$i18n.locale == 'bn'"
              v-html="singleDirector.description_bangla"
            />
          </div>
          <div class="director-image">
            <img :src="singleDirector.image" alt="" />
          </div>
        </div>

        <div v-if="allDirectors.length > 0" class="directors-slider">
          <client-only>
            <carousel
              :nav="false"
              :dots="true"
              :loop="true"
              :autoplay="true"
              :responsive="{
                0: { items: 1, nav: true },
                600: { items: 4, nav: true },
              }"
              @click.native="handleCarouselClick($event, 'director')"
            >
              <a
                v-for="singleDirector in allDirectors"
                :key="singleDirector.id"
                :data-id="singleDirector.id"
                class="director-click-handler"
              >
                <div class="directors-slide">
                  <div class="directors-image">
                    <img
                      class="director-slide-image"
                      :src="singleDirector.image"
                    />
                    <div class="directors-title">
                      <div class="directors-name">
                        <h5>
                          {{
                            $i18n.locale == "en"
                              ? singleDirector.name
                              : singleDirector.name_bangla
                          }}
                        </h5>
                        <p>
                          {{
                            $i18n.locale == "en"
                              ? singleDirector.designation
                              : singleDirector.designation_bangla
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </carousel>
          </client-only>
        </div>
      </b-tab>

      <b-tab @click="handleTab('management')">
        <template #title>
          {{ $i18n.locale == "en" ? "Management Team" : "ব্যবস্থাপনা দল" }}
        </template>
        <div v-if="singleManagement" class="directors-section">
          <div class="director-details">
            <h1>
              {{
                $i18n.locale == "en"
                  ? singleManagement.name
                  : singleManagement.name_bangla
              }}
            </h1>
            <div
              v-if="$i18n.locale == 'en'"
              v-html="singleManagement.description"
            />
            <div
              v-if="$i18n.locale == 'bn'"
              v-html="singleManagement.description_bangla"
            />
          </div>
          <div class="director-image">
            <img :src="singleManagement.image" alt="" />
          </div>
        </div>

        <div v-if="allManagements.length > 0" class="directors-slider">
          <client-only>
            <carousel
              :nav="false"
              :dots="true"
              :loop="true"
              :autoplay="true"
              :responsive="{
                0: { items: 1, nav: true },
                600: { items: 4, nav: true },
              }"
              @click.native="handleCarouselClick($event, 'management')"
            >
              <a
                v-for="singleManagement in allManagements"
                :key="singleManagement.id"
                :data-id="singleManagement.id"
                class="director-click-handler"
              >
                <div class="directors-slide">
                  <div class="directors-image">
                    <img
                      class="director-slide-image"
                      :src="singleManagement.image"
                    />
                    <div class="directors-title">
                      <div class="directors-name">
                        <h5>
                          {{
                            $i18n.locale == "en"
                              ? singleManagement.name
                              : singleManagement.name_bangla
                          }}
                        </h5>
                        <p>
                          {{
                            $i18n.locale == "en"
                              ? singleManagement.designation
                              : singleManagement.designation_bangla
                          }}
                        </p>
                      </div>
                      <!-- <a href="#"
                        ><img src="~assets/image/rightarrow.png" alt=""
                      /></a> -->
                    </div>
                  </div>
                </div>
              </a>
            </carousel>
          </client-only>
        </div>
      </b-tab>
    </b-tabs>
  </section>
</template>

<script>
export default {
  props: {
    allDirectors: {
      type: Array,
      default: null,
    },
    allManagements: {
      type: Array,
      default: null,
    },
    defaultOpenDirector: {
      type: Object,
      default: null,
    },
    defaultOPenManagement: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      singleDirector: {},
      singleManagement: {},
      firstLoad: false,
    };
  },
  updated() {
    if (!this.firstLoad) {
      this.singleDirectorData(this.defaultOpenDirector.id);
      this.populateSingleManagementData(this.defaultOPenManagement.id);
      this.firstLoad = true;
    }
  },
  methods: {
    async singleDirectorData(singleId) {
      const response = await this.$axios.get(
        "/get-single-management/" + singleId
      );
      this.singleDirector = response.data.data;
    },

    async populateSingleManagementData(singleManagementId) {
      const response = await this.$axios.get(
        "/get-single-management/" + singleManagementId
      );
      this.singleManagement = response.data.data;
    },

    async handleSingleDirectorData(singleId) {
      console.log("clicked: " + singleId);
      const response = await this.$axios.get(
        "/get-single-management/" + singleId
      );
      this.singleDirector = response.data.data;
      this.singleManagement = response.data.data;
      window.scrollTo({
        top: 700,
        left: 0,
        behavior: "smooth",
      });
    },

    handleTab(tabName) {
      if (tabName === "directors") {
        this.singleDirectorData(this.allDirectors[0].id);
      } else {
        this.populateSingleManagementData(this.allManagements[0].id);
      }
    },

    handleCarouselClick(event, type) {
      // Find the closest anchor tag with our specific class
      const target = event.target.closest(".director-click-handler");

      if (target) {
        const id = target.getAttribute("data-id");
        if (id) {
          this.handleSingleDirectorData(id);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.directors-management {
  position: relative;

  .directors-section {
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 86px 0 116px 0;

    .director-details {
      padding: 60px 100px 100px 100px;
      flex-basis: 60%;
      margin-left: 60px;
      h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 133%;
        color: #343434;
        margin-bottom: 19px;
        .font-bn & {
          font-size: 41px;
        }
      }
      p {
        font-size: 16px;
        line-height: 154.3%;
        color: #858585;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 14;
        line-clamp: 14;
        -webkit-box-orient: vertical;
        margin-bottom: 19px;
        padding: 0 80px 0 0;
        .font-bn & {
          font-size: 21px;
        }
      }
      h3 {
        font-size: 30px;
        font-weight: bold;
        line-height: 133%;
        color: #343434;
        margin-bottom: 19px;
        .font-bn & {
          font-size: 35px;
        }
      }
      ol {
        padding: 0 0 0 15px;
        li {
          font-weight: normal;
          font-size: 16px;
          line-height: 193.75%;
          color: #5d5d5d;
          list-style-type: decimal;
          .font-bn & {
            font-size: 21px;
          }
        }
      }
    }
    .director-image {
      flex-basis: 45%;
      position: relative;
      z-index: 1;
      img {
        width: 100%;
        border-radius: 20px 0px 0px 20px;
      }
      &::before {
        content: "";
        position: absolute;
        top: 20px;
        left: -20px;
        background: #fde1f0;
        background-repeat: no-repeat;
        background-size: auto 100%;
        width: 150%;
        height: 100%;
        border-radius: 20px 0px 0px 20px;
        z-index: -1;
      }
    }
  }
  .directors-slider {
    background: linear-gradient(
      0deg,
      rgba(253, 225, 240, 0.2),
      rgba(253, 225, 240, 0.2)
    );
    padding: 75px 0;
    width: 100vw;

    .owl-stage-outer {
      padding-bottom: 30px;
    }

    .directors-slide {
      position: relative;
      margin-right: 20px;
      cursor: pointer;
      .directors-image {
        .director-slide-image {
          // width: 357px;
          // height: 357px;
          border-radius: 14px;
          justify-self: center;
        }
        .directors-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            180deg,
            rgba(196, 196, 196, 0) 0%,
            rgba(148, 148, 148, 0) 0%,
            #000000 100%
          );
          display: flex;
          justify-content: space-between;
          padding: 10px;
          border-radius: 14px;
          min-height: 100px;
          .directors-name {
            // max-width: 238px;
            h5 {
              font-weight: bold;
              font-size: 20px;
              color: #ffffff;
              .font-bn & {
                font-size: 25px;
              }
            }
            p {
              font-size: 14px;
              line-height: 137.1%;
              letter-spacing: 0.02em;
              color: #ffffff;
              .font-bn & {
                font-size: 19px;
              }
            }
          }
          a {
            width: 30px;
            height: 30px;
            background: rgba(255, 255, 255, 0.3);
            mix-blend-mode: normal;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              filter: brightness(0) invert(1);
              width: 10px;
              height: 10px;
            }
            &:hover {
              background: rgba(151, 146, 146, 0.5);
            }
          }
        }
        &:hover {
          transition: 0.3s;
          transform: scale(0.96);
          a {
            animation: move 0.4s infinite linear alternate;
          }
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
  .directors-management {
    position: relative;

    .tab-pane {
      display: flex;
      flex-direction: column-reverse;
    }

    .directors-section {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 86px 0 60px 0;

      .director-details {
        padding: 60px 10px 100px 10px;
        margin-left: 40px;
        order: 2;
        // h1 {
        // }
        // p {
        // }
        // h3 {
        // }
        ol {
          padding: 0 0 0 15px;
          li {
            font-weight: normal;
            font-size: 16px;
            line-height: 193.75%;
            color: #5d5d5d;
            list-style-type: decimal;
            .font-bn & {
              font-size: 21px;
            }
          }
        }
      }
      .director-image {
        flex-basis: 100%;
        order: 1;
        img {
          width: unset;
        }
        &::before {
          content: "";
          position: absolute;
          top: 20px;
          left: -10px;
        }
      }
    }
    .directors-slider {
      padding: 75px 0;
      .directors-slide {
        .directors-image {
          .director-slide-image {
            width: 100%;
          }
          .directors-title {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .directors-management {
    position: relative;

    .tab-pane {
      display: flex;
      flex-direction: column-reverse;
    }

    .directors-section {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 86px 0 60px 0;

      .director-details {
        padding: 60px 10px 100px 10px;
        margin-left: 40px;
        order: 2;
        // h1 {
        // }
        // p {
        // }
        // h3 {
        // }
        ol {
          padding: 0 0 0 15px;
          li {
            font-weight: normal;
            font-size: 16px;
            line-height: 193.75%;
            color: #5d5d5d;
            list-style-type: decimal;
            .font-bn & {
              font-size: 21px;
            }
          }
        }
      }
      .director-image {
        flex-basis: 100%;
        order: 1;
        img {
          width: unset;
        }
        &::before {
          content: "";
          position: absolute;
          top: 20px;
          left: -10px;
        }
      }
    }
    .directors-slider {
      padding: 70px 0;
      .directors-slide {
        .directors-image {
          .director-slide-image {
            width: 100%;
          }
          .directors-title {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }
      }
    }
  }
}
</style>
