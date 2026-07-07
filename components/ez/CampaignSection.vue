<template>
  <section class="campaign-section gsap-fade-up">
    <div class="campaign-grid">
      <div class="left-content">
        <h2>{{ title }}</h2>

        <p>{{ description }}</p>
      </div>

      <div class="slider-wrapper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(slide, i) in slideSrcs" :key="i">
            <img :src="slide" loading="lazy" alt="" />
          </swiper-slide>

          <div slot="pagination" class="campaign-pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultTitle: "Simpler Finance Starts Here",
      defaultDescription:
        "An app that managing your finances a way which feels effortless, empowering, and entirely yours.",
      defaultSlides: [
        require("~/assets/image/ez/Iphone_01.jpg"),
        require("~/assets/image/ez/Iphone_02.jpg"),
        require("~/assets/image/ez/Iphone_03.jpg"),
        require("~/assets/image/ez/Iphone_04.jpg"),
        require("~/assets/image/ez/Iphone_05.jpg"),
        require("~/assets/image/ez/Iphone_06.jpg"),
      ],
      swiperOptions: {
        loop: true,
        centeredSlides: true,

        slidesPerView: 1.2,
        spaceBetween: 20,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: true, // move left -> right
        },

        pagination: {
          el: ".campaign-pagination",
          clickable: true,
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        },
      },
    };
  },
  computed: {
    title() {
      return this.pick(this.content.title, this.content.title_bangla) || this.defaultTitle;
    },
    description() {
      return (
        this.pick(this.content.description, this.content.description_bangla) ||
        this.defaultDescription
      );
    },
    slideSrcs() {
      const api = Array.isArray(this.content.slides) ? this.content.slides : [];
      if (!api.length) return this.defaultSlides;
      return api.map((s, i) => this.src(s.image, this.defaultSlides[i]));
    },
  },
  methods: {
    pick(en, bn) {
      const isBn = this.$i18n && this.$i18n.locale === "bn";
      if (isBn && bn) return bn;
      return en || "";
    },
    src(path, fallback) {
      // use the API value only when it is a runtime-usable URL,
      // otherwise fall back to the bundled asset
      return path && /^(https?:|\/|data:)/.test(path) ? path : fallback;
    },
  },
};
</script>

<style scoped>
.campaign-section {
  padding: 100px 0;
  background: radial-gradient(
      circle at top right,
      rgba(163, 46, 128, 0.45),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(163, 46, 128, 0.25),
      transparent 30%
    ),
    #000;
}

.campaign-grid {
  width: 90%;
  max-width: 1800px;
  margin: auto;
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 50px;
  align-items: center;
}

.left-content h2 {
  font-size: 48px;
  color: white;
  margin-bottom: 10px;
}

.left-content p {
  line-height: 1.5;
  font-size: 1.2rem;
  margin-top: 50px;
  color: rgba(255, 255, 255, 0.75);
  padding-bottom: 100px;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 60px;
}

.swiper-container {
  margin-bottom: 100px;
  overflow: visible;
}

.slider-wrapper img {
  width: 100%;
  border-radius: 20px;
  display: block;
}

/* ALL slides */
.slider-wrapper ::v-deep .swiper-slide {
  transition: all 0.4s ease;
  transform: scale(0.85);
  opacity: 0.5;
}

/* Blur side slides */
.slider-wrapper ::v-deep .swiper-slide img {
  filter: blur(8px);
  transition: all 0.4s ease;
}

/* Center slide */
.slider-wrapper ::v-deep .swiper-slide-active {
  transform: scale(1);
  opacity: 1;
}

.slider-wrapper ::v-deep .swiper-slide-active img {
  filter: blur(0);
}

/* Pagination container */
.slider-wrapper ::v-deep .campaign-pagination {
  position: absolute;
  left: 50%;
  bottom: -10%;
  transform: translateX(-50%);
  text-align: center;
  width: auto;
}

/* Dots */
.slider-wrapper ::v-deep .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0 6px;
  background: rgba(255, 255, 255, 0.35);
  opacity: 1;
  transition: all 0.3s ease;
}

.slider-wrapper ::v-deep .swiper-pagination-bullet-active {
  background: #fff;
  transform: scale(1.3);
}

@media (max-width: 1199px) {
  .campaign-grid {
    grid-template-columns: 300px 1fr;
  }

  .left-content h2 {
    font-size: 48px;
  }
}

@media (max-width: 991px) {
  .campaign-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .left-content h2 {
    font-size: 42px;
  }
}

@media (max-width: 767px) {
  .campaign-section {
    padding: 70px 0;
  }

  .left-content h2 {
    font-size: 34px;
  }

  .left-content p {
    font-size: 15px;
  }

  .slider-wrapper {
    padding-bottom: 50px;
  }
}
</style>
