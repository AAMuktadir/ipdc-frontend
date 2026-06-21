<template>
  <section :id="id" class="snap-section feature">
    <div class="header-wrap" v-if="title">
      <h2 class="title-gradient">{{ title }}</h2>
    </div>

    <div
      class="feature-container"
      :class="[align, { 'is-visible': isVisible }]"
    >
      <div class="image-container" ref="imageContainer">
        <div class="image-wrapper">
          <div class="glow-element"></div>

          <div class="card-3d" ref="card3d">
            <div
              class="card-face"
              :style="{ backgroundImage: `url(${img})` }"
              @click="goToCards"
            ></div>
          </div>

          <div class="shadow-element"></div>
        </div>
      </div>

      <div class="content" :class="align">
        <h3>{{ featuresTitle }}</h3>

        <ul class="feature-list">
          <li
            v-for="(feature, index) in features"
            :key="index"
            class="feature-item-wrapper"
          >
            <!-- Normal item -->
            <template v-if="typeof feature === 'string'">
              <div class="feature-item">
                <span class="bullet"></span>
                {{ feature }}
              </div>
            </template>

            <!-- Nested item group -->
            <template v-else>
              <div class="feature-item">
                <span class="bullet"></span>
                {{ feature.title }}
              </div>

              <ul class="nested-feature-list">
                <li
                  v-for="(item, idx) in feature.items"
                  :key="idx"
                  class="feature-item nested"
                >
                  <span class="bullet-2"></span>
                  {{ item }}
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: String,
    align: {
      type: String,
      default: "left",
    },
    img: String,
    title: String,
    features: Array,
    featuresTitle: String,
  },

  data() {
    return {
      isVisible: false,
      observer: null,
      navbarOffset: 70,
    };
  },

  mounted() {
    this.initObserver();
  },

  beforeDestroy() {
    if (this.observer) this.observer.disconnect();
  },

  methods: {
    initObserver() {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      this.observer.observe(this.$el);
    },

    scrollTo(id) {
      const section = document.getElementById(id);
      if (!section) return;

      window.scrollTo({
        top: section.offsetTop - this.navbarOffset,
        behavior: "smooth",
      });
    },
    goToCards() {
      this.$router.push("/cards");
    },
  },
};
</script>

<style scoped>
.feature {
  display: flex;
  flex-direction: column;
  background: #f4f1ec;
  overflow: hidden;
}

.header-wrap {
  text-align: center;
  margin-bottom: 60px;
}

.title-gradient {
  font-size: 3rem;
  color: #e6c27a;
}

.feature-container {
  display: flex;
  align-items: center;
  padding: 5vw;
  gap: 10%;
}

.feature-container.left {
  flex-direction: row;
}

.feature-container.right {
  flex-direction: row-reverse;
}

/* Animation states */
.image-container,
.content {
  opacity: 0;
  transition: all 0.8s ease;
}

.feature-container.left .image-container {
  transform: translateX(120px);
}
.feature-container.left .content {
  transform: translateX(-120px);
}

.feature-container.right .image-container {
  transform: translateX(-120px);
}
.feature-container.right .content {
  transform: translateX(120px);
}

.feature-container.is-visible .image-container,
.feature-container.is-visible .content {
  opacity: 1;
  transform: translateX(0);
}

.feature-container.is-visible .content {
  transition-delay: 0.2s;
}

/* Image */
.image-container {
  width: 45%;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
}

.feature-container.right .card-face {
  transform: rotateZ(315deg) scale(0.75);
}

.feature-container.left .card-face {
  transform: rotateZ(45deg) scale(0.75);
}

.image-wrapper {
  width: 80%;
  height: 100%;
  position: relative;
}

.card-3d {
  width: 100%;
  height: 100%;
}

.card-face {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.glow-element {
  position: absolute;
  width: 160%;
  height: 160%;
  background: radial-gradient(circle, rgba(237, 1, 127, 0.2), transparent);
  filter: blur(40px);
}

.shadow-element {
  position: absolute;
  bottom: -40px;
  width: 70%;
  height: 20px;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.3), transparent);
  filter: blur(20px);
}

/* Content */
.content {
  width: 50%;
  width: fit-content;
}

.content h3 {
  margin: 10px 0;
  font-weight: 400;
  color: #1a1718;
}

/* .content.right h3 {
  text-align: right;
} */

/* List */
.feature-list {
  margin: 20px 0;
  padding: 0;
  list-style: none;
  width: fit-content;
}

.feature-item {
  display: flex;
  gap: 10px;
  align-items: center;
  color: #8d8d8e;
  margin-top: 15px;
}

.feature-item-wrapper {
  margin-top: 15px;
}

.feature-group-title {
  /* font-weight: 600; */
  color: #1a1718;
  margin-bottom: 10px;
}

.nested-feature-list {
  list-style: none;
  padding-left: 20px;
  margin: 0;
}

/* .content.right .nested-feature-list {
  padding-left: unset;
  padding-right: 20px;
} */

.feature-item.nested {
  margin-top: 10px;
  font-size: 0.95rem;
}

/* .right .feature-item {
  flex-direction: row-reverse;
  text-align: left;
} */

.bullet {
  width: 6px;
  height: 6px;
  background: #0084ff;
  border-radius: 50%;
}

.bullet-2 {
  width: 12px;
  height: 4px;
  background: #2997ff;
  border-radius: 25%;
}

/* Button */
.benefits-btn {
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.3s;
}

/* .content.right .benefits-btn {
  float: right;
} */

.benefits-btn:hover {
  border-color: white;
  background-color: black;
  color: white;
  transform: translateY(-2px);
}

.arrow {
  margin-left: 6px;
  transition: transform 0.3s;
}

.benefits-btn:hover .arrow {
  transform: translateX(4px);
}

/* Mobile */
@media (max-width: 768px) {
  .feature-container {
    flex-direction: column !important;
    text-align: center;
    gap: 75px;
  }

  .image-container,
  .content {
    width: 100%;
  }

  .image-container {
    height: 260px;
  }

  .feature-list {
    text-align: left;
    display: inline-block;
  }
}
</style>
