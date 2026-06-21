<template>
  <section ref="section" class="elite-header">
    <div class="container">
      <div ref="content" class="content" v-if="heading">
        <!-- Main Heading -->
        <h1 class="title">
          {{ isBn ? heading.title_bangla : heading.title }}
        </h1>

        <!-- Sub Heading -->
        <h3 class="subtitle">
          {{ isBn ? heading.sub_title_bangla : heading.sub_title }}
        </h3>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Description (HTML) -->
        <div
          class="description"
          v-if="heading.description"
          v-html="isBn ? heading.description_bangla : heading.description"
        ></div>

        <div class="divider"></div>

        <!-- Highlight -->
        <h3 class="highlight" v-if="heading.highlight">
          {{ isBn ? heading.highlight_bangla : heading.highlight }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
    };
  },
  props: {
    heading: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    isBn() {
      return this.$i18n.locale === "bn";
    },
  },

  mounted() {
    this.initObserver();
  },

  methods: {
    initObserver() {
      const options = {
        root: null,
        threshold: 0.15,
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate();
            this.observer.disconnect();
          }
        });
      }, options);

      if (this.$refs.section) {
        this.observer.observe(this.$refs.section);
      }
    },

    animate() {
      this.$nextTick(() => {
        if (!this.$gsap) return;

        const tl = this.$gsap.timeline({
          defaults: {
            ease: "power3.out",
            duration: 0.5,
          },
        });

        const el = this.$refs.content;

        tl.fromTo(
          this.$refs.content,
          { opacity: 0 },
          { opacity: 1, duration: 0.05 }
        );

        tl.fromTo(
          el.querySelector(".title"),
          { opacity: 0, y: 40, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)" }
        );

        tl.fromTo(
          el.querySelector(".subtitle"),
          { opacity: 0, y: 40, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)" },
          "-=0.4"
        );

        tl.fromTo(
          el.querySelectorAll(".divider")[0],
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, transformOrigin: "center" },
          "-=0.3"
        );

        tl.fromTo(
          el.querySelector(".description"),
          { opacity: 0, y: 40, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)" },
          "-=0.2"
        );

        tl.fromTo(
          el.querySelectorAll(".divider")[1],
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, transformOrigin: "center" },
          "-=0.3"
        );

        tl.fromTo(
          el.querySelector(".highlight"),
          { opacity: 0, y: 40, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)" },
          "-=0.2"
        );
      });
    },
  },
};
</script>

<style scoped>
.elite-header {
  padding: 120px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* soft glow background */
.elite-header::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle,
    rgba(230, 194, 122, 0.25) 0%,
    transparent 70%
  );
  pointer-events: none;
}

/* CONTENT */
.content {
  opacity: 0;
  max-width: 860px;
  margin: 0 auto;
}

/* TITLE */
.title {
  font-size: 4.5rem;
  color: #e6c27a;
  margin-bottom: 12px;
  font-weight: 500;
}

/* SUBTITLE */
.subtitle {
  font-weight: 400;
  color: #1a1718;
  margin-bottom: 18px;
}

/* DIVIDER */
.divider {
  width: 50%;
  height: 2px;
  margin: 18px auto 22px;
  background: linear-gradient(
    90deg,
    rgba(230, 194, 122, 0),
    #e6c27a,
    rgba(230, 194, 122, 0)
  );
  transform: scaleX(1);
}

/* DESCRIPTION */
.description {
  font-size: 16px;
  line-height: 1.75;
  color: #858585;
  margin-bottom: 22px;
}

/* handle CMS HTML content safely */
.description :deep(p) {
  margin: 0 0 12px;
}

.description :deep(strong) {
  color: #1a1718;
}

/* HIGHLIGHT */
.highlight {
  font-weight: 400;
  color: #1a1718;
  margin-top: 40px;
  display: inline-block;
  padding-top: 12px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .elite-header {
    padding: 60px 20px;
  }

  .title {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }
}
</style>
