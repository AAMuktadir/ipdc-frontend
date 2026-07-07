<template>
  <section class="about-section">
    <div class="content-grid">
      <div class="glass-card text-card">
        <h2><img src="~/assets/image/ez/logo-main.png" /></h2>

        <p v-html="description"></p>
      </div>

      <div class="phone-preview">
        <img src="~/assets/image/ez/about-phone.png" />
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
      defaultDescription:
        "IPDC EZ is your complete digital financial companion, designed to simplify the way you manage your finances. From opening to tracking your deposit accounts and accessing financial statement & tax certificates, everything is available at your fingertips. Fast, flexible, and fully secure; IPDC EZ is here to make your life easy.",
    };
  },
  computed: {
    description() {
      return (
        this.pick(this.content.description, this.content.description_bangla) ||
        this.defaultDescription
      );
    },
  },
  methods: {
    pick(en, bn) {
      const isBn = this.$i18n && this.$i18n.locale === "bn";
      if (isBn && bn) return bn;
      return en || "";
    },
  },
};
</script>

<style scoped>
.about-section {
  padding: 100px 0;
  background: radial-gradient(
    circle at center left,
    #a32e80 0%,
    transparent 100%
  );
}

.content-grid {
  width: 85vw;
  max-width: 85vw;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 10vw;
  justify-items: center;
  justify-content: space-evenly;
}

.glass-card {
  border: none;
  border-radius: 28px;
  padding: 50px;
  color: white;
  box-shadow: none;
}

.glass-card h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
}

.glass-card img {
  justify-self: center;
  max-width: 70%;
}

.glass-card p {
  line-height: 1.5;
  font-size: 1.2rem;
  margin-top: 60px;
  color: rgba(255, 255, 255, 0.75);
  text-align: justify;
}

.phone-preview {
  text-align: center;
  justify-items: center;
}

.phone-preview img {
  width: 80%;
  max-width: 100%;
}

@media (max-width: 991px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
