<template>
  <section class="ipdc-branch" id="ipdcBranch">
    <div class="container">
      <div v-if="heading" class="branches-heading">
        <h1 class="branches-heading-title">
          {{ $i18n.locale == "en" ? heading.title : heading.title_bangla }}
        </h1>
        <p class="branches-heading-description">
          {{
            $i18n.locale == "en" ? heading.sub_title : heading.sub_title_bangla
          }}
        </p>
      </div>
      <div class="branches">
        <!-- <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.860208381906!2d90.41493131402385!3d23.787991793258307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1f4a72467%3A0xb8c81db7b2512f3b!2sIPDC%20Finance!5e0!3m2!1sen!2sbd!4v1679294653486!5m2!1sen!2sbd" width="664" height="664" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </div> -->
        <b-row>
          <b-col md="12">
            <div class="all-branches">
              <ul class="branches-card" v-if="branches.length > 0">
                <li
                  class="branch-list"
                  :class="branch.id == activeBranchId ? 'branch-active' : ''"
                  @click="changeBranch(branch)"
                  v-for="branch in branches"
                  :key="branch.id"
                >
                  <img src="~/assets/image/icon/building.png" alt="Building" />
                  <div class="office-title">
                    <h5>
                      {{
                        $i18n.locale == "en" ? branch.name : branch.name_bangla
                      }}
                    </h5>
                    <p>
                      {{
                        $i18n.locale == "en"
                          ? branch.address
                          : branch.address_bangla
                      }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </b-col>
          <!-- <b-col md="6">
            <div class="office-map">
              <div
                class="map-image"
                ref="AIzaSyAOKBOqqNUXnbNR_YRC_DZoDMfWFlFu7bU"
              >
                <GmapMap
                  :center="center"
                  :zoom="zoom"
                  map-type-id="terrain"
                  style="width: 100%; height: 100%"
                >
                  <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="false"
                    @click="center = m.position"
                  />
                </GmapMap>
              </div>
              <div class="map-title" v-if="selectedBranch">
                <h4>
                  {{
                    $i18n.locale == "en"
                      ? selectedBranch.full_name
                      : selectedBranch.full_name_bangla
                  }}
                </h4>
                <h6>Hosna Center (4th Floor), 106 Gulshan Avenue, Dhaka - 1212</h6>
                <p>Fax: +(88-02) 55068930</p>
                <p>Phone: +(88) 09612885533, +(88-02) 55068931-36 , +(88) 09612316519</p>
                <p>
                  {{
                    $i18n.locale == "en"
                      ? selectedBranch.address
                      : selectedBranch.address_bangla
                  }}
                </p>
              </div>
            </div>
          </b-col> -->
        </b-row>
        <b-row class="office-location">
          <b-col md="12" style="text-align: center; padding: 20px">
            <h2>Location</h2>
          </b-col>
          <b-col md="12">
            <div class="office-map">
              <div class="map-title" v-if="selectedBranch">
                <h4>
                  {{
                    $i18n.locale == "en"
                      ? selectedBranch.full_name
                      : selectedBranch.full_name_bangla
                  }}
                </h4>
                <!-- <h6>Hosna Center (4th Floor), 106 Gulshan Avenue, Dhaka - 1212</h6>
                <p>Fax: +(88-02) 55068930</p>
                <p>Phone: +(88) 09612885533, +(88-02) 55068931-36 , +(88) 09612316519</p> -->
                <p>
                  {{
                    $i18n.locale == "en"
                      ? selectedBranch.address
                      : selectedBranch.address_bangla
                  }}
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      branches: [],
      center: {
        lat: 23,
        lng: 90,
      },
      selectedBranch: {},
      zoom: 12,
      markers: [
        {
          position: {
            lat: 23,
            lng: 90,
          },
        },
      ],
      activeBranchId: null,
      isFirstLoaded: false,
    };
  },
  created() {
    this.getMediaContent();
  },
  updated() {
    if (this.isFirstLoaded === false) {
      this.activeBranchId = this.selectedBranch.id;
      this.isFirstLoaded = true;
    }
  },
  methods: {
    changeBranch(branch) {
      this.center.lat = parseFloat(branch.lat);
      this.center.lng = parseFloat(branch.lng);
      this.selectedBranch = branch;
      this.activeBranchId = branch.id;
      this.zoom = 16;

      // Check if we are in the client environment
      if (process.client) {
        const element = document.querySelector(".office-location");
        if (element) {
          const offset = 100; // Scroll 100px above the element
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
        // if (window.screen.width >= 768) {
        //   window.scrollTo({
        //     top: 1200,
        //     left: 0,
        //     behavior: "smooth",
        //   });
        // } else {
        //   window.scrollTo({
        //     top: 3800,
        //     left: 0,
        //     behavior: "smooth",
        //   });
        // }
      }
    },
    async getMediaContent() {
      try {
        const response = await this.$axios.get(`/get-branches`);
        this.branches = response.data.data.branches;
        this.markers = response.data.data.markers;
        this.center.lat = parseFloat(response.data.data.branches[0].lat);
        this.center.lng = parseFloat(response.data.data.branches[0].lng);
        this.selectedBranch = response.data.data.branches[0];

        // Check if we are in the client environment
        if (process.client) {
          if (window.screen.width >= 768) {
            window.scrollTo({
              top: 1200,
              left: 0,
              behavior: "smooth",
            });
          } else {
            window.scrollTo({
              top: 2100,
              left: 0,
              behavior: "smooth",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching media content:", error);
      }
    },

    scrollToBranchTab() {},
  },
};
</script>

<style lang="scss" scoped>
.ipdc-branch {
  padding: 100px 0;

  .branches-heading {
    padding: 0 0 80px 0;

    &-title {
      text-align: center;
      display: block;
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }

    &-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 120px;
      text-align: center;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  .branches {
    border: 1px solid #e7e7e7;
    border-radius: 8px;

    .col-md-6 {
      padding: 0;
    }

    .all-branches {
      margin: -1px 0 0 0;

      .branches-card {
        list-style: none;
        padding: 0;
        margin-bottom: 0;
        display: flex;
        flex-wrap: wrap;
        .branch-list {
          position: relative;
          display: flex;
          align-items: center;
          border: 1px solid #e7e7e7;
          background: #ffffff;
          box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
          padding: 36px 21px 36px 40px;
          flex-basis: 50%;
          backdrop-filter: brightness(0);
          cursor: pointer;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background-image: linear-gradient(
              152.61deg,
              #e01280 -2.16%,
              #e60f81 37.81%,
              #e77575 87.08%
            );
            filter: brightness(0) invert(1);
            z-index: -1;
            transition: all 0.7s;
          }

          img {
            width: 47px;
            height: 47px;
          }

          .office-title {
            margin-left: 25px;

            h5 {
              font-weight: bold;
              font-size: 22px;
              line-height: 140.91%;
              color: #5d5d5d;
              .font-bn & {
                font-size: 27px;
              }
            }

            p {
              font-weight: 400;
              font-size: 16px;
              line-height: 100%;
              color: #858585;
              display: none;
              .font-bn & {
                font-size: 21px;
              }
            }
          }

          &:first-child {
            border-radius: 8px 0 0 0;
            overflow: hidden;
          }
          &:nth-child(5) {
            border-radius: 0 0 0 8px;
            overflow: hidden;
          }

          &:hover {
            &::before {
              filter: brightness(1) invert(0);
            }
            img {
              filter: brightness(0) invert(1);
            }
            .office-title {
              h5 {
                color: #ffffff;
              }

              p {
                color: #ffffff;
              }
            }
          }
          &.branch-active {
            &::before {
              filter: brightness(1) invert(0);
            }
            img {
              filter: brightness(0) invert(1);
            }
            .office-title {
              h5 {
                color: #ffffff;
              }

              p {
                color: #ffffff;
              }
            }
          }
        }
      }
    }

    .office-map {
      // position: relative;
      width: 100%;
      height: 100%;

      .map-image {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: right center;
        background-size: cover;
        border-radius: 0 8px 8px 0;
      }

      .map-title {
        // position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #ffffff;
        box-shadow: 4px 4px 58px rgba(0, 0, 0, 0.07);
        border-radius: 0 0 26px 26px;
        padding: 28px 0 40px 25px;

        h4 {
          font-weight: bold;
          font-size: 22px;
          line-height: 140.91%;
          color: #343434;
          margin-bottom: 8px;
          .font-bn & {
            font-size: 27px;
          }
        }

        h6 {
          font-size: 16px;
          line-height: 154.3%;
          color: #4d4949;
          .font-bn & {
            font-size: 21px;
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
    }
  }
}

@media screen and (max-width: 1024px) {
  .ipdc-branch {
    .branches {
      .all-branches {
        .branches-card {
          .branch-list {
            flex-basis: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .ipdc-branch {
    padding: 80px 0;

    .branches-heading {
      padding: 0 0 50px 0;

      // &-title {
      // }

      &-description {
        padding: 15px 0;
      }
    }

    .branches {
      border: 1px solid #e7e7e7;
      border-radius: 8px;

      .col-md-6 {
        padding: 0;
      }

      .all-branches {
        margin: -1px 0 0 0;

        .branches-card {
          .branch-list {
            flex-basis: 100%;

            &::before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              height: 100%;
              width: 100%;
              background-image: linear-gradient(
                152.61deg,
                #e01280 -2.16%,
                #e60f81 37.81%,
                #e77575 87.08%
              );
              filter: brightness(0) invert(1);
              z-index: -1;
              transition: all 0.7s;
            }

            img {
              width: 47px;
              height: 47px;
            }

            .office-title {
              margin-left: 25px;

              // h5 {
              // }

              // p {
              // }
            }

            &:first-child {
              border-radius: 8px 8px 0 0;
              overflow: hidden;
            }
            &:nth-child(5) {
              border-radius: 0;
              overflow: hidden;
            }
          }
        }
      }

      .office-map {
        height: 400px;
        margin-bottom: 207px;

        // .map-image {
        // }

        .map-title {
          position: absolute;
          bottom: -208px;
          left: 0;
          width: 100%;

          // h4 {
          // }

          // h6 {
          // }

          // p {
          // }
        }
      }
    }
  }
}
</style>
