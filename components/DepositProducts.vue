<template>
  <section class="grid-section">
    <!-- HEADER -->
    <div class="section-header">
      <h2>Deposit Products</h2>
      <p>Choose the best scheme that fits your financial goals</p>
    </div>

    <!-- GRID -->
    <div class="grid-content" ref="grid">
      <div
        v-for="(row, rowIndex) in chunkedPackages"
        :key="rowIndex"
        class="grid-row"
        ref="rows"
      >
        <div
          v-for="(singlePackage, itemIndex) in row"
          :key="singlePackage.id"
          class="grid-card"
          @mouseenter="onHover(rowIndex, itemIndex)"
          @mouseleave="onLeave"
        >
          <div class="card-inner">
            <div class="face face1">
              <div class="annual-profit-heading">
                <p>
                  {{ isEn ? singlePackage.name : singlePackage.name_bangla }}
                </p>
                <h4>
                  {{
                    isEn
                      ? singlePackage.short_name
                      : singlePackage.short_name_bangla
                  }}
                </h4>
              </div>
              <div class="minimum-deposit">
                <h1>
                  ৳
                  {{
                    isEn
                      ? singlePackage.minimum_deposit_amount
                      : singlePackage.minimum_deposit_amount_bangla
                  }}
                </h1>
                <p>{{ isEn ? "Minimum Deposit" : "ন্যূনতম জমা" }}</p>
              </div>
            </div>

            <div class="face face2">
              <div class="minimum-tenure">
                <div class="minimum-tenure-details">
                  <p>{{ isEn ? "Minimum Tenure" : "ন্যূনতম মেয়াদ" }}</p>
                  <h5>
                    {{
                      isEn
                        ? singlePackage.minimum_tenure
                        : singlePackage.minimum_tenure_bangla
                    }}
                  </h5>
                </div>
                <div class="minimum-tenure-details">
                  <p>{{ isEn ? "Mode of Interest" : "আগ্রহের প্রকার" }}</p>
                  <h5>
                    {{
                      isEn
                        ? singlePackage.mode_of_interest
                        : singlePackage.mode_of_interest_bangla
                    }}
                  </h5>
                </div>
                <div class="minimum-tenure-details">
                  <p>{{ isEn ? "Renewal" : "নবায়ন" }}</p>
                  <h5>
                    {{
                      isEn
                        ? singlePackage.renewal
                        : singlePackage.renewal_bangla
                    }}
                  </h5>
                </div>
              </div>

              <div class="annual-profit-button">
                <a href="/customer-signup" target="_blank">
                  {{ isEn ? "Apply Now" : "আবেদন করুন" }}
                  <svg
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.33 12.6925C25.2289 12.4317 25.0772 12.1933 24.8837 11.9912L14.2588 1.36625C14.0606 1.16812 13.8254 1.01095 13.5665 0.903721C13.3077 0.796493 13.0302 0.741302 12.75 0.741302C12.1841 0.741302 11.6414 0.966102 11.2412 1.36625C11.0431 1.56438 10.886 1.7996 10.7787 2.05847C10.6715 2.31734 10.6163 2.5948 10.6163 2.875C10.6163 3.44089 10.8411 3.9836 11.2412 4.38375L18.2538 11.375H2.125C1.56141 11.375 1.02091 11.5989 0.622398 11.9974C0.223884 12.3959 0 12.9364 0 13.5C0 14.0636 0.223884 14.6041 0.622398 15.0026C1.02091 15.4011 1.56141 15.625 2.125 15.625H18.2538L11.2412 22.6162C11.0421 22.8138 10.884 23.0488 10.7761 23.3078C10.6682 23.5667 10.6127 23.8445 10.6127 24.125C10.6127 24.4055 10.6682 24.6833 10.7761 24.9422C10.884 25.2012 11.0421 25.4362 11.2412 25.6337C11.4388 25.8329 11.6738 25.991 11.9328 26.0989C12.1917 26.2068 12.4695 26.2623 12.75 26.2623C13.0305 26.2623 13.3083 26.2068 13.5672 26.0989C13.8262 25.991 14.0612 25.8329 14.2588 25.6337L24.8837 15.0087C25.0772 14.8067 25.2289 14.5683 25.33 14.3075C25.5425 13.7901 25.5425 13.2099 25.33 12.6925Z"
                      fill="#ED017F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    depositSchemePackage: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    isEn() {
      return this.$i18n.locale === "en";
    },
    // Converts flat array into a 3x3 matrix
    chunkedPackages() {
      const size = 3;
      return this.depositSchemePackage.reduce((acc, _, i) => {
        if (i % size === 0)
          acc.push(this.depositSchemePackage.slice(i, i + size));
        return acc;
      }, []);
    },
  },
  methods: {
    onHover(rowIndex, cardIndex) {
      const rows = this.$refs.rows;
      rows.forEach((row, idx) => {
        // Smooth expansion (0.5s)
        this.$gsap.to(row, {
          flex: idx === rowIndex ? 3 : 1,
          duration: 0.5,
          ease: "power2.out",
        });

        const cards = row.querySelectorAll(".grid-card");
        cards.forEach((card, cIdx) => {
          this.$gsap.to(card, {
            flex: idx === rowIndex && cIdx === cardIndex ? 3 : 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    },

    onLeave() {
      // 1. Set duration to 0 for an instant reset
      // 2. Clear any ongoing animations to prevent "ghost" movements
      this.$gsap.killTweensOf([this.$refs.rows, ".grid-card"]);

      this.$gsap.set([this.$refs.rows, ".grid-card"], {
        flex: 1,
      });
    },
  },
};
</script>

<style scoped>
.grid-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #000; */
  padding: 80px;
  flex-direction: column;
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

.grid-content {
  width: 900px;
  /* height: 900px; */
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.grid-row {
  display: flex;
  flex: 1;
  gap: 15px;
}

.grid-card {
  flex: 1;
  /* background: #1a1a1c; */
  background: #ed017f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
}

.card-inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.face {
  padding: 30px;
  display: flex;
  flex-direction: column;
  /* transition: all 0.5s ease; */
}
.face:hover {
  transition: all 0.5s ease;
}

/* Face 1: The "Small" View */
.face1 {
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.annual-profit-heading p {
  color: #ed017f;
  font-size: 0.9rem;
  margin-bottom: 5px;
}
.annual-profit-heading h4 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
}
.minimum-deposit h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 5px;
}
.minimum-deposit p {
  font-size: 0.8rem;
  opacity: 0.6;
  text-transform: uppercase;
}

/* Face 2: The "Expanded" View */
.face2 {
  height: 0;
  opacity: 0;
  overflow: hidden;
  background: #fff;
  color: #ed017f;
  justify-content: space-between;
}

.grid-card:hover .face1 {
  height: 35%;
  padding: 15px;
}
.grid-card:hover .face2 {
  height: 65%;
  opacity: 1;
}

.minimum-tenure-details {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}
.minimum-tenure-details p {
  font-size: 0.85rem;
  color: #666;
}
.minimum-tenure-details h5 {
  font-weight: 700;
  font-size: 0.95rem;
}

.annual-profit-button a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #ed017f;
  color: #fff;
  text-decoration: none;
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
  margin-top: 15px;
}
.annual-profit-button svg {
  width: 20px;
}

@media (max-width: 950px) {
  .grid-content {
    width: 95vw;
    /* height: 95vw; */
  }
}
</style>
