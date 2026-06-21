<template>
  <section class="deposit-section">
    <!-- HEADER -->
    <div class="section-header">
      <h2>Deposit Products</h2>
      <p>Choose the best scheme that fits your financial goals</p>
    </div>

    <!-- GRID -->
    <div class="product-grid" ref="grid">
      <div
        v-for="singlePackage in depositSchemePackage"
        :key="singlePackage.id"
        class="product-card"
        :class="{ active: activeId === singlePackage.id }"
        @mouseenter="onEnter(singlePackage.id)"
        @mouseleave="onLeave"
        @click="onClick(singlePackage.id)"
      >
        <!-- PREVIEW -->
        <div class="card-preview">
          <p class="name">
            {{
              $i18n.locale == "en"
                ? singlePackage.short_name
                : singlePackage.short_name_bangla
            }}
          </p>

          <h3 class="amount">
            ৳
            {{
              $i18n.locale == "en"
                ? singlePackage.minimum_deposit_amount
                : singlePackage.minimum_deposit_amount_bangla
            }}
          </h3>
        </div>

        <!-- DETAILS -->
        <div class="card-details">
          <h4>
            {{
              $i18n.locale == "en"
                ? singlePackage.name
                : singlePackage.name_bangla
            }}
          </h4>

          <div class="details-grid">
            <div>
              <p>
                {{ $i18n.locale == "en" ? "Minimum Tenure" : "ন্যূনতম মেয়াদ" }}
              </p>
              <h5>
                {{
                  $i18n.locale == "en"
                    ? singlePackage.minimum_tenure
                    : singlePackage.minimum_tenure_bangla
                }}
              </h5>
            </div>

            <div>
              <p>
                {{
                  $i18n.locale == "en" ? "Mode of Interest" : "আগ্রহের প্রকার"
                }}
              </p>
              <h5>
                {{
                  $i18n.locale == "en"
                    ? singlePackage.mode_of_interest
                    : singlePackage.mode_of_interest_bangla
                }}
              </h5>
            </div>

            <div>
              <p>{{ $i18n.locale == "en" ? "Renewal" : "নবায়ন" }}</p>
              <h5>
                {{
                  $i18n.locale == "en"
                    ? singlePackage.renewal
                    : singlePackage.renewal_bangla
                }}
              </h5>
            </div>
          </div>

          <a href="/customer-signup" target="_blank" class="apply-btn">
            {{ $i18n.locale == "en" ? "Apply Now" : "আবেদন করুন" }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    depositSchemePackage: Array,
  },

  data() {
    return {
      activeId: null,
      isMobile: false,
    };
  },

  mounted() {
    this.addSpotlightEffect();
    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);

    this.$gsap.from(this.$refs.grid.children, {
      y: 50,
      opacity: 0,
      stagger: 0.07,
      duration: 0.6,
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.checkDevice);
  },

  methods: {
    addSpotlightEffect() {
      const grid = this.$refs.grid;

      grid.addEventListener("mousemove", (e) => {
        const rect = grid.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.$gsap.to(grid, {
          "--x": `${x}px`,
          "--y": `${y}px`,
          duration: 0.2,
        });
      });
    },
    checkDevice() {
      this.isMobile = window.innerWidth < 768;
    },

    onEnter(id) {
      if (this.isMobile) return;
      this.setActive(id);
    },

    onLeave() {
      if (this.isMobile) return;
      this.setActive(null);
    },

    onClick(id) {
      if (!this.isMobile) return;
      this.activeId = this.activeId === id ? null : id;
      this.$nextTick(() => {
        this.animate();
      });
    },

    setActive(id) {
      this.activeId = id;
      // Wait for Vue to apply the :class="{ active: ... }" to the DOM
      this.$nextTick(() => {
        this.animate();
      });
    },

    animate() {
      const cards = this.$refs.grid.querySelectorAll(".product-card");
      const anyActive = this.activeId !== null;

      // Loop through the actual data instead of checking the DOM classes
      this.depositSchemePackage.forEach((singlePackage, index) => {
        const card = cards[index];
        const details = card.querySelector(".card-details");
        const isActive = this.activeId === singlePackage.id;

        if (isActive) {
          this.$gsap.to(card, {
            scale: 1.15,
            opacity: 1,
            zIndex: 10,
            duration: 0.3,
            overwrite: true, // Prevents animation stutter
          });

          this.$gsap.to(details, {
            opacity: 1,
            y: 0,
            duration: 0.3,
          });
        } else {
          this.$gsap.to(card, {
            scale: anyActive ? 0.9 : 1,
            opacity: anyActive ? 0.5 : 1,
            zIndex: 1,
            duration: 0.3,
            overwrite: true,
          });

          this.$gsap.to(details, {
            opacity: 0,
            y: 10,
            duration: 0.2,
          });
        }
      });
    },
  },
};
</script>

