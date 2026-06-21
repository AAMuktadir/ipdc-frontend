<template>
  <section class="video-carousel">
    <div class="container">
      <div v-if="videos.length > 0">
        <client-only>
          <div v-if="heading" class="sec-heading">
            <h1 v-if="$i18n.locale == 'en'">
              <strong v-html="heading.heading"></strong>
            </h1>
            <h1 v-if="$i18n.locale == 'bn'">
              <strong v-html="heading.heading_bn"></strong>
            </h1>
            <div class="separator"></div>
          </div>
          <carousel
            :nav="true"
            :autoplay="true"
            :center="true"
            :loop="true"
            :responsive="{
              0: { items: 1, nav: false },
              650: { items: 1, nav: false },
            }"
          >
            <div
              class="investor-meet-video"
              v-for="item in videos"
              :key="item.id"
            >
              <div class="video-wrapper">
                <iframe class="meet-video" :src="item.file_url" />
                <div class="play-overlay" @click="openModal(item.file_url)">
                  <img
                    class="play-button"
                    src="~/assets/image/icon/playbuttonclear.svg"
                    alt="Play"
                  />
                </div>
              </div>
            </div>
          </carousel>
          <div class="media-card-row">
            <div
              class="media-card media-card-left"
              data-aos="fade-up"
              data-aos-easing="ease-in-out-sine"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="center-bottom"
            >
              <carousel
                :nav="false"
                :loop="true"
                :autoplay="true"
                :autoHeight="true"
                :dots="true"
                :responsive="{
                  0: { items: 1, nav: false },
                  600: { items: 1, nav: false },
                }"
              >
                <div
                  class="slide-image"
                  v-for="item in images.section_left"
                  :key="item.id"
                >
                  <a :href="item.link_url" target="_blank">
                    <img
                      :src="item.image_url"
                      alt="Flowers"
                      class="image-cover"
                    />
                    <div class="overlay">
                      <h3 class="text">
                        {{ item.title }}
                      </h3>
                      <p class="description">
                        {{
                          $i18n.locale == "en"
                            ? item.description
                            : item.description_bn
                        }}
                      </p>
                    </div>
                  </a>
                </div>
              </carousel>
            </div>
            <div
              class="media-card media-card-right"
              data-aos="fade-up"
              data-aos-easing="ease-in-out-sine"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="center-bottom"
            >
              <carousel
                :nav="false"
                :loop="true"
                :autoplay="true"
                :autoHeight="true"
                :dots="true"
                :responsive="{
                  0: { items: 1, nav: false },
                  600: { items: 1, nav: false },
                }"
              >
                <div
                  class="slide-image"
                  v-for="item in images.section_right"
                  :key="item.id"
                >
                  <img
                    :src="item.image_url"
                    alt="Flowers"
                    class="image-cover"
                  />
                  <div class="overlay-without-description">
                    <h3 class="text">
                      {{
                        $i18n.locale == "en"
                          ? item.description
                          : item.description_bn
                      }}
                    </h3>
                  </div>
                </div>
              </carousel>
            </div>
          </div>
        </client-only>
      </div>
    </div>
    <transition name="modal">
      <div v-if="showModal" class="modal">
        <div class="inside-modal" @click="closeModal">
          <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <iframe
              width="560"
              height="315"
              :src="modalVideoUrl"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  transition: "modal",
  props: {
    heading: {
      type: Object,
      default: () => ({}),
    },
    videos: {
      type: Array,
      default: () => [],
    },
    images: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      showModal: false,
      modalVideoUrl: "",
    };
  },
  methods: {
    openModal(videoUrl) {
      this.modalVideoUrl = `${videoUrl}?autoplay=1`;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.modalVideoUrl = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.video-carousel {
  padding: 0 0 20px 0;
  width: 90%;
  margin: 0 auto;

  .investor-title {
    text-align: center;
    padding: 0 0 83px 0;

    &-heading {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
    }

    &-description {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 225px;
    }
  }

  .investor-meet-video {
    position: relative;
    width: 100%;
    margin: 0 auto;
    border-radius: 15px;
    height: 480px;
    overflow: hidden;
    z-index: 1;

    .video-wrapper {
      position: relative;

      .meet-video {
        width: 100%;
        height: 480px;
        border-radius: 15px;
        border: none;
      }

      .play-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }

      .play-button {
        width: 80px;
      }
    }
  }
}
.sec-heading {
  text-align: center;
  padding-bottom: 20px;
  padding-top: 30px;
  position: relative;
  h1 {
    font-size: 35px !important;
    padding-bottom: 20px;
    strong {
      background-image: linear-gradient(
        -225deg,
        #b91d5d 0%,
        #ed017f 29%,
        #000 67%,
        #ff279b 100%
      );
      background-size: auto auto;
      background-clip: border-box;
      background-size: 200% auto;
      color: #fff;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textclip 2s linear infinite;
      font-weight: bold;
    }
  }
  p {
    padding: 40px;
    font-weight: 400;
    font-size: 18px;
  }
}
.sec-heading .separator::after {
  content: "";
  width: 20%;
  height: 4px;
  background-color: #000;
  position: absolute;
  left: 40%;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(254, 226, 164, 0)),
    color-stop(53%, #dca273),
    to(rgba(254, 226, 164, 0))
  );
  background: linear-gradient(
    to right,
    rgba(254, 226, 164, 0) 0%,
    #020202 53%,
    rgba(254, 226, 164, 0) 100%
  );
}

