<template>
  <div v-if="videoSrc" class="covervideo">
    <video
      ref="videoPlayer"
      :src="videoSrc.video_url"
      @play="onPlay"
      @pause="onPause"
      @loadedmetadata="playVideo"
      controls
    ></video>

    <!-- 
    <div v-if="$i18n.locale == 'en'" class="title">
      <h1 class="heading">
        {{ videoSrc.title }}
      </h1>
      <p class="description">
        {{ videoSrc.sub_title }}
      </p>
    </div>
    <div v-if="$i18n.locale == 'bn'" class="title">
      <h1 class="heading">
        {{ videoSrc.title_bangla }}
      </h1>
      <p class="description">
        {{ videoSrc.sub_title_bangla }}
      </p>
    </div> 
    -->
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: "",
    },
    videoSrc: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isPlaying: false,
    };
  },
  methods: {
    async getCoverVideo() {
      try {
        const response = await this.$axios.get(`/get-cover-image/${this.page}`);
        this.videoSrc = response.data.data;

        // Automatically play the video once loaded
        this.$nextTick(() => {
          this.playVideo();
        });
      } catch (error) {
        console.log("Error fetching getCoverVideo:", error);
      }
    },
    playVideo() {
      const video = this.$refs.videoPlayer;
      video.volume = 0.3;
      video.play();
      this.isPlaying = true;
    },
    togglePlay() {
      const video = this.$refs.videoPlayer;
      if (this.isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    onPlay() {
      this.isPlaying = true;
    },
    onPause() {
      this.isPlaying = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.covervideo {
  position: relative;
  width: 100%;
  video {
    width: 100%;
  }
  .title {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 909px;
    height: 232px;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(11px);
    border-radius: 52px 52px 0px 0px;
    text-align: center;
    padding: 30px;
    .heading {
      font-weight: 900;
      font-size: 50px;
      line-height: 118%;
      color: #ffffff;
      text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.07);
      .font-bn & {
        font-size: 55px;
      }
    }
    .description {
      font-size: 16px;
      line-height: 154.3%;
      color: #ffffff;
      text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.07);
      padding: 15px 100px;
      .font-bn & {
        font-size: 21px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .covervideo {
    position: relative;
    width: 100%;
    .title {
      bottom: 0;
      width: 100%;
      height: unset;
      text-align: center;
      padding: 20px 20px 60px 20px;
      .heading {
        font-weight: bold;
        font-size: 30px;
        line-height: 133%;
        .font-bn & {
          font-size: 35px;
        }
      }
      .description {
        padding: 15px 20px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .covervideo {
    position: relative;
    width: 100%;
    .title {
      width: 100%;
      height: unset;
      text-align: center;
      padding: 20px 20px 60px 20px;
      .heading {
        font-weight: bold;
        font-size: 25px;
        line-height: 133%;
        .font-bn & {
          font-size: 30px;
        }
      }
      .description {
        padding: 15px 20px;
      }
    }
  }
}
</style>
