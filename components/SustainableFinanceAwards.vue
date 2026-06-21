<template>
  <section class="sus-fin-awards">
    <div class="heading">
      <h1
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        Awards on Sustainability
      </h1>
    </div>
    <div class="sus-fin-awards-main">
      <b-row class="main-awards">
        <b-col>
          <div>
            <div
              class="circle-wrapper"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out-sine"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-delay="100"
            >
              <div
                class="circle-item"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-sine"
                data-aos-mirror="true"
                data-aos-once="false"
                v-for="(awards, index) in sustainabilityAwards"
                :key="index"
              >
                <div class="circle">
                  <img :src="awards.image" alt="awards" />
                </div>
                <div class="circle-text">
                  {{ awards.title }}
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="other-awards">
        <b-col
          md="4"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="100"
        >
          <div class="sus-fin-other-awards-image">
            <picture>
              <source
                media="(max-width:650px)"
                srcset="
                  https://ipdc.com/api/uploads/sustainable/awards/award-other1.png
                "
              />
              <img
                src="https://ipdc.com/api/uploads/sustainable/awards/award-other1.png"
                alt="sustainability"
              />
            </picture>
          </div>
        </b-col>
        <b-col
          md="4"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="200"
        >
          <div class="sus-fin-other-awards-image">
            <picture>
              <source
                media="(max-width:650px)"
                srcset="
                  https://ipdc.com/api/uploads/sustainable/awards/award-other2.jpg
                "
              />
              <img
                src="https://ipdc.com/api/uploads/sustainable/awards/award-other2.jpg"
                alt="sustainability"
              />
            </picture>
          </div>
        </b-col>
      </b-row>

      <b-row class="more-awards">
        <b-col>
          <div
            class="sus-fin-other-awards-button"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <a href="/ipdc-awards" target="_blank">
              <div class="discover-more-button">
                <button v-if="$i18n.locale == 'en'" class="discover-more">
                  Other Awards
                </button>
                <button v-if="$i18n.locale == 'bn'" class="discover-more">
                  অন্যান্য পুরস্কার
                </button>
              </div>
            </a>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="collaborative">
      <div class="heading">
        <h1
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out-sine"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Collaborative Stakeholders
        </h1>
      </div>

      <div
        class="collaborative-stakeholders-wrapper"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <table class="custom-table">
          <tbody>
            <tr>
              <td colspan="4">
                <a href="https://www.bb.org.bd" target="_blank">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/awards/award-1.png"
                    alt="Image 1"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://www.adfiap.org" target="_blank">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/awards/2.ADFIAP_logo.png"
                    alt="Image 2"
                  />
                </a>
              </td>
              <td colspan="2">
                <a href="https://smef.gov.bd" target="_blank">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/awards/3.SMEF_logo.png"
                    alt="Image 3"
                /></a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.amalbangladesh.org" target="_blank">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/awards/4.AmalF_logo.png"
                    alt="Image 4"
                /></a>
              </td>
              <td>
                <a href="https://www.jaago.com.bd/" target="_blank">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/awards/5.JAAGO_Foundation_logo.jpg"
                    alt="Image 5"
                /></a>
              </td>
              <td>
                <a href="https://www.bancat.org.bd" target="_blank">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/awards/6.BANCAT_logo.png"
                    alt="Image 6"
                /></a>
              </td>
              <td>
                <a href="https://www.sajida.org" target="_blank">
                  <img
                    src="https://ipdc.com/api/uploads/sustainable/awards/7.SAJIDA_Foundation_logo.png"
                    alt="Image 7"
                /></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sustainabilityAwards: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.sus-fin-awards {
  background: linear-gradient(
    90deg,
    rgba(31, 144, 42, 0.25) 15%,
    rgba(30, 245, 40, 0.15) 50%,
    rgba(30, 245, 200, 0.35) 85%
  );
  // padding-bottom: 60px;

  .heading {
    h1 {
      font-size: 2.2rem;
      font-weight: bold;
      color: #343434;
      padding: 40px;
      text-align: center;
    }
  }

  .sus-fin-awards-main {
    padding: 20px 40px 40px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
    .main-awards {
      .circle-wrapper {
        display: flex;
        justify-content: center;
        gap: 40px;
        flex-wrap: wrap;

        .circle-item {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;

          .circle {
            width: 170px;
            height: 170px;
            // border-radius: 50%;
            // box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
            // background: radial-gradient(circle at 0% -5%, #fff, #c3c3c3);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.6s ease;
            overflow: hidden;

            &:hover {
              transform: scale(1.2);
              // background: radial-gradient(circle at 0% -5%, #fff, #e3e3e3);
              // box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .circle-text {
            width: 170px;
            margin-top: 10px;
            font-size: 1rem;
            color: #333;
            text-align: center;
          }
        }
      }
    }

    .other-awards {
      padding-top: 40px;
      justify-content: center;

      .sus-fin-other-awards-image {
        padding: 40px 40px 40px 40px;
        text-align: center;

        img {
          border-radius: 15px;
          height: 450px;
          object-fit: contain;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          padding: 20px 40px 40px 40px;
        }

        p {
          text-align: justify;
          font-size: 1.1rem;
          color: #858585;
          padding: 40px 0;
          line-height: 166%;

          @media (max-width: 768px) {
            padding: 0px 40px 20px 40px;
          }
        }
      }
    }

    .more-awards {
      padding-top: 40px;
      justify-content: center;

      .col {
        flex-grow: 0;
      }

      .sus-fin-other-awards-button {
        .discover-more-button {
          position: relative;
        }

        .discover-more {
          width: 250px;
          color: #ffffff;
          background: #ed017f;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          font-size: 18px;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;

          &:hover {
            color: #ffffff;
            background: #ff0088;
            transition: 0.45s all ease-in-out;
            box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.9);
          }
        }
      }
    }
  }

  .collaborative {
    background: linear-gradient(
      90deg,
      rgba(115, 190, 150, 0.35) 15%,
      rgba(115, 90, 120, 0.15) 50%,
      rgba(75, 190, 180, 0.25) 85%
    );
    padding-bottom: 60px;

    .collaborative-stakeholders-wrapper {
      display: flex;
      justify-content: center; /* Center the table in the parent container */
      align-items: center;

      .custom-table {
        border-collapse: collapse; /* No borders */
        width: auto; /* Table takes the width based on content */

        td {
          padding: 15px; /* Space around images */
          text-align: center; /* Center-align content in each cell */
          vertical-align: middle; /* Vertically center images within cells */
          // border: 1px solid black;

          img {
            width: 100px; /* Adjust the size of the images as needed */
            height: auto; /* Maintain the aspect ratio of the images */
            display: block;
            margin: 0 auto; /* Ensure image is horizontally centered in the cell */
            transition: all 0.6s ease;

            &:hover {
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
}
</style>