<style scoped>
/* ===== SECTION ===== */
.deposit-section {
  padding: 100px 40px;
  /* background: radial-gradient(circle at top, #fdf2f8, #f8fafc 60%); */
  position: relative;
  overflow: hidden;
}

/* HEADER */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.section-header p {
  color: #666;
  font-size: 15px;
}

/* ===== GRID ===== */
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;
  position: relative;
  --x: 50%;
  --y: 50%;

  width: 75vw;
  /* height: 75vw; */
  justify-self: center;
}

.product-grid::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at var(--x) var(--y),
    rgba(237, 1, 127, 0.08),
    transparent 40%
  );
  pointer-events: none;
  transition: background 0.2s ease;
}

/* ===== CARD ===== */
.product-card {
  flex: 0 1 calc(25% - 26px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: relative;
  border-radius: 20px;
  padding: 24px;
  cursor: pointer;

  background: rgba(192, 192, 192, 0.75);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.6);

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);

  transition: all 0.35s ease;
}

.product-card:hover {
  background: #ed017f;
}

/* gradient border glow */
.product-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(120deg, #ed017f, #ff7eb3, transparent);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card.active::before {
  opacity: 1;
}

/* hover depth */
.product-card:hover {
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(237, 1, 127, 0.05);
}

/* ===== PREVIEW ===== */
.card-preview {
  position: relative;
  justify-items: center;
  text-align: center;
  top: 35%;
  transition: all 0.5s ease;
}

.product-card:hover .card-preview {
  top: 0;
  transition: all 0.5s ease;
}

.card-preview .name {
  font-size: 3vw;
  font-weight: 900;
  color: #888;
  letter-spacing: 0.3px;
  transition: all 0.5s ease;
}

.product-card:hover .card-preview .name {
  color: #ffffff;
  font-weight: 500;
  font-size: 13px;
  transition: all 0.5s ease;
}

.card-preview .amount {
  font-size: 2.5vw;
  font-weight: 700;
  color: #ed017f;
  margin-top: 4px;
  transition: all 0.5s ease;
}
.product-card:hover .card-preview .amount {
  font-size: 26px;
  color: #ffffff;
  transition: all 0.5s ease;
}

/* ===== DETAILS ===== */
.card-details {
  margin-top: 16px;
  opacity: 0;
  transform: translateY(12px);
  color: #ffffff;
  text-align: center;
}

/* ===== DETAILS GRID ===== */
.details-grid {
  display: grid;
  gap: 10px;
  margin: 14px 0;
}

.details-grid p {
  font-size: 11px;
  color: #ebebeb;
}

.details-grid h5 {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

/* ===== BUTTON ===== */
.apply-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  padding: 9px 18px;

  background: linear-gradient(120deg, #ed017f, #ff4da6);
  color: #fff;
  border-radius: 30px;
  font-size: 13px;

  transition: all 0.3s ease;
}

.apply-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(237, 1, 127, 0.3);
}

/* ===== DIM EFFECT ===== */
.product-card:not(.active) {
  filter: brightness(0.95);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .product-card {
    flex: 0 1 calc(33.33% - 26px);
  }
}

@media (max-width: 768px) {
  .deposit-section {
    padding: 60px 20px;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .product-card {
    flex: 0 1 100%;
  }
}
</style>
