<template>
  <section class="youtube-playlist container">
    <div v-if="youtubePlaylistHeading" class="youtube-playlist-title">
      <h1>
        {{
          $i18n.locale == "en"
            ? youtubePlaylistHeading.title
            : youtubePlaylistHeading.title_bangla
        }}
      </h1>
      <p>
        {{
          $i18n.locale == "en"
            ? youtubePlaylistHeading.sub_title
            : youtubePlaylistHeading.sub_title_bangla
        }}
      </p>
    </div>
    <div v-if="youtubePlaylists.length > 0" class="youtube-playlist-slider">
      <button
        v-for="singlePlaylist in youtubePlaylists"
        :key="singlePlaylist.id"
        @click="changeEventIndex(singlePlaylist.id)"
      >
        <div
          class="youtube-slide"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <div class="youtube-image">
            <!-- <img class="youtube-slide-image" :src="singlePlaylist.image"> -->
            <iframe
              class="youtube-video"
              :src="singlePlaylist.video_url"
              frameborder="0"
              allowfullscreen
            />
            <div class="youtube-title">
              <div class="playlist-name">
                <p>
                  {{
                    $i18n.locale == "en"
                      ? singlePlaylist.title
                      : singlePlaylist.title_bangla
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    changeEventIndex: {
      type: Function,
    },
    youtubePlaylists: {
      type: Array,
      default: null,
    },

    youtubePlaylistHeading: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.youtube-playlist {
  padding-bottom: 100px;
  &-title {
    text-align: center;
    padding-top: 50px;
    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 133%;
      color: #343434;
      .font-bn & {
        font-size: 41px;
      }
    }
    p {
      font-size: 16px;
      line-height: 154.3%;
      color: #858585;
      padding: 15px 220px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }

  &-slider {
    padding: 50px 0 80px 20px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 105px;
    justify-content: center;
    button {
      border: none;
      background: none;
    }
    .youtube-slide {
      width: 321px;
      height: 283px;
      position: relative;
      .youtube-image {
        display: flex;
        flex-direction: column;
        .youtube-slide-image {
          border-radius: 15px;
        }
        .youtube-title {
          .playlist-name {
            margin: 22px 0 0 0;
            text-align: left;
            p {
              font-weight: bold;
              font-size: 20px;
              line-height: 155%;
              color: #343434;
              .font-bn & {
                font-size: 25px;
              }
            }
          }
        }
      }
    }
  }
}
.youtube-video {
  width: 100%;
  height: 258px;
  border-radius: 15px;
  border: none;
}

@media screen and (max-width: 768px) {
  .youtube-playlist {
    &-title {
      padding-top: 50px;
      h1 {
        font-size: 25px;
        .font-bn & {
          font-size: 30px;
        }
      }
      p {
        padding: 15px 0;
      }
    }

    &-slider {
      padding: 40px 0 50px 20px;
      row-gap: 35px;
      button {
        border: none;
        background: none;
      }
      .youtube-slide {
        position: relative;
        margin-right: 20px;
        width: unset;
        height: unset;

        .youtube-image {
          .youtube-slide-image {
            width: unset;
            height: 258px;
          }
          .youtube-title {
            .playlist-name {
              margin: 22px 0 0 0;
              text-align: left;
              // p {
              // }
            }
          }
        }
      }
    }
  }
}
</style>
