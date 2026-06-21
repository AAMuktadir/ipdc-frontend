<template>
  <section v-if="allAwards.length > 0" class="ipdc-awards">
    <div
      v-if="singleAward"
      class="awards-section"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div class="awards-details">
        <h1>
          {{
            $i18n.locale == "en" ? singleAward.title : singleAward.title_bangla
          }}
        </h1>
        <div v-if="$i18n.locale == 'en'" v-html="singleAward.description" />
        <div
          v-if="$i18n.locale == 'bn'"
          v-html="singleAward.description_bangla"
        />
      </div>
      <div class="awards-image">
        <img :src="singleAward.image" alt="" />
      </div>
    </div>

    <div v-if="allAwards.length > 0" class="awards-slider">
      <client-only>
        <carousel
          :nav="true"
          :dots="true"
          :autoplay="false"
          :loop="true"
          :responsive="{
            0: { items: 1, nav: true },
            600: { items: 4, nav: true },
          }"
        >
          <a
            v-for="singleAward in allAwards"
            :key="singleAward.id"
            @click="handleSingleAwardData(singleAward.id)"
          >
            <div class="directors-slide">
              <div class="directors-image">
                <img class="director-slide-image" :src="singleAward.image" />
                <div class="directors-title">
                  <div class="directors-name">
                    <h5>
                      {{
                        $i18n.locale == "en"
                          ? singleAward.title
                          : singleAward.title_bangla
                      }}
                    </h5>
                  </div>
                  <a><img src="~assets/image/rightarrow.png" alt="" /></a>
                </div>
              </div>
            </div>
          </a>
        </carousel>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    allAwards: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      singleAward: {},
      firstLoad: false,
    };
  },
  updated() {
    if (!this.firstLoad) {
      this.singleDirectorData(this.defaultOpenDirector.id);
      this.firstLoad = true;
    }
  },
  created() {
    console.log(this.allAwards);
  },
  methods: {
    handleSingleAwardData(singleId) {
      // Find the award in this.allAwards with matching id
      const award = this.allAwards.find((item) => item.id === singleId);

      // Set the found award to singleAward
      this.singleAward = award || null;

      window.scrollTo({
        top: 700,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ipdc-awards {
  position: relative;

  .awards-section {
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 86px 0 116px 0;

    .awards-details {
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
    .awards-image {
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
  .awards-slider {
    background: linear-gradient(
      0deg,
      rgba(253, 225, 240, 0.2),
      rgba(253, 225, 240, 0.2)
    );
    padding: 150px 0 150px 150px;
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
            max-width: 238px;
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
  .ipdc-awards {
    position: relative;

    .tab-pane {
      display: flex;
      flex-direction: column-reverse;
    }

    .awards-section {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 86px 0 60px 0;

      .awards-details {
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
      .awards-image {
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
    .awards-slider {
      padding: 150px 0 150px 20px;
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
            // .directors-name {
            //   h5 {
            //   }
            //   p {
            //   }
            // }
            // a {
            //   img {
            //   }
            //   &:hover {
            //   }
            // }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .ipdc-awards {
    position: relative;

    .tab-pane {
      display: flex;
      flex-direction: column-reverse;
    }

    .awards-section {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 86px 0 60px 0;

      .awards-details {
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
      .awards-image {
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
    .awards-slider {
      padding: 150px 0 150px 20px;
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
            // .directors-name {
            //   h5 {
            //   }
            //   p {
            //   }
            // }
            // a {
            //   img {
            //   }
            //   &:hover {
            //   }
            // }
          }
        }
      }
    }
  }
}
</style>
