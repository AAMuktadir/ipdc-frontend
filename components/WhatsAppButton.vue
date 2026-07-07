<template>
  <div v-if="!closed">
    <!-- Close Button -->
    <button
      class="close-btn"
      @click="closed = true"
      aria-label="Close WhatsApp button"
    >
      ×
    </button>

    <!-- WhatsApp Floating Button With Tooltip -->
    <div class="whatsapp-container">
      <a
        :href="`https://wa.me/${whatsappNumber}?text=${encodeText(
          defaultMessage
        )}`"
        target="_blank"
        class="whatsapp-btn"
      >
        <span class="tooltip">
          {{
            $i18n.locale == "en"
              ? "WhatsApp for Support"
              : "সাপোর্ট এর জন্য WhatsApp করুন"
          }}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          viewBox="-5 -5 26 26"
        >
          <path
            d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Hard-coded inside component since no .env available
const whatsappNumber = "8801313212226"; // <-- Put client WhatsApp number here
const defaultMessage = "Hello! I need support.";

const encodeText = (text) => encodeURIComponent(text);

const closed = ref(false);
</script>

<style scoped>
/* Container for button */
.whatsapp-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999999;
}

/* Close Button (top-right of the Whatsapp button) */
.close-btn {
  position: fixed;
  bottom: 63px;
  right: 3px;
  background: transparent;
  border: 1px solid transparent;
  color: #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 18px;
  font-size: 24px;
  cursor: pointer;
  z-index: 999999;
}

/* WhatsApp Button */
.whatsapp-btn {
  background-color: #25d366;
  color: #fff;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: relative;
  animation: pulse 1.5s infinite;
}

.whatsapp-btn:hover {
  animation: none;
}

/* Tooltip on hover */
.tooltip {
  visibility: hidden;
  opacity: 0;
  background: #ffffff;
  color: #000;
  padding: 6px 10px;
  border-radius: 4px;
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid #ddd;
  white-space: nowrap;
  font-size: 13px;
  transition: 0.2s ease-in-out;
}

.whatsapp-btn:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

/* Pulse animation */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.12);
  }
  100% {
    transform: scale(1);
  }
}

@media screen and (max-width: 1024px) {
  .whatsapp-container {
    bottom: 108px;
  }
  .close-btn {
    bottom: 151px;
  }
}
</style>
