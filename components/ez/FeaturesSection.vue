<template>
  <section class="features-section">
    <div class="wrapper">
      <div class="left-side">
        <h2>{{ title }}</h2>

        <p>{{ description }}</p>
      </div>

      <div class="feature-grid">
        <div class="row">
          <div class="feature-card wide">
            <img :src="cards[0].image" />
            <h3>{{ cards[0].title }}</h3>
          </div>

          <div class="feature-card">
            <img :src="cards[1].image" />
            <h3>{{ cards[1].title }}</h3>
          </div>
        </div>
        <div class="row">
          <div class="feature-card">
            <img :src="cards[2].image" />
            <h3>{{ cards[2].title }}</h3>
          </div>

          <div class="feature-card wide">
            <img :src="cards[3].image" />
            <h3>{{ cards[3].title }}</h3>
          </div>
        </div>
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
      defaultTitle: "Smart Features Seamless Experience",
      defaultDescription:
        "Designed for today's digital lifestyle, IPDC EZ simplifies everyday financial experience through intuitive tools and instant access to essential services, empowering you to save time and stay in control.",
      // The layout is a fixed 2x2 grid; only the first four cards are shown.
      defaultCards: [
        { title: "Fast & secure account opening", image: require("~/assets/image/ez/feature1.png") },
        { title: "Instant statements & Certificates", image: require("~/assets/image/ez/feature2.png") },
        { title: "Easy Fund Transfers options", image: require("~/assets/image/ez/feature3.png") },
        { title: "Quick Service Requests processing", image: require("~/assets/image/ez/feature4.png") },
      ],
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
    cards() {
      const api = Array.isArray(this.content.features) ? this.content.features : [];
      return this.defaultCards.map((def, i) => {
        const f = api[i] || {};
        return {
          title: this.pick(f.title, f.title_bangla) || def.title,
          image: this.src(f.image, def.image),
        };
      });
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
.features-section {
  padding: 100px 0;
  /* background: radial-gradient(
      circle at top right,
      rgba(163, 46, 128, 0.45),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(163, 46, 128, 0.25),
      transparent 30%
    ),
    #000; */

  background: radial-gradient(
    circle at bottom right,
    rgba(163, 46, 128, 0.45) 0%,
    transparent 65%
  );
}

.wrapper {
  width: 85vw;
  max-width: 85vw;
  margin: auto;
  display: flex;
  gap: 10vw;
  align-items: center;
}

.left-side {
  min-width: 25%;
}

.left-side h2 {
  font-size: 56px;
  color: white;
  margin-bottom: 20px;
}

.left-side p {
  line-height: 1.8;
  font-size: 1.5rem;
  margin-top: 80px;
  color: rgba(255, 255, 255, 0.75);
}

.feature-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 60%;
}

.feature-grid .row {
  display: flex;
  gap: 24px;
}

.feature-card {
  flex: 1;
  min-height: 280px;
  background: radial-gradient(
    circle at top left,
    rgba(163, 46, 128, 0.25) 0%,
    transparent 85%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 30px;
  color: white;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth animation */
  box-shadow: 0px 0px 5px 5px rgba(255, 0, 170, 0.4);
  cursor: default;
  justify-content: flex-start;
  gap: 10px;
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0px 0px 40px 10px rgba(255, 0, 170, 0.4);
  background: radial-gradient(
    circle at top left,
    rgba(163, 46, 128, 0.45) 0%,
    transparent 85%
  );
}

.feature-card h3 {
  font-size: 28pt;
  font-weight: 400;
}

.feature-card img {
  width: 100px;
  margin-bottom: 10px;
}

.feature-card.large {
  min-height: 300px;
}

.feature-card.wide {
  min-width: 55%;
}

@media (max-width: 991px) {
  .wrapper {
    flex-direction: column;
    gap: 32px;
    align-items: stretch;
  }

  .left-side {
    min-width: 100%;
  }

  .left-side h2 {
    font-size: 32px;
    margin-bottom: 12px;
  }

  .left-side p {
    font-size: 1rem;
    margin-top: 16px;
  }

  /* Keep the desktop 2x2 layout on mobile, just smaller */
  .feature-grid {
    width: 100%;
    min-width: 100%;
    flex-direction: column;
    gap: 12px;
  }

  .feature-grid .row {
    gap: 12px;
  }

  /* Compact visuals only — do NOT equalize widths */
  .feature-card,
  .feature-card.wide,
  .feature-card.large {
    min-height: 0;
    padding: 16px;
    border-radius: 16px;
    gap: 6px;
    box-shadow: 0px 0px 3px 2px rgba(255, 0, 170, 0.35);
  }

  /* Mirror the desktop proportions: the .wide tile stays the bigger one */
  .feature-card {
    flex: 1 1 0;
    min-width: 0;
  }

  .feature-card.wide {
    min-width: 55%;
  }

  .feature-card img {
    width: 36px;
    margin-bottom: 4px;
  }

  .feature-card h3 {
    font-size: 13px;
    line-height: 1.3;
  }

  /* Avoid the lift sticking after a tap on touch devices */
  .feature-card:hover {
    transform: none;
    box-shadow: 0px 0px 3px 2px rgba(255, 0, 170, 0.35);
  }
}
</style>
