<template>
  <section class="download-section">
    <div class="download-grid">
      <div class="left-side">
        <h2>{{ title }}</h2>

        <div class="ez-logo">
          <img src="~/assets/image/ez/logo-main.png" />
        </div>
      </div>

      <div class="center-side">
        <div class="qr-grid">
          <!-- QR -->
          <div class="qr-item">
            <img :src="src(content.qr_image, defaultQr)" class="qr" />
          </div>

          <!-- Stores -->
          <div class="qr-item">
            <a :href="iosLinkResolved" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/image/ez/app-store.png" class="store" />
            </a>
            <br />
            <a :href="androidLinkResolved" target="_blank" rel="noopener noreferrer">
              <img src="~/assets/image/ez/play-store.png" class="store" />
            </a>
            <br />
            <a :href="androidLinkResolved" target="_blank" class="download-text" rel="noopener noreferrer">{{ downloadText }}</a>
          </div>
        </div>
      </div>

      <div class="phone-side">
        <img src="~/assets/image/ez/download-phone.png" />
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
    iosLink: {
      type: String,
      default: "#",
    },
    androidLink: {
      type: String,
      default: "#",
    },
  },
  data() {
    return {
      defaultQr: require("~/assets/image/ez/EZ_APP_QRCODE.png"),
      defaultTitle: "Download Now",
      defaultDownloadText: "Click to Download",
    };
  },
  computed: {
    title() {
      return this.pick(this.content.title, this.content.title_bangla) || this.defaultTitle;
    },
    downloadText() {
      return (
        this.pick(this.content.download_text, this.content.download_text_bangla) ||
        this.defaultDownloadText
      );
    },
    iosLinkResolved() {
      return this.content.ios_link || this.iosLink;
    },
    androidLinkResolved() {
      return this.content.android_link || this.androidLink;
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
.download-section {
  padding: 100px 0 140px;
  background: radial-gradient(
      circle at top right,
      rgba(163, 46, 128, 0.25),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(163, 46, 128, 0.45),
      transparent 70%
    ),
    #000;
}

.download-grid {
  width: 90%;
  max-width: 1800px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 40px;
}

.left-side h2 {
  font-size: 56px;
  color: white;
  margin-bottom: 30px;
  text-align: center;
}
.ez-logo {
  justify-self: center;
}
.ez-logo img {
  width: 250px;
}

.qr-grid {
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
}

.qr-item {
  text-align: center;
}

.qr-item a{
  gap: 20px;
}

.qr {
  width: 180px;
  margin-bottom: 15px;
}

.store {
  width: 180px;
  border-radius: 10px;
  border: 1px solid azure;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.store:hover {
  transform: scale(1.05);
}

.phone-side img {
  width: 360px;
  max-width: 100%;
}

.qr-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Adjust spacing between QR grid and text */
}

.download-text {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  text-align: center;
  padding-top: 20px;
}

@media (max-width: 991px) {
  .download-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .qr-grid {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