.media-card-row {
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 0px 0px 10px 0px;
}

.media-card {
  background-color: rgba(0, 0, 0, 0.6);
  position: relative;
  max-height: 450px;
  height: 450px;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.slide-image {
  position: relative; /* Ensure the overlay is positioned correctly */
  // cursor: pointer; /* Pointer cursor to indicate clickable area */
  overflow: hidden; /* Ensure any overflow from scaled images is hidden */

  .image-cover {
    width: 100%;
    height: 450px;
    object-fit: cover; /* Ensure the image covers the container */
    transition: transform 0.3s ease; /* Smooth transition for scaling */
  }

  &:hover .image-cover {
    transform: scale(1.1); /* Scale the image on hover */
  }

  .overlay {
    content: "";
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 46%,
      rgba(0, 0, 0, 0.9) 100%
    );
    display: flex;
    flex-direction: column-reverse;
    // justify-content: flex-end;
    padding: 50px;
    color: white;
    transition: background-color 0.3s ease-in-out;

    // .text {
    //   font-weight: bold;
    //   margin-bottom: 60px;
    // }

    .description {
      font-size: 1.1em;
      opacity: 0;
      padding-right: 5em;
      .font-bn & {
        font-size: 1.3em;
      }
    }
  }

  &:hover .overlay {
    background-color: rgba(255, 255, 255, 0.85);
    flex-direction: column;
    color: black;

    .text {
      margin-bottom: 10px;
      position: relative;
      color: #000;
      bottom: 2rem;
      -webkit-transform: translateY(2rem);
      -ms-transform: translateY(2rem);
      -o-transform: translateY(2rem);
      transform: translateY(2rem);
      -webkit-transition: transform 0.5s ease-in-out;
      -o-transition: transform 0.5s ease-in-out;
      transition: transform 0.5s ease-in-out;
    }

    .description {
      opacity: 1;
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateY(0);
      -webkit-transition: all 0.6s 0.4s ease-in-out;
      -o-transition: all 0.6s 0.4s ease-in-out;
      transition: all 0.6s 0.4s ease-in-out;
    }
  }

  .overlay-without-description {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 450px;
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 46%,
      rgba(0, 0, 0, 0.9) 100%
    );
    display: flex;
    flex-direction: column-reverse;
    padding: 50px;
    color: white;
    opacity: 1; /* Initially hidden */
    transition: opacity 0.3s ease-in-out; /* Smooth transition for overlay */
  }
}

.media-card-left {
  flex: 1 1 33.33%; /* This will make it take up 1/3 of the row */
  .slide-image {
    cursor: pointer;
  }
}

.media-card-right {
  flex: 1 1 66.67%; /* This will make it take up 2/3 of the row */
}

@media (max-width: 1024px) {
  .media-card-row {
    flex-direction: column; /* Stack the items vertically */
  }

  .media-card {
    flex: 1 1 auto; /* Allow the card to take the full width */
  }

  .media-card:last-child {
    margin-bottom: 0; /* Remove bottom margin for the last card */
  }
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  // background-color: rgba(0, 0, 0, 0.9);

  .inside-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    // z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
  }

  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    width: 80%;
    max-width: 800px;

    iframe {
      width: 100%;
      height: 450px;
    }
  }

  .close {
    color: #aaa;
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
    transition: 0.3s;

    &:hover,
    &:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 1024px) {
  .video-carousel {
    padding: 0 0 20px 0;

    .investor-title {
      text-align: center;
      padding: 0 0 70px 0;

      &-description {
        padding: 15px 0;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .video-carousel {
    padding: 0 0 20px 0;

    .investor-title {
      text-align: center;
      padding: 0 0 70px 0;

      &-description {
        padding: 15px 0;
      }
    }
  }
}
</style>
