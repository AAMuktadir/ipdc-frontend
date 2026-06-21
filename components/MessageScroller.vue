<template>
  <div class="scroller-container">
    <div class="scroller-content" :style="scrollerStyle">
      <span
        v-if="$i18n.locale === 'en'"
        v-html="scrollerMessage"
        class="font-bn"
      ></span>
      <span v-else v-html="scrollerMessageBangla"></span>

      <span
        v-if="$i18n.locale === 'en'"
        v-html="scrollerMessage"
        class="secondary font-bn"
      ></span>
      <span v-else v-html="scrollerMessageBangla" class="secondary"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollerMessage: "",
      scrollerMessageBangla: "",
      speed: 200, // Duration in seconds (lower is faster)
    };
  },
  computed: {
    scrollerStyle() {
      return {
        animationDuration: `${this.speed}s`,
      };
    },
  },
  async created() {
    try {
      const response = await this.$axios.get(`/get-active-scroll-message`);
      if (response.data && response.data.data) {
        this.scrollerMessage = response.data.data.concatenated_messages || "";
        this.scrollerMessageBangla =
          response.data.data.concatenated_bangla_messages || "";
      }
    } catch (error) {
      console.error("Error fetching active scroll message:", error);
    }
  },
};
</script>

<style scoped>
.scroller-container {
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 1px solid #ed027e;
  margin-bottom: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  background: #fff; /* Optional background */
}

.scroller-content {
  display: inline-block;
  font-size: 18pt;
  color: black;
  padding-left: 100%; /* Starting position */
  animation: scroll-left linear infinite;
}

/* Pause on hover */
.scroller-content:hover {
  animation-play-state: paused;
}

.secondary {
  margin-left: 50px; /* Space between the end of the first loop and start of second */
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
