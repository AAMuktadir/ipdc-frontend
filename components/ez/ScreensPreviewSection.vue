<template>
  <section class="screens-section">
    <div class="screens-header">
      <h2>{{ title }}</h2>
      <p><i>{{ subTitle }}</i></p>
      <p class="sub-text">{{ description }}</p>
    </div>

    <div class="marquee-container" ref="container">
      <div
        class="marquee-track"
        :style="{ '--copies': copies }"
      >
        <div
          v-for="n in copies"
          :key="n"
          ref="group"
          class="marquee-group"
        >
          <img
            v-for="(screen, index) in screenSrcs"
            :key="`${n}-${index}`"
            :src="screen"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import screen1 from "~/assets/image/ez/1.png";
import screen2 from "~/assets/image/ez/2.png";
import screen3 from "~/assets/image/ez/3.png";
import screen4 from "~/assets/image/ez/4.png";
import screen5 from "~/assets/image/ez/5.png";
import screen6 from "~/assets/image/ez/6.png";
import screen7 from "~/assets/image/ez/7.png";
import screen8 from "~/assets/image/ez/8.png";
import screen9 from "~/assets/image/ez/9.png";
import screen10 from "~/assets/image/ez/10.png";
import screen11 from "~/assets/image/ez/11.png";

export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultScreens: [screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10, screen11],
      defaultTitle: "Open Accounts in Minutes",
      defaultSubTitle: "Skip the paperwork.",
      defaultDescription:
        "Open Fixed Deposit (FD), Monthly/Quarterly Profit Schemes (MPS/QPS), DPS, Icche DPS and Ultiflex accounts; all from your phone. Just a few taps and you're done.",
      // initial guess so one group renders and can be measured;
      // recalculated immediately on mount
      copies: 4,
    };
  },
  computed: {
    title() {
      return this.pick(this.content.title, this.content.title_bangla) || this.defaultTitle;
    },
    subTitle() {
      return this.pick(this.content.sub_title, this.content.sub_title_bangla) || this.defaultSubTitle;
    },
    description() {
      return (
        this.pick(this.content.description, this.content.description_bangla) ||
        this.defaultDescription
      );
    },
    screenSrcs() {
      const api = Array.isArray(this.content.screens) ? this.content.screens : [];
      if (!api.length) return this.defaultScreens;
      return api.map((s, i) => this.src(s.image, this.defaultScreens[i]));
    },
  },

  mounted() {
    // wait for the first group to render before measuring it
    this.$nextTick(this.calculateCopies);
    window.addEventListener("resize", this.calculateCopies);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.calculateCopies);
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
    calculateCopies() {
      const container = this.$refs.container;
      // ref on a v-for element is an array; grab the first group
      const group = this.$refs.group?.[0];
      if (!container || !group) return;

      const groupWidth = group.getBoundingClientRect().width;
      if (!groupWidth) return;

      // fill the viewport + 2 spare groups for a seamless loop
      this.copies = Math.ceil(container.clientWidth / groupWidth) + 2;
    },
  },
};
</script>

<style scoped>
.screens-section {
  padding: 100px 0;
  width: 100%;
  overflow: hidden;
  background: radial-gradient(
    circle at bottom left,
    rgba(163, 46, 128, 0.45) 0%,
    transparent 65%
  );
}

.screens-header {
  text-align: center;
  color: #fff;
  margin-bottom: 50px;
}

.screens-header h2 {
  font-size: 56px;
  color: white;
  margin-bottom: 20px;
}

.screens-header p {
  line-height: 1.8;
  font-size: 1.5rem;
  margin-top: 80px;
  color: rgba(255, 255, 255, 0.75);
}

.screens-header .sub-text {
  max-width: 900px;
  margin: 15px auto 0;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
}

.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee-track {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: marquee 30s linear infinite;
}

.marquee-group {
  display: flex;
  gap: 20px;
  margin-right: 20px;
}

.marquee-group img {
  width: 240px;
  border-radius: 28px;
  flex-shrink: 0;
  display: block;
}

/*
 * Translate by exactly one group's footprint, expressed as a
 * fraction of the whole track. Because % is of the track's real
 * rendered width, this automatically accounts for the group's
 * margin-right and any per-breakpoint image-width changes.
 * Landing on -1 group looks identical to 0 -> seamless loop.
 */
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% / var(--copies)));
  }
}

@media (max-width: 992px) {
  .screens-header h2 {
    font-size: 42px;
  }

  .screens-header p {
    font-size: 20px;
  }

  .sub-text {
    font-size: 16px;
  }

  .marquee-group img {
    width: 200px;
  }
}

@media (max-width: 768px) {
  .screens-header h2 {
    font-size: 32px;
  }

  .screens-header p {
    font-size: 18px;
  }

  .sub-text {
    font-size: 15px;
  }

  .marquee-group img {
    width: 160px;
  }
}
</style>
