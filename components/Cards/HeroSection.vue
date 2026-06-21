<template>
  <section id="hero" class="snap-section hero">
    <video ref="heroVideo" muted playsinline @ended="onVideoEnd">
      <source src="~/assets/image/card/hero.mp4" type="video/mp4" />
    </video>

    <img
      v-if="showFallback"
      src="~/assets/image/card/hero.jpg"
      class="fallback"
      alt="Hero Fallback"
    />

    <!-- <div ref="heroText" v-if="showFallback" id="heroText">
      <h1 class="text-gold-gradient">BEYOND <br /><span>BOUNDARIES</span></h1>
      <p>The ultimate financial companion for the modern elite.</p>
      <button class="cta-button" @click="goToCardReveal">
        Discover Excellence
      </button>
    </div> -->

    <!-- <div class="scroll-indicator" @click="goToCardReveal">↓</div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      showFallback: false,
      navbarOffset: 87,
    };
  },
  mounted() {
    // Check if the page is already loaded (in case of fast cache)
    if (document.readyState === "complete") {
      this.playVideo();
    } else {
      // Wait for the window to be fully loaded
      window.addEventListener("load", this.playVideo);
    }
  },
  beforeDestroy() {
    // Clean up listener
    window.removeEventListener("load", this.playVideo);
  },
  methods: {
    playVideo() {
      const video = this.$refs.heroVideo;
      if (video) {
        // We play the video and handle the promise to avoid browser "interrupted" errors
        video.play().catch((error) => {
          console.warn("Video playback was prevented by browser:", error);
          // Fallback: If video can't play, show the content immediately
          this.onVideoEnd();
        });
      }
    },
    onVideoEnd() {
      this.showFallback = true;
      this.$nextTick(() => {
        this.fadeInHeroText();
      });
    },
    fadeInHeroText() {
      if (this.$refs.heroText) {
        this.$gsap.fromTo(
          this.$refs.heroText,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 2.0,
            ease: "power4.out",
          }
        );
      }
    },
    goToCardReveal() {
      const section = document.getElementById("card");
      const smoother = this.$root.smoother;

      if (smoother) {
        smoother.scrollTo(section, true, `top ${this.navbarOffset}`);
      } else {
        this.$gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: section, offsetY: this.navbarOffset },
          ease: "power4.inOut",
        });
      }
    },
  },
};
</script>

<style scoped>
.hero {
  margin-top: 87px;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #000;
  aspect-ratio: 16 / 9;
  height: auto;
}

video,
.fallback {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

#heroText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 5;
}

#heroText > h1,
#heroText > p {
  pointer-events: none;
}

#heroText > .cta-button {
  pointer-events: auto;
}

#heroText h1 {
  font-size: 6rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1rem;
}

#heroText p {
  font-size: 1.25rem;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 2rem;
}

.text-gold-gradient {
  background: linear-gradient(180deg, #ed017f 30%, #ffffff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-button {
  padding: 1rem 3rem;
  border: none;
  border-radius: 9999px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #d4af37;
  color: black;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
  opacity: 0.6;
  animation: pulse 1.5s infinite;
  cursor: pointer;
  z-index: 10;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .hero {
    margin-top: 100px;
  }
  #heroText h1 {
    font-size: 3rem;
    line-height: 1.2;
  }

  #heroText p {
    font-size: 1rem;
    padding: 0 20px;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    width: 80%;
  }

  video,
  .fallback {
    object-position: center;
    object-fit: contain;
  }
}
</style>
